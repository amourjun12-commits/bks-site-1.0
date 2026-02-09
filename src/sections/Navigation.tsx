import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Fixed Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-bks-black/90 backdrop-blur-md py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-sora font-bold text-2xl text-bks-white hover:text-bks-orange transition-colors"
          >
            BKS
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('products')}
              className="font-inter text-sm text-bks-gray hover:text-bks-white transition-colors"
            >
              Produits
            </button>
            <button 
              onClick={() => scrollToSection('delivery')}
              className="font-inter text-sm text-bks-gray hover:text-bks-white transition-colors"
            >
              Livraison
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="font-inter text-sm text-bks-gray hover:text-bks-white transition-colors"
            >
              Processus
            </button>
            <button 
              onClick={() => scrollToSection('coverage')}
              className="font-inter text-sm text-bks-gray hover:text-bks-white transition-colors"
            >
              Zones
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-inter text-sm text-bks-gray hover:text-bks-white transition-colors"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/229XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-bks-orange text-white font-sora font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-orange-600 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Commander
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-bks-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-bks-black/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button 
            onClick={() => scrollToSection('products')}
            className="font-sora text-2xl text-bks-white hover:text-bks-orange transition-colors"
          >
            Produits
          </button>
          <button 
            onClick={() => scrollToSection('delivery')}
            className="font-sora text-2xl text-bks-white hover:text-bks-orange transition-colors"
          >
            Livraison
          </button>
          <button 
            onClick={() => scrollToSection('process')}
            className="font-sora text-2xl text-bks-white hover:text-bks-orange transition-colors"
          >
            Processus
          </button>
          <button 
            onClick={() => scrollToSection('coverage')}
            className="font-sora text-2xl text-bks-white hover:text-bks-orange transition-colors"
          >
            Zones
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="font-sora text-2xl text-bks-white hover:text-bks-orange transition-colors"
          >
            Contact
          </button>
          <a 
            href="https://wa.me/229XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-2 bg-bks-orange text-white font-sora font-semibold px-8 py-4 rounded-full"
          >
            <Phone className="w-5 h-5" />
            Commander sur WhatsApp
          </a>
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-2 text-bks-white"
        >
          <X className="w-8 h-8" />
        </button>
      </div>
    </>
  );
}
