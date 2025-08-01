import { useState } from 'react';
import * as HeroIcons from '@heroicons/react/24/outline';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServiceDetail = ({ service }) => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: `I'm interested in your ${service.title} service...`
  });

  const IconComponent = HeroIcons[service.icon];

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the contact form data to your backend
    console.log('Contact form submitted:', {
      ...contactForm,
      service: service.title
    });

    // Show toast notification
    toast.success('Thank you for your message! Our team will contact you shortly.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setShowContactModal(false);
    // Reset form
    setContactForm({
      name: '',
      email: '',
      phone: '',
      message: `I'm interested in your ${service.title} service...`
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 border border-gray-200">
      <ToastContainer />
      
      <div className="flex items-center mb-8">
        {IconComponent && (
          <IconComponent className="h-12 w-12 text-blue-600 mr-4" aria-hidden="true" />
        )}
        <h1 className="text-3xl font-bold text-gray-800">{service.title}</h1>
      </div>
      
      <p className="text-gray-600 mb-8 text-lg leading-relaxed">{service.description}</p>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <HeroIcons.CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
          Key Features
        </h2>
        <ul className="space-y-4">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <HeroIcons.CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <div className="flex">
          <HeroIcons.ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-700 mr-3 mt-0.5" />
          <div>
            <h3 className="text-lg font-medium text-blue-800 mb-2">Interested in this service?</h3>
            <p className="text-blue-700">Contact our team today to discuss how we can assist you.</p>
            <button 
              onClick={() => setShowContactModal(true)}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              <HeroIcons.EnvelopeIcon className="mr-2 h-4 w-4" />
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <HeroIcons.XMarkIcon className="h-6 w-6" />
            </button>
            
            <h3 className="text-xl font-bold mb-4">Contact Us About {service.title}</h3>
            <p className="text-sm text-gray-500 mb-4">
              This feature is still under-construction. Please send an email or contact us directly using phone number.
            </p>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={contactForm.phone}
                  onChange={handleContactChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea 
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;