import { motion } from 'motion/react';


type OffersSectionProps = {
  scrollToSection: (sectionId: string) => void
}
export default function OffersSection({ scrollToSection }: OffersSectionProps) {
    const offers = [
    {
      title: 'Ceramic Coating Special',
      discount: '20% OFF',
      description: 'Premium ceramic coating at discounted prices this month',
      badge: 'Limited Time',
    },
    {
      title: 'Audio System Package',
      discount: '15% OFF',
      description: 'Complete audio system installation with premium speakers',
      badge: 'Popular',
    },
    {
      title: 'Complete Makeover',
      discount: '25% OFF',
      description: 'Full car customization package including wrap, wheels & interior',
      badge: 'Best Value',
    },
  ];

    return (
        <section id="offers" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Special <span className="text-red-500">Offers</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Limited time offers on premium car customization services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-red-500 to-red-700 p-8 rounded-lg overflow-hidden group hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 bg-white text-red-500 px-3 py-1 rounded-full text-sm font-bold">
                  {offer.badge}
                </div>
                <div className="text-6xl font-bold mb-2">{offer.discount}</div>
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <p className="text-white/90 mb-6">{offer.description}</p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get This Offer
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
}