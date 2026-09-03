export const PHONE = "1300 000 000";
export const PHONE_TEL = PHONE.replace(/\s/g, "");
export const EMAIL = "hello@motorana.com.au";
export const HOURS = "Mon–Sat 8am–6pm";
export const CITY = "Sydney";
export const SHOW_PROMO = true;
export const STICKY_CTA = true;

export const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "services", label: "Services", href: "/services" },
  { id: "fleet", label: "Fleet", href: "/fleet" },
  { id: "pricing", label: "Pricing", href: "/pricing" },
  { id: "how", label: "How it works", href: "/how-it-works" },
  { id: "faq", label: "FAQs", href: "/faq" },
  { id: "areas", label: "Service areas", href: "/service-areas" },
  { id: "about", label: "About", href: "/about" },
];

export const trustStats = [
  { value: "24 hrs", label: "Enquiry to pick-up" },
  { value: "$0", label: "Lock-in or exit fees" },
  { value: "100%", label: "Platform-approved fleet" },
  { value: "24/7", label: "Roadside assistance" },
];

export const platforms = ["Uber", "Uber Eats", "DiDi", "Ola", "DoorDash", "Menulog"];

export const credentials = [
  { label: "Uber Vehicle Solutions partner", image: "/assets/partners/platform-partner.jpg", alt: "Approved rideshare vehicle badge" },
  { label: "DiDi approved supplier", image: "/assets/partners/approved-supplier.jpg", alt: "Approved supplier handshake badge" },
  { label: "Comprehensive insurance partner", image: "/assets/partners/insurer.jpg", alt: "Insurance shield badge" },
  { label: "Roadside assist partner", image: "/assets/partners/roadside-assist.jpg", alt: "Roadside assistance tow truck badge" },
];

export const values = [
  { title: "Fleet under five years old", desc: "Newer cars mean fewer breakdowns, better fuel economy and higher ratings from passengers." },
  { title: "Transparent pricing", desc: "The weekly rate we quote is the rate you pay. Bond and excess are explained before you sign." },
  { title: "Support that answers", desc: "A local team on the phone six days a week, plus a 24/7 line for breakdowns and incidents." },
];

export const steps = [
  { n: "01", title: "Enquire", desc: "Send the form or call. We confirm your eligibility and the car you want in one conversation." },
  { n: "02", title: "Get approved", desc: "Upload your licence, ID and rideshare profile. Most drivers are approved within a few hours." },
  { n: "03", title: "Pick up", desc: "Collect from our depot or have the car delivered. We add the vehicle to your Uber or DiDi account with you." },
  { n: "04", title: "Start earning", desc: "Drive from day one. Weekly payments, 24/7 roadside support and a swap car if anything goes wrong." },
];

export const requirements = [
  "Full Australian driver licence held 12+ months",
  "Aged 21 or over",
  "State rideshare or passenger transport accreditation (we can guide you)",
  "Active or pending Uber, DiDi or Ola driver account",
  "Australian bank account and proof of address",
  "Refundable bond (varies by vehicle)",
];

export function validPhone(p: string): boolean {
  return /^(\+?61|0)[2-478](\s?\d){8}$/.test(p.replace(/[-()]/g, ""));
}
