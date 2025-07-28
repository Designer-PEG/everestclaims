import React from 'react';
import { motion } from 'framer-motion';
import Suresh from '../assets/img/Suresh.png';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-10"
        >
          <motion.h1 variants={itemVariants} className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Everest Claims and Advisory
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-5 max-w-2xl mx-auto text-xl text-gray-600">
            Bringing accuracy, transparency, and fairness to insurance claims across Nepal
          </motion.p>
        </motion.div>

        {/* Our Story Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white shadow rounded-lg overflow-hidden mb-12"
        >
          <div className="p-6 sm:p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Everest Claims and Advisory Pvt Ltd was founded with a singular mission: to bring accuracy, transparency, and fairness to insurance claims and risk assessment across Nepal. As a licensed insurance surveyor firm, we proudly stand as an independent bridge between insurers and policyholders — ensuring that every claim is settled with clarity and trust.
            </p>
            <p className="text-gray-700">
              Our name is inspired by the towering Himalayan peaks — a symbol of our steadfast commitment, unwavering integrity, and the strength we bring to every case we handle.
            </p>
          </div>
        </motion.div>

        {/* Vision, Mission, Goals */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {/* Vision */}
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
            <div className="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be Nepal's most trusted name in insurance surveying and loss assessment, upholding the highest standards of accuracy, fairness, and ethics.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
            <div className="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To deliver precise, independent survey reports that help insurers and policyholders settle claims with confidence, while advising on risk mitigation to reduce future losses.
            </p>
          </motion.div>

          {/* Goals */}
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
            <div className="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Goals</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Ensure fair, transparent, and timely claim settlements
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Expand trusted surveying services across Nepal
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Advise clients on risk mitigation and loss prevention
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Who We Are */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white shadow rounded-lg overflow-hidden mb-12"
        >
          <div className="p-6 sm:p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Who We Are</h2>
            <p className="text-gray-700 mb-6">
              We are a team of qualified, government-licensed insurance surveyors and loss assessors with deep expertise in motor, property, fire, marine, cargo, and other general insurance claim domains. Our professionals combine local knowledge with proven surveying standards, ensuring each report we produce is factual, timely, and defensible.
            </p>
          </div>
        </motion.div>

        {/* Who We Serve - New Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-white shadow rounded-lg overflow-hidden mb-12"
        >
          <div className="p-6 sm:p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                variants={itemVariants}
                className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </span>
                  Insurance Companies
                </h3>
                <p className="text-gray-600">
                  We support leading insurers with detailed, defensible surveys that speed up settlements while maintaining accuracy and fairness.
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="bg-green-100 text-green-600 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Policyholders & Individuals
                </h3>
                <p className="text-gray-600">
                  We act as your trusted assessor, providing independent reports to help you get the fair settlement you deserve during challenging times.
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="bg-purple-100 text-purple-600 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Businesses
                </h3>
                <p className="text-gray-600">
                  We conduct pre-risk inspections and damage assessments for properties, vehicles, warehouses, cargo, and other business assets.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us - New Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-blue-50 rounded-lg overflow-hidden mb-12"
        >
          <div className="p-6 sm:p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Everest Claims</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Strengths</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">15+ years of business & technical experience in insurance surveying</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">Rapid response time with local presence across Nepal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">Complete confidentiality & professional ethics in every case</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">Comprehensive coverage of all insurance domains</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">Thorough on-site inspections and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">Detailed analysis using industry-standard methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">Clear communication throughout the process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">Timely submission of comprehensive reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What We Believe */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white shadow rounded-lg overflow-hidden mb-12"
        >
          <div className="p-6 sm:p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">What We Believe</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-800">Independence and Objectivity</h3>
                  <p className="mt-1 text-gray-600">We provide unbiased assessments based on evidence, not assumptions.</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-800">Transparency</h3>
                  <p className="mt-1 text-gray-600">Clear, comprehensive reports that support fair settlements for all parties.</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-800">Professionalism</h3>
                  <p className="mt-1 text-gray-600">Experienced experts working with respect for our clients' time, property, and peace of mind.</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-800">Local Commitment</h3>
                  <p className="mt-1 text-gray-600">Proudly serving communities across Nepal, with an understanding of local needs and challenges.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CEO Message */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white shadow rounded-lg overflow-hidden"
        >
          <div className="p-6 sm:p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Message from Our CEO</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <blockquote className="text-gray-700 italic mb-6">
                  "At Everest Claims and Advisory Pvt Ltd, we understand that an insurance claim is more than just paperwork — it's about helping people and businesses rebuild trust and regain stability during uncertain times. Our mission is to bring fairness, accuracy, and professionalism to every survey we conduct, ensuring our clients get the clarity they deserve."
                </blockquote>
                <p className="text-gray-700 mb-6">
                  We have built this firm on the foundation of independence and integrity. With a dedicated team of licensed surveyors and advisors, we strive to set new benchmarks in transparency and efficiency. Whether it's a vehicle accident, property damage, or complex cargo loss, we stand by our clients with reliable expertise and local insight.
                </p>
                <p className="text-gray-700">
                  As we grow our services across Nepal, our promise remains unwavering: to protect your interests with precise, unbiased assessments and sound advice. Thank you for trusting Everest Claims and Advisory — we look forward to serving you with the same dedication and honesty that define who we are.
                </p>
              </div>
              <div className="md:w-1/3 flex flex-col items-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden shadow-md"
                >
                  <img 
                    src={Suresh} 
                    alt="Suresh Sharma, CEO of Everest Claims and Advisory" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800">Suresh Sharma</h3>
                  <p className="text-gray-600">CEO, Everest Claims and Advisory Pvt Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;