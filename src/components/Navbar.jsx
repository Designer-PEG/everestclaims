import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import { PhoneIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const navbarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Check if current path matches nav item
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className={`fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200 transition-transform duration-300 z-50 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <div className="flex items-center space-x-2 z-60">
              <Link to="/" className="flex items-center">
                <img 
                  src={logo} 
                  alt="Everest Claims & Advisory Logo" 
                  className="h-12 w-auto"
                />
                <span className="hidden sm:block font-semibold text-xl text-gray-800 ml-2">
                  Everest Claims & Advisory
                </span>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                to="/" 
                className={`px-3 py-2 font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className={`px-3 py-2 font-medium transition-colors ${
                  isActive('/services') 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Our Services
              </Link>
              {/* <Link 
                to="/claims-process" 
                className={`px-3 py-2 font-medium transition-colors ${
                  isActive('/claims-process') 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Claims Process
              </Link> */}
              <Link 
                to="/contact" 
                className={`px-3 py-2 font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Contact
              </Link>
              <a 
                href="tel:+9779851135421"
                className="ml-4 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden flex items-center z-60">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="outline-none"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40">
          {/* Blurred background */}
          <div className="absolute inset-0 backdrop-blur-lg bg-black/50"></div>
          
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl z-50"
            aria-label="Close menu"
          >
            &times;
          </button>

          {/* Centered Nav Links */}
          <div className="relative z-40 h-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-8 text-white">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-medium transition-colors ${
                  isActive('/') ? 'text-blue-400' : 'hover:text-blue-400'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-medium transition-colors ${
                  isActive('/about') ? 'text-blue-400' : 'hover:text-blue-400'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-medium transition-colors ${
                  isActive('/services') ? 'text-blue-400' : 'hover:text-blue-400'
                }`}
              >
                Our Services
              </Link>
              {/* <Link 
                to="/claims-process" 
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-medium transition-colors ${
                  isActive('/claims-process') ? 'text-blue-400' : 'hover:text-blue-400'
                }`}
              >
                Claims Process
              </Link> */}
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-medium transition-colors ${
                  isActive('/contact') ? 'text-blue-400' : 'hover:text-blue-400'
                }`}
              >
                Contact
              </Link>
              <a 
                href="tel:+9779851135421"
                className="mt-4 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-xl"
                onClick={() => setIsOpen(false)}
              >
                <PhoneIcon className="w-6 h-6" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;