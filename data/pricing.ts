export interface Plan {
  name: string;
  price: string;
  desc: string;
  points: string[];
  bg: string;
  color: string;
  btnBg: string;
  btnColor: string;
  popular?: boolean;
}

export const plans: Plan[] = [
  { name: "Flexible weekly", price: "$259", desc: "Rolling weekly. Return with 7 days notice.", points: ["All insurance and rego included", "Servicing and roadside assist", "Swap car if yours is off the road", "No exit fees"], bg: "#fff", color: "#005C46", btnBg: "#005C46", btnColor: "#fff" },
  { name: "4-week plan", price: "$239", desc: "Commit to four weeks and save.", points: ["Everything in Flexible", "Lower weekly rate", "Priority vehicle choice", "Reduced bond"], bg: "#005C46", color: "#fff", btnBg: "#fff", btnColor: "#005C46", popular: true },
  { name: "12-week plan", price: "$219", desc: "Our lowest rate for committed full-time drivers.", points: ["Everything in 4-week", "Save up to 15%", "Holiday pause option", "Free vehicle upgrade after 12 weeks"], bg: "#fff", color: "#005C46", btnBg: "#005C46", btnColor: "#fff" },
];

export const included = [
  { title: "Comprehensive insurance", desc: "Rideshare and delivery use covered. Excess applies to at-fault claims." },
  { title: "Registration and CTP", desc: "Always current. Nothing for you to renew." },
  { title: "Servicing and tyres", desc: "Scheduled maintenance handled by us. We book around your shifts." },
  { title: "24/7 roadside assistance", desc: "One number, any hour. Replacement car arranged if needed." },
  { title: "Platform paperwork", desc: "Inspection reports and vehicle documents supplied for Uber, DiDi and Ola." },
  { title: "Weekly tax invoices", desc: "Emailed automatically so your rental costs are easy to claim." },
];
