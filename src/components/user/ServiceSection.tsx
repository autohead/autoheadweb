
import {
    Shield,
    Volume2,
    Disc,
    Armchair,
    Paintbrush,
    CreditCard,
    Sun,
    Sticker,
    Droplet,
} from 'lucide-react';
import { motion } from 'motion/react';

export default function ServiceSection() {
    const services = [
        {
            icon: Shield,
            title: 'Car Security System',
            description: 'Advanced security solutions including alarms, GPS tracking, and immobilizers to keep your vehicle safe.',
        },
        {
            icon: Volume2,
            title: 'Car Audio System Installation',
            description: 'Premium sound systems with professional installation for the ultimate driving experience.',
        },
        {
            icon: Disc,
            title: 'Alloy Wheels & Wheel Caps',
            description: 'Stylish alloy wheels and premium wheel caps to enhance your car\'s appearance.',
        },
        {
            icon: Armchair,
            title: 'Leather Seat Fitting',
            description: 'Luxury leather seat covers and fitting for maximum comfort and elegance.',
        },
        {
            icon: Paintbrush,
            title: 'Paint & Denting Work',
            description: 'Expert paint jobs and dent repair to restore your vehicle to pristine condition.',
        },
        {
            icon: CreditCard,
            title: 'Custom Number Plates',
            description: 'Personalized and stylish number plates to make your car stand out.',
        },
        {
            icon: Sun,
            title: 'Sun Control Films',
            description: 'High-quality window tinting for UV protection and enhanced privacy.',
        },
        {
            icon: Sticker,
            title: 'Car Sticker Work',
            description: 'Custom vinyl wraps and stickers for unique car customization.',
        },
        {
            icon: Droplet,
            title: 'Paint Protective Vehicle Body Coating',
            description: 'Advanced ceramic coating to protect your car\'s paint from scratches and weather.',
        },
        {
            icon: Shield,
            title: 'Under Body Coating',
            description: 'Rust protection and under-body coating for long-lasting vehicle health.',
        },
        {
            icon: Droplet,
            title: 'Teflon Coating',
            description: 'Premium Teflon coating for superior shine and paint protection.',
        },
    ];

    return (
        <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-red-500">Services</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive car customization and accessory installation services
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-red-500 transition-all duration-300 group hover:shadow-xl hover:shadow-red-500/20"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-red-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
}