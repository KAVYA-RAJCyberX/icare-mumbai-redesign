import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroSlides = [
  {
    title: "Because Every Life Deserves Comfort and Dignity",
    subtitle: "Comprehensive Pain and Palliative Care for a Better Quality of Life",
    image: "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/918/health-package/Because%20Every%20Life%20Deserves%20Comfort%20and%20Dignity.png",
  },
];

const stats = [
  { icon: Star, value: "22+", label: "Years of Experience" },
  { icon: Activity, value: "4K+", label: "PRP Injections" },
  { icon: Users, value: "10K+", label: "Ultrasound Procedures" },
];

export const HeroSection = () => {
  const scrollToAppointment = () => {
    const element = document.querySelector("#appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-hero-gradient overflow-hidden pt-32">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-teal-light/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-mint/50 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-teal-light rounded-full"
              >
                <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                <span className="text-sm font-medium text-teal-dark">Pain Management Specialist</span>
              </motion.div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {heroSlides[0].title.split(" ").slice(0, 3).join(" ")}{" "}
                <span className="text-gradient">
                  {heroSlides[0].title.split(" ").slice(3).join(" ")}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                {heroSlides[0].subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" onClick={scrollToAppointment}>
                Book an Appointment
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl"
                onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-teal" />
                    </div>
                  </div>
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-teal-light rounded-full blur-2xl opacity-60" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-mint rounded-full blur-2xl opacity-60" />
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-teal-light to-mint rounded-3xl p-2 shadow-glow">
                <img
                  src={heroSlides[0].image}
                  alt="Dr. Navita Purohit Vyas"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-card border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center">
                    <Star className="w-6 h-6 text-teal fill-current" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground">Expert Care</div>
                    <div className="text-sm text-muted-foreground">Harvard Trained</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};
