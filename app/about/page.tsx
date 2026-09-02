import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Placeholder from "@/components/shared/Placeholder";
import { values, credentials } from "@/data/site";

export const metadata: Metadata = {
  title: "About | Motorana Rideshare Rentals",
  description:
    "Motorana exists to make rideshare driving a stable income without the debt of buying a car. We keep the fleet young, the paperwork simple and the phone answered.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Motorana"
        title="Built by people who have driven the shifts"
        lead="Motorana exists to make rideshare driving a stable income without the debt of buying a car. We keep the fleet young, the paperwork simple and the phone answered."
      />
      <section
        className="container"
        style={{
          padding: "clamp(40px,6vw,72px) 16px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: 40,
          alignItems: "center",
        }}
      >
        <Placeholder label="photo: team at depot" aspectRatio="4/3" style={{ borderRadius: 14, border: "1px solid #E1E4E8" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {values.map((v) => (
            <div key={v.title}>
              <h2 className="font-heading" style={{ margin: "0 0 6px", fontSize: 20, fontWeight: 700 }}>
                {v.title}
              </h2>
              <p style={{ margin: 0, color: "#5B6572", lineHeight: 1.55 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{ background: "#fff" }}>
        <div className="container" style={{ padding: "clamp(40px,6vw,72px) 16px" }}>
          <h2 className="font-heading" style={{ margin: "0 0 24px", fontSize: "clamp(24px,3vw,32px)", fontWeight: 700 }}>
            Credentials and partners
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16 }}>
            {credentials.map((c) => (
              <div
                key={c}
                style={{
                  border: "1px solid #E1E4E8",
                  borderRadius: 10,
                  padding: "22px 16px",
                  textAlign: "center",
                  fontFamily: "monospace",
                  fontSize: 12,
                  color: "#5B6572",
                  background: "repeating-linear-gradient(135deg,#F5F6F8 0 8px,#fff 8px 16px)",
                }}
              >
                [ logo: {c} ]
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
