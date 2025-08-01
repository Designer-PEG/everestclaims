import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const CTA = () => {
  // Contact information
  const contactInfo = {
    phone: "+977-9851135421",
    email: "everestclaims8848@gmail.com",
    address: "Tinkune, Kathmandu"
  };

  // Button handlers
  const handleCallClick = () => {
    window.location.href = `tel:${contactInfo.phone.replace(/-/g, '')}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const handleAddressClick = () => {
    window.open(`https://maps.google.com?q=${encodeURIComponent(contactInfo.address)}`, '_blank');
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-blue-700 to-blue-800 py-12 md:py-16 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">

          {/* CTA Column */}
          <motion.div 
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="lg:w-2/3 flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready for a Professional Assessment?
            </h3>
            <div className="w-16 h-1 bg-green-400 mx-auto mb-6"></div>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Our certified surveyors provide accurate, impartial evaluations with quick turnaround times.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCallClick}
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <PhoneIcon className="w-5 h-5" />
                Call Now
              </motion.button>
              
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEmailClick}
                className="flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-blue-800 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <EnvelopeIcon className="w-5 h-5" />
                Email Us
              </motion.button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-sm text-blue-100">24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <span className="text-sm text-blue-100">Emergency Services</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-sm text-blue-100">Local Experts</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTA;