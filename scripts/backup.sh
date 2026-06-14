#!/usr/bin/env bash
# scripts/backup.sh — snapshot of files that are NOT safe in git
#
# Why: .env.production is gitignored (intentionally — holds the Server Actions
# encryption key). If the disk dies, that key is lost and any future build
# with a new key would invalidate in-flight Server Action calls (we don't
# use them today, but it's a one-way door to break). next.config.ts and
# deploy/ are in git, but snapshotting them here makes "single archive"
# recovery trivial.
#
# Output: /var/backups/pongo/YYYY-MM-DD.tar.gz (one tarball per day, retains 7)
# What it contains:
#   .env.production       (0600, the secret)
#   next.config.ts        (0644)
#   deploy/               (systemd + nginx configs)
#   .next/BUILD_ID        (which build is currently running)
#   MANIFEST              (date, git HEAD, service status)
#
# Cron (daily 03:00 UTC):
#   0 3 * * * /opt/pongo-project-site/scripts/backup.sh \
#     >> /var/log/pongo-backup.log 2>&1

set -euo pipefail

REPO=/opt/pongo-project-site
BACKUP_ROOT=/var/backups/pongo
RETENTION_DAYS=7
DATE=$(date -u +%Y-%m-%d)
STAGE="$BACKUP_ROOT/$DATE"
TAR="$BACKUP_ROOT/${DATE}.tar.gz"

mkdir -p "$BACKUP_ROOT" "$STAGE"

# Snapshot
install -m 0600 "$REPO/.env.production" "$STAGE/"
install -m 0644 "$REPO/next.config.ts"   "$STAGE/"
cp -r "$REPO/deploy" "$STAGE/deploy"
[ -f "$REPO/.next/BUILD_ID" ] && cp "$REPO/.next/BUILD_ID" "$STAGE/BUILD_ID"

# Manifest: when + what
cat > "$STAGE/MANIFEST" <<EOF
backup_date=$(date -u --iso-8601=seconds)
git_head=$(git -C "$REPO" rev-parse HEAD)
service_status=$(systemctl is-active pongo 2>/dev/null || echo unknown)
EOF

# Pack
tar -czf "$TAR" -C "$BACKUP_ROOT" "$DATE"
rm -rf "$STAGE"

# Rotate: keep last $RETENTION_DAYS daily tarballs
find "$BACKUP_ROOT" -maxdepth 1 -name '????-??-??.tar.gz' -mtime +$RETENTION_DAYS -delete

echo "✓ $TAR  ($(du -h "$TAR" | cut -f1))  git=$(git -C "$REPO" rev-parse --short HEAD)"
