import Link from "next/link";
import { fleet } from "@/data/fleet";
import VehiclePhoto from "@/components/fleet/VehiclePhoto";

export default function FleetPreview() {
  const fleetPreview = fleet.slice(0, 3);
  return (
    <section className="container" style={{ padding: "clamp(48px,7vw,88px) 16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 16, flexWrap: "wrap", marginBottom: 28 }}>
        <div>
          <p style={{ margin: "0 0 10px", fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "#2E6DB4", fontWeight: 700 }}>
            Our fleet
          </p>
          <h2 className="font-heading" style={{ margin: 0, fontSize: "clamp(26px,3.5vw,38px)", fontWeight: 700, lineHeight: 1.15 }}>
            Hybrids that earn more per shift
          </h2>
        </div>
        <Link href="/fleet" className="link-arrow">
          View all vehicles →
        </Link>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
        {fleetPreview.map((v) => (
          <div
            key={v.name}
            style={{ background: "#fff", border: "1px solid #E1E4E8", borderRadius: 14, overflow: "hidden", display: "flex", flexDirection: "column" }}
          >
            <VehiclePhoto vehicle={v} />
            <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "baseline" }}>
                <h3 className="font-heading" style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>
                  {v.name}
                </h3>
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
              <div style={{ marginTop: 6, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="font-heading" style={{ fontWeight: 800, fontSize: 20 }}>
                  {v.price}
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#5B6572" }}> /week</span>
                </span>
                <Link href="/contact" style={{ fontWeight: 700, fontSize: 15 }}>
                  Enquire →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
