import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Generator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    products: '',
    problem: '',
    differentials: '',
    currentTarget: '',
    challenges: '',
    channels: '',
    tone: ''
  });

  const navigate = useNavigate();
  const totalSteps = 3;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Dados do formulário:', formData);
    
    // Validação básica
    if (!formData.businessName || !formData.businessType || !formData.products || !formData.problem || !formData.differentials || !formData.challenges) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Navegar para a página de resultados passando os dados
    navigate('/results', { state: { formData } });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="businessName" className="text-sm font-medium text-gray-700">
                Nome do seu Negócio/Projeto *
              </Label>
              <Input
                id="businessName"
                value={formData.businessName}
                onChange={(e) => handleInputChange('businessName', e.target.value)}
                placeholder="Ex: Minha Loja Online"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="businessType" className="text-sm font-medium text-gray-700">
                Tipo de Negócio/Setor *
              </Label>
              <Select onValueChange={(value) => handleInputChange('businessType', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Selecione o tipo do seu negócio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="servicos">Prestação de Serviços</SelectItem>
                  <SelectItem value="consultoria">Consultoria</SelectItem>
                  <SelectItem value="restaurante">Alimentação</SelectItem>
                  <SelectItem value="infoprodutos">Infoprodutos</SelectItem>
                  <SelectItem value="saude">Saúde e Bem-estar</SelectItem>
                  <SelectItem value="educacao">Educação</SelectItem>
                  <SelectItem value="tecnologia">Tecnologia</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="products" className="text-sm font-medium text-gray-700">
                Principais Produtos/Serviços *
              </Label>
              <Textarea
                id="products"
                value={formData.products}
                onChange={(e) => handleInputChange('products', e.target.value)}
                placeholder="Descreva os principais produtos ou serviços que você oferece..."
                className="mt-1"
                rows={4}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="problem" className="text-sm font-medium text-gray-700">
                Qual problema seu produto/serviço resolve? *
              </Label>
              <Textarea
                id="problem"
                value={formData.problem}
                onChange={(e) => handleInputChange('problem', e.target.value)}
                placeholder="Descreva o principal problema que você resolve para seus clientes..."
                className="mt-1"
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="differentials" className="text-sm font-medium text-gray-700">
                Quais são seus diferenciais? *
              </Label>
              <Textarea
                id="differentials"
                value={formData.differentials}
                onChange={(e) => handleInputChange('differentials', e.target.value)}
                placeholder="O que te diferencia da concorrência? Qualidade, preço, atendimento..."
                className="mt-1"
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="currentTarget" className="text-sm font-medium text-gray-700">
                Quem você acha que é seu público-alvo atual?
              </Label>
              <Textarea
                id="currentTarget"
                value={formData.currentTarget}
                onChange={(e) => handleInputChange('currentTarget', e.target.value)}
                placeholder="Descreva quem você acredita que são seus clientes ideais..."
                className="mt-1"
                rows={3}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="challenges" className="text-sm font-medium text-gray-700">
                Principais desafios de vendas *
              </Label>
              <Textarea
                id="challenges"
                value={formData.challenges}
                onChange={(e) => handleInputChange('challenges', e.target.value)}
                placeholder="Quais são suas maiores dificuldades para vender? Ex: encontrar clientes, convencer sobre o preço..."
                className="mt-1"
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="channels" className="text-sm font-medium text-gray-700">
                Onde você divulga seu negócio?
              </Label>
              <Textarea
                id="channels"
                value={formData.channels}
                onChange={(e) => handleInputChange('channels', e.target.value)}
                placeholder="Instagram, Facebook, WhatsApp, boca a boca, site..."
                className="mt-1"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="tone" className="text-sm font-medium text-gray-700">
                Tom de voz da marca
              </Label>
              <Select onValueChange={(value) => handleInputChange('tone', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Como você se comunica com seus clientes?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="formal">Formal e Profissional</SelectItem>
                  <SelectItem value="informal">Informal e Amigável</SelectItem>
                  <SelectItem value="divertido">Divertido e Descontraído</SelectItem>
                  <SelectItem value="tecnico">Técnico e Especializado</SelectItem>
                  <SelectItem value="inspiracional">Inspiracional e Motivador</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-glass backdrop-blur-xl">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vamos criar sua persona ideal
          </h1>
          <p className="text-lg text-white">
            Responda algumas perguntas sobre seu negócio e receba uma análise completa
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-white">
              Etapa {currentStep} de {totalSteps}
            </span>
            <span className="text-sm font-medium text-white">
              {Math.round((currentStep / totalSteps) * 100)}% completo
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card className="p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {currentStep === 1 && "Informações Básicas"}
              {currentStep === 2 && "Sobre seu Negócio"}
              {currentStep === 3 && "Estratégia e Comunicação"}
            </h2>
            <p className="text-gray-600">
              {currentStep === 1 && "Vamos começar com algumas informações básicas sobre seu negócio."}
              {currentStep === 2 && "Agora queremos entender melhor como você atende seus clientes."}
              {currentStep === 3 && "Por último, vamos falar sobre seus desafios e estratégias."}
            </p>
          </div>

          {renderStep()}

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="px-6"
            >
              Anterior
            </Button>

            {currentStep === totalSteps ? (
              <Button
                onClick={handleSubmit}
                className="bg-gradient-primary hover:opacity-90 px-8"
              >
                Gerar Persona
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                className="bg-gradient-primary hover:opacity-90 px-6"
              >
                Próximo
              </Button>
            )}
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Suas informações são seguras e utilizadas apenas para gerar sua persona personalizada.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Generator;
