
type MobileMenuProps = {
    scrollToSection: (sectionId: string) => void
}
export default function MobileMenu({ scrollToSection }: MobileMenuProps) {

    return (
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
    )
}