"use client";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { value: 200, suffix: "+", label: "Пользователей", desc: "Доверяют PongoVPN" },
  { value: 10, suffix: "+", label: "Локаций", desc: "В разных странах", decimals: 0 },
  { value: 99.9, suffix: "%", label: "Аптайм", desc: "Подтверждённый SLA", decimals: 1 },
  { value: 4, suffix: "", label: "Протокола", desc: "VLESS · Hysteria2 · gRPC · xHTTP", decimals: 0 },
];

function Counter({ value, suffix, decimals = 0, inView }: {
  value: number; suffix: string; decimals?: number; inView: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString("ru-RU"));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 2 });
    return controls.stop;
  }, [inView, value, count]);

  return (
    <span style={{ fontFamily: "var(--font-space-mono, monospace)" }}>
      <motion.span ref={ref}>{rounded}</motion.span>{suffix}
    </span>
  );
}

export default function Statistics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="statistics" style={{ padding: "100px 24px", position: "relative" }}>
      <div className="gradient-line" style={{ maxWidth: 800, margin: "0 auto 100px" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }} ref={ref}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }} className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                padding: "40px 32px",
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                textAlign: "center",
              }}
            >
              <div style={{
                fontSize: "clamp(32px, 3.5vw, 48px)",
                fontWeight: 700,
                color: "#00f0ff",
                marginBottom: 8,
                letterSpacing: "-0.02em",
              }}>
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  inView={inView}
                />
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#f0f4ff", marginBottom: 6 }}>
                {stat.label}
              </div>
              <div style={{ fontSize: 13, color: "rgba(240,244,255,0.4)" }}>
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="gradient-line" style={{ maxWidth: 800, margin: "100px auto 0" }} />

      <style>{`
        .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
        @media (max-width: 900px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .stats-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
