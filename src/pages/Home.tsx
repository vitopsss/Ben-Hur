import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeartPulse, MapPin, Phone, MessageCircle, Star, Clock, ShieldCheck, Stethoscope, Syringe, Scissors, ShoppingBag, Car, CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION - EDITORIAL SPLIT */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 border border-red-200 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Aberto 24 horas em Manaus
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium text-emerald-950 leading-[1] mb-4 tracking-tight"
              >
                Ben-Hur Pets
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-700 mb-6 leading-tight"
              >
                Seu pet merece um <span className="italic text-orange-500">cuidado profissional.</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed font-light"
              >
                Centro de estética e saúde animal 24 horas. Clínica veterinária, emergência, exames e banho e tosa com a estrutura que o seu melhor amigo precisa.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <Link
                  to="/emergencia-24h"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg shadow-red-600/20"
                >
                  <HeartPulse size={20} />
                  <span>Emergência 24h</span>
                </Link>
                <a
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=5592988134434"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg shadow-orange-500/20"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-[3/4] w-full max-w-md ml-auto rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?auto=format&fit=crop&w=800&q=80" 
                  alt="Cachorro sendo abraçado" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-12 -left-12 bg-white p-6 rounded-3xl shadow-xl border border-stone-100 max-w-[220px]">
                <div className="flex items-center gap-1 text-orange-400 mb-3">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="font-serif text-emerald-950 font-medium leading-tight text-lg">"A melhor clínica de Manaus, salvaram meu gato!"</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST / SOCIAL PROOF - EDITORIAL GRID */}
      <AnimatedSection className="bg-emerald-900 text-emerald-50 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start text-center divide-x divide-emerald-800">
            <div className="flex flex-col items-center justify-center gap-3 px-4">
              <span className="font-serif text-4xl md:text-5xl text-orange-400">4.9</span>
              <span className="text-xs text-emerald-200 uppercase tracking-widest font-medium">+500 Avaliações</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 px-4">
              <span className="font-serif text-4xl md:text-5xl text-orange-400">24h</span>
              <span className="text-xs text-emerald-200 uppercase tracking-widest font-medium">Sempre Abertos</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 px-4">
              <span className="font-serif text-4xl md:text-5xl text-orange-400">100%</span>
              <span className="text-xs text-emerald-200 uppercase tracking-widest font-medium">Estrutura Completa</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 px-4">
              <span className="font-serif text-4xl md:text-5xl text-orange-400">+10</span>
              <span className="text-xs text-emerald-200 uppercase tracking-widest font-medium">Especialidades</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* SOBRE A CLÍNICA - WARM ORGANIC */}
      <AnimatedSection className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-xl border border-stone-100">
                <img
                  src="/benhurloja.webp"
                  alt="Fachada da Ben-Hur Pets"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-6 leading-tight">
                Sobre a <span className="italic text-orange-500">Ben-Hur Pets</span>
              </h2>
              <p className="text-stone-600 text-lg font-light leading-relaxed mb-6">
                A Ben-Hur Pets nasceu do amor incondicional pelos animais e da necessidade de Manaus ter um centro de estética e saúde animal completo, confiável e sempre de portas abertas.
              </p>
              <p className="text-stone-600 text-lg font-light leading-relaxed mb-8">
                Nossa missão é proporcionar saúde, bem-estar e longevidade aos pets através de medicina veterinária de excelência, atendimento humanizado e estrutura completa 24 horas por dia.
              </p>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors shadow-md"
              >
                Conheça Nossa História
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* TUDO EM UM SÓ LUGAR - WARM ORGANIC CARDS */}
      <AnimatedSection className="bg-[#FDFBF7] py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-4 leading-tight">Tudo o que seu pet precisa em um só lugar</h2>
              <p className="text-stone-600 text-lg font-light">Da emergência ao banho e tosa, oferecemos uma estrutura completa para garantir a saúde e a felicidade do seu melhor amigo.</p>
            </div>
            <Link to="/servicos" className="hidden md:inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors">
              Ver todos os serviços <CheckCircle2 size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Stethoscope, title: 'Consultas', desc: 'Atendimento clínico geral e especialidades.' },
              { icon: HeartPulse, title: 'Emergência 24h', desc: 'Pronto-socorro veterinário sempre aberto.' },
              { icon: Scissors, title: 'Banho e Tosa', desc: 'Estética animal com carinho e higiene.' },
              { icon: ShoppingBag, title: 'Pet Shop', desc: 'Rações, medicamentos e acessórios.' },
              { icon: ShieldCheck, title: 'Internação', desc: 'Monitoramento contínuo 24 horas.' },
              { icon: CheckCircle2, title: 'Exames', desc: 'Laboratório e imagem rápidos e precisos.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 hover:shadow-md transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] font-serif text-8xl font-bold text-emerald-900 pointer-events-none">
                  0{i + 1}
                </div>
                <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <item.icon size={28} className="text-emerald-700 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-emerald-950 mb-3">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* EMERGÊNCIA 24H HIGHLIGHT - DRAMATIC EDITORIAL */}
      <AnimatedSection className="bg-red-600 text-white py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 border border-red-400 bg-red-700/50 px-4 py-1.5 rounded-full text-sm font-medium mb-8 tracking-wide uppercase">
                <HeartPulse size={16} className="animate-pulse text-white" />
                Atendimento 24 Horas
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-white">Se for urgente, <br/><span className="italic text-red-200">fale agora.</span></h2>
              <p className="text-red-100 text-lg mb-10 max-w-xl font-light leading-relaxed">
                Nossa equipe de plantão está pronta para receber seu pet com agilidade, estrutura completa e o cuidado necessário para salvar vidas. Não espere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+5592988134434"
                  className="flex items-center justify-center gap-2 bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-full font-medium text-lg transition-colors"
                >
                  <Phone size={20} />
                  <span>Ligar Agora</span>
                </a>
                <a
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=5592988134434"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-transparent border border-red-300 hover:bg-red-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="aspect-[4/3] w-full rounded-[2rem] overflow-hidden relative border-4 border-red-500/30">
                <img
                  src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80"
                  alt="Cachorro precisando de atendimento"
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* COMO FUNCIONA */}
      <AnimatedSection className="bg-[#FDFBF7] py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-4 leading-tight">Como funciona nosso atendimento</h2>
            <p className="text-stone-600 text-lg font-light">Um processo simples, rápido e focado no bem-estar do seu pet.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-emerald-100 z-0"></div>
            
            {[
              { step: '1', title: 'Entre em contato', desc: 'Ligue ou mande mensagem no WhatsApp a qualquer hora.' },
              { step: '2', title: 'Informe a situação', desc: 'Nossa equipe fará uma triagem rápida para entender a necessidade.' },
              { step: '3', title: 'Venha até a clínica', desc: 'Traga seu pet ou solicite nosso serviço de Táxi Pet.' },
              { step: '4', title: 'Atendimento ágil', desc: 'Seu pet recebe cuidado imediato com estrutura completa.' },
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-[#FDFBF7] border-2 border-emerald-100 rounded-full flex items-center justify-center font-serif text-3xl text-orange-500 shadow-sm mb-6">
                  {item.step}
                </div>
                <h3 className="font-serif text-2xl text-emerald-950 mb-3">{item.title}</h3>
                <p className="text-stone-600 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* DEPOIMENTOS */}
      <AnimatedSection className="bg-emerald-50 py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-6 leading-tight">
              O que dizem <span className="italic text-orange-500">nossos clientes</span>
            </h2>
            <p className="text-stone-600 text-lg font-light leading-relaxed">
              A satisfação e a saúde dos pets são a nossa maior recompensa. Confira as experiências de quem confia na Ben-Hur Pets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "iago cadete Rocha",
                text: "Gostei muito da clínica, recepção e atendimento nota 10. Tenho uma princesinha que foi para banho e tosa, acolheram e fizeram o que eu pedir e me falaram sugestões que poderiam ser feito nela de forma respeitosa. Volto sempre ❤️",
              },
              {
                name: "valeria pedraca",
                text: "A Clínica preza pelo atendimento ao cliente e pacientes que vai além de técnicas científicas. É humanizada!",
              },
              {
                name: "Roberto Bezerra",
                text: "Gostaria de agradecer a todos da clínica veterinária Ben-Hur pets pelo excelente atendimento a Mila na qual chegou bastante debilitada e graças ao excelente atendimento ela saiu ótima, esperta e bem ativa super recomendo atendimento diferenciado e preços justo e bem em conta obrigado a todos que cuidaram da Mila.",
              },
              {
                name: "Lauren",
                text: "Adoro o atendimento! Extremamente humanizado 🥰 Graças a esses profissionais maravilhosos, meu bebê de 4 patas está bem! 🤍 Serviços de banho e tosa de ótima qualidade também",
              },
              {
                name: "Fabielle Freitas",
                text: "Atendimento perfeito e minha cachorra foi bem tratada. Preços em conta e o banho terminou no horário combinado. Recomendo!",
              },
              {
                name: "Marcos Costa",
                text: "Gostei muito do atendimento, minha gata ficou internada aí, ficou boa e gostei dos boletins médicos, coisas que eu não via e nem sabia que existia para animais, atendimento humanizado. Parabéns, clínica limpa e profissionais atenciosos !!",
              },
              {
                name: "Luciana Martins",
                text: "Minha filha de quatro patas é muito bem cuidada no ben-hur, todos os funcionários são super cuidadosos. Amo e super recomendo :)",
              },
              {
                name: "Ilanice Rezende",
                text: "Excelente atendimento, excelentes profissionais! Minha gatinha, infelizmente não sobreviveu à cirurgia, que era de risco, mas fizeram tudo que foi possível para salvá-la e sou imensamente grata por isso! Recomendo a clínica.",
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-emerald-100 flex flex-col h-full">
                <div className="flex gap-1 mb-4 text-orange-400">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed font-light flex-grow mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-emerald-50">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-800 font-serif font-bold">
                    {testimonial.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-medium text-emerald-950 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-stone-500">Cliente Ben-Hur Pets</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA FINAL - WARM ORGANIC */}
      <AnimatedSection className="bg-emerald-900 text-emerald-50 text-center py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 max-w-3xl mx-auto leading-tight text-white">
            O seu pet merece <br/><span className="italic text-orange-400">o melhor cuidado.</span>
          </h2>
          <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto font-light">
            Fale com a Ben-Hur Pets agora. Estamos prontos para cuidar de quem você mais ama.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?1=pt_BR&phone=5592988134434"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg shadow-orange-500/20"
            >
              <MessageCircle size={20} />
              <span>Falar no WhatsApp</span>
            </a>
            <a
              href="https://maps.google.com/?q=Av.+Coronel+Teixeira,+02+-+Nova+Esperança,+Manaus"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-transparent border border-emerald-600 hover:border-emerald-400 text-white px-8 py-4 rounded-full font-medium text-lg transition-all"
            >
              <MapPin size={20} />
              <span>Como Chegar</span>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
