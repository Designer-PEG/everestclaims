import React from 'react';
import { Link } from 'react-router-dom';

const Cases = () => {
  const cases = [
    {
      id: 1,
      title: "Warehouse Fire Investigation",
      description: "Comprehensive investigation of a major warehouse fire that destroyed $12M in inventory. Our team determined the cause to be electrical faults in the HVAC system, leading to a successful claim settlement.",
      outcome: "Client recovered 92% of claimed amount",
      date: "March 2024",
      category: "Property Damage"
    },
    {
      id: 2,
      title: "Marine Cargo Loss Assessment",
      description: "Assessment of damaged cargo during transatlantic shipping. Our detailed analysis proved improper stowage rather than weather conditions as the primary cause, significantly impacting liability.",
      outcome: "Liability shifted to shipping company",
      date: "November 2024",
      category: "Marine Insurance"
    },
    {
      id: 3,
      title: "Automotive Fraud Detection",
      description: "Investigation of suspicious claim involving a luxury vehicle total loss. Our forensic examination revealed staged accident evidence, saving the insurer $285,000 in fraudulent claims.",
      outcome: "Claim denied based on our evidence",
      date: "July 2024",
      category: "Fraud Investigation"
    },
    {
      id: 4,
      title: "Business Interruption Analysis",
      description: "Evaluation of business interruption claims following a regional flood. Our economic modeling accurately calculated losses, resulting in fair compensation for affected businesses.",
      outcome: "$4.2M in claims properly evaluated",
      date: "January 2025",
      category: "Business Insurance"
    },
    {
      id: 5,
      title: "Construction Site Accident",
      description: "Detailed assessment of a fatal accident at a high-rise construction site. Our safety audit identified multiple protocol violations that affected the liability determination.",
      outcome: "Liability appropriately allocated",
      date: "September 2025",
      category: "Workers Compensation"
    },
    {
      id: 6,
      title: "Cyber Attack Loss Valuation",
      description: "Assessment of financial impacts from a ransomware attack on a mid-sized retailer. Our IT forensic team traced the attack vector while our financial analysts quantified the business losses.",
      outcome: "Accurate claim valuation established",
      date: "May 2025",
      category: "Cyber Insurance"
    }
  ];

  return (
    <div className="min-h-screen mt-12 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Case Studies
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Explore our recent investigations and how we've helped clients resolve complex insurance claims.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Disclaimer:</strong> All case studies on this page are fictional examples created for demonstration purposes only. Any resemblance to actual cases is purely coincidental.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {caseItem.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {caseItem.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {caseItem.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-10 w-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <span className="font-bold">Outcome:</span> {caseItem.outcome}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={caseItem.date}>
                        {caseItem.date}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Need help with a complex claim?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our team of experienced insurance surveyors is ready to assist you.
          </p>
          <div className="mt-8">
            <Link to='/contact'>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Contact Our Team
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;