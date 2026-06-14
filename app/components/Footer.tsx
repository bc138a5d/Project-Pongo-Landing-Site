"use client";
import { Send, Eye, Megaphone } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Продукты: [
    { label: "PongoVPN", href: "https://t.me/PongoVPN_bot" },
    { label: "PongoSPY", href: "https://t.me/PongoSPY_bot" },
  ],
  Разделы: [
    { label: "Тарифы", href: "#pricing" },
    { label: "Стек и инфраструктура", href: "#stack" },
    { label: "Как это работает", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ],
  Документы: [
    { label: "Политика конфиденциальности", href: "#" },
    { label: "Пользовательское соглашение", href: "#" },
    { label: "Политика cookie", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer style={{
      padding: "60px 24px 40px",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(0,0,0,0.2)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 60 }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <Image
                src="/logo.png?v=4"
                alt="Pongo"
                width={42}
                height={42}
                style={{ borderRadius: 10 }}
              />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
                <span style={{ fontSize: 20, fontWeight: 700, color: "#f0f4ff", letterSpacing: "-0.02em" }}>
                  Pongo
                </span>
                <span style={{ fontSize: 10, fontWeight: 600, color: "rgba(240,244,255,0.45)", letterSpacing: "0.12em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#00f0ff", boxShadow: "0 0 4px #00f0ff" }} />
                  VPN
                  <span style={{ color: "rgba(240,244,255,0.25)", margin: "0 1px" }}>·</span>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#a78bfa", boxShadow: "0 0 4px #a78bfa" }} />
                  SPY
                </span>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(240,244,255,0.5)", maxWidth: 320, marginBottom: 24 }}>
              Pongo - два независимых Telegram-бота для приватности и самоконтроля. PongoVPN стабильное VPN-соединение, PongoSPY - проверка цифрового следа по открытым источникам.
            </p>
            {/* Telegram contacts */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a href="https://t.me/PongoVPN_bot" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: "#00f0ff", textDecoration: "none", opacity: 0.85, transition: "opacity 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
              >
                <Send size={12} /> @PongoVPN_bot
              </a>
              <a href="https://t.me/PongoSPY_bot" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(240,244,255,0.5)", textDecoration: "none", opacity: 0.85, transition: "opacity 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget.style.opacity = "1"); (e.currentTarget as HTMLElement).style.color = "#f0f4ff"; }}
                onMouseLeave={(e) => { (e.currentTarget.style.opacity = "0.85"); (e.currentTarget as HTMLElement).style.color = "rgba(240,244,255,0.5)"; }}
              >
                <Eye size={12} /> @PongoSPY_bot
              </a>
              <a href="https://t.me/pongo_project" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(240,244,255,0.5)", textDecoration: "none", opacity: 0.85, transition: "opacity 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget.style.opacity = "1"); (e.currentTarget as HTMLElement).style.color = "#f0f4ff"; }}
                onMouseLeave={(e) => { (e.currentTarget.style.opacity = "0.85"); (e.currentTarget as HTMLElement).style.color = "rgba(240,244,255,0.5)"; }}
              >
                <Megaphone size={12} /> @pongo_project
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(240,244,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20 }}>
                {category}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{ fontSize: 14, color: "rgba(240,244,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f4ff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,244,255,0.5)")}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)", flexWrap: "wrap", gap: 16 }}>
          <span style={{ fontSize: 13, color: "rgba(240,244,255,0.3)" }}>
            © {new Date().getFullYear()} Pongo. Все права защищены.
          </span>
          <span style={{ fontSize: 13, color: "rgba(240,244,255,0.25)" }}>
            Сделано с вниманием к приватности.
          </span>
        </div>
      </div>

      <style>{`
        .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr !important; }
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
