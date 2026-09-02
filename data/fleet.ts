export interface Vehicle {
  name: string;
  tier: string;
  spec: string;
  price: string;
  cat: string;
  tags: string[];
  /** Optional photo path under /public. Cards fall back to the source's striped placeholder when absent. */
  image?: string;
}

export const fleet: Vehicle[] = [
  { name: "Toyota Corolla Hybrid", tier: "UberX", spec: "2022–2024 · 4.2L/100km · CarPlay", price: "$259", cat: "Hybrid sedan", tags: ["UberX", "DiDi", "Delivery"], image: "/assets/vehicles/toyota-corolla-hybrid.jpg" },
  { name: "Toyota Camry Hybrid", tier: "Comfort", spec: "2022–2024 · 4.5L/100km · Leather", price: "$299", cat: "Hybrid sedan", tags: ["UberX", "Comfort", "DiDi"], image: "/assets/vehicles/toyota-camry-hybrid-2025.jpg" },
  { name: "Hyundai i30 Sedan", tier: "UberX", spec: "2021–2023 · Petrol · Low bond", price: "$229", cat: "Petrol", tags: ["UberX", "Delivery"], image: "/assets/vehicles/hyundai-i30-sedan.jpg" },
  { name: "Toyota RAV4 Hybrid", tier: "Comfort", spec: "2022–2024 · AWD · 7 airbags", price: "$339", cat: "Hybrid SUV", tags: ["UberX", "Comfort", "XL-ready"], image: "/assets/vehicles/toyota-rav4-hybrid.jpg" },
  { name: "Kia Carnival", tier: "UberXL", spec: "2021–2023 · 8 seats · Diesel", price: "$389", cat: "People mover", tags: ["UberXL", "Airport"], image: "/assets/vehicles/kia-carnival.jpg" },
  { name: "BYD Atto 3", tier: "Green", spec: "2023–2024 · 420km range · Fast charge", price: "$319", cat: "Electric", tags: ["Uber Green", "Comfort", "Zero fuel"], image: "/assets/vehicles/byd-atto-3.jpg" },
];

export const fleetCats = ["All", "Hybrid sedan", "Hybrid SUV", "Electric", "People mover", "Petrol"];
