// src/pages/Careers.jsx
import { useEffect, useState } from 'react';
import careerData from '../data/career.json';
import {
  BriefcaseIcon,
  ClockIcon,
  CurrencyDollarIcon,
  HomeIcon,
  AcademicCapIcon,
  HeartIcon,
  UserGroupIcon,
  ArrowPathIcon,
  MapPinIcon,
  CalendarIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import { Toaster, toast } from 'react-hot-toast';

const Careers = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [applyingJob, setApplyingJob] = useState(null);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      const validJobs = careerData.filter(job => 
        /^\d/.test(job.id.toString()) && 
        job.department && 
        job.department.trim() !== ''
      );
      setCareers(validJobs);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleApply = (jobId) => {
    const job = careers.find(j => j.id === jobId);
    if (!job) return;

    setApplyingJob(jobId);
    
    // Simulate API submission
    setTimeout(() => {
      setApplyingJob(null);
      toast.success(
        <div className="flex items-start">
          <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium">Application submitted!</p>
            <p className="text-sm text-gray-500">
              We've received your application for {job.title}.
            </p>
          </div>
        </div>,
        {
          duration: 5000,
          position: 'top-center'
        }
      );
    }, 1500);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Toast Notifications */}
      <Toaster />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build Your Future With Us
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Join our team of innovators and help shape the future of our industry
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Job Count Header */}
        <div className="mb-12 bg-white rounded-xl shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-900">
            <BriefcaseIcon className="h-6 w-6 inline-block mr-2 text-blue-600" />
            {careers.length} Open Position{careers.length !== 1 ? 's' : ''} Available
          </h2>
        </div>

        {/* Job Listings */}
        {careers.length > 0 ? (
          <div className="space-y-6">
            {careers.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {job.department}
                        </span>
                        <span className="inline-flex items-center text-sm text-gray-600">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center text-sm text-gray-600">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleApply(job.id)}
                      disabled={applyingJob === job.id}
                      className={`mt-4 sm:mt-0 inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white ${
                        applyingJob === job.id 
                          ? 'bg-blue-400 cursor-not-allowed' 
                          : 'bg-blue-600 hover:bg-blue-700'
                      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300`}
                    >
                      {applyingJob === job.id ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Applying...
                        </>
                      ) : (
                        <>
                          Apply Now
                          <ChevronRightIcon className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="mt-6">
                    <p className="text-gray-700">{job.description}</p>
                    
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Requirements</h4>
                      <ul className="mt-3 space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        Posted on {new Date(job.posted).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md overflow-hidden py-16 text-center">
            <div className="max-w-md mx-auto px-4">
              <BriefcaseIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">No open positions</h3>
              <p className="mt-2 text-gray-600">
                We don't have any open positions at the moment. Please check back later!
              </p>
              <div className="mt-6">
                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <ArrowPathIcon className="h-4 w-4 mr-2" />
                  Refresh Page
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Benefits Section */}
        {careers.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Why Join Our Team?</h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                We're committed to providing an environment where you can grow both professionally and personally
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'Competitive Compensation',
                  description: 'Industry-leading salary and equity packages',
                  icon: <CurrencyDollarIcon className="h-8 w-8 text-blue-600" />
                },
                {
                  name: 'Flexible Work',
                  description: 'Remote-friendly with flexible hours to suit your lifestyle',
                  icon: <HomeIcon className="h-8 w-8 text-blue-600" />
                },
                {
                  name: 'Career Growth',
                  description: 'Dedicated mentorship and clear promotion paths',
                  icon: <AcademicCapIcon className="h-8 w-8 text-blue-600" />
                },
                {
                  name: 'Health & Wellness',
                  description: 'Comprehensive medical, dental, and vision coverage',
                  icon: <HeartIcon className="h-8 w-8 text-blue-600" />
                },
                {
                  name: 'Learning Budget',
                  description: 'Annual stipend for professional development',
                  icon: <AcademicCapIcon className="h-8 w-8 text-blue-600" />
                },
                {
                  name: 'Inclusive Culture',
                  description: 'Diverse team where everyone feels valued',
                  icon: <UserGroupIcon className="h-8 w-8 text-blue-600" />
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-50 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.name}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;