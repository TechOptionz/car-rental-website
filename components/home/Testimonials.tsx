import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section style={{ background: "#1D3557", color: "#fff" }}>
      <div className="container" style={{ padding: "clamp(48px,7vw,88px) 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
          <h2 className="font-heading" style={{ margin: 0, fontSize: "clamp(26px,3.5vw,38px)", fontWeight: 700, lineHeight: 1.15 }}>
            What our drivers say
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "#D6DAE0" }}>
            <span style={{ color: "#F2B84B", letterSpacing: 2 }}>★★★★★</span> 4.9 from 180+ Google reviews
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
          {testimonials.map((t) => (
            <figure
              key={t.name}
              style={{
                margin: 0,
                background: "rgba(255,255,255,.06)",
                border: "1px solid rgba(255,255,255,.12)",
                borderRadius: 14,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <span style={{ color: "#F2B84B", letterSpacing: 2, fontSize: 14 }}>★★★★★</span>
              <blockquote style={{ margin: 0, fontSize: 17, lineHeight: 1.55, flex: 1 }}>“{t.quote}”</blockquote>
              <figcaption style={{ fontSize: 14, color: "#A2A9B1" }}>
                <strong style={{ color: "#fff" }}>{t.name}</strong> · {t.meta}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
