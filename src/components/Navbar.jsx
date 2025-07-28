import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png'; // Make sure to import your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const navbarRef = useRef(null);

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

  return (
    <>
      <nav
        ref={navbarRef}
        className={`fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-md border-b border-gray-200 transition-transform duration-300 z-50 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <div className="flex items-center space-x-2 z-60">
              <Link to="/" className="flex items-center">
                <img 
                  src={logo} 
                  alt="Everest Claims & Advisory Logo" 
                  className="h-12 w-auto" // Adjust height as needed
                />
                <span className="font-semibold text-xl text-gray-800 ml-2">
                  Everest Claims & Advisory
                </span>
              </Link>
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

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-800 hover:text-primary font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-800 hover:text-primary font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-primary font-medium">
                Contact
              </Link>
              <Link to="/more" className="text-gray-800 hover:text-primary font-medium">
                More
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40">
          {/* Blurred background that covers the entire page */}
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
                className="text-2xl font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-medium hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-medium hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Link 
                to="/more" 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-medium hover:text-primary transition-colors"
              >
                More
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;