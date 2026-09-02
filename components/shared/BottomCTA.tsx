"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PHONE, PHONE_TEL } from "@/data/site";

export default function BottomCTA() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <section style={{ background: "#fff", borderTop: "1px solid #E1E4E8" }}>
      <div className="container" style={{ padding: "clamp(48px,7vw,80px) 16px", textAlign: "center" }}>
        <h2
          className="font-heading"
          style={{ margin: "0 0 12px", fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 800, lineHeight: 1.1 }}
        >
          Ready to start earning?
        </h2>
        <p style={{ margin: "0 auto 28px", maxWidth: 520, color: "#5B6572", fontSize: 17, lineHeight: 1.55 }}>
          Tell us when you want to start and we will have a car ready. Approval usually takes a few hours.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="btn-navy" style={{ padding: "16px 28px", fontSize: 16 }}>
            Enquire online
          </Link>
          <a href={`tel:${PHONE_TEL}`} className="btn-outline-navy" style={{ padding: "14px 28px", fontSize: 16 }}>
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
