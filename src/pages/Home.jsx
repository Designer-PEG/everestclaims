import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials'; // You'll need to create this
import Stats from '../components/Stats'; // You'll need to create this
import Process from '../components/Process'; // You'll need to create this
import FAQ from '../components/FAQ'; // You'll need to create this
import CTA from '../components/CTA'; // You can extract this from Features

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Stats />
      <Features />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Home;