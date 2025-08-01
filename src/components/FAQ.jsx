import { useState } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const faqs = [
  {
    question: "How quickly can you conduct an assessment?",
    answer: "We typically schedule assessments within 24-48 hours of your request, depending on location and availability. Emergency cases can often be accommodated same-day."
  },
  {
    question: "What makes your assessments different?",
    answer: "Our reports are known for their thoroughness, impartiality, and defensibility. We combine technical expertise with clear communication to create reports that stand up to scrutiny."
  },
  {
    question: "Do you work directly with policyholders?",
    answer: "Yes, we serve both insurance companies and individual policyholders. For individuals, we provide independent assessments to help ensure fair treatment in the claims process."
  },
  {
    question: "What types of claims do you handle?",
    answer: "We specialize in property damage assessments (fire, water, storm), vehicle damage, cargo claims, and business interruption evaluations. Contact us to discuss your specific needs."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeIn('up', 'tween', 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quick answers to common questions about our services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 'tween', index * 0.1 + 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mb-4 border-b border-gray-200 pb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-primary transition-colors"
              >
                <span className="text-lg">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;