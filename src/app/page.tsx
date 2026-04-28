import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ProductGrid } from "@/components/home/ProductGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <Hero />
      <AboutSection />
      <ProductGrid />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </div>
  );
}
