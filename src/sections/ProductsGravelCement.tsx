import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsGravelCement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardCRef = useRef<HTMLDivElement>(null);
  const cardDRef = useRef<HTMLDivElement>(null);

  // Scroll animation removed
  useLayoutEffect(() => {
    // Optional: Simple entrance if needed
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-bks-black flex items-center"
    >
      <div className="w-full px-6 lg:px-[6vw]">
        {/* Two Product Cards */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[3vw]">
          {/* Card C - Gravier */}
          <div
            ref={cardCRef}
            className="relative w-full lg:w-[41vw] h-[50vh] lg:h-[62vh] rounded-3xl overflow-hidden group cursor-pointer"
          >
            <img
              src="/product_gravel.jpg"
              alt="Gravier de construction"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bks-black/90 via-bks-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <h3 className="font-sora font-bold text-3xl lg:text-4xl text-bks-white uppercase mb-2">
                Gravier
              </h3>
              <p className="font-mono text-xs text-bks-gray uppercase tracking-wider mb-4">
                4/20 • 20/40 • Tout-venant
              </p>
            </div>

            {/* Arrow Button */}
            <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8">
              <a
                href="https://wa.me/229XXXXXXXX?text=Bonjour,%20je%20souhaite%20commander%20du%20gravier"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-bks-orange flex items-center justify-center text-bks-orange hover:bg-bks-orange hover:text-white transition-all duration-300"
              >
                <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
            </div>
          </div>

          {/* Card D - Ciment */}
          <div
            ref={cardDRef}
            className="relative w-full lg:w-[41vw] h-[50vh] lg:h-[62vh] rounded-3xl overflow-hidden group cursor-pointer"
          >
            <img
              src="/product_cement.jpg"
              alt="Ciment"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bks-black/90 via-bks-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <h3 className="font-sora font-bold text-3xl lg:text-4xl text-bks-white uppercase mb-2">
                Ciment
              </h3>
              <p className="font-mono text-xs text-bks-gray uppercase tracking-wider mb-4">
                CPJ 42.5 • CPA 45 • Blanc
              </p>
            </div>

            {/* Arrow Button */}
            <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8">
              <a
                href="https://wa.me/229XXXXXXXX?text=Bonjour,%20je%20souhaite%20commander%20du%20ciment"
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
