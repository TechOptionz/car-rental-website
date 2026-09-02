import Link from "next/link";
import { CITY } from "@/data/site";
import { cityData } from "@/data/locations";
import { faqs } from "@/data/faq";

export default function AreasFaq() {
  const suburbs = cityData.suburbs.slice(0, 8);
  const homeFaqs = faqs.slice(0, 4);
  return (
    <section
      className="container"
      style={{
        padding: "clamp(48px,7vw,88px) 16px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: 48,
      }}
    >
      <div>
        <p style={{ margin: "0 0 10px", fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "#2E6DB4", fontWeight: 700 }}>
          Service areas
        </p>
        <h2 className="font-heading" style={{ margin: "0 0 14px", fontSize: "clamp(24px,3vw,32px)", fontWeight: 700, lineHeight: 1.15 }}>
          Serving drivers across Greater {CITY}
        </h2>
        <p style={{ margin: "0 0 20px", color: "#5B6572", lineHeight: 1.55 }}>
          Pick up from our depot or ask about delivery to your door. We support drivers in:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {suburbs.map((sb) => (
            <span
              key={sb}
              style={{ background: "#fff", border: "1px solid #E1E4E8", borderRadius: 999, padding: "8px 14px", fontSize: 14, fontWeight: 600 }}
            >
              {sb}
            </span>
          ))}
        </div>
        <Link href="/service-areas" className="link-arrow" style={{ display: "inline-block", marginTop: 20 }}>
          All service areas →
        </Link>
      </div>
      <div>
        <p style={{ margin: "0 0 10px", fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "#2E6DB4", fontWeight: 700 }}>
          Common questions
        </p>
        <h2 className="font-heading" style={{ margin: "0 0 18px", fontSize: "clamp(24px,3vw,32px)", fontWeight: 700, lineHeight: 1.15 }}>
          Before you enquire
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {homeFaqs.map((f) => (
            <details key={f.q} style={{ background: "#fff", border: "1px solid #E1E4E8", borderRadius: 10, padding: "0 18px" }}>
              <summary style={{ padding: "16px 0", fontWeight: 700, cursor: "pointer", fontSize: 16 }}>{f.q}</summary>
              <p style={{ margin: 0, padding: "0 0 16px", color: "#5B6572", lineHeight: 1.55 }}>{f.a}</p>
            </details>
          ))}
        </div>
        <Link href="/faq" className="link-arrow" style={{ display: "inline-block", marginTop: 20 }}>
          Read all FAQs →
        </Link>
      </div>
    </section>
  );
}
