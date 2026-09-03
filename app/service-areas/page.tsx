import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import { CITY, PHONE, PHONE_TEL, HOURS } from "@/data/site";
import { cityData } from "@/data/locations";

export const metadata: Metadata = {
  title: "Service areas | Motorana Rideshare Rentals",
  description: `Rideshare car rental across Greater ${CITY}. Collect from our ${CITY} depot, or ask about vehicle delivery to your home.`,
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title={`Rideshare car rental across Greater ${CITY}`}
        lead={`Collect from our ${CITY} depot, or ask about vehicle delivery to your home. We support drivers in every region listed below.`}
      />
      <section
        className="container"
        style={{
          padding: "clamp(40px,6vw,72px) 16px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: 40,
        }}
      >
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 10 }}>
            {cityData.suburbs.map((sb) => (
              <div
                key={sb}
                style={{ background: "#fff", border: "1px solid #E1E4E8", borderRadius: 8, padding: "12px 14px", fontWeight: 600, fontSize: 15 }}
              >
                {sb}
              </div>
            ))}
          </div>
          <p style={{ margin: "20px 0 0", color: "#5B6572", lineHeight: 1.55 }}>
            Outside these areas? We still may be able to help. <Link href="/contact">Send an enquiry</Link> with your
            suburb.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ aspectRatio: "4/3", position: "relative", borderRadius: 14, border: "1px solid #E1E4E8", overflow: "hidden" }}>
            <Image
              src="/assets/maps/service-area-map.jpg"
              alt={`Map of Motorana's service coverage across Greater ${CITY}`}
              fill
              sizes="(max-width: 960px) 100vw, 520px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{ background: "#fff", border: "1px solid #E1E4E8", borderRadius: 14, padding: 22 }}>
            <h2 className="font-heading" style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 700 }}>
              {CITY} depot
            </h2>
            <p style={{ margin: "0 0 4px", color: "#5B6572" }}>{cityData.address}</p>
            <p style={{ margin: "0 0 14px", color: "#5B6572" }}>{HOURS}</p>
            <a href={`tel:${PHONE_TEL}`} className="link-arrow">
              Call {PHONE} →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
