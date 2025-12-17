import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Deepa Chandran",
    review: "I consulted Dr Purohit for pain management. I had a detailed consultation with her Assistant doctor who very patiently took down all the details and did the physical exams. Dr Purohit was empathetic and clear with the issues I was facing and chalked out a clear plan of action. I am sure I will be in a happy place pain wise soon. Thank you very much",
    rating: 5,
  },
  {
    name: "Chetna Vasant Bhanushali",
    review: "We are admitted in Kokilaben Hospital and we were treated well here. We got the answer right. Our problem was explained to us very nicely by Dr. Navita Purohit and diagnosed nicely. We are happy with our diagnosis. Thank you",
    rating: 5,
  },
  {
    name: "Mr. Priyanshu Jaiswal",
    review: "Really satisfied with the treatment, care and support of Dr Navita. Good care and empathy by Sister Susy in the day care.",
    rating: 5,
  },
  {
    name: "Mrs. Sujata Dattatray Desai",
    review: "Overall experience is very good. Doctor Navita Vyas is a wonderful person as well as very kind and Dr Sophya is also very helpful, I'm happy for treatment.",
    rating: 5,
  },
  {
    name: "Mr. Bhavesh Premji Dedhia",
    review: "Dr. Pardiwala initially checked me and referred to Dr Navita Vyas. She did my surgery and was superb. Sister Susy and other nursing staff were also helpful. This all was not possible with the great help of Dr. Santosh Shetty. Thanks to all really you are saviours of many lives.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-teal-light text-teal text-sm font-medium rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real patients who found relief and comfort
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-3xl p-8 md:p-12 shadow-card relative overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-24 h-24 text-teal" />
              </div>

              {/* Content */}
              <div className="relative space-y-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-coral fill-current" />
                  ))}
                </div>

                {/* Review */}
                <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
                  "{testimonials[currentIndex].review}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center">
                    <span className="text-primary-foreground font-display font-bold text-xl">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-muted-foreground">Patient</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-teal w-8"
                      : "bg-muted hover:bg-teal/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
