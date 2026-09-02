import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="container" style={{ padding: "clamp(48px,7vw,88px) 16px" }}>
      <p style={{ margin: "0 0 10px", fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "#2E6DB4", fontWeight: 700 }}>
        What we do
      </p>
      <h2 className="font-heading" style={{ margin: "0 0 12px", fontSize: "clamp(26px,3.5vw,38px)", fontWeight: 700, lineHeight: 1.15 }}>
        Rentals built for rideshare and delivery drivers
      </h2>
      <p style={{ margin: "0 0 32px", maxWidth: 640, color: "#5B6572", fontSize: 17, lineHeight: 1.55 }}>
        Every car meets platform vehicle requirements and comes ready to drive. You bring your licence and your account;
        we handle the rest.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
        {services.map((s) => (
          <Link
            key={s.title}
            href="/services"
            className="service-card"
            style={{
              background: "#fff",
              border: "1px solid #E1E4E8",
              borderRadius: 14,
              padding: "26px 22px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              color: "#1D3557",
              textDecoration: "none",
            }}
          >
            <span
              className="font-heading"
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: "#EEF2F7",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                color: "#1D3557",
              }}
            >
              {s.mark}
            </span>
            <h3 className="font-heading" style={{ margin: "6px 0 0", fontSize: 19, fontWeight: 700 }}>
              {s.title}
            </h3>
            <p style={{ margin: 0, color: "#5B6572", lineHeight: 1.5, flex: 1 }}>{s.desc}</p>
            <span style={{ fontWeight: 700, color: "#2E6DB4" }}>Learn more →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
