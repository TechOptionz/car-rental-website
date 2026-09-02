import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import { steps, requirements, PHONE, PHONE_TEL } from "@/data/site";

export const metadata: Metadata = {
  title: "How it works | Motorana Rideshare Rentals",
  description:
    "From enquiry to first trip in 24 hours. Most drivers are approved the same day they apply. Here is what happens and what you need to bring.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="From enquiry to first trip in 24 hours"
        lead="Most drivers are approved the same day they apply. Here is what happens and what you need to bring."
      />
      <section
        className="container"
        style={{
          padding: "clamp(40px,6vw,72px) 16px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: 40,
        }}
      >
        <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 22 }}>
          {steps.map((st) => (
            <li key={st.n} style={{ display: "flex", gap: 18 }}>
              <span
                className="font-heading"
                style={{
                  flex: "none",
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#1D3557",
                  color: "#fff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                }}
              >
                {st.n}
              </span>
              <div>
                <h2 className="font-heading" style={{ margin: "0 0 6px", fontSize: 20, fontWeight: 700 }}>
                  {st.title}
                </h2>
                <p style={{ margin: 0, color: "#5B6572", lineHeight: 1.55 }}>{st.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <div style={{ background: "#fff", border: "1px solid #E1E4E8", borderRadius: 16, padding: "28px 24px" }}>
          <h2 className="font-heading" style={{ margin: "0 0 16px", fontSize: 22, fontWeight: 700 }}>
            Eligibility checklist
          </h2>
          <ul style={{ margin: "0 0 22px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            {requirements.map((r) => (
              <li key={r} style={{ display: "flex", gap: 10, lineHeight: 1.45 }}>
                <span style={{ color: "#1F7A3E", fontWeight: 800 }}>✓</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
          <p style={{ margin: "0 0 18px", color: "#5B6572", fontSize: 15 }}>
            Not sure if you qualify? Call us. We can usually tell you in two minutes.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href={`tel:${PHONE_TEL}`} className="btn-navy" style={{ padding: "13px 20px" }}>
              Call {PHONE}
            </a>
            <Link href="/contact" className="btn-outline-navy" style={{ padding: "11px 20px" }}>
              Apply online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
