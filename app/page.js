import Hero from "@/components/home/Hero";
import SocialProof from "@/components/home/SocialProof";
import Services from "@/components/home/Services";
import Metrics from "@/components/home/Metrics";
import Process from "@/components/home/Process";
import CTASection from "@/components/home/CTASection";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Services />
      <Metrics />
      <Process />
      <CTASection />
      <Contact />
    </>
  );
}
