import { Link } from 'react-router-dom';
import { HeartPulse, MapPin, Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-100/70 pt-20 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="inline-block group">
              <img 
                src="/logo.jpg" 
                alt="Ben-Hur Pets" 
                className="h-24 w-auto object-contain transition-transform group-hover:scale-105 bg-white rounded-full p-1"
                onError={(e) => {
                  // Fallback temporário caso a imagem ainda não tenha sido enviada
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden flex-col">
                <div className="font-serif font-black text-2xl leading-none tracking-tight flex items-baseline">
                  <span className="text-orange-400">BEN-</span>
                  <span className="text-emerald-400 ml-1">HUR</span>
                </div>
                <span className="text-white font-serif font-bold text-xl leading-none mt-0.5">Pets</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed font-light">
              Centro de Estética e Saúde Animal. Seu pet merece um cuidado profissional 24 horas por dia em Manaus.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.instagram.com/benhurpets_oficial/" target="_blank" rel="noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="https://www.facebook.com/benhuresteticaanimal/?locale=pt_BR" target="_blank" rel="noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-serif text-xl mb-6">Links Rápidos</h3>
            <ul className="flex flex-col gap-4">
              <li><Link to="/sobre" className="text-sm font-light hover:text-orange-400 transition-colors">Sobre a Clínica</Link></li>
              <li><Link to="/servicos" className="text-sm font-light hover:text-orange-400 transition-colors">Nossos Serviços</Link></li>
              <li><Link to="/petshop" className="text-sm font-light hover:text-orange-400 transition-colors">Pet Shop</Link></li>
              <li><Link to="/emergencia-24h" className="text-sm font-medium text-red-400 hover:text-red-300 transition-colors">Emergência 24h</Link></li>
              <li><Link to="/contato" className="text-sm font-light hover:text-orange-400 transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif text-xl mb-6">Contato</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-sm font-light leading-relaxed">
                  Av. Coronel Teixeira, 02<br />
                  Nova Esperança, Manaus - AM<br />
                  CEP: 69037-473
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-400 shrink-0" strokeWidth={1.5} />
                <div className="flex flex-col">
                  <a href="tel:+5592988134434" className="text-sm font-light hover:text-white transition-colors">(92) 98813-4434</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-400 shrink-0" strokeWidth={1.5} />
                <a href="mailto:benhurpets@gmail.com" className="text-sm font-light hover:text-white transition-colors">benhurpets@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-serif text-xl mb-6">Funcionamento</h3>
            <div className="bg-emerald-900/50 rounded-3xl p-6 border border-emerald-800">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={20} className="text-orange-400" strokeWidth={1.5} />
                <span className="font-medium text-white">Aberto 24 Horas</span>
              </div>
              <p className="text-sm font-light mb-6">
                Nossa equipe veterinária está sempre a postos para atender seu pet.
              </p>
              <a
                href="https://maps.google.com/?q=Av.+Coronel+Teixeira,+02+-+Nova+Esperança,+Manaus"
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center bg-emerald-800 hover:bg-emerald-700 text-white py-3 rounded-full text-sm font-medium transition-colors border border-emerald-700"
              >
                Traçar Rota
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} Clínica Veterinária 24h - Ben-Hur Pets. Todos os direitos reservados.
          </p>
          <p className="text-xs font-light text-center md:text-right">
            Centro de Estética e Saúde Animal | Pet Shop Manaus | Banho e Tosa
          </p>
        </div>
      </div>
    </footer>
  );
}
