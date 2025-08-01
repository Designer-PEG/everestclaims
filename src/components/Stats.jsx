import { useEffect, useState, useRef } from 'react';
import { CheckBadgeIcon, BoltIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const Stats = () => {
  const [counts, setCounts] = useState({
    satisfaction: 0,
    responseTime: 0,
    assessments: 0,
    experience: 0
  });

  const sectionRef = useRef();
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer for lazy-loading counters
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (sectionVisible) {
      // Counter animation only starts when section is visible
      const duration = 2000;
      const startTime = Date.now();
      
      const animateCounts = () => {
        const progress = Math.min(1, (Date.now() - startTime) / duration);
        
        setCounts({
          satisfaction: Math.floor(progress * 98),
          responseTime: Math.floor(progress * 24),
          assessments: Math.floor(progress * 500),
          experience: Math.floor(progress * 15)
        });

        if (progress < 1) {
          requestAnimationFrame(animateCounts);
        }
      };

      animateCounts();
    }
  }, [sectionVisible]);

  const features = [
    {
      icon: <BoltIcon className="w-8 h-8 text-blue-600" />,
      title: "Rapid Response",
      description: "Local presence with quick turnaround times"
    },
    {
      icon: <LockClosedIcon className="w-8 h-8 text-blue-600" />,
      title: "Complete Confidentiality",
      description: "Professional ethics and data security guaranteed"
    },
    {
      icon: <CheckBadgeIcon className="w-8 h-8 text-blue-600" />,
      title: "Technical Expertise",
      description: "Specialized knowledge in insurance claims assessment"
    }
  ];

  return (
    <section className="py-16 bg-neutral-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Counter Section - Now at the top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
            <p className="text-4xl font-bold text-blue-600 mb-2">
              {counts.satisfaction}%
            </p>
            <p className="text-lg text-neutral-600">Client Satisfaction</p>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
            <p className="text-4xl font-bold text-blue-600 mb-2">
              {counts.responseTime}h
            </p>
            <p className="text-lg text-neutral-600">Avg Response Time</p>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
            <p className="text-4xl font-bold text-blue-600 mb-2">
              {counts.assessments}+
            </p>
            <p className="text-lg text-neutral-600">Assessments</p>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
            <p className="text-4xl font-bold text-blue-600 mb-2">
              {counts.experience}+
            </p>
            <p className="text-lg text-neutral-600">Years Experience</p>
          </div>
        </div>

        {/* Why Everest Claims Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Why Everest Claims?</h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Trusted by insurers and policyholders for accurate, impartial assessments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-neutral-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-blue-50 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;