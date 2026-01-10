import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
// import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0118] text-white overflow-x-hidden">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <StatsSection />
      <div id="services">
        <ServicesSection />
      </div>
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      {/* <CTASection /> */}
      <Footer />
    </div>
  );
}