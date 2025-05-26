
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, MapPin, Briefcase, DollarSign } from 'lucide-react';

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

interface PersonaCardProps {
  persona: PersonaData;
}

const PersonaCard = ({ persona }: PersonaCardProps) => {
  return (
    <Card className="h-fit">
      <CardHeader className="bg-gradient-primary text-white">
        <CardTitle className="flex items-center gap-2">
          <User className="w-6 h-6" />
          Perfil da Persona
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="text-center pb-6 border-b">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
            {persona.name.charAt(0)}
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{persona.name}</h3>
          <p className="text-gray-600">{persona.age} • {persona.profession}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-gray-600">Profissão:</span>
          </div>
          <span className="text-sm font-medium">{persona.profession}</span>

          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-gray-600">Renda:</span>
          </div>
          <span className="text-sm font-medium">{persona.income}</span>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-gray-600">Localização:</span>
          </div>
          <span className="text-sm font-medium">{persona.location}</span>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Background</h4>
          <p className="text-sm text-gray-600">{persona.background}</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Objetivos e Sonhos</h4>
          <ul className="list-disc list-inside space-y-1">
            {persona.goals.map((goal, index) => (
              <li key={index} className="text-sm text-gray-600">{goal}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Desafios e Dores</h4>
          <ul className="list-disc list-inside space-y-1">
            {persona.challenges.map((challenge, index) => (
              <li key={index} className="text-sm text-gray-600">{challenge}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Como seu negócio pode ajudar</h4>
          <p className="text-sm text-gray-600">{persona.solution}</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Canais de Comunicação Preferidos</h4>
          <div className="flex flex-wrap gap-2">
            {persona.channels.map((channel, index) => (
              <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                {channel}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Objeções Comuns</h4>
          <ul className="list-disc list-inside space-y-1">
            {persona.objections.map((objection, index) => (
              <li key={index} className="text-sm text-gray-600">{objection}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Citações Representativas</h4>
          {persona.quotes.map((quote, index) => (
            <blockquote key={index} className="text-sm text-gray-600 italic border-l-4 border-purple-300 pl-4 mb-2">
              "{quote}"
            </blockquote>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonaCard;
