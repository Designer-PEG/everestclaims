import { Link } from 'react-router-dom';
import Logo from "../assets/img/logo.png";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-300 py-12 md:py-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {/* Logo and Description */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3 mb-6">
              <img src={Logo} alt="Everest Claims and Advisory" className="h-10" />
              <span className="text-xl font-semibold text-white">Everest Claims</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Professional advisory services for complex claims and risk management solutions.
            </p>
          </div>

          {/* Services */}
          <div className="md:flex md:flex-col md:items-start">
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Insurance Claims", path: "/services/insurance-claims" },
                { name: "Risk Assessment", path: "/services/risk-assessment" },
                { name: "Legal Consultation", path: "/services/legal-consultation" },
                { name: "Financial Recovery", path: "/services/financial-recovery" }
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-neutral-400 hover:text-white transition duration-200 text-sm block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:flex md:flex-col md:items-start">
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Contact Us", path: "/contact" },
                { name: "Case Studies", path: "/cases" },
                { name: "Careers", path: "/careers" }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path} 
                    className="text-neutral-400 hover:text-white transition duration-200 text-sm block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:flex md:flex-col md:items-start">
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-2 text-neutral-400 text-sm">
                <MapPinIcon className="w-4 h-4 text-blue-400" />
                Tinkune, Kathmandu
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 text-neutral-400 text-sm">
                <PhoneIcon className="w-4 h-4 text-green-400" />
                +977-9851135421
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 text-neutral-400 text-sm">
                <EnvelopeIcon className="w-4 h-4 text-red-400" />
                everestclaims8848@gmail.com
              </li>
              <li className="mt-4 pt-4 border-t border-neutral-800">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <ClockIcon className="w-4 h-4 text-yellow-400" />
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Business Hours</h4>
                </div>
                <p className="text-green-600 text-sm">Sunday - Friday: 10:00 AM - 5:00 PM</p>
                <p className="text-red-500 text-sm mt-1">Saturday: Closed</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-xs order-2 md:order-1">
            © {new Date().getFullYear()} Everest Claims and Advisory Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 order-1 md:order-2">
            {[
              { name: "Privacy Policy", path: "/privacy-policy" },
              { name: "Terms of Service", path: "/terms-of-service" },
              { name: "Disclaimer", path: "/disclaimer" }
            ].map((item, index) => (
              <Link 
                key={index}
                to={item.path} 
                className="text-neutral-400 hover:text-white transition duration-200 text-xs"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;