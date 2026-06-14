"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Eye } from "lucide-react";
import Image from "next/image";
import { Shield } from "./Shield";

const links = [
  { label: "Тарифы", href: "#pricing" },
  { label: "Стек и инфраструктура", href: "#stack" },
  { label: "Как это работает", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "fixed",
          top: 40,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "16px 24px",
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(5, 8, 16, 0.9)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo + name */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <Image
              src="/logo.png?v=4"
              alt="Pongo"
              width={38}
              height={38}
              style={{ borderRadius: 10 }}
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
              <span style={{ fontSize: 19, fontWeight: 700, color: "#f0f4ff", letterSpacing: "-0.02em" }}>
                Pongo
              </span>
              <span style={{ fontSize: 10, fontWeight: 600, color: "rgba(240,244,255,0.45)", letterSpacing: "0.12em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 5, marginTop: 1 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#00f0ff", boxShadow: "0 0 4px #00f0ff" }} />
                VPN
                <span style={{ color: "rgba(240,244,255,0.25)", margin: "0 1px" }}>·</span>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#a78bfa", boxShadow: "0 0 4px #a78bfa" }} />
                SPY
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", gap: 8, alignItems: "center" }} className="hidden-mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  padding: "8px 16px",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "rgba(240,244,255,0.6)",
                  textDecoration: "none",
                  borderRadius: 8,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f4ff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,244,255,0.6)")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }} className="hidden-mobile">
            <a
              href="https://t.me/PongoSPY_bot"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "9px 16px",
                fontSize: 13, fontWeight: 500,
                color: "rgba(240,244,255,0.5)",
                textDecoration: "none",
                borderRadius: 10,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f4ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,244,255,0.5)")}
            >
              <Eye size={13} /> PongoSPY
            </a>
            <a
              href="https://t.me/PongoVPN_bot"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "9px 18px",
                fontSize: 13, fontWeight: 700,
                color: "#050810",
                textDecoration: "none",
                borderRadius: 10,
                background: "#00f0ff",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#33f4ff"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,240,255,0.4)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#00f0ff"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              <Shield size={13} /> PongoVPN
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#f0f4ff", padding: 4 }}
            className="show-mobile"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "fixed", top: 116, left: 16, right: 16, zIndex: 99,
              background: "rgba(8, 13, 24, 0.97)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16, padding: 20,
            }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block", padding: "14px 0",
                  fontSize: 16, fontWeight: 500,
                  color: "rgba(240,244,255,0.7)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {l.label}
              </a>
            ))}
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <a href="https://t.me/PongoVPN_bot" target="_blank" rel="noopener noreferrer"
                style={{ flex: 1, textAlign: "center", padding: "12px", borderRadius: 10, background: "#00f0ff", color: "#050810", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
                PongoVPN
              </a>
              <a href="https://t.me/PongoSPY_bot" target="_blank" rel="noopener noreferrer"
                style={{ flex: 1, textAlign: "center", padding: "12px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", color: "rgba(240,244,255,0.7)", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
                PongoSPY
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
}
