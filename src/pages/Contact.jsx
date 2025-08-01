"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
  ArrowPathIcon,
  PaperAirplaneIcon
} from "@heroicons/react/24/outline";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [timeLeft, setTimeLeft] = useState(null);
  const [timerActive, setTimerActive] = useState(false);

  const DISPOSABLE_DOMAINS = [
    'mailinator.com', 'yopmail.com', 'tempmail.com', '10minutemail.com',
    'fakeinbox.com', 'test.com', 'example.com', 'demo.com'
  ];

  const BLOCKED_KEYWORDS = ['test', 'admin', 'temp', 'example', 'demo', 'fake'];

  useEffect(() => {
    const storedTime = localStorage.getItem('contactFormTimer');
    if (storedTime) {
      const remaining = calculateRemainingTime(storedTime);
      if (remaining > 0) {
        setTimerActive(true);
        setTimeLeft(remaining);
        const cleanup = startCountdown(remaining);
        return cleanup;
      } else {
        localStorage.removeItem('contactFormTimer');
      }
    }
  }, []);

  const calculateRemainingTime = (storedTime) => {
    const now = new Date().getTime();
    const end = parseInt(storedTime, 10);
    return Math.max(0, Math.floor((end - now) / 1000));
  };

  const startCountdown = (initialTime) => {
    let time = initialTime;
    const timer = setInterval(() => {
      time -= 1;
      setTimeLeft(time);
      if (time <= 0) {
        clearInterval(timer);
        setTimerActive(false);
        localStorage.removeItem('contactFormTimer');
      }
    }, 1000);
    return () => clearInterval(timer);
  };

  const formatTime = (seconds) => {
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    } else {
      const domain = formData.email.split('@')[1]?.toLowerCase();
      if (DISPOSABLE_DOMAINS.includes(domain)) {
        newErrors.email = 'Disposable emails are not allowed';
      }
      
      const hasBlockedKeyword = BLOCKED_KEYWORDS.some(keyword => 
        formData.email.toLowerCase().includes(keyword)
      );
      if (hasBlockedKeyword) {
        newErrors.email = 'Email contains blocked keywords';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    if (timerActive) {
      newErrors.form = `Please wait ${formatTime(timeLeft)} before sending another message.`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('message', formData.message);

      const response = await fetch('https://script.google.com/macros/s/AKfycbzV5mBgr83fgk-4bLiEKloxTF_DXPF2njr5OaVC-VSc_qdK3BV4Cv4OTyylUwaWn3uOIA/exec', {
        method: 'POST',
        body: formDataObj,
      });

      const result = await response.json();

      if (result.result === 'success') {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        const now = new Date();
        const future = now.getTime() + 60 * 60 * 1000;
        localStorage.setItem('contactFormTimer', future.toString());
        setTimerActive(true);
        setTimeLeft(3600);
        startCountdown(3600);
      } else {
        throw new Error(result?.error || 'Failed to submit message');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setSubmitError(error.message || 'Submission failed. Try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitSuccess(false);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 sm:text-5xl"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Have questions or need assistance? Our team is here to help you with any inquiries you may have.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-white p-8 shadow-lg rounded-xl border border-gray-100"
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <PaperAirplaneIcon className="h-6 w-6 text-blue-600 mr-2" />
              Send us a message
            </motion.h2>
            
            {submitSuccess ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-green-50 border border-green-200 rounded-xl p-6"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">Message sent successfully!</h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>Thank you for contacting us. We'll get back to you soon.</p>
                    </div>
                    <div className="mt-4">
                      <button
                        onClick={resetForm}
                        className="inline-flex items-center text-sm font-medium text-green-800 hover:text-green-600 transition-colors"
                      >
                        <ArrowPathIcon className="h-4 w-4 mr-1" />
                        Send another message
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.form 
                variants={containerVariants}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                {errors.form && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6"
                  >
                    <div className="flex items-center text-red-800">
                      <ExclamationCircleIcon className="h-5 w-5 mr-2" />
                      <span className="font-medium">{errors.form}</span>
                    </div>
                  </motion.div>
                )}

                {submitError && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6"
                  >
                    <div className="flex items-center text-red-800">
                      <XCircleIcon className="h-5 w-5 mr-2" />
                      <span className="font-medium">{submitError}</span>
                    </div>
                  </motion.div>
                )}

                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Suresh Sharma"
                      className={`block w-full px-4 py-3 rounded-lg border ${
                        errors.name 
                          ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' 
                          : 'border-gray-300 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                      } shadow-sm focus:outline-none transition duration-150 ease-in-out`}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                      </div>
                    )}
                  </div>
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600" id="name-error">{errors.name}</p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ex: everestclaims8848@gmail.com"
                      className={`block w-full px-4 py-3 rounded-lg border ${
                        errors.email 
                          ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' 
                          : 'border-gray-300 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                      } shadow-sm focus:outline-none transition duration-150 ease-in-out`}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                      </div>
                    )}
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600" id="email-error">{errors.email}</p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you today?"
                      className={`block w-full px-4 py-3 rounded-lg border ${
                        errors.message 
                          ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' 
                          : 'border-gray-300 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                      } shadow-sm focus:outline-none transition duration-150 ease-in-out`}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                      </div>
                    )}
                  </div>
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600" id="message-error">{errors.message}</p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants} className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || timerActive}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className={`w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${
                      isSubmitting || timerActive 
                        ? 'bg-blue-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : timerActive ? (
                      `Please wait ${formatTime(timeLeft)}`
                    ) : (
                      <>
                        <PaperAirplaneIcon className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </motion.div>

          {/* Contact Information */}
          <div className="bg-white p-8 shadow-lg rounded-xl border border-gray-100">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <EnvelopeIcon className="h-6 w-6 text-blue-600 mr-2" />
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Everest Claims and Advisory Pvt Ltd — Standing Strong for Fairness, Accuracy, and Trust.
                  Reach out to us through any of these channels and we'll respond promptly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-blue-600">
                      <PhoneIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">+977-9851135421</p>
                    <p className="mt-1 text-sm text-gray-500">Available during business hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-blue-600">
                      <EnvelopeIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">everestclaims8848@gmail.com</p>
                    <p className="mt-1 text-sm text-gray-500">Typically response time within 3-4 business days</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-blue-600">
                      <MapPinIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Office Address</h3>
                    <p className="mt-1 text-gray-600">Tinkune, Kathmandu</p>
                    <p className="mt-1 text-sm text-gray-500">Visit by appointment only</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <ClockIcon className="h-5 w-5 text-blue-600 mr-2" />
                  Business Hours
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between text-base text-gray-600">
                    <span className="font-medium text-green-500">Sunday - Friday</span>
                    <span className="text-green-500">10:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between text-base text-gray-600">
                    <span className="font-medium text-red-500">Saturday</span>
                    <span className="text-red-500">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;