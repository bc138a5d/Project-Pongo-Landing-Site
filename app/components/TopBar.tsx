"use client";

import { motion } from "framer-motion";
import { Shield } from "./Shield";

/**
 * TopBar - sticky announcement strip above the main Nav.
 * Communicates that pongo-project.ru is a working fallback when Telegram
 * is unreachable in regions where it gets blocked.
 */
export default function TopBar() {
  return (
    <motion.div
      role="region"
      aria-label="Резервный канал доступа"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 110,
        background:
          "linear-gradient(90deg, rgba(0,240,255,0.10), rgba(0,240,255,0.04) 50%, rgba(0,240,255,0.10))",
        borderBottom: "1px solid rgba(0,240,255,0.18)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "9px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          fontSize: 13,
          lineHeight: 1.4,
          color: "rgba(240,244,255,0.82)",
          textAlign: "center",
          flexWrap: "wrap",
        }}
        className="topbar-row"
      >
        <span
          aria-hidden="true"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#00f0ff",
            flexShrink: 0,
          }}
        >
          <Shield size={13} />
        </span>
        <span>
          Сайт - резервный канал.{" "}
          <span style={{ color: "rgba(240,244,255,0.55)" }}>
            Если Telegram недоступен, вы остаётесь с VPN.
          </span>
        </span>
        <a
          href="https://cabinet.pongovpn.ru/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            color: "#00f0ff",
            fontWeight: 600,
            textDecoration: "none",
            padding: "2px 0",
            borderBottom: "1px solid rgba(0,240,255,0.35)",
            transition: "all 0.2s ease",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderBottomColor = "#00f0ff";
            e.currentTarget.style.textShadow = "0 0 12px rgba(0,240,255,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderBottomColor = "rgba(0,240,255,0.35)";
            e.currentTarget.style.textShadow = "none";
          }}
        >
          Войти в кабинет →
        </a>
      </div>
    </motion.div>
  );
}
