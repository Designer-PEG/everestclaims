import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero1 from '../assets/img/hero_1.jpg';
import Hero2 from '../assets/img/hero_2.jpg';

const Hero = () => {
  const navigate = useNavigate();
  const phoneNumber = "+9779851135521"; // Raw number without formatting for tel: link

  const handleSurveyClick = () => {
    // For mobile devices, this will open the phone dialer
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleContactClick = () => {
    // Navigate to contact page using React Router
    navigate('/contact');
  };

  return (
    <section className="bg-gradient-to-r from-white to-white pt-20 pb-2 md:pt-20 min-h-[90vh] flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Grid layout - 1x2 on desktop, 1x1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Content column (left side) */}
          <div className="order-2 md:order-1 space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-green-700 leading-tight">
              Trusted Insurance Surveyors, <br />
              <span className="text-blue-800">Precise, Independent,</span> <br />
              <span className="text-blue-800">Committed to You.</span>
            </h1>
            <p className="text-lg md:text-lg text-gray-600 max-w-lg">
              We help you navigate claims with accuracy, fairness, and unwavering integrity — ensuring your peace of mind when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={handleSurveyClick}
                className="border-2 border-red-600 bg-white hover:bg-red-600 hover:text-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                onMouseEnter={(e) => e.currentTarget.textContent = "+977 (98) 51135521"}
                onMouseLeave={(e) => e.currentTarget.textContent = "Request a Survey"}
              >
                Request a Survey
              </button>
              <button 
                onClick={handleContactClick}
                className="border-2 border-blue-800 bg-white hover:bg-blue-800 hover:text-white text-blue-800 px-4 py-2 rounded-lg font-semibold hover:cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Contact Our Experts
              </button>
            </div>
          </div>

          {/* Image column (right side) */}
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={Hero1} 
                alt="Insurance surveyor at work" 
                className="w-full h-auto max-h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-[60%] h-[50%] border-4 border-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={Hero2} 
                  alt="Team of insurance professionals" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;