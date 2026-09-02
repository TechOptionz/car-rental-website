"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems, PHONE, PHONE_TEL } from "@/data/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "#fff", borderBottom: "1px solid #E1E4E8" }}>
      <div
        className="container"
        style={{
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Link href="/" aria-label="Motorana home" onClick={closeMenu} style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/assets/logo.png"
            alt="Motorana Rideshare Rentals"
            width={1291}
            height={243}
            priority
            style={{ height: 44, width: "auto", display: "block", objectFit: "contain" }}
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="desktop-only" style={{ alignItems: "center", gap: 4 }}>
          {navItems.map((n) => (
            <Link key={n.id} href={n.href} className="nav-link">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="desktop-only" style={{ alignItems: "center", gap: 10 }}>
          <a
            href={`tel:${PHONE_TEL}`}
            className="no-underline"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontWeight: 700,
              color: "#1D3557",
              textDecoration: "none",
              fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
              fontSize: 15,
            }}
          >
            <span
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "#F0F3F7",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 15,
              }}
            >
              ☏
            </span>
            {PHONE}
          </a>
          <Link href="/contact" className="btn-navy" style={{ padding: "12px 20px", fontSize: 15 }}>
            Enquire now
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="mobile-only" style={{ alignItems: "center", gap: 8 }}>
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label="Call Motorana"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#1D3557",
              color: "#fff",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              textDecoration: "none",
            }}
          >
            ☏
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            style={{
              width: 44,
              height: 44,
              border: "1px solid #E1E4E8",
              background: "#fff",
              borderRadius: 8,
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              cursor: "pointer",
            }}
          >
            <span style={{ width: 20, height: 2, background: "#1D3557", display: "block" }} />
            <span style={{ width: 20, height: 2, background: "#1D3557", display: "block" }} />
            <span style={{ width: 20, height: 2, background: "#1D3557", display: "block" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          aria-label="Mobile"
          className="fade-up"
          style={{
            background: "#fff",
            borderTop: "1px solid #E1E4E8",
            padding: "8px 16px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            animation: "fadeUp .2s ease",
          }}
        >
          {navItems.map((n) => (
            <Link
              key={n.id}
              href={n.href}
              onClick={closeMenu}
              style={{
                padding: "14px 8px",
                fontWeight: 600,
                fontSize: 17,
                color: "#1D3557",
                textDecoration: "none",
                borderBottom: "1px solid #F0F3F7",
              }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="btn-navy"
            style={{ marginTop: 12, padding: 14, textAlign: "center" }}
          >
            Enquire now
          </Link>
        </nav>
      )}
    </header>
  );
}
