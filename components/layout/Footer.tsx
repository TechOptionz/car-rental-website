import Link from "next/link";
import Image from "next/image";
import { navItems, platforms, PHONE, PHONE_TEL, EMAIL, HOURS, CITY } from "@/data/site";
import { cityData } from "@/data/locations";

export default function Footer() {
  return (
    <footer style={{ background: "#003E30", color: "#D6DAE0" }}>
      <div
        className="container"
        style={{
          padding: "48px 16px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: 32,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Image
            src="/assets/logo-white.png"
            alt="Motorana Rideshare Rentals"
            width={2004}
            height={387}
            style={{ height: 40, width: "auto", alignSelf: "flex-start", objectFit: "contain" }}
          />
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, maxWidth: 300 }}>
            Rideshare and delivery car rentals in Greater {CITY}. Insurance, registration and servicing included in one
            weekly payment.
          </p>
        </div>
        <div>
          <h3 style={{ margin: "0 0 12px", fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "#A2A9B1" }}>
            Pages
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {navItems.map((n) => (
              <Link key={n.id} href={n.href} className="footer-link">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ margin: "0 0 12px", fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "#A2A9B1" }}>
            Contact
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 15 }}>
            <a href={`tel:${PHONE_TEL}`} style={{ color: "#fff", fontWeight: 700 }}>
              {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} style={{ color: "#D6DAE0" }}>
              {EMAIL}
            </a>
            <span>{cityData.address}</span>
            <span>{HOURS}</span>
          </div>
        </div>
        <div>
          <h3 style={{ margin: "0 0 12px", fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "#A2A9B1" }}>
            Drive with
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {platforms.map((p) => (
              <span key={p} style={{ border: "1px solid rgba(255,255,255,.2)", borderRadius: 6, padding: "6px 10px", fontSize: 13 }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}>
        <div
          className="container"
          style={{
            padding: 16,
            fontSize: 13,
            color: "#A2A9B1",
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <span>© 2026 Motorana Rideshare Rentals. ABN 00 000 000 000.</span>
          <span style={{ display: "flex", gap: 16 }}>
            <a href="#privacy" className="footer-muted-link">
              Privacy
            </a>
            <a href="#terms" className="footer-muted-link">
              Rental terms
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
