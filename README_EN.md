# Pongo

*[Русская версия](README.md)*

**Pongo** — landing page for a project consisting of two Telegram bots: PongoVPN and PongoSPY.

Website: [pongo-project.ru](https://pongo-project.ru)

## Stack

- [Next.js 16](https://nextjs.org) + [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion) — animations
- [Lucide React](https://lucide.dev) — icons

## Development

```bash
# Install dependencies
npm ci

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
cp .env.production.example .env.production
# edit .env.production — insert the real encryption key
npm ci
npm run build
npm start
```

## Deployment

Server-side deployment is done manually via `scripts/deploy.sh` on a VPS with nginx + systemd. See [deploy/](deploy/) for details.

```bash
# On the server (as root)
cd /opt/pongo-project-site && bash scripts/deploy.sh
```

The script pulls the latest code from `main`, rebuilds the project, and restarts the `pongo` systemd service.

## Project Structure

```
├── app/              # Next.js App Router (pages and components)
│   ├── page.tsx      # Main page (landing)
│   └── components/   # UI components (Hero, Pricing, FAQ, etc.)
├── public/           # Static assets (logo, favicon)
├── scripts/          # Server scripts
│   ├── deploy.sh     # Manual production deploy
│   └── backup.sh     # Database backup
├── deploy/           # Infrastructure configs
│   ├── pongo.service # systemd service
│   ├── nginx/        # nginx configuration
│   ├── cron/         # Cron jobs
│   └── logrotate/    # Log rotation
└── node_modules/next/dist/docs/  # Next.js docs (read before coding)
```
