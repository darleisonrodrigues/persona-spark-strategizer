
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PersonaCard from '@/components/PersonaCard';
import StrategiesCard from '@/components/StrategiesCard';
import { Button } from '@/components/ui/button';
import { generatePersona } from '@/utils/personaGenerator';

interface PersonaData {
  name: string;
  age: string;
  profession: string;
  income: string;
  location: string;
  background: string;
  goals: string[];
  challenges: string[];
  solution: string;
  channels: string[];
  objections: string[];
  quotes: string[];
}

interface StrategiesData {
  content: string[];
  marketingChannels: string[];
  salesArguments: string[];
  approach: string[];
  partnerships: string[];
}

const Results = () => {
  const location = useLocation();
  const [persona, setPersona] = useState<PersonaData | null>(null);
  const [strategies, setStrategies] = useState<StrategiesData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const generateResults = async () => {
      try {
        const data = location.state?.formData;
        if (!data) {
          window.location.href = '/generator';
          return;
        }

        setFormData(data);
        console.log('Gerando persona para:', data);

        const result = await generatePersona(data);
        setPersona(result.persona);
        setStrategies(result.strategies);
      } catch (error) {
        console.error('Erro ao gerar persona:', error);
      } finally {
        setIsLoading(false);
      }
    };

    generateResults();
  }, [location.state]);

  const handleDownloadPDF = () => {
    console.log('Iniciando download do PDF...');
    // Implementar download PDF aqui
    alert('Funcionalidade de PDF será implementada em breve!');
  };

  const handleGenerateNew = () => {
    window.location.href = '/generator';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto mb-8"></div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Gerando sua persona ideal...
            </h2>
            <p className="text-gray-600">
              Nossa IA está analisando os dados do seu negócio para criar a persona perfeita.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sua Persona Ideal Foi Criada!
          </h1>
          <p className="text-lg text-gray-600">
            Aqui está o perfil completo do seu cliente ideal e estratégias personalizadas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {persona && <PersonaCard persona={persona} />}
          {strategies && <StrategiesCard strategies={strategies} />}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleDownloadPDF}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 px-8"
          >
            Baixar Relatório em PDF
          </Button>
          
          <Button
            onClick={handleGenerateNew}
            size="lg"
            variant="outline"
            className="px-8"
          >
            Gerar Nova Persona
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Persona gerada com inteligência artificial baseada nos dados do seu negócio.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Results;
