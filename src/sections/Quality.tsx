import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Quality() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Scroll animation removed
  useLayoutEffect(() => {
    // Optional: Simple entrance if needed
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-bks-black flex items-center"
    >
      <div className="w-full px-6 lg:px-[6vw] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        {/* Left Headline Block */}
        <div ref={headlineRef} className="w-full lg:w-[46vw] z-10">
          <div className="label-mono mb-6">
            CONTRÔLE
          </div>

          <div className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-bks-white uppercase leading-[0.95] tracking-tight">
            <div className="headline-line">Qualité</div>
            <div className="headline-line">Garantie</div>
            <div className="headline-line text-bks-gray">Pour Chaque</div>
            <div className="headline-line text-bks-orange">Chantier</div>
          </div>

          <p className="font-inter text-base lg:text-lg text-bks-gray leading-relaxed max-w-md mt-8">
            Origines traçables, conformité aux normes, lots documentés.
            Chaque matériau est testé avant livraison.
          </p>
        </div>

        {/* Right Image Card */}
        <div
          ref={imageRef}
          className="w-full lg:w-[44vw] h-[45vh] lg:h-[62vh] relative z-10"
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-card">
            <img
              src="/builder_carrying.jpg"
              alt="Ouvrier transportant des briques"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-bks-black/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
