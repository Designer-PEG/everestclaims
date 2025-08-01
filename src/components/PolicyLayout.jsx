// src/components/PolicyLayout.jsx
import { Link } from 'react-router-dom';

const PolicyLayout = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                clipRule="evenodd" 
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6 md:p-8 lg:p-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>
            <div className="prose prose-blue max-w-none">
              {children}
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default PolicyLayout;