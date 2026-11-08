import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import PortfolioGrid from "@/components/PortfolioGrid";
import VisualShowcase from "@/components/VisualShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal text-ivory">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <PortfolioGrid />
      <VisualShowcase />
      <AboutSection />
      <ProcessTimeline />
      <Testimonials />
      <ContactSection />
      <Suspense
        fallback={
          <footer className="bg-charcoal border-t border-white/10 text-ivory pt-20 pb-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
                <p>© Noockie Graphics. All rights reserved.</p>
                <span>Crafted with precision in Nairobi, Kenya</span>
              </div>
            </div>
          </footer>
        }
      >
        <Footer />
      </Suspense>
      <WhatsAppFloat />
    </main>
  );
}