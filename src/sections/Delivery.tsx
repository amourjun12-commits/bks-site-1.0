import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Delivery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

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
        { x: '-70vw', scale: 1.08, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(textRef.current,
        { x: '40vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.08
      );

      // Headline word reveal
      const words = headlineRef.current?.querySelectorAll('.word');
      if (words) {
        scrollTl.fromTo(words,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.02, ease: 'none' },
          0.12
        );
      }

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
      id="delivery"
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
              src="/delivery_truck.jpg" 
              alt="Camion de livraison"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-bks-black/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Right Text Block */}
        <div ref={textRef} className="w-full lg:w-[40vw] lg:pl-8 z-10">
          <div className="label-mono mb-6">
            LOGISTIQUE
          </div>
          
          <h2 
            ref={headlineRef}
            className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl text-bks-white uppercase leading-[0.95] tracking-tight mb-6"
          >
            <span className="word inline-block">Livraison</span><br />
            <span className="word inline-block">Fiable</span>
          </h2>
          
          <p className="font-inter text-base lg:text-lg text-bks-gray leading-relaxed max-w-md mb-8">
            Camions adaptés, déchargement sur place, confirmation d'arrivée. 
            Vous savez où en est votre chantier, en temps réel.
          </p>
          
          <button 
            onClick={() => document.getElementById('coverage')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary flex items-center gap-2"
          >
            <MapPin className="w-5 h-5" />
            Voir la carte de couverture
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
