import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import HeroSection from './components/user/HeroSerction';
import ServiceSection from './components/user/ServiceSection';
import WorkGallerySection from './components/user/WorkGallery';
import ReviewSection from './components/user/ReviewSection';
import OffersSection from './components/user/OffersSection';
import AboutSection from './components/user/AboutSection';


import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Wrench,
} from 'lucide-react';


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


  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', phone: '', message: '' });
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
      <WorkGallerySection
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
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-red-500">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Visit us or reach out for a free consultation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+91 98765 43210</p>
                    <p className="text-gray-400">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500 rounded-lg">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      Click to chat with us
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">info@autoelite.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Address</h3>
                    <p className="text-gray-400">
                      123 Auto Street, Car Plaza,
                      <br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-400">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-400">Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-8 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9087095394845!2d72.8776594!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63aceef0e69%3A0x2aa80cf2287dfa3b!2sJuhu%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Wrench className="w-8 h-8 text-red-500" />
                <span className="ml-2 text-xl font-bold">
                  <span className="text-white">Auto</span>
                  <span className="text-red-500">Elite</span>
                </span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for premium car accessories and customization services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-red-500 transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-red-500 transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-red-500 transition-colors">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-red-500 transition-colors">
                    Gallery
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Saturday</li>
                <li>9:00 AM - 8:00 PM</li>
                <li className="pt-2">Sunday</li>
                <li>10:00 AM - 6:00 PM</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-800 rounded-lg hover:bg-red-500 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-800 rounded-lg hover:bg-red-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-800 rounded-lg hover:bg-red-500 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Auto Head. All rights reserved. | Designed with passion for automotive excellence</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 animate-bounce"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
