import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Truck, Package, Receipt, Wrench, FileText, Headphones } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Truck,
    title: 'Livraison sur site',
    description: 'Déchargement à la demande, même en accès difficile. Nos camions s\'adaptent à votre terrain.',
  },
  {
    icon: Package,
    title: 'Stock fiable',
    description: 'Disponibilité affichée en temps réel, pas de survente. Vous commandez, nous livrons.',
  },
  {
    icon: Receipt,
    title: 'Prix transparent',
    description: 'Transport inclus, pas de surprises à la livraison. Devis clair et détaillé.',
  },
  {
    icon: Wrench,
    title: 'Conseil technique',
    description: 'Dosage, granulométrie, choix de produits. Nos experts vous guident.',
  },
  {
    icon: FileText,
    title: 'Documents fournis',
    description: 'Bons de livraison, traçabilité, facturation claire et professionnelle.',
  },
  {
    icon: Headphones,
    title: 'Support réactif',
    description: 'Réponse sous l\'heure en journée. Un interlocuteur dédié pour chaque projet.',
  },
];

export default function BentoGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll animation removed
  useLayoutEffect(() => {
    // Optional: Simple entrance if needed
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-bks-blackLifted py-20 lg:py-28"
    >
      <div className="w-full px-6 lg:px-[6vw]">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-bks-white uppercase">
            Ce que vous<br />obtenez
          </h2>
          <p className="font-inter text-base lg:text-lg text-bks-gray leading-relaxed max-w-md">
            Un service pensé pour les chantiers exigeants : livraison, conseil, documentation.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={el => { cardsRef.current[index] = el; }}
              className="card-dark p-6 lg:p-8 hover:border-bks-orange/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-bks-orange/10 flex items-center justify-center mb-6 group-hover:bg-bks-orange/20 transition-colors">
                <feature.icon className="w-6 h-6 text-bks-orange" />
              </div>

              <h3 className="font-sora font-bold text-xl text-bks-white mb-3">
                {feature.title}
              </h3>

              <p className="font-inter text-sm text-bks-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
