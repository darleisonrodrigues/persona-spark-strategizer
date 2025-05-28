
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-noir py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" data-aos="fade-up">
            Descubra seu{' '}
            <span className="bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
              Cliente Ideal
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Gere personas detalhadas e estratégias de vendas personalizadas para seu negócio em minutos
          </p>

          <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="400">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg" onClick={() => window.location.href = '/generator'}>
              Gerar Minha Persona Agora
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="600">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Personas Detalhadas</h3>
              <p className="text-white/80">
                Perfis completos com características demográficas, comportamentais e psicográficas
              </p>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Estratégias de Vendas</h3>
              <p className="text-white/80">
                Táticas personalizadas baseadas no perfil da sua persona ideal
              </p>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Relatório em PDF</h3>
              <p className="text-white/80">
                Baixe um relatório completo para compartilhar com sua equipe
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
