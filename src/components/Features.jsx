import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";


const clients = [
  {
    name: "Insurance Companies",
    description: "We support leading insurers with detailed, defensible surveys that speed up settlements."
  },
  {
    name: "Policyholders & Individuals",
    description: "We act as your trusted assessor, providing independent reports to help you get the settlement you deserve."
  },
  {
    name: "Businesses",
    description: "We conduct pre-risk inspections and damage assessments for properties, vehicles, warehouses, cargo, and more."
  }
];

const aspirations = [
  {
    title: "Industry Innovators",
    description: "To pioneer new standards in claims assessment through technology and expertise.",
    icon: "🚀"
  },
  {
    title: "Trusted Partners",
    description: "To be the most reliable partner for both insurers and policyholders in the claims process.",
    icon: "🤝"
  },
  {
    title: "Global Reach",
    description: "To expand our services worldwide while maintaining local expertise and personal touch.",
    icon: "🌎"
  }
];

const expectations = [
  {
    title: "Excellence",
    description: "We expect the highest standards in every assessment we deliver.",
    icon: "⭐"
  },
  {
    title: "Integrity",
    description: "We maintain complete transparency and honesty in all our dealings.",
    icon: "🔍"
  },
  {
    title: "Innovation",
    description: "We continuously seek better ways to serve our clients through technology.",
    icon: "💡"
  }
];

const focusAreas = [
  {
    title: "Customer Experience",
    description: "Simplifying the claims process for all parties involved.",
    icon: "👥"
  },
  {
    title: "Technology",
    description: "Leveraging AI and data analytics for more accurate assessments.",
    icon: "🤖"
  },
  {
    title: "Sustainability",
    description: "Promoting environmentally responsible claims solutions.",
    icon: "🌱"
  }
];

const Features = () => {
  return (
    <div className="bg-white">     

      {/* Who We Serve Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeIn('up', 'tween', 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Serve</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by industry leaders and individuals alike for professional assessment services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div 
                key={index}
                variants={fadeIn('up', 'tween', index * 0.1 + 0.2, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-800">{client.name}</h3>
                </div>
                <p className="text-gray-600 pl-7">{client.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Aspirations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeIn('up', 'tween', 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Aspire To Become</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our vision for the future and the impact we want to make in the industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aspirations.map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeIn('up', 'tween', index * 0.1 + 0.2, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expectations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeIn('up', 'tween', 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Expect</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The standards we uphold in every aspect of our work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expectations.map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeIn('up', 'tween', index * 0.1 + 0.2, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Focus Areas Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeIn('up', 'tween', 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Where We Focus</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The key areas that drive our strategy and operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeIn('up', 'tween', index * 0.1 + 0.2, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gray-100 py-12"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3 
            variants={fadeIn('up', 'tween', 0.1, 1)}
            className="text-2xl font-bold text-gray-800 mb-4"
          >
            Join Us in Transforming the Insurance Claims Process
          </motion.h3>
          <motion.p 
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-6"
          >
            With precision, integrity, and innovation at our core
          </motion.p>
          <motion.button
            variants={fadeIn('up', 'tween', 0.3, 1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-lg transition duration-300"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;