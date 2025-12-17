import { motion } from "framer-motion";
import { Award, GraduationCap, Stethoscope, BookOpen } from "lucide-react";

const credentials = [
  { icon: GraduationCap, text: "MBBS, MD, DNB, FIAPM, MIAPC, CIPS (USA)" },
  { icon: Award, text: "22+ Years Of Experience" },
  { icon: Stethoscope, text: "Licence No. 2003/07/2727-MMC" },
];

const highlights = [
  {
    icon: Award,
    title: "Harvard Trained",
    description: "Advanced training from Harvard Medical School & University of Washington",
  },
  {
    icon: BookOpen,
    title: "Program Head",
    description: "Fellowship in Pain Medicine (IAPM) Program Director",
  },
  {
    icon: Stethoscope,
    title: "CIPS Certified",
    description: "Certified Interventional Pain Sonologist from USA",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-teal-light text-teal text-sm font-medium rounded-full mb-4">
            About Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Dr. Navita Purohit Vyas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pioneering Advanced Pain Management and Neurorehabilitation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-light to-mint rounded-3xl transform rotate-3" />
              
              {/* Main image */}
              <div className="relative bg-card rounded-3xl overflow-hidden shadow-card">
                <img
                  src="https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/DOCPHOTO_1229.png"
                  alt="Dr. Navita Purohit Vyas"
                  className="w-full h-auto"
                />
              </div>

              {/* Credentials card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-card border border-border max-w-xs"
              >
                <div className="space-y-3">
                  {credentials.map((cred, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-teal-light flex items-center justify-center flex-shrink-0">
                        <cred.icon className="w-4 h-4 text-teal" />
                      </div>
                      <span className="text-sm text-muted-foreground">{cred.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Dr. Navita Purohit Vyas is a distinguished expert in Rehabilitation Medicine, 
                specializing in Pain Management and Palliative Care at Kokilaben Dhirubhai 
                Ambani Hospital, Mumbai. She is dedicated to providing advanced, evidence-based 
                pain relief solutions for patients with chronic pain conditions, cancer-related 
                pain, and complex musculoskeletal disorders.
              </p>
              <p>
                Her expertise spans interventional pain procedures using ultrasound and 
                fluoroscopic guidance, including transforaminal epidural injections, facet 
                joint blocks, sympathetic plexus blocks, and radiofrequency ablation. She is 
                highly skilled in treating neuropathic pain, myofascial pain syndromes, and 
                degenerative spine disorders.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid gap-4 pt-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-secondary rounded-xl hover:bg-teal-light/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
