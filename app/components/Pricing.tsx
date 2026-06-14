"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Check, ArrowRight, Clock, Gift } from "lucide-react";
import { Shield } from "./Shield";

const vpnFeatures = [
  "Пробный период 24 часа бесплатно",
  "Подписка: 1, 3 или 6 месяцев",
  "Пополнение через СБП / QR",
  "Без логов, без лимитов трафика",
];

const spyFeatures = [
  "Проверка по открытым источникам",
  "Телефон, email, имя, никнейм",
  "Без подписки - оплата за пакет",
  "Отчёт в Telegram за минуты",
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" style={{ padding: "80px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: 900, height: 400, background: "radial-gradient(ellipse, rgba(0,240,255,0.04), transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <span style={{ fontSize: 12, fontWeight: 700, color: "#00f0ff", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 16 }}>
            Тарифы
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#f0f4ff", marginBottom: 16 }}>
            Прозрачные{" "}
            <span style={{ color: "#00f0ff" }}>условия</span>
          </h2>
          <p style={{ fontSize: 18, color: "rgba(240,244,255,0.5)", maxWidth: 540, margin: "0 auto", lineHeight: 1.6 }}>
            Два продукта - два простых тарифа. Без скрытых платежей и продлений.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="pricing-grid">

          {/* PongoVPN card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              background: "linear-gradient(135deg, rgba(0,240,255,0.05), rgba(0,240,255,0.01))",
              border: "1px solid rgba(0,240,255,0.18)",
              borderRadius: 24, padding: "40px",
              position: "relative", overflow: "hidden",
              display: "flex", flexDirection: "column",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(0,240,255,0.6), transparent)" }} />

            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: "rgba(0,240,255,0.1)",
                border: "1px solid rgba(0,240,255,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#00f0ff",
              }}>
                <Shield size={22} />
              </div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#f0f4ff", letterSpacing: "-0.02em" }}>PongoVPN</div>
                <div style={{ fontSize: 12, color: "rgba(240,244,255,0.5)", marginTop: 2 }}>стабильный VPN в Telegram</div>
              </div>
            </div>

            {/* Trial badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "8px 14px", borderRadius: 100,
              background: "rgba(0,240,255,0.08)",
              border: "1px solid rgba(0,240,255,0.25)",
              marginBottom: 24,
            }}>
              <Gift size={14} color="#00f0ff" />
              <span style={{ fontSize: 13, color: "#00f0ff", fontWeight: 600 }}>24 часа бесплатно</span>
            </div>

            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 8 }}>
              <span style={{ fontSize: 36, fontWeight: 700, color: "#f0f4ff", letterSpacing: "-0.02em" }}>100 ₽</span>
              <span style={{ fontSize: 15, color: "rgba(240,244,255,0.5)" }}>/ мес</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {vpnFeatures.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(240,244,255,0.75)" }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(0,240,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Check size={11} color="#00f0ff" />
                  </div>
                  {f}
                </div>
              ))}
            </div>

            <a
              href="https://t.me/PongoVPN_bot"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                width: "100%", padding: "14px 24px",
                borderRadius: 12,
                background: "#00f0ff",
                color: "#050810",
                fontSize: 15, fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.25s ease",
                marginTop: "auto",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(0,240,255,0.5)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
            >
              <Shield size={16} /> Открыть PongoVPN <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* PongoSPY card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              background: "linear-gradient(135deg, rgba(167,139,250,0.05), rgba(167,139,250,0.01))",
              border: "1px solid rgba(167,139,250,0.2)",
              borderRadius: 24, padding: "40px",
              position: "relative", overflow: "hidden",
              display: "flex", flexDirection: "column",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.6), transparent)" }} />

            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: "rgba(167,139,250,0.12)",
                border: "1px solid rgba(167,139,250,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#a78bfa",
              }}>
                <Eye size={22} />
              </div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#f0f4ff", letterSpacing: "-0.02em" }}>PongoSPY</div>
                <div style={{ fontSize: 12, color: "rgba(240,244,255,0.5)", marginTop: 2 }}>контроль цифрового следа</div>
              </div>
            </div>

            {/* No trial badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "8px 14px", borderRadius: 100,
              background: "rgba(167,139,250,0.08)",
              border: "1px solid rgba(167,139,250,0.25)",
              marginBottom: 24,
            }}>
              <Clock size={14} color="#a78bfa" />
              <span style={{ fontSize: 13, color: "#a78bfa", fontWeight: 600 }}>Пакеты запросов</span>
            </div>

            {/* Two price tiers */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
              <div style={{
                display: "flex", alignItems: "baseline", justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid rgba(167,139,250,0.12)",
              }}>
                <span style={{ fontSize: 14, color: "rgba(240,244,255,0.6)" }}>20 запросов</span>
                <span style={{ fontSize: 22, fontWeight: 700, color: "#f0f4ff", fontFamily: "var(--font-space-mono, monospace)" }}>$4</span>
              </div>
              <div style={{
                display: "flex", alignItems: "baseline", justifyContent: "space-between",
                padding: "10px 0",
              }}>
                <span style={{ fontSize: 14, color: "rgba(240,244,255,0.6)" }}>50 запросов</span>
                <span style={{ fontSize: 22, fontWeight: 700, color: "#f0f4ff", fontFamily: "var(--font-space-mono, monospace)" }}>$8</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {spyFeatures.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(240,244,255,0.75)" }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(167,139,250,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Check size={11} color="#a78bfa" />
                  </div>
                  {f}
                </div>
              ))}
            </div>

            <a
              href="https://t.me/PongoSPY_bot"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                width: "100%", padding: "14px 24px",
                borderRadius: 12,
                border: "1px solid rgba(167,139,250,0.4)",
                background: "rgba(167,139,250,0.1)",
                color: "#f0f4ff",
                fontSize: 15, fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.25s ease",
                marginTop: "auto",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(167,139,250,0.18)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(167,139,250,0.1)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
            >
              <Eye size={16} /> Открыть PongoSPY <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        .pricing-grid { grid-template-columns: 1fr 1fr !important; }
        @media (max-width: 900px) { .pricing-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
