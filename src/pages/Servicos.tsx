import { AnimatedSection } from '../components/AnimatedSection';
import { Stethoscope, Syringe, Scissors, Car, HeartPulse, CheckCircle2 } from 'lucide-react';

export function Servicos() {
  const services = [
    {
      icon: Stethoscope,
      title: 'Clínica Veterinária',
      desc: 'Consultas gerais e com especialistas para cães e gatos. Prevenção, diagnóstico e tratamento com foco no bem-estar.',
      benefits: ['Atendimento humanizado', 'Especialistas', 'Ambiente tranquilo'],
    },
    {
      icon: CheckCircle2,
      title: 'Exames Laboratoriais',
      desc: 'Laboratório próprio e equipamentos de imagem modernos para diagnósticos rápidos e precisos, essenciais em emergências.',
      benefits: ['Resultados rápidos', 'Ultrassom', 'Raio-X digital'],
    },
    {
      icon: HeartPulse,
      title: 'Internação 24h',
      desc: 'Estrutura completa para recuperação intensiva, com monitoramento veterinário constante e muito carinho.',
      benefits: ['Monitoramento 24h', 'Conforto', 'Equipe dedicada'],
    },
    {
      icon: Syringe,
      title: 'Vacinas',
      desc: 'Imunização completa com vacinas importadas e seguras para proteger seu pet contra as principais doenças.',
      benefits: ['Vacinas importadas', 'Carteirinha atualizada', 'Lembretes'],
    },
    {
      icon: Scissors,
      title: 'Banho e Tosa',
      desc: 'Estética animal completa: banho, tosa na tesoura ou máquina, tosa higiênica, corte de unhas e limpeza de ouvidos.',
      benefits: ['Profissionais qualificados', 'Produtos premium', 'Água aquecida'],
    },
    {
      icon: Car,
      title: 'Táxi Pet',
      desc: 'Transporte seguro e climatizado para buscar e levar seu pet com todo o conforto, ideal para dias de banho ou consultas.',
      benefits: ['Segurança', 'Climatizado', 'Motoristas treinados'],
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <AnimatedSection className="bg-emerald-900 text-white py-24 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Nossos Serviços</h1>
          <p className="text-xl text-emerald-100 font-light">
            Estrutura completa e profissionais apaixonados pelo que fazem para oferecer o melhor cuidado ao seu pet em Manaus.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-stone-100 hover:shadow-md transition-all group">
                <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mb-8 group-hover:bg-emerald-600 transition-colors">
                  <srv.icon size={28} className="text-emerald-700 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-3xl text-emerald-950 mb-4">{srv.title}</h3>
                <p className="text-stone-600 mb-8 font-light leading-relaxed">{srv.desc}</p>
                <ul className="space-y-3 mb-10">
                  {srv.benefits.map((ben, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium text-stone-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      {ben}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=5592988134434"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-full bg-stone-100 hover:bg-emerald-700 text-emerald-950 hover:text-white py-4 rounded-full font-medium transition-colors"
                >
                  Agendar Agora
                </a>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
