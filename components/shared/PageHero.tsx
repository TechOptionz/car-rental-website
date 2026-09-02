export default function PageHero({
  eyebrow,
  title,
  lead,
  leadMargin,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  leadMargin?: string;
  children?: React.ReactNode;
}) {
  return (
    <section style={{ background: "#fff", borderBottom: "1px solid #E1E4E8" }}>
      <div className="container" style={{ padding: "clamp(40px,6vw,72px) 16px" }}>
        <p
          style={{
            margin: "0 0 10px",
            fontSize: 13,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "#2E6DB4",
            fontWeight: 700,
          }}
        >
          {eyebrow}
        </p>
        <h1
          className="font-heading"
          style={{ margin: "0 0 14px", fontSize: "clamp(30px,4.5vw,48px)", fontWeight: 800, lineHeight: 1.1 }}
        >
          {title}
        </h1>
        <p style={{ margin: leadMargin ?? 0, maxWidth: 680, color: "#5B6572", fontSize: 18, lineHeight: 1.55 }}>{lead}</p>
        {children}
      </div>
    </section>
  );
}
