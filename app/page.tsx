import HeroSection from "./components/hero-section";
import TestimonialSection from "./components/testimonial";
import ServiceSection from "./components/service";
import WorkSection from "./components/work";
import FooterSection from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <WorkSection />
      <TestimonialSection />
      <FooterSection />
    </div>
  );
}
