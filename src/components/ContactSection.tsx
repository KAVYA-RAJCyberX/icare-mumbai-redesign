import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    lines: [
      "Kokilaben Dhirubhai Ambani Hospital",
      "Rao Saheb Achutrao Patwardhan Marg,",
      "Four Bungalows, Andheri West,",
      "Mumbai, Maharashtra 400053",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["7208844245"],
    href: "tel:7208844245",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["drnavita.nv@gmail.com"],
    href: "mailto:drnavita.nv@gmail.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-teal-light text-teal text-sm font-medium rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? Reach out to us and we'll be happy to help
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.lines.map((line, i) => (
                    info.href && i === 0 ? (
                      <a
                        key={i}
                        href={info.href}
                        className="block text-muted-foreground hover:text-teal transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={i} className="text-muted-foreground text-sm">
                        {line}
                      </p>
                    )
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-card h-[400px] lg:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8577889857693!2d72.82825531490182!3d19.127439987063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sKokilaben%20Dhirubhai%20Ambani%20Hospital!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center">
                <span className="font-display font-bold text-xl">NV</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Dr. Navita Purohit Vyas</h3>
                <p className="text-sm text-primary-foreground/60">Pain & Palliative Medicine</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Dedicated to providing advanced, evidence-based pain relief solutions with over 22 years of experience.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-teal transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-primary-foreground/70 hover:text-teal transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {["Pain Management", "PRP Therapy", "Spine Care", "Cancer Pain", "Neurorehabilitation", "Palliative Care"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-primary-foreground/70 hover:text-teal transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Kokilaben Dhirubhai Ambani Hospital, Andheri West, Mumbai
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal flex-shrink-0" />
                <a href="tel:7208844245" className="text-primary-foreground/70 hover:text-teal transition-colors text-sm">
                  7208844245
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal flex-shrink-0" />
                <a href="mailto:drnavita.nv@gmail.com" className="text-primary-foreground/70 hover:text-teal transition-colors text-sm">
                  drnavita.nv@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Dr. Navita Purohit Vyas. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/50 hover:text-teal transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-teal transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
