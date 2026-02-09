import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsBricksSand() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const cardARef = useRef<HTMLDivElement>(null);
  const cardBRef = useRef<HTMLDivElement>(null);

  // Scroll animation removed
  useLayoutEffect(() => {
    // Optional: Simple entrance if needed, or static
  }, []);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="section-pinned bg-bks-black flex items-center pt-20 lg:pt-32"
    >
      <div className="w-full px-6 lg:px-[6vw]">
        {/* Section Label */}
        <div ref={labelRef} className="label-mono mb-8 lg:mb-12">
          NOS PRODUITS
        </div>

        {/* Two Product Cards */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[3vw]">
          {/* Card A - Briques */}
          <div
            ref={cardARef}
            className="relative w-full lg:w-[41vw] h-[50vh] lg:h-[62vh] rounded-3xl overflow-hidden group cursor-pointer"
          >
            <img
              src="/product_bricks.jpg"
              alt="Briques en béton"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bks-black/90 via-bks-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <h3 className="font-sora font-bold text-3xl lg:text-4xl text-bks-white uppercase mb-2">
                Briques
              </h3>
              <p className="font-mono text-xs text-bks-gray uppercase tracking-wider mb-4">
                Béton / Pleines / Ajourées
              </p>
            </div>

            {/* Arrow Button */}
            <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8">
              <a
                href="https://wa.me/229XXXXXXXX?text=Bonjour,%20je%20souhaite%20commander%20des%20briques"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-bks-orange flex items-center justify-center text-bks-orange hover:bg-bks-orange hover:text-white transition-all duration-300"
              >
                <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
            </div>
          </div>

          {/* Card B - Sable */}
          <div
            ref={cardBRef}
            className="relative w-full lg:w-[41vw] h-[50vh] lg:h-[62vh] rounded-3xl overflow-hidden group cursor-pointer"
          >
            <img
              src="/product_sand.jpg"
              alt="Sable de construction"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bks-black/90 via-bks-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <h3 className="font-sora font-bold text-3xl lg:text-4xl text-bks-white uppercase mb-2">
                Sable
              </h3>
              <p className="font-mono text-xs text-bks-gray uppercase tracking-wider mb-4">
                Fin / Maçonnerie / Gros
              </p>
            </div>

            {/* Arrow Button */}
            <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8">
              <a
                href="https://wa.me/229XXXXXXXX?text=Bonjour,%20je%20souhaite%20commander%20du%20sable"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-bks-orange flex items-center justify-center text-bks-orange hover:bg-bks-orange hover:text-white transition-all duration-300"
              >
                <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
