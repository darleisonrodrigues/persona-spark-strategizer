
import { Card } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Conte sobre seu Negócio',
      description: 'Preencha um formulário simples com informações sobre sua empresa, produtos e desafios.',
      icon: '📝'
    },
    {
      step: '02',
      title: 'IA Processa os Dados',
      description: 'Nossa inteligência artificial analisa suas informações e identifica padrões do mercado.',
      icon: '🧠'
    },
    {
      step: '03',
      title: 'Receba sua Persona',
      description: 'Obtenha um perfil detalhado do seu cliente ideal com estratégias personalizadas.',
      icon: '🎯'
    },
    {
      step: '04',
      title: 'Baixe o Relatório',
      description: 'Faça download do PDF completo para compartilhar com sua equipe e implementar as estratégias.',
      icon: '📄'
    }
  ];

  return (
    <section className="py-20 bg-gradient-noir relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glass/30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Um processo simples e rápido para transformar dados em insights valiosos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative" data-aos="fade-up" data-aos-delay={index * 100}>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-elegant transform -translate-x-1/2 z-0"></div>
              )}
              
              <Card className="p-8 relative z-10 hover:shadow-2xl transition-all duration-500 bg-gradient-glass backdrop-blur-sm border-white/30 hover:border-white/50 hover:scale-105 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-charcoal rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                
                <div className="text-sm font-bold text-gray-300 mb-3 tracking-wider">
                  PASSO {step.step}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-200 leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
