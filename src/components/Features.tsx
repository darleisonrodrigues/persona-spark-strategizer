
import { Card } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: '🤖',
      title: 'Inteligência Artificial Avançada',
      description: 'Nossa IA analisa profundamente os dados do seu negócio para criar personas precisas e relevantes.'
    },
    {
      icon: '⚡',
      title: 'Resultados em Minutos',
      description: 'Obtenha personas completas e estratégias personalizadas em questão de minutos.'
    },
    {
      icon: '📊',
      title: 'Análise Comportamental',
      description: 'Entenda não apenas quem é seu cliente, mas como ele pensa e se comporta.'
    },
    {
      icon: '🎨',
      title: 'Estratégias Visuais',
      description: 'Receba sugestões de conteúdo visual e canais de marketing mais eficazes.'
    },
    {
      icon: '💼',
      title: 'Foco em Pequenos Negócios',
      description: 'Desenvolvido especificamente para as necessidades de micro e pequenas empresas.'
    },
    {
      icon: '🔄',
      title: 'Sempre Atualizado',
      description: 'Gere quantas personas precisar conforme seu negócio evolui.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher o PersonaAI?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma ferramenta completa que combina tecnologia de ponta com simplicidade de uso
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white border-0 shadow-md hover:scale-105 transform transition-transform"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
