"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Что делать, если Telegram заблокирован?",
    a: "Сайт cabinet.pongovpn.ru - ваш резервный канал доступа. Там работают подписка, оплата, продление и настройка - независимо от Telegram. Бот и сайт используют единый аккаунт, ваш тариф и устройства сохраняются.",
  },
  {
    q: "Какие протоколы и серверы доступны в PongoVPN?",
    a: "Используются современные протоколы: VLESS TCP REALITY, Hysteria2, VLESS xHTTP и VLESS gRPC. Сеть серверов - больше 10 локаций в разных странах. Полный список автоматически появляется в приложении Happ после активации подписки.",
  },
  {
    q: "PongoVPN хранит логи моей активности?",
    a: "Нет. Мы не ведём журналов подключений, не собираем и не храним данные о посещённых сайтах, объёме трафика или содержимом передаваемых данных. Ваша приватность - фундаментальный принцип сервиса.",
  },
  {
    q: "Какие тарифы доступны?",
    a: "Подписка оформляется на 1, 3 или 6 месяцев. Оплата СБП/QR. Реферальная программа: 50 ₽ на баланс за каждого друга, который оплатит месяц подписки, а вам 100 ₽.",
  },
  {
    q: "Можно ли подключить несколько устройств?",
    a: "Да. В личном кабинете PongoVPN вы управляете всеми устройствами: добавляете и удаляете устройства, отслеживаете остаток дней. Количество устройств - 3, в пределах одной подписки. Каждое следующее устройство 100 ₽.",
  },
  {
    q: "Чем PongoVPN отличается от PongoSPY?",
    a: "Это два независимых Telegram-бота для разных задач. PongoVPN - защищённое VPN-соединение и стабильный доступ к интернету. PongoSPY - отдельный инструмент, который помогает вам проверить, какая информация о вас видна в открытых источниках, и при необходимости принять меры.",
  },
  {
    q: "Нужно ли что-то устанавливать на устройство?",
    a: "Подписками, балансом и устройствами вы управляете в нашем личном кабинете. Подключение VPN работает через стандартные механизмы iOS, Android, Windows, macOS и Linux.",
  },
  {
    q: "Подходит ли сервис для общественных Wi-Fi сетей?",
    a: "Да. Шифрование соединения защищает ваши логины, пароли и данные при подключении к Wi-Fi в кафе, аэропортах, гостиницах и других публичных точках доступа.",
  },
  {
    q: "Как работает поддержка?",
    a: "Связаться с командой можно через @pongo_support. Ответ, как правило, приходит в течение часа.",
  },
];

function FaqItem({ faq, index, inView }: { faq: { q: string; a: string }; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", textAlign: "left",
          padding: "24px 0",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
          background: "none", border: "none", cursor: "pointer",
          color: "#f0f4ff",
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.4, flex: 1 }}>
          {faq.q}
        </span>
        <div style={{
          width: 32, height: 32, borderRadius: 8, flexShrink: 0,
          border: "1px solid rgba(255,255,255,0.1)",
          background: open ? "rgba(0,240,255,0.1)" : "rgba(255,255,255,0.04)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: open ? "#00f0ff" : "rgba(240,244,255,0.5)",
          transition: "all 0.2s ease",
        }}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p style={{ paddingBottom: 24, fontSize: 15, lineHeight: 1.75, color: "rgba(240,244,255,0.55)", maxWidth: 760 }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <span style={{ fontSize: 12, fontWeight: 700, color: "#00f0ff", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", margin: "0 auto 16px" }}>
            FAQ
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#f0f4ff" }}>
            Частые вопросы
          </h2>
        </motion.div>

        <div>
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} faq={faq} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
