"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Wallet, Zap, CheckCircle, Search, Send, FileText, Shield } from "lucide-react";

const vpnSteps = [
  { icon: <MessageSquare size={20} />, title: "Откройте бота", desc: "Запустите @PongoVPN_bot в Telegram и нажмите «Старт»" },
  { icon: <Wallet size={20} />, title: "Пополните баланс", desc: "Оплата СБП/QR" },
  { icon: <Zap size={20} />, title: "Выберите тариф", desc: "Подписка на 1, 3 или 6 месяцев - на удобный срок" },
  { icon: <CheckCircle size={20} />, title: "Подключитесь", desc: "В приложении нажмите «Добавить подписку» в Happ - VPN активен" },
];

const spySteps = [
  { icon: <MessageSquare size={20} />, title: "Откройте бота", desc: "Запустите @PongoSPY_bot - это отдельный от Pongo сервис" },
  { icon: <Send size={20} />, title: "Отправьте запрос", desc: "Введите телефон, email или имя - то, что хотите проверить" },
  { icon: <FileText size={20} />, title: "Получите отчёт", desc: "Сводка по открытым источникам - соцсети, реестры, каталоги" },
  { icon: <Shield size={20} />, title: "Примите меры", desc: "Закройте лишние аккаунты, скорректируйте настройки приватности" },
];

function Steps({ steps, color, isPrimary }: { steps: typeof vpnSteps; color: string; isPrimary?: boolean }) {
  return (
    <div style={{ position: "relative" }}>
      <div style={{
        position: "absolute", left: 24, top: 48, bottom: 48,
        width: 1,
        background: `linear-gradient(180deg, transparent, ${color}40, ${color}40, transparent)`,
      }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {steps.map((step, i) => (
          <div key={step.title} style={{ display: "flex", gap: 20, paddingBottom: i < steps.length - 1 ? 32 : 0 }}>
            <div style={{ position: "relative", flexShrink: 0 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: `${color}12`,
                border: `1px solid ${color}25`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: color,
                zIndex: 1, position: "relative",
              }}>
                {step.icon}
              </div>
              <div style={{
                position: "absolute", top: -4, right: -4,
                width: 18, height: 18, borderRadius: "50%",
                background: color,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 9, fontWeight: 800, color: "#050810",
              }}>
                {i + 1}
              </div>
            </div>
            <div style={{ paddingTop: 10 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#f0f4ff", marginBottom: 6 }}>{step.title}</div>
              <div style={{ fontSize: 14, color: isPrimary ? "rgba(240,244,255,0.55)" : "rgba(240,244,255,0.45)", lineHeight: 1.6 }}>{step.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <span style={{ fontSize: 12, fontWeight: 700, color: "#00f0ff", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", margin: "0 auto 16px" }}>
            Как это работает
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#f0f4ff", marginBottom: 16 }}>
            Подключение -{" "}
            <span style={{ color: "#00f0ff" }}>за пару минут</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 32 }} className="how-grid">
          {/* PongoVPN - primary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              background: "linear-gradient(135deg, rgba(0,240,255,0.04), rgba(0,240,255,0.01))",
              border: "1px solid rgba(0,240,255,0.15)",
              borderRadius: 24, padding: "40px",
              position: "relative", overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(0,240,255,0.6), transparent)" }} />
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#00f0ff", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>PongoVPN</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "#f0f4ff", letterSpacing: "-0.02em" }}>Подключение за 4 шага</h3>
            </div>
            <Steps steps={vpnSteps} color="#00f0ff" isPrimary />
          </motion.div>

          {/* PongoSPY - secondary, muted */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 24, padding: "40px",
              position: "relative", overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(240,244,255,0.5)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>PongoSPY</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "rgba(240,244,255,0.85)", letterSpacing: "-0.02em" }}>Проверка за 4 шага</h3>
            </div>
            <Steps steps={spySteps} color="rgba(240,244,255,0.4)" />
          </motion.div>
        </div>
      </div>

      <style>{`
        .how-grid { grid-template-columns: 1.3fr 1fr !important; }
        @media (max-width: 900px) { .how-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
