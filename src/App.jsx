import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ServiceDetailPage from './pages/ServiceDetailPage';
import Cases from './pages/Cases';
import Career from './pages/Careeer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Disclaimer from './pages/Disclaimer';

import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-100 via-white to-gray-200" />

      <Navbar />
      <ScrollToTop /> {/* ✅ Moved here */}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
          <Route path="*" element={<Services />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
