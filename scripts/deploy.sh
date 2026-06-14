#!/usr/bin/env bash
# scripts/deploy.sh — manual deploy for pongo-project-site
#
# Pulls the latest from origin/main, rebuilds, and restarts the pongo
# systemd service. Safe to re-run (idempotent).
#
# Usage (as root, on the server):
#   cd /opt/pongo-project-site && bash scripts/deploy.sh
#
# One-time prereqs on the server:
#   - SSH key at /root/.ssh/github_pongo added to GitHub (Phase 0)
#   - .env.production in the repo root (Phase 1)
#   - pongo.service installed via deploy/pongo.service (Phase 2)
#   - nginx + certbot + pongo.conf installed (Phases 3–4)

set -euo pipefail

REPO=/opt/pongo-project-site
SERVICE=pongo
BRANCH=main

# Sanity: must be root (need systemctl, kill, etc.)
if [ "$(id -u)" -ne 0 ]; then
  echo "ERROR: run as root (need systemctl, pkill, etc.)" >&2
  exit 1
fi

cd "$REPO"

# Refuse to deploy with uncommitted local changes
if ! git diff --quiet HEAD 2>/dev/null || ! git diff --cached --quiet HEAD 2>/dev/null; then
  echo "ERROR: working tree has uncommitted changes. Commit or stash them first." >&2
  git status --short >&2
  exit 1
fi

# 1. Pull latest
echo "→ Fetching origin/$BRANCH"
git fetch --prune origin
echo "→ Resetting to origin/$BRANCH"
git reset --hard "origin/$BRANCH"

# 2. Install deps from lockfile
echo "→ npm ci"
npm ci

# 3. Build (embeds DEPLOYMENT_VERSION from the new HEAD's git SHA)
echo "→ npm run build  (DEPLOYMENT_VERSION=$(git rev-parse --short HEAD))"
set -a
. ./.env.production
set +a
export DEPLOYMENT_VERSION="$(git rev-parse --short HEAD)"
npm run build

# 4. Restart the service.
# pkill -9 cleans up any orphaned next-server from a prior botched deploy
# (Phase 2 lesson: killing the parent left a child holding :3000).
# systemd's restart sends SIGTERM to the whole cgroup, but pkill is
# belt-and-suspenders against the same trap.
echo "→ Restarting $SERVICE"
pkill -9 -f 'next-server' 2>/dev/null || true
systemctl restart "$SERVICE"

# 5. Wait up to ~10s for it to come up
for _ in 1 2 3 4 5 6 7 8 9 10; do
  systemctl is-active --quiet "$SERVICE" && break
  sleep 1
done

# 6. Verify
echo "→ Status"
systemctl status "$SERVICE" --no-pager | head -5
echo "→ HTTP"
curl -sS -o /dev/null -w "  https://pongo-project.ru → HTTP %{http_code}, %{size_download}b, %{time_total}s\n" --max-time 10 https://pongo-project.ru/

echo ""
echo "✓ Deploy complete: $(git rev-parse --short HEAD)"
