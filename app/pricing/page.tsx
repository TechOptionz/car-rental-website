import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import { plans, included } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Pricing | Motorana Rideshare Rentals",
  description:
    "One weekly payment. Nothing hidden. Commit longer and pay less. Every plan includes the same cover and support; only the rate and minimum term change.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="One weekly payment. Nothing hidden."
        lead="Commit longer and pay less. Every plan includes the same cover and support; only the rate and minimum term change."
      />
      <section className="container" style={{ padding: "clamp(40px,6vw,72px) 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20, alignItems: "stretch" }}>
          {plans.map((p) => (
            <div
              key={p.name}
              style={{
                background: p.bg,
                color: p.color,
                border: "1px solid #E1E4E8",
                borderRadius: 16,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                position: "relative",
              }}
            >
              {p.popular && (
                <span
                  style={{
                    position: "absolute",
                    top: -12,
                    left: 24,
                    background: "#F2B84B",
                    color: "#005C46",
                    fontSize: 12,
                    fontWeight: 800,
                    padding: "5px 10px",
                    borderRadius: 999,
                  }}
                >
                  Most popular
                </span>
              )}
              <h2 className="font-heading" style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>
                {p.name}
              </h2>
              <div>
                <span className="font-heading" style={{ fontWeight: 800, fontSize: 38 }}>
                  {p.price}
                </span>
                <span style={{ fontSize: 14, opacity: 0.75 }}> /week from</span>
              </div>
              <p style={{ margin: 0, opacity: 0.8, lineHeight: 1.5 }}>{p.desc}</p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                {p.points.map((pt) => (
                  <li key={pt} style={{ display: "flex", gap: 8 }}>
                    <span style={{ fontWeight: 800 }}>✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                style={{
                  background: p.btnBg,
                  color: p.btnColor,
                  padding: 14,
                  borderRadius: 8,
                  fontWeight: 700,
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                Get this plan
              </Link>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 40,
            background: "#fff",
            border: "1px solid #E1E4E8",
            borderRadius: 16,
            padding: "clamp(22px,3vw,32px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 24,
          }}
        >
          {included.map((i) => (
            <div key={i.title}>
              <h3 className="font-heading" style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 700 }}>
                {i.title}
              </h3>
              <p style={{ margin: 0, color: "#5B6572", lineHeight: 1.5, fontSize: 15 }}>{i.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
