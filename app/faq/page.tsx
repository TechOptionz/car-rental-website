import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import { faqs } from "@/data/faq";
import { PHONE, PHONE_TEL, HOURS } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQs | Motorana Rideshare Rentals",
  description:
    "Frequently asked questions. Straight answers on cost, insurance, eligibility and what happens if something goes wrong.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions"
        lead="Straight answers on cost, insurance, eligibility and what happens if something goes wrong."
      />
      <section
        style={{
          maxWidth: 820,
          margin: "0 auto",
          padding: "clamp(40px,6vw,72px) 16px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {faqs.map((f) => (
          <details key={f.q} style={{ background: "#fff", border: "1px solid #E1E4E8", borderRadius: 10, padding: "0 20px" }}>
            <summary style={{ padding: "18px 0", fontWeight: 700, cursor: "pointer", fontSize: 17 }}>{f.q}</summary>
            <p style={{ margin: 0, padding: "0 0 18px", color: "#5B6572", lineHeight: 1.6 }}>{f.a}</p>
          </details>
        ))}
        <div
          style={{
            marginTop: 24,
            background: "#1D3557",
            color: "#fff",
            borderRadius: 14,
            padding: 26,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2 className="font-heading" style={{ margin: "0 0 4px", fontSize: 20 }}>
              Still have a question?
            </h2>
            <p style={{ margin: 0, color: "#D6DAE0" }}>Talk to a real person, {HOURS}.</p>
          </div>
          <a href={`tel:${PHONE_TEL}`} className="btn-white" style={{ padding: "13px 22px" }}>
            Call {PHONE}
          </a>
        </div>
      </section>
    </>
  );
}
