"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Network, Activity, Globe, Shield, Smartphone, Infinity as InfinityIcon } from "lucide-react";

const features = [
  {
    icon: <Network size={22} />,
    title: "Современные протоколы",
    desc: "VLESS + REALITY, Hysteria2, VLESS + xHTTP, VLESS + gRPC. Подбираем оптимальный протокол под ваше соединение автоматически.",
  },
  {
    icon: <Activity size={22} />,
    title: "Стабильность 99.9%",
    desc: "Подтверждённый аптайм без обрывов и пауз. Соединение держится стабильно на протяжении всей сессии.",
  },
  {
    icon: <Globe size={22} />,
    title: "Больше 10 локаций",
    desc: "Серверы в Европе с автоматическим выбором оптимального маршрута под ваше соединение.",
  },
  {
    icon: <Shield size={22} />,
    title: "Без логов",
    desc: "Не ведём журналов подключений, не храним историю активности. Ваша приватность - фундаментальный принцип сервиса.",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Управление в Telegram",
    desc: "Приложение Happ работает прямо внутри Telegram. Подписки, баланс, устройства - всё в одном экране.",
  },
  {
    icon: <InfinityIcon size={22} />,
    title: "Без лимитов трафика",
    desc: "Скачивайте, смотрите, работайте - без ограничений по объёму. Трафик не тарифицируется дополнительно.",
  },
];

export default function Features() {
  // HIDDEN - задача «скрой блок Возможности». Чтобы вернуть - поменяй на false.
  const HIDDEN = true;
  if (HIDDEN) return null;

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" style={{ padding: "80px 24px", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <span style={{
              padding: "5px 14px", borderRadius: 100,
              border: "1px solid rgba(0,240,255,0.2)",
              background: "rgba(0,240,255,0.05)",
              fontSize: 12, fontWeight: 600,
              color: "#00f0ff",
              letterSpacing: "0.08em", textTransform: "uppercase",
            }}>
              Возможности
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#f0f4ff", marginBottom: 16 }}>
            Стабильный VPN{" "}
            <span style={{ color: "#00f0ff" }}>без лишнего</span>
          </h2>
          <p style={{ fontSize: 18, color: "rgba(240,244,255,0.5)", maxWidth: 540, margin: "0 auto", lineHeight: 1.6 }}>
            Современные протоколы, больше 10 локаций, прозрачные условия. Только то, что нужно для защищённого и стабильного соединения.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="features-grid">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 + 0.2 }}
              className="card-hover"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20,
                padding: "28px",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{
                position: "absolute", top: 0, left: "20%", right: "20%",
                height: 1,
                background: `linear-gradient(90deg, transparent, rgba(0,240,255,0.5), transparent)`,
              }} />

              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: "rgba(0,240,255,0.08)",
                border: "1px solid rgba(0,240,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#00f0ff",
                marginBottom: 20,
              }}>
                {f.icon}
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#f0f4ff", marginBottom: 10, letterSpacing: "-0.01em" }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(240,244,255,0.5)" }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .features-grid { grid-template-columns: repeat(3, 1fr) !important; }
        @media (max-width: 900px) { .features-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 580px) { .features-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
