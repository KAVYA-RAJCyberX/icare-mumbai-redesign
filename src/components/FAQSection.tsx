import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Dr. Navita Purohit Vyas's expertise in pain and palliative medicine?",
    answer: "Dr. Navita Purohit Vyas is a highly esteemed Pain and Palliative Medicine Specialist in Mumbai with over 22 years of experience. She excels in Interventional Pain Management, having pioneered radiation-free ultrasound-guided techniques in India. Her expertise encompasses spine pain, chronic pelvic pain, cancer pain, fibromyalgia, osteoarthritis, and neurorehabilitation for stroke, brain, and spinal cord injuries. Additionally, she's skilled in regenerative medicine techniques like platelet-rich plasma therapy for treating degenerative conditions and sports injuries.",
  },
  {
    question: "How has Dr. Navita Purohit Vyas contributed to the field of pain management education?",
    answer: "Dr. Navita Purohit Vyas is a dedicated educator, having significantly contributed to pain management education in India. She is the Program Head for the Fellowship in Pain Management (IAPM) and serves as the Director of Ultrasound-Guided Interventional Pain Management programs. Her role involves mentoring and training professionals across India. Recognized as an international faculty, she presents at global platforms and actively engages with prestigious bodies like IAPMR, IASP, and ISSP.",
  },
  {
    question: "What is Ultrasound-Guided Interventional Pain Management?",
    answer: "Ultrasound-Guided Interventional Pain Management is a technique used to enhance the accuracy and efficacy of pain relief treatments. By using ultrasound imaging to guide precise injections of medications directly into the pain source, it minimizes risks and improves treatment outcomes. This approach is particularly beneficial for conditions like chronic joint, muscle pain, and nerve-related issues, providing targeted relief with minimal side effects.",
  },
  {
    question: "How does Regenerative Medicine with PRP Injections work?",
    answer: "Regenerative Medicine with PRP Injections involves extracting platelets from a patient's blood and injecting them into damaged tissues to promote healing. This therapy stimulates the body's natural healing processes and is used to treat joint and muscle injuries, tendonitis, and degenerative joint conditions. PRP therapy aims to reduce pain and improve function by accelerating tissue repair and regeneration, offering a non-surgical option for pain management.",
  },
  {
    question: "What treatments are available for Chronic Back and Neck Pain?",
    answer: "Chronic back and neck pain can be debilitating, but there are several treatment options available. These include physical therapy, manual therapy, medication management, and in some cases, minimally invasive procedures like Ultrasound-Guided Interventions. For persistent cases, interventional techniques such as epidural injections, facet joint injections, or regenerative PRP injections may be recommended to relieve symptoms and improve mobility.",
  },
  {
    question: "How is Chronic Pelvic Pain treated in pain management?",
    answer: "Chronic Pelvic Pain is a complex condition that requires a comprehensive approach for effective management. Treatment options may include medication management, physical therapy, and targeted interventions such as nerve blocks or Ultrasound-Guided Injections. Addressing underlying causes like endometriosis, interstitial cystitis, or musculoskeletal issues is key. An interdisciplinary approach ensures holistic care, focusing on long-term relief and quality of life improvement.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-teal-light text-teal text-sm font-medium rounded-full mb-4">
            FAQs
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services and treatments
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-card data-[state=open]:shadow-card-hover transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-medium text-foreground hover:text-teal py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
