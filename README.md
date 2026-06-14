# Pongo

*[English version](README_EN.md)*

**Pongo** — лендинг для проекта из двух Telegram-ботов: PongoVPN и PongoSPY.

Сайт: [pongo-project.ru](https://pongo-project.ru)

## Стек

- [Next.js 16](https://nextjs.org) + [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion) — анимации
- [Lucide React](https://lucide.dev) — иконки

## Разработка

```bash
# Установка зависимостей
npm ci

# Запуск дев-сервера
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000).

## Продакшн-сборка

```bash
cp .env.production.example .env.production
# отредактируй .env.production — вставь реальный ключ шифрования
npm ci
npm run build
npm start
```

## Деплой

Серверная часть деплоится вручную через `scripts/deploy.sh` на VPS с nginx + systemd. Подробнее в [deploy/](deploy/).

```bash
# На сервере (под root)
cd /opt/pongo-project-site && bash scripts/deploy.sh
```

Скрипт стягивает свежий код из `main`, пересобирает проект и перезапускает systemd-сервис `pongo`.

## Структура

```
├── app/              # Next.js App Router (страницы и компоненты)
│   ├── page.tsx      # Главная страница (лендинг)
│   └── components/   # UI-компоненты (Hero, Pricing, FAQ и др.)
├── public/           # Статика (логотип, favicon)
├── scripts/          # Серверные скрипты
│   ├── deploy.sh     # Ручной деплой на продакшн
│   └── backup.sh     # Бэкап базы данных
├── deploy/           # Инфраструктурные конфиги
│   ├── pongo.service # systemd-сервис
│   ├── nginx/        # Конфигурация nginx
│   ├── cron/         # Cron-задачи
│   └── logrotate/    # Ротация логов
└── node_modules/next/dist/docs/  # Документация Next.js (читать перед разработкой)
```
