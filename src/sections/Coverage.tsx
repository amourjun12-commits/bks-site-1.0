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

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 0.5,
        }
      });

      // ENTRANCE (0-30%)
      scrollTl.fromTo(imageRef.current,
        { y: '-50vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(headlineRef.current,
        { x: '-20vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.10
      );

      scrollTl.fromTo(citiesRef.current,
        { x: '20vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.12
      );

      // SETTLE (30-70%): Hold

      // EXIT (70-100%) - smooth exit
      scrollTl.fromTo(imageRef.current,
        { y: 0, opacity: 1 },
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.65
      );

      scrollTl.fromTo([headlineRef.current, citiesRef.current],
        { y: 0, opacity: 1 },
        { y: '6vh', opacity: 0, ease: 'power2.in' },
        0.65
      );

    }, section);

    return () => ctx.revert();
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
