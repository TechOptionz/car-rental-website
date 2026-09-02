import type { Metadata } from "next";
import FleetView from "@/components/fleet/FleetView";

export const metadata: Metadata = {
  title: "Fleet | Motorana Rideshare Rentals",
  description:
    "Late-model, platform-approved vehicles. All cars are under five years old, serviced on schedule and cleaned between drivers. Prices are weekly and include insurance, rego and servicing.",
};

export default function FleetPage() {
  return <FleetView />;
}
