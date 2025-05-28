
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-sophisticated relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <Card className="p-12 md:p-16 bg-gradient-glass backdrop-blur-xl border-white/30 shadow-2xl" data-aos="zoom-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Pronto para conhecer seu cliente ideal?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Descubra como vender mais conhecendo melhor seu público-alvo com nossa ferramenta gratuita.
          </p>

          <div className="flex justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 font-bold px-10 py-5 text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/generator'}
            >
              Gerar Persona Gratuitamente
            </Button>
          </div>

          <div className="text-white/90">
            <p className="text-lg font-semibold">
              ✅ Totalmente Gratuito • ✅ Sem Cadastro • ✅ Resultados em Minutos
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
