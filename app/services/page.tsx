import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import { serviceDetails } from "@/data/services";
import { CITY, PHONE, PHONE_TEL } from "@/data/site";

export const metadata: Metadata = {
  title: `Services | Motorana Rideshare Rentals`,
  description: `Rideshare and delivery car rentals in ${CITY}. One weekly payment covers the car, comprehensive insurance, registration, CTP, servicing and roadside assistance.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={`Rideshare and delivery car rentals in ${CITY}`}
        lead="One weekly payment covers the car, comprehensive insurance, registration, CTP, servicing and roadside assistance. Choose the plan that matches how you drive."
      />
      <section
        className="container"
        style={{ padding: "clamp(40px,6vw,72px) 16px", display: "flex", flexDirection: "column", gap: 24 }}
      >
        {serviceDetails.map((s) => (
          <article
            key={s.id}
            id={s.id}
            style={{
              background: "#fff",
              border: "1px solid #E1E4E8",
              borderRadius: 16,
              padding: "clamp(22px,3vw,36px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 28,
              alignItems: "start",
            }}
          >
            <div>
              <span
                className="font-heading"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "#1D3557",
                  color: "#fff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                }}
              >
                {s.mark}
              </span>
              <h2 className="font-heading" style={{ margin: "16px 0 10px", fontSize: "clamp(22px,3vw,28px)", fontWeight: 700 }}>
                {s.title}
              </h2>
              <p style={{ margin: "0 0 18px", color: "#5B6572", lineHeight: 1.6, fontSize: 17 }}>{s.body}</p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-navy" style={{ padding: "13px 20px" }}>
                  Enquire about this plan
                </Link>
                <a href={`tel:${PHONE_TEL}`} className="btn-outline-navy" style={{ padding: "11px 20px" }}>
                  Call {PHONE}
                </a>
              </div>
            </div>
            <div style={{ background: "#F5F6F8", borderRadius: 12, padding: 22 }}>
              <h3 style={{ margin: "0 0 12px", fontSize: 14, letterSpacing: ".1em", textTransform: "uppercase", color: "#5B6572" }}>
                What&apos;s included
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {s.points.map((p) => (
                  <li key={p} style={{ display: "flex", gap: 10, lineHeight: 1.45 }}>
                    <span style={{ color: "#1F7A3E", fontWeight: 800 }}>✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
