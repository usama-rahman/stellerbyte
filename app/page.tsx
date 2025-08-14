import HeroSection from "./components/hero-section";
import TestimonialSection from "./components/testimonial";
import ServiceSection from "./components/service";
import WorkSection from "./components/work";
import FooterSection from "./components/footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <WorkSection />
      <TestimonialSection />
      <FooterSection />
    </div>
  );
}
