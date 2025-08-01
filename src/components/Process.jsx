import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const steps = [
  {
    step: "01",
    title: "Initial Contact",
    description: "Reach out via phone, email, or our contact form to initiate the process.",
    icon: "📞"
  },
  {
    step: "02",
    title: "Assessment Scheduling",
    description: "We coordinate a convenient time for our expert to visit the site.",
    icon: "📅"
  },
  {
    step: "03",
    title: "Detailed Inspection",
    description: "Our certified surveyors conduct a thorough, impartial evaluation.",
    icon: "🔍"
  },
  {
    step: "04",
    title: "Comprehensive Report",
    description: "You receive a detailed, defensible report with photographic evidence.",
    icon: "📄"
  }
];

const Process = () => {
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Process</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A streamlined approach to accurate, fair assessments
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 'tween', index * 0.1 + 0.2, 1)}
                className={`relative ${index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left md:col-start-2'}`}
              >
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
                  <div className="flex md:inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <div className="absolute hidden md:block top-6 -ml-3.5 left-1/2 w-7 h-7 bg-primary rounded-full transform -translate-x-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;