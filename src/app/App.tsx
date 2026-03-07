import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollIndicator } from './components/ScrollIndicator';
import { PromoBanner } from './components/PromoBanner';
import { QuickLinksSection } from './components/QuickLinksSection';
// Legal Pages
import Privacy from './components/Privacy';
import TermsService from './components/TermsService';
import Cookie from './components/Cookie';
import Disclaimer from './components/Disclaimer';

function Home() {
  return (
    <div className="relative min-h-screen">
      
      {/* FIXED BACKGROUND IMAGE - Only for Home */}
      <div 
        className="fixed inset-0 -z-50 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://imgs.search.brave.com/9kJAEjHfvCU0cf73hPMdush78DkImswESOHFYu9-3l0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMjE1/OTUxMC5qcGc')`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover'
        }}
      />

      {/* DARK OVERLAY - Only for Home */}
      <div className="fixed inset-0 -z-40 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />
    <QuickLinksSection /> 
      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <div className="relative z-20">
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      {/* Promo Banner - Add here outside Routes */}
      <PromoBanner />
      
      {/* Scroll Indicator - Add here outside Routes */}
      <ScrollIndicator />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<TermsService />} />
        <Route path="/cookies" element={<Cookie />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </Router>
  );
}

export default App;
