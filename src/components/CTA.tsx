
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card className="p-8 md:p-12 bg-white/10 backdrop-blur-sm border-white/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para conhecer seu cliente ideal?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Descubra como vender mais conhecendo melhor seu público-alvo com nossa ferramenta gratuita.
          </p>

          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/generator'}
            >
              Gerar Persona Gratuitamente
            </Button>
          </div>

          <div className="mt-8 text-white/80">
            <p className="text-sm">
              ✅ Totalmente Gratuito • ✅ Sem Cadastro • ✅ Resultados em Minutos
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
