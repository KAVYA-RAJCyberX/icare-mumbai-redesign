import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    name: "Post-Stroke Shoulder Pain",
    image: "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SERVICEPHOTO_ID_10870_CID_918.png",
    description: "Specialized treatment for shoulder pain following stroke, improving mobility and reducing discomfort.",
  },
  {
    name: "Spasticity Management",
    image: "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SERVICEPHOTO_ID_10869_CID_918.png",
    description: "Expert management of muscle stiffness and spasms through targeted interventions.",
  },
  {
    name: "Cancer Pain",
    image: "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SERVICEPHOTO_ID_10868_CID_918.png",
    description: "Comprehensive pain relief for cancer patients, enhancing quality of life during treatment.",
  },
  {
    name: "USG-Guided Pain Management",
    image: "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SERVICEPHOTO_ID_10295_CID_918_Ultrasound-Guided%20Interventional%20Pain%20Management.png",
    description: "Precise, radiation-free ultrasound-guided interventional procedures for accurate pain relief.",
  },
  {
    name: "Regenerative Medicine (PRP)",
    image: "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SERVICEPHOTO_ID_10296_CID_918.png",
    description: "Platelet-Rich Plasma therapy to stimulate natural healing and tissue regeneration.",
  },
  {
    name: "Spine Pain: Back & Neck",
    image: "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SERVICEPHOTO_ID_10297_CID_918.png",
    description: "Advanced treatment for chronic back and neck pain using minimally invasive techniques.",
  },
  {
    name: "Chronic Pelvic Pain",
    image: "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SERVICEPHOTO_ID_10298_CID_918.png",
    description: "Comprehensive approach to managing persistent pelvic pain conditions.",
  },
  {
    name: "Joint & Muscle Injuries",
    image: "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SERVICEPHOTO_ID_10299_CID_918.png",
    description: "Expert care for sports injuries, arthritis, and musculoskeletal conditions.",
  },
  {
    name: "Headache & Migraine",
    image: "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SERVICEPHOTO_ID_10300_CID_918.png",
    description: "Specialized treatment protocols for chronic headaches and migraine management.",
  },
  {
    name: "Neuropathic Pain Relief",
    image: "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SERVICEPHOTO_ID_10301_CID_918.png",
    description: "Advanced interventions for nerve-related pain conditions including diabetic neuropathy.",
  },
  {
    name: "Myofascial Pain Therapy",
    image: "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SERVICEPHOTO_ID_10302_CID_918.png",
    description: "Targeted treatment for trigger points and muscle pain syndromes.",
  },
  {
    name: "Fibromyalgia Care",
    image: "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SERVICEPHOTO_ID_10303_CID_918.png",
    description: "Holistic management of fibromyalgia with multimodal treatment approaches.",
  },
  {
    name: "Osteoarthritis Management",
    image: "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SERVICEPHOTO_ID_10304_CID_918.png",
    description: "Comprehensive care for degenerative joint conditions to improve mobility.",
  },
  {
    name: "Palliative Care",
    image: "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SERVICEPHOTO_ID_10867_CID_918.png",
    description: "Compassionate end-of-life care focusing on comfort and quality of life.",
  },
  {
    name: "Neurorehabilitation",
    image: "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SERVICEPHOTO_ID_10307_CID_918.png",
    description: "Recovery programs for stroke, brain, and spinal cord injuries.",
  },
  {
    name: "End-of-Life Support",
    image: "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/SERVICEPHOTO_ID_10306_CID_918.png",
    description: "Holistic support for patients and families during challenging times.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-teal-light text-teal text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Healthcare Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive, Non-Invasive Solutions for Chronic Pain, Recovery, and Wellness
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-teal transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-medium text-teal group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
