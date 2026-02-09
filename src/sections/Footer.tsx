import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Clock, Send, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  // Scroll animation removed
  useLayoutEffect(() => {
    // Optional: Simple entrance if needed
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open WhatsApp with message
    const message = `Bonjour BKS,\n\nJe m'appelle ${formData.name}.\n${formData.message}\n\nContact: ${formData.phone}${formData.email ? ` / ${formData.email}` : ''}`;
    const whatsappUrl = `https://wa.me/229XXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="relative bg-bks-blackLifted py-20 lg:py-28"
    >
      <div className="w-full px-6 lg:px-[6vw]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div ref={leftRef} className="w-full lg:w-[40%]">
            <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-bks-white uppercase mb-6">
              Contactez<br />BKS
            </h2>

            <p className="font-inter text-base text-bks-gray leading-relaxed mb-10">
              Une question ? Besoin d'une quantité spécifique ? Écrivez-nous.
              Nous répondons sous l'heure en journée.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-bks-orange/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-bks-orange" />
                </div>
                <div>
                  <p className="font-mono text-xs text-bks-gray uppercase">Email</p>
                  <a href="mailto:contact@bks.bj" className="font-inter text-bks-white hover:text-bks-orange transition-colors">
                    contact@bks.bj
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-bks-orange/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-bks-orange" />
                </div>
                <div>
                  <p className="font-mono text-xs text-bks-gray uppercase">Téléphone / WhatsApp</p>
                  <a href="https://wa.me/229XXXXXXXX" className="font-inter text-bks-white hover:text-bks-orange transition-colors">
                    +229 XX XX XX XX
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-bks-orange/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-bks-orange" />
                </div>
                <div>
                  <p className="font-mono text-xs text-bks-gray uppercase">Adresse</p>
                  <p className="font-inter text-bks-white">
                    Cotonou, Bénin
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-bks-orange/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-bks-orange" />
                </div>
                <div>
                  <p className="font-mono text-xs text-bks-gray uppercase">Horaires</p>
                  <p className="font-inter text-bks-white">
                    Lun–Ven : 08h–18h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div ref={formRef} className="w-full lg:w-[60%]">
            <div className="card-dark p-6 lg:p-10">
              <h3 className="font-sora font-bold text-xl text-bks-white mb-6">
                Envoyer un message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-bks-gray uppercase mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-bks-black border border-white/10 rounded-xl px-4 py-3 text-bks-white font-inter focus:outline-none focus:border-bks-orange transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-bks-gray uppercase mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-bks-black border border-white/10 rounded-xl px-4 py-3 text-bks-white font-inter focus:outline-none focus:border-bks-orange transition-colors"
                      placeholder="+229 XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-bks-gray uppercase mb-2">
                    Email (optionnel)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-bks-black border border-white/10 rounded-xl px-4 py-3 text-bks-white font-inter focus:outline-none focus:border-bks-orange transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-bks-gray uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-bks-black border border-white/10 rounded-xl px-4 py-3 text-bks-white font-inter focus:outline-none focus:border-bks-orange transition-colors resize-none"
                    placeholder="Décrivez votre besoin..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Envoyer par WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-sora font-bold text-2xl text-bks-white">BKS</span>
            <span className="font-inter text-sm text-bks-gray">Construction</span>
          </div>

          <p className="font-inter text-sm text-bks-gray text-center">
            © 2026 BKS Construction — Bâtissons Vos Rêves, Livrons l'Excellence
          </p>

          <a
            href="https://wa.me/229XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-bks-orange font-sora font-semibold text-sm hover:underline"
          >
            Commander
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
