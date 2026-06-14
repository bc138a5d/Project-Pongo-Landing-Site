"use client";
import { motion } from "framer-motion";
import { ArrowRight, Check, Eye, Search, User } from "lucide-react";
import { Shield } from "./Shield";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 120,
      }}
    >
      {/* Background glow orbs */}
      <div style={{
        position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
        width: 800, height: 600,
        background: "radial-gradient(ellipse, rgba(0,240,255,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: "20%",
        width: 400, height: 400,
        background: "radial-gradient(ellipse, rgba(60,80,220,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "30%", right: "10%",
        width: 300, height: 300,
        background: "radial-gradient(ellipse, rgba(0,240,255,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.5 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 80, alignItems: "center" }} className="hero-grid">

          {/* Left: Text */}
          <div>
            <motion.div {...fade(0.1)} style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
              <span style={{
                padding: "6px 14px",
                borderRadius: 100,
                border: "1px solid rgba(0,240,255,0.2)",
                background: "rgba(0,240,255,0.05)",
                fontSize: 12, fontWeight: 600,
                color: "#00f0ff",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}>
                Два бота - одна система приватности
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 {...fade(0.2)} style={{
              fontSize: "clamp(40px, 5vw, 68px)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#f0f4ff",
              marginBottom: 24,
            }}>
              Приватный и защищённый{" "}
              <span style={{ color: "#00f0ff" }} className="glow-cyan">
                интернет
              </span>
              <br />в пару кликов
            </motion.h1>

            {/* Subheading */}
            <motion.div {...fade(0.3)} style={{ marginBottom: 36 }}>
              <p style={{
                fontSize: 18, fontWeight: 400,
                lineHeight: 1.65,
                color: "rgba(240,244,255,0.6)",
                maxWidth: 520,
                marginBottom: 14,
              }}>
                Два независимых Telegram-бота в одном проекте.
              </p>
              <p style={{
                fontSize: 18, fontWeight: 400,
                lineHeight: 1.65,
                color: "rgba(240,244,255,0.6)",
                maxWidth: 520,
                marginBottom: 6,
              }}>
                <span style={{ color: "#00f0ff", fontWeight: 600 }}>PongoVPN</span> - стабильное и быстрое соединение.
              </p>
              <p style={{
                fontSize: 18, fontWeight: 400,
                lineHeight: 1.65,
                color: "rgba(240,244,255,0.6)",
                maxWidth: 520,
                margin: 0,
              }}>
                <span style={{ color: "#a78bfa", fontWeight: 600 }}>PongoSPY</span> - самоконтроль цифрового следа по открытым источникам.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div {...fade(0.4)} style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href="https://t.me/PongoVPN_bot"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "16px 30px",
                  borderRadius: 12,
                  background: "#00f0ff",
                  color: "#050810",
                  fontSize: 15, fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(0,240,255,0.5)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
              >
                <Shield size={16} /> Открыть PongoVPN <ArrowRight size={14} />
              </a>
              <a
                href="https://t.me/PongoSPY_bot"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "16px 26px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.03)",
                  color: "rgba(240,244,255,0.85)",
                  fontSize: 15, fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.28)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
              >
                <Eye size={15} /> Открыть PongoSPY <ArrowRight size={14} />
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div {...fade(0.5)} style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 36, flexWrap: "wrap" }}>
              {[
                "Без логов",
                "Без лимитов",
                "Оплата через СБП",
                "Подключение за минуту",
              ].map((label) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(240,244,255,0.5)", fontSize: 13 }}>
                  <Check size={14} color="#00f0ff" />
                  {label}
                </div>
              ))}
            </motion.div>

            {/* Cabinet fallback banner */}
            <motion.div
              {...fade(0.6)}
              style={{
                marginTop: 28,
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 14px",
                borderRadius: 14,
                border: "1px solid rgba(0,240,255,0.18)",
                background: "linear-gradient(135deg, rgba(0,240,255,0.06), rgba(0,240,255,0.02))",
                maxWidth: 560,
                flexWrap: "wrap",
              }}
              className="cabinet-fallback"
            >
              <div style={{
                width: 34, height: 34, borderRadius: 9,
                background: "rgba(0,240,255,0.1)",
                border: "1px solid rgba(0,240,255,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#00f0ff", flexShrink: 0,
              }}>
                <Shield size={16} />
              </div>
              <div style={{ flex: 1, minWidth: 180 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#f0f4ff", lineHeight: 1.3 }}>
                  Сайт - резервный канал
                </div>
                <div style={{ fontSize: 13, color: "rgba(240,244,255,0.6)", lineHeight: 1.45, marginTop: 3 }}>
                  Если Telegram недоступен, вы остаётесь с VPN
                </div>
              </div>
              <a
                href="https://cabinet.pongovpn.ru/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "9px 14px",
                  borderRadius: 9,
                  background: "rgba(0,240,255,0.12)",
                  border: "1px solid rgba(0,240,255,0.3)",
                  color: "#00f0ff",
                  fontSize: 13, fontWeight: 600,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,240,255,0.2)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,240,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,240,255,0.12)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                Войти в кабинет →
              </a>
            </motion.div>
          </div>

          {/* Right: two product cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            style={{ position: "relative", display: "flex", flexDirection: "column", gap: 16 }}
            className="hero-visual"
          >
            <div style={{ position: "absolute", inset: -40, background: "radial-gradient(ellipse at center, rgba(0,240,255,0.06), transparent 70%)", pointerEvents: "none" }} />

            {/* PongoVPN card */}
            <div style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(0,240,255,0.18)",
              borderRadius: 24,
              padding: "24px",
              backdropFilter: "blur(20px)",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(0,240,255,0.6), transparent)" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: "rgba(0,240,255,0.1)",
                  border: "1px solid rgba(0,240,255,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#00f0ff",
                }}>
                  <Shield size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#f0f4ff" }}>PongoVPN</div>
                  <div style={{ fontSize: 11, color: "rgba(240,244,255,0.5)", marginTop: 1 }}>@PongoVPN_bot</div>
                </div>
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 5, padding: "3px 9px", borderRadius: 100, background: "rgba(0,255,100,0.1)", border: "1px solid rgba(0,255,100,0.25)" }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#00ff64", boxShadow: "0 0 5px #00ff64" }} />
                  <span style={{ fontSize: 10, color: "#00ff64", fontWeight: 600 }}>Онлайн</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 12 }}>
                <span style={{ fontSize: 26, fontWeight: 700, color: "#00f0ff", fontFamily: "var(--font-space-mono, monospace)", letterSpacing: "-0.02em" }}>10+</span>
                <span style={{ fontSize: 13, color: "rgba(240,244,255,0.7)", fontWeight: 500 }}>локаций</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {["VLESS + REALITY", "Hysteria2", "xHTTP", "gRPC"].map((p) => (
                  <span key={p} style={{
                    fontSize: 10, color: "#00f0ff",
                    fontFamily: "var(--font-space-mono, monospace)",
                    padding: "3px 7px", borderRadius: 5,
                    background: "rgba(0,240,255,0.06)",
                    border: "1px solid rgba(0,240,255,0.12)",
                  }}>{p}</span>
                ))}
              </div>
            </div>

            {/* PongoSPY card */}
            <div style={{
              background: "rgba(167,139,250,0.05)",
              border: "1px solid rgba(167,139,250,0.2)",
              borderRadius: 24,
              padding: "24px",
              backdropFilter: "blur(20px)",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.6), transparent)" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: "rgba(167,139,250,0.12)",
                  border: "1px solid rgba(167,139,250,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#a78bfa",
                }}>
                  <Search size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#f0f4ff" }}>PongoSPY</div>
                  <div style={{ fontSize: 11, color: "rgba(240,244,255,0.5)", marginTop: 1 }}>@PongoSPY_bot</div>
                </div>
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 5, padding: "3px 9px", borderRadius: 100, background: "rgba(0,255,100,0.1)", border: "1px solid rgba(0,255,100,0.25)" }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#00ff64", boxShadow: "0 0 5px #00ff64" }} />
                  <span style={{ fontSize: 10, color: "#00ff64", fontWeight: 600 }}>Онлайн</span>
                </div>
              </div>
              <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(240,244,255,0.45)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
                Проверяет
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {["Телефон", "Email", "Имя", "Никнейм"].map((t) => (
                  <span key={t} style={{
                    fontSize: 11, color: "rgba(240,244,255,0.85)",
                    padding: "5px 10px", borderRadius: 8,
                    background: "rgba(167,139,250,0.08)",
                    border: "1px solid rgba(167,139,250,0.18)",
                    display: "inline-flex", alignItems: "center", gap: 5,
                  }}>
                    <User size={10} color="#a78bfa" />{t}
                  </span>
                ))}
              </div>
              <div style={{ fontSize: 11, color: "rgba(240,244,255,0.45)", marginTop: 12, lineHeight: 1.5 }}>
                Открытые источники - соцсети, реестры, каталоги.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-grid { grid-template-columns: 1.05fr 1fr !important; }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none; }
        }
      `}</style>
    </section>
  );
}
