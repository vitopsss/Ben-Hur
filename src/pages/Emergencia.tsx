import { AnimatedSection } from '../components/AnimatedSection';
import { HeartPulse, Phone, MapPin, AlertTriangle, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export function Emergencia() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-24 pb-20">
      <AnimatedSection className="bg-red-700 text-white py-20 lg:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584820927498-cafe2c1c6a63?auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-white text-red-600 rounded-full mb-10 shadow-2xl animate-pulse-slow"
          >
            <HeartPulse size={48} strokeWidth={1.5} />
          </motion.div>
          
          <h1 className="font-serif text-5xl md:text-7xl mb-8 tracking-tight text-white">
            Emergência 24h
          </h1>
          <p className="text-xl md:text-2xl text-red-100 font-light max-w-3xl mx-auto mb-16 leading-relaxed">
            Seu pet está em perigo? Nossa equipe médica está de plantão agora mesmo em Manaus. Aja rápido.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-2xl mx-auto">
            <a
              href="tel:+5592988134434"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-red-700 hover:bg-red-50 px-10 py-5 rounded-full font-medium text-xl transition-all shadow-xl"
            >
              <Phone size={24} />
              <span>LIGAR AGORA</span>
            </a>
            <a
              href="https://maps.google.com/?q=Av.+Coronel+Teixeira,+02+-+Nova+Esperança,+Manaus"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border border-red-400 hover:border-red-300 text-white px-10 py-5 rounded-full font-medium text-xl transition-all"
            >
              <MapPin size={24} />
              <span>TRAÇAR ROTA</span>
            </a>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="bg-white rounded-[3rem] shadow-sm border border-stone-200 p-10 md:p-16 -mt-32 relative z-20">
            <h2 className="font-serif text-4xl text-stone-900 text-center mb-16 flex items-center justify-center gap-4">
              <AlertTriangle className="text-red-600" size={36} strokeWidth={1.5} />
              O que fazer em caso de emergência?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-stone-50 border border-stone-200 text-red-600 rounded-full flex items-center justify-center font-serif text-3xl mb-6">1</div>
                <h3 className="font-serif text-2xl text-stone-900 mb-4">Mantenha a calma</h3>
                <p className="text-stone-600 font-light leading-relaxed">Seu pet percebe seu nervosismo. Respire fundo e tente mantê-lo o mais tranquilo possível.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-stone-50 border border-stone-200 text-red-600 rounded-full flex items-center justify-center font-serif text-3xl mb-6">2</div>
                <h3 className="font-serif text-2xl text-stone-900 mb-4">Ligue para nós</h3>
                <p className="text-stone-600 font-light leading-relaxed">Avise que está a caminho. Nossa equipe preparará a estrutura para receber seu pet imediatamente.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-stone-50 border border-stone-200 text-red-600 rounded-full flex items-center justify-center font-serif text-3xl mb-6">3</div>
                <h3 className="font-serif text-2xl text-stone-900 mb-4">Venha com segurança</h3>
                <p className="text-stone-600 font-light leading-relaxed">Transporte seu pet com cuidado. Se não puder dirigir, solicite nosso Táxi Pet de urgência.</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white border border-stone-200 p-8 rounded-[2rem] flex items-start gap-5 shadow-sm">
              <Clock className="text-orange-500 shrink-0 mt-1" size={32} strokeWidth={1.5} />
              <div>
                <h3 className="font-serif text-2xl text-stone-900 mb-3">Sempre Abertos</h3>
                <p className="text-stone-600 font-light leading-relaxed">Não importa a hora, feriado ou final de semana. Nossa porta está sempre aberta para salvar vidas.</p>
              </div>
            </div>
            <div className="bg-white border border-stone-200 p-8 rounded-[2rem] flex items-start gap-5 shadow-sm">
              <ShieldCheck className="text-orange-500 shrink-0 mt-1" size={32} strokeWidth={1.5} />
              <div>
                <h3 className="font-serif text-2xl text-stone-900 mb-3">Estrutura de UTI</h3>
                <p className="text-stone-600 font-light leading-relaxed">Equipamentos modernos, oxigênio, monitoramento contínuo e exames rápidos no local.</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
