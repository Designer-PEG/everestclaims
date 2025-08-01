import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon, PhoneIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import Hero1 from '../assets/img/hero_1.jpg';
import Hero2 from '../assets/img/hero_2.jpg';

const Hero = () => {
  const navigate = useNavigate();
  const phoneNumber = "+977 985-1135421";

  const handleSurveyClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="bg-white pt-24 pb-12 md:pt-28 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content column */}
          <div className="order-2 md:order-1 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-sm font-medium mb-4">
              <span>Trusted Since 2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
              Precision Insurance Assessments <span className="text-blue-600">You Can Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-lg leading-relaxed">
              Independent, impartial evaluations for insurers, businesses, and policyholders. 
              Our certified surveyors deliver accurate reports that stand up to scrutiny.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                onClick={handleSurveyClick}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-md"
              >
                <PhoneIcon className="w-5 h-5" />
                Request Assessment
              </button>
              <button 
                onClick={handleContactClick}
                className="flex items-center justify-center gap-2 border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-700 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-md"
              >
                <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />
                Speak to an Expert
              </button>
            </div>
          </div>

          {/* Image column */}
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-neutral-200 aspect-[4/3]">
              <img 
                src={Hero1} 
                alt="Insurance surveyor at work" 
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-[55%] h-[45%] bg-white rounded-lg shadow-lg border border-neutral-100 overflow-hidden">
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
  );
};

export default Hero;