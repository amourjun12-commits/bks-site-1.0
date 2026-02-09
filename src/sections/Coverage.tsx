import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const cities = [
  'Cotonou',
  'Porto-Novo',
  'Parakou',
  'Abomey',
  'Bohicon',
  'Natitingou',
  'Lokossa',
  'Ouidah',
];

export default function Coverage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const citiesRef = useRef<HTMLDivElement>(null);

  // Scroll animation removed
  useLayoutEffect(() => {
    // Optional: Simple entrance if needed
  }, []);

  return (
    <section
      ref={sectionRef}
      id="coverage"
      className="section-pinned bg-bks-black flex items-center"
    >
      <div className="w-full px-6 lg:px-[6vw]">
        {/* Wide Image Card */}
        <div
          ref={imageRef}
          className="w-full h-[35vh] lg:h-[46vh] relative mb-8 lg:mb-12"
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-card">
            <img
              src="/coverage_truck.jpg"
              alt="Camion sur route africaine"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bks-black via-transparent to-transparent" />
          </div>
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2
            ref={headlineRef}
            className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl text-bks-white uppercase leading-[0.95] tracking-tight"
          >
            Zones<br />Livrées
          </h2>

          <div ref={citiesRef} className="lg:max-w-[40vw]">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-bks-orange" />
              <span className="label-mono">Partout au Bénin</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {cities.map((city) => (
                <span
                  key={city}
                  className="font-mono text-sm text-bks-gray bg-white/5 px-4 py-2 rounded-full border border-white/10"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
