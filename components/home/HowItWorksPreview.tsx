import Link from "next/link";
import { steps, PHONE_TEL } from "@/data/site";

export default function HowItWorksPreview() {
  return (
    <section style={{ background: "#fff" }}>
      <div className="container" style={{ padding: "clamp(48px,7vw,88px) 16px" }}>
        <p style={{ margin: "0 0 10px", fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "#2E6DB4", fontWeight: 700 }}>
          How it works
        </p>
        <h2 className="font-heading" style={{ margin: "0 0 32px", fontSize: "clamp(26px,3.5vw,38px)", fontWeight: 700, lineHeight: 1.15 }}>
          On the road in four steps
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24 }}>
          {steps.map((st) => (
            <div key={st.n} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div className="font-heading" style={{ fontWeight: 800, fontSize: 40, color: "#A2A9B1", lineHeight: 1 }}>
                {st.n}
              </div>
              <h3 className="font-heading" style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>
                {st.title}
              </h3>
              <p style={{ margin: 0, color: "#5B6572", lineHeight: 1.5 }}>{st.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/how-it-works" className="btn-navy" style={{ padding: "14px 22px" }}>
            See requirements
          </Link>
          <a href={`tel:${PHONE_TEL}`} className="btn-outline-navy" style={{ padding: "12px 22px" }}>
            Call to check eligibility
          </a>
        </div>
      </div>
    </section>
  );
}
