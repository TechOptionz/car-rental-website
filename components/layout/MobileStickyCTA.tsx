"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PHONE_TEL, STICKY_CTA } from "@/data/site";

export default function MobileStickyCTA() {
  const pathname = usePathname();
  if (!STICKY_CTA || pathname === "/contact") return null;

  return (
    <div className="sticky-bar">
      <a
        href={`tel:${PHONE_TEL}`}
        className="btn-outline-navy"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          padding: 12,
          minHeight: 48,
        }}
      >
        ☏ Call now
      </a>
      <Link
        href="/contact"
        className="btn-navy"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 12,
          minHeight: 48,
        }}
      >
        Enquire
      </Link>
    </div>
  );
}
