import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Placeholder from "@/components/shared/Placeholder";
import ContactForm from "@/components/forms/ContactForm";
import { PHONE, PHONE_TEL, EMAIL, HOURS } from "@/data/site";
import { cityData } from "@/data/locations";

export const metadata: Metadata = {
  title: "Contact | Motorana Rideshare Rentals",
  description:
    "Get a quote or book a car. Fill in the form and we will call you back within one business hour, or call us directly.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a quote or book a car"
        lead="Fill in the form and we will call you back within one business hour, or call us directly."
      />
      <section
        className="container"
        style={{
          padding: "clamp(40px,6vw,72px) 16px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: 40,
          alignItems: "start",
        }}
      >
        <ContactForm />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <a
            href={`tel:${PHONE_TEL}`}
            className="btn-navy-solid no-underline"
            style={{
              background: "#1D3557",
              color: "#fff",
              borderRadius: 14,
              padding: 24,
              display: "flex",
              alignItems: "center",
              gap: 16,
              textDecoration: "none",
            }}
          >
            <span
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(255,255,255,.12)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
              }}
            >
              ☏
            </span>
            <span>
              <span style={{ display: "block", fontSize: 13, color: "#A2A9B1" }}>Tap to call</span>
              <span className="font-heading" style={{ display: "block", fontWeight: 800, fontSize: 22 }}>
                {PHONE}
              </span>
            </span>
          </a>
          <div
            style={{
              background: "#fff",
              border: "1px solid #E1E4E8",
              borderRadius: 14,
              padding: 22,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <h2 className="font-heading" style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 700 }}>
              Visit the depot
            </h2>
            <p style={{ margin: 0, color: "#5B6572" }}>{cityData.address}</p>
            <p style={{ margin: 0, color: "#5B6572" }}>{HOURS}</p>
            <p style={{ margin: "6px 0 0", color: "#5B6572" }}>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          </div>
          <Placeholder label="embedded map" aspectRatio="4/3" style={{ borderRadius: 14, border: "1px solid #E1E4E8" }} />
        </div>
      </section>
    </>
  );
}
