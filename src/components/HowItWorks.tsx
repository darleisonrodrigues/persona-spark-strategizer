
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
    <section className="py-20 bg-gradient-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Um processo simples e rápido para transformar dados em insights valiosos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative" data-aos="fade-up" data-aos-delay={index * 100}>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-primary transform -translate-x-1/2 z-0"></div>
              )}
              
              <Card className="p-6 relative z-10 hover:shadow-xl transition-all duration-300 bg-white border-slate-200 hover:border-blue-200">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                
                <div className="text-sm font-bold text-blue-600 mb-2">
                  PASSO {step.step}
                </div>
                
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed">
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
