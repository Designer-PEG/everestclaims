import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import More from './pages/More';
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
          <Route path="/more" element={<More />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
