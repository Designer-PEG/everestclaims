import React from 'react';
import { motion } from 'framer-motion';
import { 
  EyeIcon, 
  ShieldCheckIcon, 
  BriefcaseIcon, 
  MapPinIcon,
  BoltIcon,
  LockClosedIcon,
  ChartBarIcon,
  UserGroupIcon, // Replaces HandshakeIcon
  DocumentTextIcon,
  GlobeAltIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import Suresh from '../assets/img/Suresh.png';
import TeamMeeting from '../assets/img/team-meeting.jpg';
import SurveyorWorking from '../assets/img/hero_1.jpg';

const About = () => {
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
        duration: 0.5,
        ease: "easeOut"
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

  return (
    <div className="min-h-screen bg-neutral-50 pt-20 pb-16">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative bg-gradient-to-r from-blue-800 to-blue-600 py-20 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
          <motion.div 
            variants={itemVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-green-500">Everest Claims</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Pioneering excellence in insurance claims assessment across Nepal
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 -mt-16 relative z-20"
      >
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-green-500 mr-4"></div>
                <h2 className="text-2xl font-bold text-neutral-800">Our Story</h2>
              </div>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Founded in 2024, Everest Claims and Advisory Pvt Ltd emerged from a vision to transform Nepal's insurance claims landscape.
              </p>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Named after the world's highest peak, we embody the resilience, integrity, and towering standards that Mount Everest represents.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                Had experience for surveying even before founding the company, for upholding integrity and provide transperancy, We have founded this organization.
              </p>
            </div>
            <div className="hidden md:block relative">
              <img 
                src={TeamMeeting} 
                alt="Everest Claims team meeting" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Core Values */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mt-20"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">Our Core Values</h2>
          <div className="w-16 h-1 bg-green-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheckIcon className="w-10 h-10 text-blue-600" />,
              title: "Integrity",
              description: "We uphold the highest ethical standards."
            },
            {
              icon: <EyeIcon className="w-10 h-10 text-blue-600" />,
              title: "Transparency",
              description: "Clear communication builds trust."
            },
            {
              icon: <BriefcaseIcon className="w-10 h-10 text-blue-600" />,
              title: "Professionalism",
              description: "Certified experts delivering quality service."
            },
            {
              icon: <MapPinIcon className="w-10 h-10 text-blue-600" />,
              title: "Local Expertise",
              description: "Deep understanding of Nepal's market."
            },
            {
              icon: <BoltIcon className="w-10 h-10 text-blue-600" />,
              title: "Efficiency",
              description: "Timely responses without compromise."
            },
            {
              icon: <UserGroupIcon className="w-10 h-10 text-blue-600" />, // Using UserGroupIcon instead
              title: "Collaboration",
              description: "Working together for best results."
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-100"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-50 rounded-full">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-neutral-800 mb-3">{value.title}</h3>
              <p className="text-neutral-600 text-center">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-gradient-to-r from-blue-700 to-blue-800 mt-20 py-16"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Everest Claims</h2>
            <div className="w-16 h-1 bg-green-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-neutral-800 mb-6">Our Differentiators</h3>
                <ul className="space-y-6">
                  {[
                    "15+ years of specialized experience",
                    "Government-licensed surveyors",
                    "Comprehensive coverage",
                    "Rapid response nationwide",
                    "Defensible reports with evidence",
                    "Confidentiality and security"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckIcon className="w-5 h-5 text-green-500" />
                      </div>
                      <p className="ml-3 text-neutral-700">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/20"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
                <div className="space-y-8">
                  {[
                    {
                      icon: <DocumentTextIcon className="w-6 h-6 text-green-400" />,
                      title: "Initial Consultation",
                      description: "Understanding your specific needs"
                    },
                    {
                      icon: <ChartBarIcon className="w-6 h-6 text-green-400" />,
                      title: "Detailed Assessment",
                      description: "On-site inspection"
                    },
                    {
                      icon: <GlobeAltIcon className="w-6 h-6 text-green-400" />,
                      title: "Analysis & Reporting",
                      description: "Applying industry standards"
                    },
                    {
                      icon: <LockClosedIcon className="w-6 h-6 text-green-400" />,
                      title: "Confidential Delivery",
                      description: "Secure submission"
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 p-2 bg-white/10 rounded-lg">
                        {step.icon}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                        <p className="text-blue-100">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Leadership */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mt-20"
      >
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 order-2 md:order-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-green-500 mr-4"></div>
                <h2 className="text-2xl font-bold text-neutral-800">Leadership Message</h2>
              </div>
              <blockquote className="text-neutral-600 italic text-lg mb-6 border-l-4 border-blue-500 pl-4">
                "At Everest Claims, we don't just assess damages—we restore trust."
              </blockquote>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Since our founding, we've remained committed to fair, accurate assessments.
              </p>
              <div className="mt-8">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img 
                      src={Suresh} 
                      alt="Suresh Sharma, CEO of Everest Claims" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-neutral-800">Suresh Sharma</h4>
                    <p className="text-neutral-600">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative min-h-80">
              <img 
                src={SurveyorWorking} 
                alt="Everest Claims surveyor at work" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;