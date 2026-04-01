import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { ShieldCheck, HeartPulse, Users, Star } from 'lucide-react';

export function Sobre() {
  return (
    <div className="pt-24 pb-20">
      <AnimatedSection className="bg-emerald-50 py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl text-emerald-950 mb-6">Nossa História</h1>
          <p className="text-lg text-stone-600 leading-relaxed font-light">
            A Ben-Hur Pets nasceu do amor incondicional pelos animais e da necessidade de Manaus ter um centro de estética e saúde animal completo, confiável e sempre de portas abertas.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/benhurloja.webp"
                alt="Equipe Ben-Hur Pets"
                className="rounded-[2rem] shadow-xl w-full object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="font-serif text-4xl text-emerald-950 mb-4">Missão</h2>
                <p className="text-stone-600 leading-relaxed font-light text-lg">
                  Proporcionar saúde, bem-estar e longevidade aos pets através de medicina veterinária de excelência, atendimento humanizado e estrutura completa 24 horas por dia.
                </p>
              </div>
              <div>
                <h2 className="font-serif text-4xl text-emerald-950 mb-4">Visão</h2>
                <p className="text-stone-600 leading-relaxed font-light text-lg">
                  Ser o centro de estética e saúde animal de maior referência e confiança em Manaus, reconhecido pela agilidade em emergências e pelo carinho em cada atendimento.
                </p>
              </div>
              <div>
                <h2 className="font-serif text-4xl text-emerald-950 mb-6">Valores</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: HeartPulse, text: 'Amor aos animais' },
                    { icon: ShieldCheck, text: 'Ética e Transparência' },
                    { icon: Users, text: 'Atendimento Humanizado' },
                    { icon: Star, text: 'Excelência Médica' },
                  ].map((val, i) => (
                    <li key={i} className="flex items-center gap-4 bg-white border border-stone-200 p-5 rounded-2xl">
                      <div className="bg-emerald-50 p-2 rounded-full">
                        <val.icon className="text-orange-500" size={24} strokeWidth={1.5} />
                      </div>
                      <span className="font-medium text-emerald-950">{val.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
