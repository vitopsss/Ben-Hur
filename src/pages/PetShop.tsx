import { AnimatedSection } from '../components/AnimatedSection';
import { ShoppingBag, MessageCircle } from 'lucide-react';

export function PetShop() {
  return (
    <div className="pt-24 pb-20">
      <AnimatedSection className="bg-emerald-800 text-emerald-50 py-24 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <ShoppingBag size={48} className="mx-auto mb-8 text-orange-400" strokeWidth={1.5} />
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Pet Shop Completo</h1>
          <p className="text-xl text-emerald-100 font-light">
            As melhores marcas de rações, medicamentos e acessórios para o seu pet, disponíveis 24 horas.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { title: 'Medicamentos', img: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=800&q=80', desc: 'Farmácia veterinária completa para garantir o tratamento contínuo do seu pet.' },
              { title: 'Rações Premium', img: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80', desc: 'Alimentação de alta qualidade, dietas terapêuticas e petiscos saudáveis.' },
              { title: 'Acessórios', img: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=800&q=80', desc: 'Coleiras, guias, caminhas, brinquedos e produtos de higiene.' },
            ].map((cat, i) => (
              <div key={i} className="rounded-[2rem] overflow-hidden shadow-sm border border-stone-200 group bg-white flex flex-col h-full">
                <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent flex items-end p-6 md:p-8">
                    <h3 className="font-serif text-2xl lg:text-3xl text-white leading-normal drop-shadow-md w-full break-words pb-1">{cat.title}</h3>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <p className="text-stone-600 mb-8 font-light leading-relaxed flex-grow">{cat.desc}</p>
                  <a
                    href="https://api.whatsapp.com/send?1=pt_BR&phone=5592988134434"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-4 rounded-full font-medium text-sm lg:text-base transition-colors mt-auto"
                  >
                    <MessageCircle size={18} className="shrink-0" />
                    <span>Consultar Estoque</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-emerald-900 rounded-[3rem] p-10 md:p-16 text-center max-w-4xl mx-auto shadow-2xl">
            <h2 className="font-serif text-4xl text-white mb-6">Precisa de algo específico?</h2>
            <p className="text-lg text-emerald-100 mb-10 font-light max-w-2xl mx-auto">
              Nossa equipe do Pet Shop está pronta para ajudar você a encontrar exatamente o que seu pet precisa. Fale conosco pelo WhatsApp para verificar disponibilidade e preços.
            </p>
            <a
              href="https://api.whatsapp.com/send?1=pt_BR&phone=5592988134434"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-100 text-emerald-900 px-10 py-5 rounded-full font-medium text-lg transition-all"
            >
              <MessageCircle size={22} />
              <span>Falar com o Pet Shop</span>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
