import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for all sections to mount before creating global snap
    const timer = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(r => value >= r.start - 0.06 && value <= r.end + 0.06);
            if (!inPinned) return value;

            const target = pinnedRanges.reduce((closest, r) =>
              Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.12, max: 0.28 },
          delay: 0,
          ease: "power2.out"
        }
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
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
