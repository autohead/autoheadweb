import { motion } from "motion/react"
import { Star } from "lucide-react"

export default function ReviewSection() {

    const reviews = [
    {
      name: 'Rajesh Kumar',
      rating: 5,
      review: 'Excellent service! They installed a premium audio system in my car. The sound quality is amazing and the team was very professional.',
    },
    {
      name: 'Priya Sharma',
      rating: 5,
      review: 'Best place for car customization! Got my car wrapped and the result is stunning. Highly recommend their services.',
    },
    {
      name: 'Amit Patel',
      rating: 5,
      review: 'Very satisfied with the Teflon coating service. My car looks brand new and the shine is incredible. Great work!',
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      review: 'Professional team with quality work. The leather seat fitting was done perfectly. Will definitely come back for more services.',
    },
  ];

    return (
        <section id="reviews" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Customer <span className="text-red-500">Reviews</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              What our satisfied customers say about our services
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-red-500 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-red-500 fill-red-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{review.review}"</p>
                <p className="text-white font-semibold">- {review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
}