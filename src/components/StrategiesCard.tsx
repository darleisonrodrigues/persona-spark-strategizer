
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, TrendingUp, MessageSquare, Users, Handshake } from 'lucide-react';

interface StrategiesData {
  content: string[];
  marketingChannels: string[];
  salesArguments: string[];
  approach: string[];
  partnerships: string[];
}

interface StrategiesCardProps {
  strategies: StrategiesData;
}

const StrategiesCard = ({ strategies }: StrategiesCardProps) => {
  return (
    <Card className="h-fit">
      <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <CardTitle className="flex items-center gap-2">
          <Target className="w-6 h-6" />
          Estratégias Personalizadas
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare className="w-5 h-5 text-green-600" />
            <h4 className="font-semibold text-gray-900">Conteúdo que Atrai</h4>
          </div>
          <ul className="list-disc list-inside space-y-1">
            {strategies.content.map((item, index) => (
              <li key={index} className="text-sm text-gray-600">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <h4 className="font-semibold text-gray-900">Canais de Marketing Eficazes</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {strategies.marketingChannels.map((channel, index) => (
              <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                {channel}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-green-600" />
            <h4 className="font-semibold text-gray-900">Argumentos de Venda Chave</h4>
          </div>
          <ul className="list-disc list-inside space-y-1">
            {strategies.salesArguments.map((argument, index) => (
              <li key={index} className="text-sm text-gray-600">{argument}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-green-600" />
            <h4 className="font-semibold text-gray-900">Dicas de Abordagem</h4>
          </div>
          <ul className="list-disc list-inside space-y-1">
            {strategies.approach.map((tip, index) => (
              <li key={index} className="text-sm text-gray-600">{tip}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Handshake className="w-5 h-5 text-green-600" />
            <h4 className="font-semibold text-gray-900">Parcerias Sugeridas</h4>
          </div>
          <ul className="list-disc list-inside space-y-1">
            {strategies.partnerships.map((partnership, index) => (
              <li key={index} className="text-sm text-gray-600">{partnership}</li>
            ))}
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">💡 Dica Especial</h4>
          <p className="text-sm text-gray-600">
            Teste diferentes abordagens e meça os resultados. O que funciona para uma persona pode não funcionar para outra, então sempre valide suas estratégias com dados reais.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StrategiesCard;
