import { useEffect, useRef } from 'react';
import './App.css';

// Sections
import Hero from './sections/Hero';
import ProductsBricksSand from './sections/ProductsBricksSand';
import ProductsGravelCement from './sections/ProductsGravelCement';
import Delivery from './sections/Delivery';
import Quality from './sections/Quality';
import BentoGrid from './sections/BentoGrid';
import ProcessOrder from './sections/ProcessOrder';
import ProcessSupport from './sections/ProcessSupport';
import Coverage from './sections/Coverage';
import Testimonial from './sections/Testimonial';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';
import Navigation from './sections/Navigation';

// gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Basic initialization if needed, but removing ScrollTrigger logic
  }, []);

  return (
    <div ref={mainRef} className="relative bg-bks-black">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <ProductsBricksSand />
        <ProductsGravelCement />
        <Delivery />
        <Quality />
        <BentoGrid />
        <ProcessOrder />
        <ProcessSupport />
        <Coverage />
        <Testimonial />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}

export default App;
