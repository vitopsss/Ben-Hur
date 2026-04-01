import { AnimatedSection } from '../components/AnimatedSection';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

export function Contato() {
  return (
    <div className="pt-24 pb-20">
      <AnimatedSection className="bg-emerald-50 py-24 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl text-emerald-950 mb-6">Fale Conosco</h1>
          <p className="text-xl text-stone-600 font-light">
            Estamos sempre prontos para atender você e seu pet. Escolha a melhor forma de entrar em contato.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Informações de Contato */}
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="font-serif text-4xl text-emerald-950 mb-6">Informações</h2>
                <p className="text-stone-600 font-light text-lg">
                  Nossa equipe está disponível 24 horas por dia, 7 dias por semana para emergências, agendamentos e dúvidas.
                </p>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-5">
                  <div className="bg-white border border-stone-200 p-4 rounded-full text-orange-500 shadow-sm">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-serif text-2xl text-emerald-950 mb-2">Endereço</h3>
                    <p className="text-stone-600 font-light">Av. Coronel Teixeira, 02 - Nova Esperança<br />Manaus - AM, 69037-473</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-white border border-stone-200 p-4 rounded-full text-orange-500 shadow-sm">
                    <MessageCircle size={24} strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-serif text-2xl text-emerald-950 mb-2">WhatsApp</h3>
                    <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5592988134434" target="_blank" rel="noreferrer" className="text-stone-600 hover:text-orange-500 font-light transition-colors">(92) 98813-4434</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-white border border-stone-200 p-4 rounded-full text-orange-500 shadow-sm">
                    <Phone size={24} strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-serif text-2xl text-emerald-950 mb-2">Telefone</h3>
                    <a href="tel:+5592988134434" className="text-stone-600 hover:text-orange-500 font-light transition-colors">(92) 98813-4434</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-white border border-stone-200 p-4 rounded-full text-orange-500 shadow-sm">
                    <Clock size={24} strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-serif text-2xl text-emerald-950 mb-2">Horário</h3>
                    <p className="text-stone-600 font-light">Aberto 24 Horas, todos os dias.</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Av.+Coronel+Teixeira,+02+-+Nova+Esperança,+Manaus"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-full font-medium text-lg transition-all w-full sm:w-auto mt-4"
              >
                <MapPin size={22} />
                <span>Como Chegar (Google Maps)</span>
              </a>
            </div>

            {/* Formulário */}
            <div className="bg-white p-10 md:p-12 rounded-[2rem] shadow-sm border border-stone-200">
              <h2 className="font-serif text-3xl text-emerald-950 mb-8">Envie uma Mensagem</h2>
              <form className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Seu Nome</label>
                  <input type="text" id="name" className="w-full px-5 py-4 rounded-xl border border-stone-200 focus:outline-none focus:ring-1 focus:ring-emerald-700 focus:border-emerald-700 transition-all bg-stone-50" placeholder="Como podemos te chamar?" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">WhatsApp / Telefone</label>
                  <input type="tel" id="phone" className="w-full px-5 py-4 rounded-xl border border-stone-200 focus:outline-none focus:ring-1 focus:ring-emerald-700 focus:border-emerald-700 transition-all bg-stone-50" placeholder="(92) 98813-4434" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">Assunto</label>
                  <select id="subject" className="w-full px-5 py-4 rounded-xl border border-stone-200 focus:outline-none focus:ring-1 focus:ring-emerald-700 focus:border-emerald-700 transition-all bg-stone-50">
                    <option>Agendar Consulta</option>
                    <option>Banho e Tosa</option>
                    <option>Dúvida sobre Pet Shop</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Mensagem</label>
                  <textarea id="message" rows={4} className="w-full px-5 py-4 rounded-xl border border-stone-200 focus:outline-none focus:ring-1 focus:ring-emerald-700 focus:border-emerald-700 transition-all resize-none bg-stone-50" placeholder="Conte-nos como podemos ajudar..."></textarea>
                </div>
                <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full font-medium text-lg transition-colors mt-4">
                  Enviar Mensagem
                </button>
                <p className="text-sm text-center text-stone-500 mt-2 font-light">
                  Para emergências, prefira ligar ou chamar no WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
