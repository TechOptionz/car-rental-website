import Link from "next/link";
import { PHONE, PHONE_TEL, CITY } from "@/data/site";
import QuickEnquiryForm from "./QuickEnquiryForm";

export default function Hero() {
  return (
    <section style={{ background: "#1D3557", color: "#fff" }}>
      <div
        className="container"
        style={{
          padding: "clamp(40px,7vw,88px) 16px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: 40,
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              margin: "0 0 14px",
              fontSize: 14,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#A2A9B1",
              fontWeight: 600,
            }}
          >
            Rideshare rentals · {CITY}
          </p>
          <h1
            className="font-heading"
            style={{
              margin: "0 0 18px",
              fontWeight: 800,
              fontSize: "clamp(32px,5vw,56px)",
              lineHeight: 1.08,
              letterSpacing: "-.01em",
              textWrap: "pretty",
            }}
          >
            Uber-ready cars.
            <br />
            Insurance, rego and servicing included.
          </h1>
          <p
            style={{
              margin: "0 0 28px",
              fontSize: "clamp(17px,2vw,20px)",
              lineHeight: 1.5,
              color: "#D6DAE0",
              maxWidth: 520,
              textWrap: "pretty",
            }}
          >
            Rent a late-model hybrid by the week, drive for Uber, DiDi or delivery, and keep more of what you earn. No
            lock-in contracts. Pick up within 24 hours of approval.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-white" style={{ padding: "16px 26px", fontSize: 16 }}>
              Get a quote
            </Link>
            <a href={`tel:${PHONE_TEL}`} className="btn-outline-white" style={{ padding: "14px 24px", fontSize: 16 }}>
              Call {PHONE}
            </a>
          </div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 32, fontSize: 14, color: "#D6DAE0" }}>
            <span>✓ Uber-approved vehicles</span>
            <span>✓ Weekly, no lock-in</span>
            <span>✓ 24/7 roadside assist</span>
          </div>
        </div>
        <QuickEnquiryForm />
      </div>
    </section>
  );
}
