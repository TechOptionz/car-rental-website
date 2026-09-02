import { trustStats } from "@/data/site";

export default function TrustStrip() {
  return (
    <section style={{ background: "#fff", borderBottom: "1px solid #E1E4E8" }}>
      <div
        className="container"
        style={{
          padding: "22px 16px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
          gap: 16,
          textAlign: "center",
        }}
      >
        {trustStats.map((s) => (
          <div key={s.label}>
            <div className="font-heading" style={{ fontWeight: 800, fontSize: 26 }}>
              {s.value}
            </div>
            <div style={{ fontSize: 14, color: "#5B6572" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
