import { PHONE, PHONE_TEL, SHOW_PROMO } from "@/data/site";

export default function PromoBar() {
  if (!SHOW_PROMO) return null;
  return (
    <div
      style={{
        background: "#005C46",
        color: "#fff",
        fontSize: 14,
        textAlign: "center",
        padding: "8px 16px",
        display: "flex",
        justifyContent: "center",
        gap: 8,
        flexWrap: "wrap",
      }}
    >
      <span>Cars available this week. Approved drivers pick up in 24 hours.</span>
      <a href={`tel:${PHONE_TEL}`} style={{ color: "#fff", fontWeight: 600, textDecoration: "underline" }}>
        Call {PHONE}
      </a>
    </div>
  );
}
