import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, HeartPulse } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Pet Shop', path: '/petshop' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo.jpg" 
              alt="Ben-Hur Pets" 
              className="h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-sm rounded-full" 
              onError={(e) => {
                // Fallback temporário caso a imagem ainda não tenha sido enviada
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden flex-col ml-3">
              <div className="font-serif font-black text-2xl leading-none tracking-tight flex items-baseline">
                <span className="text-orange-500">BEN-</span>
                <span className="text-emerald-700 ml-1">HUR</span>
              </div>
              <span className="text-stone-900 font-serif font-bold text-xl leading-none mt-0.5">Pets</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      'text-sm transition-colors hover:text-orange-500',
                      location.pathname === link.path ? 'text-emerald-700 font-semibold' : 'text-stone-600 font-medium'
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 border-l pl-8 border-stone-200">
              <a
                href="https://api.whatsapp.com/send?1=pt_BR&phone=5592988134434"
                target="_blank"
                rel="noreferrer"
                className="hidden xl:flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-orange-500 transition-colors"
              >
                <Phone size={16} />
                <span>WhatsApp</span>
              </a>
              <Link
                to="/emergencia-24h"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all flex items-center gap-2 shadow-md shadow-red-600/20"
              >
                <HeartPulse size={16} />
                <span>Emergência 24h</span>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              to="/emergencia-24h"
              className="bg-red-600 text-white p-2.5 rounded-full shadow-md"
              aria-label="Emergência 24h"
            >
              <HeartPulse size={20} />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-800 p-2"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FDFBF7] border-t border-stone-200 overflow-hidden absolute top-full left-0 w-full shadow-xl"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'px-4 py-3 rounded-2xl text-lg transition-colors font-serif font-medium',
                      location.pathname === link.path ? 'bg-emerald-50 text-emerald-700' : 'text-stone-700 hover:bg-stone-100'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="h-px bg-stone-200 my-2" />
              <div className="flex flex-col gap-3">
                <a
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=5592988134434"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-full font-medium transition-colors"
                >
                  <Phone size={18} />
                  <span>Falar no WhatsApp</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Av.+Coronel+Teixeira,+02+-+Nova+Esperança,+Manaus"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-transparent border border-stone-300 hover:bg-stone-100 text-stone-800 py-4 rounded-full font-medium transition-colors"
                >
                  <MapPin size={18} />
                  <span>Como chegar</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
