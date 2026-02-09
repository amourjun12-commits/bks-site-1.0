import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  const quoteText = "BKS livre à l'heure, sans surprise.";
  const words = quoteText.split(' ');

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
        {/* Left Quote Block */}
        <div ref={quoteRef} className="w-full lg:w-[44vw] lg:pr-8 z-10">
          <div className="label-mono mb-6">
            TÉMOIGNAGE
          </div>

          <div className="relative">
            <Quote className="absolute -top-4 -left-2 w-12 h-12 text-bks-orange/20" />
            <blockquote className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-bks-white leading-tight mb-8">
              {words.map((word, index) => (
                <span
                  key={index}
                  ref={el => { wordsRef.current[index] = el; }}
                  className="inline-block mr-3"
                >
                  {word}
                </span>
              ))}
            </blockquote>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-bks-orange/20 flex items-center justify-center">
              <span className="font-sora font-bold text-bks-orange">KB</span>
            </div>
            <div>
              <p className="font-sora font-semibold text-bks-white">Karim B.</p>
              <p className="font-inter text-sm text-bks-gray">Conducteur de travaux</p>
            </div>
          </div>

          <button className="flex items-center gap-2 text-bks-orange font-sora font-semibold text-sm hover:underline">
            Lire plus d'avis
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Portrait Card */}
        <div
          ref={imageRef}
          className="w-full lg:w-[40vw] h-[50vh] lg:h-[64vh] relative z-10"
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-card">
            <img
              src="/testimonial_portrait.jpg"
              alt="Portrait d'un conducteur de travaux"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-bks-black/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
