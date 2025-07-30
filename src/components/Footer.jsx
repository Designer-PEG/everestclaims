import { Link } from 'react-router-dom';
import Logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-300 py-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={Logo} alt="Everest Claims and Advisory" className="h-10" />
              <span className="text-xl font-semibold text-white">Everest Claims and Advisory</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Professional advisory services for complex claims and risk management solutions.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/insurance-claims" className="text-neutral-400 hover:text-white transition duration-200 text-sm">Insurance Claims</Link></li>
              <li><Link to="/services/risk-assessment" className="text-neutral-400 hover:text-white transition duration-200 text-sm">Risk Assessment</Link></li>
              <li><Link to="/services/legal-consultation" className="text-neutral-400 hover:text-white transition duration-200 text-sm">Legal Consultation</Link></li>
              <li><Link to="/services/financial-recovery" className="text-neutral-400 hover:text-white transition duration-200 text-sm">Financial Recovery</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-neutral-400 hover:text-white transition duration-200 text-sm">About Us</Link></li>
              <li><Link to="/team" className="text-neutral-400 hover:text-white transition duration-200 text-sm">Our Team</Link></li>
              <li><Link to="/cases" className="text-neutral-400 hover:text-white transition duration-200 text-sm">Case Studies</Link></li>
              <li><Link to="/careers" className="text-neutral-400 hover:text-white transition duration-200 text-sm">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="text-neutral-400 text-sm">Tinkune, Kathmandu</li>
              <li className="text-neutral-400 text-sm">+977-9851135421</li>
              <li className="text-neutral-400 text-sm">everestclaims8848@gmail.com</li>
              <li className="mt-4 pt-4 border-t border-neutral-800">
                <h4 className="text-xs font-semibold text-white mb-2 uppercase tracking-wider">Business Hours</h4>
                <p className="text-neutral-400 text-sm">Sunday - Friday</p>
                <p className="text-neutral-400 text-sm">10:00 AM - 5:00 PM</p>
                <p className="text-neutral-400 text-sm mt-1">Saturday: Closed</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} Everest Claims and Advisory Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-neutral-400 hover:text-white transition duration-200 text-xs">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-neutral-400 hover:text-white transition duration-200 text-xs">
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="text-neutral-400 hover:text-white transition duration-200 text-xs">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer