import { motion } from 'motion/react';
import { Award, Users, CheckCircle } from 'lucide-react';
import bg from '../../assets/AUTOHEADLOGO.jpeg';
export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-red-500">Auto Head</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Welcome to Auto Head, your premier destination for car accessories and professional customization
                services. we pride ourselves on delivering
                exceptional quality and customer satisfaction.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Our team of skilled technicians specializes in transforming ordinary vehicles into extraordinary
                machines. From basic accessories to complete custom makeovers, we handle every project with precision
                and care.
              </p>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Award className="w-12 h-12 text-red-500" />
                  </div>
                  <div className="text-3xl font-bold text-red-500">100+</div>
                  <div className="text-sm text-gray-400">Quality Products</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="w-12 h-12 text-red-500" />
                  </div>
                  <div className="text-3xl font-bold text-red-500">200+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <CheckCircle className="w-12 h-12 text-red-500" />
                  </div>
                  <div className="text-3xl font-bold text-red-500">100%</div>
                  <div className="text-sm text-gray-400">Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={bg}
                alt="Workshop"
                className="rounded-lg shadow-2xl shadow-red-500/20"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-500 text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">Expert</div>
                <div className="text-sm">Installation</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    )
}