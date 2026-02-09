import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Phone } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Auto-play entrance animation on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(imageRef.current,
        { x: '40vw', scale: 1.06, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, duration: 0.9 },
        0.2
      )
        .fromTo(labelRef.current,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          0.3
        )
        .fromTo(headlineRef.current,
          { x: '-12vw', opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8 },
          0.4
        )
        .fromTo(bodyRef.current,
          { x: '-12vw', opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7 },
          0.5
        )
        .fromTo(ctaRef.current?.children || [],
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
          0.7
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven exit animation
  // Scroll-driven exit animation REMOVED

  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-bks-black flex items-start lg:items-center pt-40 sm:pt-48 lg:pt-28"
    >
      <div className="w-full px-6 lg:px-[6vw] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
        {/* Left Text Block */}
        <div ref={textRef} className="w-full lg:w-[40vw] lg:pr-8 z-10">
          <div ref={labelRef} className="label-mono mb-6">
            LIVRAISON 24–48H
          </div>

          <h1
            ref={headlineRef}
            className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-7xl text-bks-white uppercase leading-[0.95] tracking-tight mb-6"
          >
            Matériaux<br />
            de Chantier
          </h1>

          <p
            ref={bodyRef}
            className="font-inter text-base lg:text-lg text-bks-gray leading-relaxed max-w-md mb-8"
          >
            Briques, sable, gravier et ciment. Livraison fiable pour pros et particuliers au Bénin.
            Commandez aujourd'hui, livré demain.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/229XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Commander sur WhatsApp
            </a>
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              Voir les produits
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Image Card */}
        <div
          ref={imageRef}
          className="w-full lg:w-[40vw] h-[50vh] lg:h-[72vh] relative z-10"
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-card">
            <img
              src="/hero_builder.jpg"
              alt="Construction worker"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bks-black/60 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-bks-orange text-white px-6 py-3 rounded-full font-sora font-bold text-sm shadow-lg animate-float">
            1000+ Livraisons
          </div>
        </div>
      </div>
    </section>
  );
}
