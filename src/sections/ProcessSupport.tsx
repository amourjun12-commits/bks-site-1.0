import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Confirmation rapide',
    description: 'Devis et créneau sous 1h. Pas d\'attente interminable.',
  },
  {
    number: '02',
    title: 'Mise à jour',
    description: 'Notification avant départ et à l\'arrivée. Suivi en temps réel.',
  },
  {
    number: '03',
    title: 'Support dédié',
    description: 'Interlocuteur dédié en cas d\'imprévu. Nous sommes là pour vous.',
  },
];

export default function ProcessSupport() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

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
        {/* Left Steps Block */}
        <div ref={textRef} className="w-full lg:w-[40vw] lg:pr-8 z-10 order-2 lg:order-1">
          <div className="label-mono mb-6">
            SUIVI
          </div>

          <h2 className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl text-bks-white uppercase leading-[0.95] tracking-tight mb-10">
            Support<br />
            <span className="text-bks-orange">& Suivi</span>
          </h2>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={el => { stepsRef.current[index] = el; }}
                className="flex gap-4 lg:gap-6"
              >
                <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-bks-orange/10 flex items-center justify-center">
                  <span className="font-mono text-sm lg:text-base text-bks-orange font-semibold">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-sora font-bold text-lg lg:text-xl text-bks-white mb-1">
                    {step.title}
                  </h3>
                  <p className="font-inter text-sm text-bks-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Card */}
        <div
          ref={imageRef}
          className="w-full lg:w-[44vw] h-[45vh] lg:h-[64vh] relative z-10 order-1 lg:order-2"
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-card">
            <img
              src="/support_workers.jpg"
              alt="Ouvriers sur chantier"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-bks-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
