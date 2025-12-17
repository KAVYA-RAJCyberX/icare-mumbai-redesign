import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SLIDERIMAGE_1753699113788918.jpeg",
  "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SLIDERIMAGE_1736137508712918.png",
  "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SLIDERIMAGE_1736137502612918.png",
  "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SLIDERIMAGE_1736137493211918.png",
  "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SLIDERIMAGE_1736137498152918.png",
  "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SLIDERIMAGE_1736100942953918.png",
  "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SLIDERIMAGE_1736100952089918.png",
  "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SLIDERIMAGE_1736100958063918.png",
  "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SLIDERIMAGE_1736100968982918.png",
  "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SLIDERIMAGE_1736100992128918.png",
  "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SLIDERIMAGE_1736101016600918.png",
  "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SLIDERIMAGE_1736101026486918.png",
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-teal-light text-teal text-sm font-medium rounded-full mb-4">
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Media Pictures
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our clinic and treatment facilities
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-teal/0 group-hover:bg-teal/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            <button
              className="absolute left-4 p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={galleryImages[selectedImage]}
              alt={`Gallery image ${selectedImage + 1}`}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-4 p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
