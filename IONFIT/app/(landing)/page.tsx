import Hero from "@/components/Hero";
import Beneficios from "@/components/Beneficios";
import ComoFunciona from "@/components/ComoFunciona";
import Testimonios from "@/components/Testimonios";
import Precios from "@/components/Precios";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <Beneficios />
      <ComoFunciona />
      <Testimonios />
      <Precios />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
