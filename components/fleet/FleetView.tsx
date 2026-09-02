"use client";

import { useState } from "react";
import { fleet, fleetCats } from "@/data/fleet";
import VehicleCard from "./VehicleCard";

export default function FleetView() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? fleet : fleet.filter((v) => v.cat === filter);

  return (
    <>
      <section style={{ background: "#fff", borderBottom: "1px solid #E1E4E8" }}>
        <div className="container" style={{ padding: "clamp(40px,6vw,72px) 16px" }}>
          <p style={{ margin: "0 0 10px", fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "#2E6DB4", fontWeight: 700 }}>
            Our fleet
          </p>
          <h1 className="font-heading" style={{ margin: "0 0 14px", fontSize: "clamp(30px,4.5vw,48px)", fontWeight: 800, lineHeight: 1.1 }}>
            Late-model, platform-approved vehicles
          </h1>
          <p style={{ margin: "0 0 24px", maxWidth: 680, color: "#5B6572", fontSize: 18, lineHeight: 1.55 }}>
            All cars are under five years old, serviced on schedule and cleaned between drivers. Prices are weekly and
            include insurance, rego and servicing.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }} role="tablist" aria-label="Filter fleet">
            {fleetCats.map((c) => {
              const active = filter === c;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  role="tab"
                  aria-selected={active}
                  style={{
                    padding: "10px 16px",
                    borderRadius: 999,
                    border: `1px solid ${active ? "#1D3557" : "#C9CED6"}`,
                    background: active ? "#1D3557" : "#fff",
                    color: active ? "#fff" : "#1D3557",
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>
      <section className="container" style={{ padding: "clamp(40px,6vw,72px) 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 20 }}>
          {filtered.map((v) => (
            <VehicleCard key={v.name} vehicle={v} />
          ))}
        </div>
        <p style={{ margin: "28px 0 0", fontSize: 13, color: "#7A8290" }}>
          Weekly rates shown are indicative for approved drivers on a rolling weekly plan and include GST. Bond and
          eligibility conditions apply.
        </p>
      </section>
    </>
  );
}
