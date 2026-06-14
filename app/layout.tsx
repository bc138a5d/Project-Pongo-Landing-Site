import type { Metadata } from "next";
import { DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pongo-project.ru"),
  title: "Pongo - приватный VPN и контроль цифрового следа в Telegram",
  description:
    "Pongo - два Telegram-бота в одном проекте. PongoVPN - стабильный и быстрый VPN с современными протоколами и оплатой через СБП. PongoSPY - проверка, какая информация о вас видна в открытых источниках.",
  keywords: ["Pongo", "PongoVPN", "PongoSPY", "VPN", "Telegram", "приватность", "VLESS", "Hysteria2", "no-logs", "СБП"],
  authors: [{ name: "Pongo" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://pongo-project.ru",
    siteName: "Pongo",
    title: "Pongo - приватный VPN и контроль цифрового следа в Telegram",
    description:
      "PongoVPN - стабильный VPN в Telegram. PongoSPY - самоконтроль цифрового следа. Два независимых продукта в одном проекте.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pongo - VPN и контроль цифрового следа в Telegram",
    description: "PongoVPN + PongoSPY - два независимых Telegram-бота для приватности и самоконтроля.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/logo.png?v=4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${dmSans.className} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
