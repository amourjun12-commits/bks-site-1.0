import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Choisissez le produit',
    description: 'Briques, sable, gravier, ciment. Consultez notre catalogue complet.',
  },
  {
    number: '02',
    title: 'Précisez la quantité',
    description: 'Palette, m³, tonnes, ou nombre de briques. Nous calculons le prix.',
  },
  {
    number: '03',
    title: 'Recevez sur site',
    description: 'Livraison à J+1 selon zone. Déchargement inclus.',
  },
];

export default function ProcessOrder() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

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
        { x: '-70vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(textRef.current,
        { x: '40vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.08
      );

      // Steps reveal
      stepsRef.current.forEach((step, index) => {
        if (!step) return;
        scrollTl.fromTo(step,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.14 + index * 0.04
        );
      });

      // SETTLE (30-70%): Hold

      // EXIT (70-100%) - smooth exit
      scrollTl.fromTo(imageRef.current,
        { x: 0, opacity: 1 },
        { x: '-15vw', opacity: 0, ease: 'power2.in' },
        0.65
      );

      scrollTl.fromTo(textRef.current,
        { x: 0, opacity: 1 },
        { x: '15vw', opacity: 0, ease: 'power2.in' },
        0.65
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="process"
      className="section-pinned bg-bks-black flex items-center"
    >
      <div className="w-full px-6 lg:px-[6vw] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        {/* Left Image Card */}
        <div 
          ref={imageRef}
          className="w-full lg:w-[44vw] h-[45vh] lg:h-[64vh] relative z-10"
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-card">
            <img 
              src="/process_builder.jpg" 
              alt="Ouvrier consultant des plans"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-bks-black/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Right Steps Block */}
        <div ref={textRef} className="w-full lg:w-[40vw] lg:pl-8 z-10">
          <div className="label-mono mb-6">
            PROCESSUS
          </div>
          
          <h2 className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl text-bks-white uppercase leading-[0.95] tracking-tight mb-10">
            Comment<br />Commander
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
      </div>
    </section>
  );
}
