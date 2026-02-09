import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardERef = useRef<HTMLDivElement>(null);
  const cardFRef = useRef<HTMLDivElement>(null);

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
      const lines = headlineRef.current?.querySelectorAll('.headline-line');
      if (lines) {
        scrollTl.fromTo(lines,
          { x: '-30vw', opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.02, ease: 'none' },
          0
        );
      }

      scrollTl.fromTo(cardERef.current,
        { y: '40vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.10
      );

      scrollTl.fromTo(cardFRef.current,
        { y: '40vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.14
      );

      // SETTLE (30-70%): Hold

      // EXIT (70-100%) - smooth exit, flows to footer
      scrollTl.fromTo(headlineRef.current,
        { y: 0, opacity: 1 },
        { y: '-6vh', opacity: 0, ease: 'power2.in' },
        0.65
      );

      scrollTl.fromTo([cardERef.current, cardFRef.current],
        { y: 0, opacity: 1 },
        { y: '8vh', opacity: 0, ease: 'power2.in' },
        0.65
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section-pinned bg-bks-black flex items-center"
    >
      <div className="w-full px-6 lg:px-[6vw]">
        {/* Section Label */}
        <div className="label-mono mb-6 lg:mb-8">
          DÉMARRER
        </div>

        {/* Headline */}
        <div ref={headlineRef} className="mb-10 lg:mb-16">
          <div className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-bks-white uppercase leading-[0.95] tracking-tight">
            <div className="headline-line">Commencez</div>
            <div className="headline-line text-bks-orange">Votre Chantier</div>
          </div>
        </div>

        {/* Two Bottom Cards */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[3vw]">
          {/* Card E - Devis */}
          <div 
            ref={cardERef}
            className="relative w-full lg:w-[41vw] h-[30vh] lg:h-[34vh] rounded-3xl overflow-hidden group cursor-pointer card-dark border border-white/10 hover:border-bks-orange/50 transition-all duration-300"
          >
            <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-sora font-bold text-2xl lg:text-3xl text-bks-white uppercase mb-2">
                  Demander un Devis
                </h3>
                <p className="font-inter text-sm text-bks-gray">
                  Réponse rapide, prix net, transport inclus.
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <a 
                  href="https://wa.me/229XXXXXXXX?text=Bonjour,%20je%20souhaite%20un%20devis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-bks-orange font-sora font-semibold text-sm hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  Par WhatsApp
                </a>
                
                <div className="w-12 h-12 rounded-full border-2 border-bks-orange flex items-center justify-center text-bks-orange group-hover:bg-bks-orange group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Card F - Produits */}
          <div 
            ref={cardFRef}
            className="relative w-full lg:w-[41vw] h-[30vh] lg:h-[34vh] rounded-3xl overflow-hidden group cursor-pointer"
          >
            <img 
              src="/product_bricks.jpg" 
              alt="Produits BKS"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bks-black/90 via-bks-black/50 to-transparent" />
            
            <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-sora font-bold text-2xl lg:text-3xl text-bks-white uppercase mb-2">
                  Voir les Produits
                </h3>
                <p className="font-inter text-sm text-bks-gray/80">
                  Briques, sable, gravier, ciment.
                </p>
              </div>
              
              <div className="flex items-center justify-end">
                <button 
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-12 h-12 rounded-full border-2 border-bks-orange flex items-center justify-center text-bks-orange group-hover:bg-bks-orange group-hover:text-white transition-all duration-300"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
