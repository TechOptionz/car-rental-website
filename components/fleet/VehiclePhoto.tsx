import Image from "next/image";
import type { Vehicle } from "@/data/fleet";
import Placeholder from "@/components/shared/Placeholder";

/** The card's photo area: real photo when the vehicle has one, otherwise the
 *  source design's striped placeholder. Same 16/10 area either way. */
export default function VehiclePhoto({ vehicle: v }: { vehicle: Vehicle }) {
  if (!v.image) return <Placeholder label={`photo: ${v.name}`} aspectRatio="16/10" />;
  return (
    <div style={{ aspectRatio: "16/10", position: "relative" }}>
      <Image
        src={v.image}
        alt={v.name}
        fill
        sizes="(max-width: 960px) 100vw, 400px"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
