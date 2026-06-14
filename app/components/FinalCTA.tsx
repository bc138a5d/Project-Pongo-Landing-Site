"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Eye, Megaphone } from "lucide-react";
import { Shield } from "./Shield";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ padding: "72px 24px 96px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 32,
            padding: "clamp(48px, 8vw, 88px)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background glow */}
          <div style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            width: 600, height: 400,
            background: "radial-gradient(ellipse, rgba(0,240,255,0.08), transparent 70%)",
            pointerEvents: "none",
          }} />
          {/* Top edge glow */}
          <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 1, background: "linear-gradient(90deg, transparent, rgba(0,240,255,0.6), transparent)" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ marginBottom: 28 }}
            >
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 16px",
                borderRadius: 100,
                border: "1px solid rgba(0,240,255,0.3)",
                background: "rgba(0,240,255,0.06)",
                fontSize: 12, fontWeight: 700,
                color: "#00f0ff",
                letterSpacing: "0.08em", textTransform: "uppercase",
              }}>
                Подключиться в пару кликов
              </span>
            </motion.div>

            <h2 style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700, letterSpacing: "-0.03em",
              lineHeight: 1.08,
              color: "#f0f4ff",
              marginBottom: 20,
            }}>
              Стабильный интернет{" "}
              <br />
              <span style={{ color: "#00f0ff" }} className="glow-cyan">
                в Telegram.
              </span>
            </h2>

            <p style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.65,
              color: "rgba(240,244,255,0.5)",
              maxWidth: 560, margin: "0 auto 48px",
            }}>
              200+ пользователей уже выбрали PongoVPN. Подключение занимает меньше минуты, всё управление - в приложении личном кабинете бота.
            </p>

            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://t.me/PongoVPN_bot"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  padding: "16px 36px",
                  borderRadius: 14,
                  background: "#00f0ff",
                  color: "#050810",
                  fontSize: 16, fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(0,240,255,0.5)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
              >
                <Shield size={18} /> Открыть PongoVPN <ArrowRight size={16} />
              </a>
              <a
                href="https://t.me/PongoSPY_bot"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "16px 28px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.03)",
                  color: "rgba(240,244,255,0.85)",
                  fontSize: 16, fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.28)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
              >
                <Eye size={16} /> Открыть PongoSPY <ArrowRight size={16} />
              </a>
            </div>

            <p style={{ marginTop: 28, fontSize: 13, color: "rgba(240,244,255,0.35)" }}>
              Оплата через СБП &nbsp;·&nbsp; Больше 10 локаций &nbsp;·&nbsp; Пробный период 24 часа
            </p>
            <a
              href="https://t.me/pongo_project"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                marginTop: 16,
                fontSize: 15, fontWeight: 600,
                color: "#00f0ff",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#33f4ff";
                (e.currentTarget as HTMLElement).style.textShadow = "0 0 18px rgba(0,240,255,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#00f0ff";
                (e.currentTarget as HTMLElement).style.textShadow = "none";
              }}
            >
              <Megaphone size={15} /> Следите за обновлениями в @pongo_project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
