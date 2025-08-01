import { useParams, Link } from 'react-router-dom';
import ServiceDetail from '../components/ServiceDetail';
import servicesData from '../data/services.json';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams();
  const service = servicesData.find(s => s.slug === serviceSlug);

  if (!service) {
    return (
      <div className="min-h-screen mt-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-xl text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
          <Link
            to="/services"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-12 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link
            to="/services"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 bg-white rounded-lg shadow-sm px-4 py-2 border border-gray-200 hover:border-blue-300"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            <span className="font-medium">Back to All Services</span>
          </Link>
        </div>
        <ServiceDetail service={service} />
      </div>
    </div>
  );
};

export default ServiceDetailPage;