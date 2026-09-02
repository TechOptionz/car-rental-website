import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import ServicesPreview from "@/components/home/ServicesPreview";
import HowItWorksPreview from "@/components/home/HowItWorksPreview";
import FleetPreview from "@/components/home/FleetPreview";
import Testimonials from "@/components/home/Testimonials";
import AreasFaq from "@/components/home/AreasFaq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <HowItWorksPreview />
      <FleetPreview />
      <Testimonials />
      <AreasFaq />
    </>
  );
}
