import type { Metadata, Viewport } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import PromoBar from "@/components/layout/PromoBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import BottomCTA from "@/components/shared/BottomCTA";
import ChatWidget from "@/components/shared/ChatWidget";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Motorana Rideshare Rentals | Uber-Ready Car Hire",
  description:
    "Motorana Rideshare Rentals. Uber, DiDi and delivery-ready cars with insurance, rego and servicing included. Weekly plans, no lock-in. Enquire online or call.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${sourceSans.variable}`}>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <PromoBar />
          <Header />
          <main style={{ flex: 1 }}>
            {children}
            <BottomCTA />
          </main>
          <Footer />
          <MobileStickyCTA />
          <ChatWidget />
        </div>
      </body>
    </html>
  );
}
