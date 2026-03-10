
import { Facebook, Instagram, Twitter, Wrench } from "lucide-react";

interface FooterProps {
    scrollToSection: (sectionId: string) => void;
}
export default function FooterSection({ scrollToSection }: FooterProps) {

    return (
        <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Wrench className="w-8 h-8 text-red-500" />
                <span className="ml-2 text-xl font-bold">
                  <span className="text-white">Auto</span>
                  <span className="text-red-500">Head</span>
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
                <li>10:00 AM - 8:30 PM</li>
                {/* <li className="pt-2">Sunday</li>
                <li>10:00 AM - 6:00 PM</li> */}
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
    )
}