import { motion } from 'motion/react';

type GalleryProps = {
  isLightboxOpen: boolean
  setLightboxImage: (img: string | null) => void
}
export default function WorkGallerySection({  setLightboxImage }: GalleryProps) {
    const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1765173330859-b2c2bd78a174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2RpZmllZCUyMHNwb3J0cyUyMGNhciUyMHJlZCUyMGxpZ2h0c3xlbnwxfHx8fDE3NzMxMzcxODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Modified Sports Car' },
    { url: 'https://images.unsplash.com/photo-1661336878277-1d0078e7b3e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMGxlYXRoZXJ8ZW58MXx8fHwxNzczMTM3MTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Luxury Leather Interior' },
    { url: 'https://images.unsplash.com/photo-1760552974114-a83335352b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBhdWRpbyUyMHN5c3RlbSUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NzMxMzcxODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Car Audio System' },
    { url: 'https://images.unsplash.com/photo-1760689043009-f9ef9b34a5a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBhbGxveSUyMHdoZWVsc3xlbnwxfHx8fDE3NzMxMzcxOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Custom Alloy Wheels' },
    { url: 'https://images.unsplash.com/photo-1719119985161-c3e6837f6478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWxpbmclMjBjb2F0aW5nfGVufDF8fHx8MTc3MzEzNzE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Car Coating' },
    { url: 'https://images.unsplash.com/photo-1643945026095-ab262ab55e4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aW5kb3clMjB0aW50aW5nJTIwZmlsbXxlbnwxfHx8fDE3NzMxMzcxOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Window Tinting' },
    { url: 'https://images.unsplash.com/photo-1708441434479-c765f26d9f54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBjdXN0b21pemF0aW9uJTIwd29ya3Nob3B8ZW58MXx8fHwxNzczMTM3MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Workshop' },
    { url: 'https://images.unsplash.com/photo-1726689265081-3934d85d0367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2RpZmllZCUyMGNhciUyMG5pZ2h0fGVufDF8fHx8MTc3MzEzNzE5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Modified Car Night' },
    { url: 'https://images.unsplash.com/photo-1570762574066-a238075b62f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBwYWludCUyMGpvYiUyMGN1c3RvbXxlbnwxfHx8fDE3NzMxMzcxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Custom Paint' },
    { url: 'https://images.unsplash.com/photo-1758411897888-3ca658535fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzczMTM3MTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Luxury Dashboard' },
    { url: 'https://images.unsplash.com/photo-1651560111117-146a15f36490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjB3aGVlbHMlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3MzEzNzE5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Wheels Close Up' },
    { url: 'https://images.unsplash.com/photo-1751267464812-0bb7764e87f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3cmFwJTIwdmlueWwlMjBzdGlja2VyfGVufDF8fHx8MTc3MzEzNzE5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Car Wrap' },
  ];

  return (
    <section id="gallery" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-red-500">Work Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Browse through our portfolio of custom car modifications and installations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
                onClick={() => setLightboxImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}