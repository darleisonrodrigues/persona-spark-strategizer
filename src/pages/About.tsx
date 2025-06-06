import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-black mb-4">Sobre o Minha Persona</h1>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Desenvolvido especialmente para ajudar pequenos empreendedores a conhecer melhor seus clientes
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-8 bg-gradient-glass backdrop-blur-sm border-white/20 shadow-lg text-black" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl font-bold text-black mb-4">Nossa Missão</h2>
            <p className="text-gray-800 leading-relaxed">
              Acreditamos que todo empreendedor merece ter acesso a ferramentas profissionais de marketing, 
              independentemente do tamanho do seu negócio. Nossa missão é democratizar o conhecimento sobre 
              personas e estratégias de vendas através da inteligência artificial, tornando essas informações 
              acessíveis e acionáveis para pequenos negócios.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-glass backdrop-blur-sm border-white/20 shadow-lg text-black" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-2xl font-bold text-black mb-4">Como Surgiu</h2>
            <p className="text-gray-800 leading-relaxed mb-4">O Minha Persona nasceu da observação de que muitos pequenos empreendedores brasileiros enfrentam dificuldades para definir claramente quem é seu público-alvo. Sem essa definição, acabam "atirando para todos os lados" em suas estratégias de marketing, desperdiçando recursos preciosos.</p>
            <p className="text-gray-800 leading-relaxed">
              Combinando nossa experiência em marketing digital com o poder da inteligência artificial, 
              criamos uma solução que transforma dados simples do negócio em insights profundos sobre 
              o cliente ideal.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-glass backdrop-blur-sm border-white/20 shadow-lg text-black" data-aos="fade-up" data-aos-delay="300">
            <h2 className="text-2xl font-bold text-black mb-4">Nossa Tecnologia</h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              Utilizamos algoritmos avançados de processamento de linguagem natural para analisar as 
              informações do seu negócio. Nossa IA foi treinada com milhares de casos de pequenos 
              negócios brasileiros, permitindo que ela compreenda as nuances do mercado nacional.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gradient-noir/50 p-6 rounded-lg border border-white/20">
                <h3 className="font-semibold text-black mb-2">🔒 Segurança</h3>
                <p className="text-black text-sm">
                  Todos os dados são processados de forma segura e não são armazenados após a geração da persona.
                </p>
              </div>
              <div className="bg-gradient-noir/50 p-6 rounded-lg border border-white/20">
                <h3 className="font-semibold text-black mb-2">⚡ Velocidade</h3>
                <p className="text-black text-sm">
                  Resultados em minutos, não em dias como consultorias tradicionais.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-glass backdrop-blur-sm border-white/20 shadow-lg text-black" data-aos="fade-up" data-aos-delay="400">
            <h2 className="text-2xl font-bold text-black mb-4">Para Quem é o Minha Persona</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-white mb-3">✅ Ideal para:</h3>
                <ul className="space-y-2 text-black">
                  <li>• Micro e pequenas empresas</li>
                  <li>• Freelancers e consultores</li>
                  <li>• Startups em fase inicial</li>
                  <li>• E-commerces</li>
                  <li>• Prestadores de serviços</li>
                  <li>• Criadores de infoprodutos</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">💡 Benefícios:</h3>
                <ul className="space-y-2 text-black">
                  <li>• Marketing mais eficiente</li>
                  <li>• Vendas mais assertivas</li>
                  <li>• Economia de recursos</li>
                  <li>• Mensagens mais relevantes</li>
                  <li>• Melhor ROI em publicidade</li>
                  <li>• Decisões baseadas em dados</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-noir text-white shadow-lg" data-aos="fade-up" data-aos-delay="500">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">
                Pronto para conhecer seu cliente ideal?
              </h2>
              <p className="text-white/90 mb-6">
                Junte-se a centenas de empreendedores que já transformaram seus negócios
              </p>
              <button onClick={() => window.location.href = '/generator'} className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors shadow-lg">
                Começar Agora
              </button>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
