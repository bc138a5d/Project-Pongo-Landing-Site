"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Shield, Smartphone, MessageCircle } from "lucide-react";

const servers = [
  { flag: "🇫🇮", city: "Финляндия", protocol: "VLESS + REALITY" },
  { flag: "🇳🇱", city: "Нидерланды", protocol: "VLESS + REALITY" },
  { flag: "🇳🇱", city: "Нидерланды 2", protocol: "Hysteria2" },
  { flag: "🇩🇪", city: "Германия", protocol: "Hysteria2" },
  { flag: "🇵🇱", city: "Польша", protocol: "VLESS + xHTTP" },
  { flag: "🇵🇱", city: "Польша 2", protocol: "VLESS + gRPC" },
];

const stack = [
  { icon: <Server size={18} />, label: ">10 локаций", desc: "Стабильная скорость на всех серверах" },
  { icon: <Shield size={18} />, label: "Современные протоколы", desc: "VLESS · Hysteria2 · xHTTP · gRPC" },
  { icon: <Smartphone size={18} />, label: "Работаем с любым известным клиентом", desc: "Happ, v2rayNG, Hiddify" },
  { icon: <MessageCircle size={18} />, label: "Управление в Telegram mini-app", desc: "Всё на одном экране" },
];

export default function Technology() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stack" style={{ padding: "80px 24px", background: "rgba(255,255,255,0.01)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 400, background: "radial-gradient(ellipse, rgba(0,240,255,0.04), transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="tech-grid">

          {/* Left: server list */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div style={{
              position: "relative",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 24,
              padding: "32px 28px",
              overflow: "hidden",
            }}>
              <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#00f0ff", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
                  Серверы
                </div>
                {servers.map((s) => (
                  <div
                    key={s.city}
                    style={{
                      display: "flex", alignItems: "center", gap: 16,
                      padding: "14px 18px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 12,
                    }}
                  >
                    <span style={{ fontSize: 26, lineHeight: 1 }}>{s.flag}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#f0f4ff" }}>{s.city}</div>
                      <div style={{ fontSize: 12, color: "rgba(240,244,255,0.5)", marginTop: 2, fontFamily: "var(--font-space-mono, monospace)" }}>{s.protocol}</div>
                    </div>
                    <div style={{
                      width: 8, height: 8, borderRadius: "50%",
                      background: "#00ff64", boxShadow: "0 0 8px #00ff64",
                    }} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: text + stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div style={{ marginBottom: 20 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#00f0ff", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Стек и инфраструктура
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#f0f4ff", marginBottom: 16, lineHeight: 1.15 }}>
              Стабильное соединение{" "}
              <span style={{ color: "#00f0ff" }}>без перебоев</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(240,244,255,0.5)", marginBottom: 40 }}>
              Шесть локаций в Европе, актуальные протоколы и автоматический выбор оптимального маршрута. Подключение стабильно днём и ночью, без переключений и падений скорости.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {stack.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                  style={{
                    display: "flex", alignItems: "center", gap: 16,
                    padding: "16px 20px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14,
                  }}
                >
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(0,240,255,0.08)", border: "1px solid rgba(0,240,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#00f0ff", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#f0f4ff" }}>{item.label}</div>
                    <div style={{ fontSize: 13, color: "rgba(240,244,255,0.45)", marginTop: 2 }}>{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .tech-grid { grid-template-columns: 1fr 1fr !important; }
        @media (max-width: 900px) { .tech-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
