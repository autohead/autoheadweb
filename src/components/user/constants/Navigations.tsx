

interface NavigationsProps {
  scrollToSection: (id: string) => void;
}

export default function Navigations({ scrollToSection }: NavigationsProps) {

    return (
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
    )
}