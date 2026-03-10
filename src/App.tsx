import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import HeroSection from './components/user/HeroSerction';
import ServiceSection from './components/user/ServiceSection';
import ProductGallery from './components/user/ProductGallery';
import ReviewSection from './components/user/ReviewSection';
import OffersSection from './components/user/OffersSection';
import AboutSection from './components/user/AboutSection';


import {
  Menu,
  X,
  Wrench,
} from 'lucide-react';
import WhatsAppFloating from './components/user/WhatsAppFloating';
import FooterSection from './components/user/FooterSection';
import ContactSection from './components/user/ContactSection';


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };


  
  

  return (
    <div className="bg-black text-white">
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-red-500/10' : 'bg-transparent'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Wrench className="w-8 h-8 text-red-500" />
              <span className="ml-2 text-xl font-bold">
                <span className="text-white">Auto</span>
                <span className="text-red-500">Head</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-red-500 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-red-500 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="hover:text-red-500 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-red-500 transition-colors">
                Gallery
              </button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-red-500 transition-colors">
                Reviews
              </button>
              <button onClick={() => scrollToSection('offers')} className="hover:text-red-500 transition-colors">
                Offers
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-red-500 transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-red-500 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-red-500/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left py-2 hover:text-red-500 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-2 hover:text-red-500 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left py-2 hover:text-red-500 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left py-2 hover:text-red-500 transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="block w-full text-left py-2 hover:text-red-500 transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('offers')}
                className="block w-full text-left py-2 hover:text-red-500 transition-colors"
              >
                Offers
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-2 hover:text-red-500 transition-colors"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* About Us Section */}
      <AboutSection />

      {/* Services Section */}
      <ServiceSection />

      {/* Gallery Section */}
      <ProductGallery
        isLightboxOpen={lightboxImage !== null}
        setLightboxImage={setLightboxImage}
      />

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img src={lightboxImage} alt="Gallery" className="max-w-full max-h-full object-contain rounded-lg" />
        </div>
      )}

      {/* Reviews Section */}
      <ReviewSection />

      {/* Special Offers Section */}
      <OffersSection scrollToSection={scrollToSection} />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <FooterSection scrollToSection={scrollToSection} />

      {/* WhatsApp Floating Button */}
      <WhatsAppFloating />
    </div>
  );
}
