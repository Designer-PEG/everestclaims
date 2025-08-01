import { Link } from 'react-router-dom';
import * as HeroIcons from '@heroicons/react/24/outline';

const ServiceCard = ({ service }) => {
  const IconComponent = HeroIcons[service.icon];
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-gray-100">
      <div className="p-6">
        <div className="flex items-center mb-4">
          {IconComponent && (
            <IconComponent className="h-10 w-10 text-blue-600" aria-hidden="true" />
          )}
          <h3 className="text-xl font-bold text-gray-800 ml-3">{service.title}</h3>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
        >
          Learn more
          <HeroIcons.ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;