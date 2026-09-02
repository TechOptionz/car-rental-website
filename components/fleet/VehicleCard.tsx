import Link from "next/link";
import type { Vehicle } from "@/data/fleet";
import VehiclePhoto from "./VehiclePhoto";

export default function VehicleCard({ vehicle: v }: { vehicle: Vehicle }) {
  return (
    <div
      className="fade-up"
      style={{
        background: "#fff",
        border: "1px solid #E1E4E8",
        borderRadius: 14,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        animation: "fadeUp .25s ease",
      }}
    >
      <VehiclePhoto vehicle={v} />
      <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "baseline" }}>
          <h2 className="font-heading" style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>
            {v.name}
          </h2>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#2E6DB4",
              background: "#EEF2F7",
              padding: "4px 8px",
              borderRadius: 999,
              whiteSpace: "nowrap",
            }}
          >
            {v.tier}
          </span>
        </div>
        <p style={{ margin: 0, color: "#5B6572", fontSize: 15 }}>{v.spec}</p>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: 6 }}>
          {v.tags.map((tg) => (
            <li key={tg} style={{ fontSize: 12, background: "#F5F6F8", borderRadius: 6, padding: "4px 8px", color: "#5B6572" }}>
              {tg}
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "auto", paddingTop: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="font-heading" style={{ fontWeight: 800, fontSize: 22 }}>
            {v.price}
            <span style={{ fontSize: 13, fontWeight: 600, color: "#5B6572" }}> /week</span>
          </span>
          <Link href="/contact" className="btn-navy" style={{ padding: "10px 16px", fontSize: 14 }}>
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}
