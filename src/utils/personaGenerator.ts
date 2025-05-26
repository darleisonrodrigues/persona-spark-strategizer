
interface FormData {
  businessName: string;
  businessType: string;
  products: string;
  problem: string;
  differentials: string;
  currentTarget: string;
  challenges: string;
  channels: string;
  tone: string;
}

export const generatePersona = async (formData: FormData) => {
  // Simular delay da API
  await new Promise(resolve => setTimeout(resolve, 3000));

  console.log('Processando dados:', formData);

  // Lógica de geração baseada nos dados do formulário
  const persona = {
    name: generatePersonaName(formData.businessType),
    age: generateAge(formData.businessType),
    profession: generateProfession(formData.businessType, formData.products),
    income: generateIncome(formData.businessType),
    location: "Grandes centros urbanos",
    background: generateBackground(formData),
    goals: generateGoals(formData),
    challenges: generateChallenges(formData),
    solution: generateSolution(formData),
    channels: generateChannels(formData),
    objections: generateObjections(formData),
    quotes: generateQuotes(formData)
  };

  const strategies = {
    content: generateContentStrategies(formData),
    marketingChannels: generateMarketingChannels(formData),
    salesArguments: generateSalesArguments(formData),
    approach: generateApproachTips(formData),
    partnerships: generatePartnerships(formData)
  };

  return { persona, strategies };
};

const generatePersonaName = (businessType: string): string => {
  const names = {
    ecommerce: ['Ana Silva', 'Mariana Costa', 'Julia Santos'],
    servicos: ['Carlos Oliveira', 'Roberto Lima', 'Fernando Souza'],
    consultoria: ['Patricia Almeida', 'Renata Ferreira', 'Camila Rodrigues'],
    restaurante: ['Amanda Pereira', 'Lucas Martins', 'Beatriz Gomes'],
    infoprodutos: ['Daniel Castro', 'Gabriela Barbosa', 'Rafael Cunha'],
    saude: ['Cristina Dias', 'Monica Ribeiro', 'Thiago Nascimento'],
    educacao: ['Vanessa Cardoso', 'Eduardo Araujo', 'Larissa Machado'],
    tecnologia: ['Bruno Teixeira', 'Isabela Moreira', 'Pedro Lopes'],
    outros: ['Claudia Mendes', 'Andre Vieira', 'Priscila Rocha']
  };
  
  const typeNames = names[businessType as keyof typeof names] || names.outros;
  return typeNames[Math.floor(Math.random() * typeNames.length)];
};

const generateAge = (businessType: string): string => {
  const ageRanges = {
    ecommerce: '25-35 anos',
    servicos: '30-45 anos',
    consultoria: '35-50 anos',
    restaurante: '25-40 anos',
    infoprodutos: '28-42 anos',
    saude: '30-55 anos',
    educacao: '25-45 anos',
    tecnologia: '25-40 anos',
    outros: '28-45 anos'
  };
  
  return ageRanges[businessType as keyof typeof ageRanges] || ageRanges.outros;
};

const generateProfession = (businessType: string, products: string): string => {
  if (products.toLowerCase().includes('moda') || products.toLowerCase().includes('roupa')) {
    return 'Designer de Moda';
  }
  
  const professions = {
    ecommerce: 'Empresária Digital',
    servicos: 'Prestadora de Serviços',
    consultoria: 'Consultora Empresarial',
    restaurante: 'Proprietária de Restaurante',
    infoprodutos: 'Produtora de Conteúdo',
    saude: 'Profissional da Saúde',
    educacao: 'Educadora',
    tecnologia: 'Desenvolvedora',
    outros: 'Empreendedora'
  };
  
  return professions[businessType as keyof typeof professions] || professions.outros;
};

const generateIncome = (businessType: string): string => {
  const incomes = {
    ecommerce: 'R$ 3.000 - R$ 8.000',
    servicos: 'R$ 2.500 - R$ 6.000',
    consultoria: 'R$ 5.000 - R$ 15.000',
    restaurante: 'R$ 4.000 - R$ 10.000',
    infoprodutos: 'R$ 3.000 - R$ 12.000',
    saude: 'R$ 4.000 - R$ 12.000',
    educacao: 'R$ 3.000 - R$ 8.000',
    tecnologia: 'R$ 6.000 - R$ 20.000',
    outros: 'R$ 3.000 - R$ 8.000'
  };
  
  return incomes[businessType as keyof typeof incomes] || incomes.outros;
};

const generateBackground = (formData: FormData): string => {
  return `Profissional dedicada que busca constantemente melhorar sua atuação no mercado. Enfrenta desafios relacionados a ${formData.problem.toLowerCase()} e valoriza soluções que ofereçam ${formData.differentials.toLowerCase()}.`;
};

const generateGoals = (formData: FormData): string[] => {
  const baseGoals = [
    'Crescer profissionalmente em sua área',
    'Aumentar sua produtividade diária',
    'Encontrar soluções eficientes para seus desafios'
  ];
  
  if (formData.problem.toLowerCase().includes('tempo')) {
    baseGoals.push('Otimizar seu tempo e ter mais eficiência');
  }
  
  if (formData.problem.toLowerCase().includes('dinheiro') || formData.problem.toLowerCase().includes('custo')) {
    baseGoals.push('Reduzir custos e aumentar economia');
  }
  
  return baseGoals;
};

const generateChallenges = (formData: FormData): string[] => {
  const challenges = [
    formData.problem,
    'Falta de tempo para se dedicar a todas as atividades',
    'Dificuldade em encontrar soluções confiáveis'
  ];
  
  if (formData.challenges.toLowerCase().includes('preço')) {
    challenges.push('Orçamento limitado para investimentos');
  }
  
  return challenges;
};

const generateSolution = (formData: FormData): string => {
  return `Seu ${formData.products.toLowerCase()} pode resolver diretamente o problema de ${formData.problem.toLowerCase()}, oferecendo ${formData.differentials.toLowerCase()} como diferencial competitivo.`;
};

const generateChannels = (formData: FormData): string[] => {
  const channels = ['WhatsApp', 'Instagram', 'Facebook'];
  
  if (formData.channels) {
    const mentionedChannels = formData.channels.toLowerCase();
    if (mentionedChannels.includes('linkedin')) channels.push('LinkedIn');
    if (mentionedChannels.includes('email')) channels.push('Email');
    if (mentionedChannels.includes('site')) channels.push('Website');
  }
  
  return channels;
};

const generateObjections = (formData: FormData): string[] => {
  const objections = [
    'Preocupação com o custo-benefício',
    'Falta de tempo para implementar mudanças'
  ];
  
  if (formData.challenges.toLowerCase().includes('confiança')) {
    objections.push('Dúvidas sobre a credibilidade do serviço');
  }
  
  return objections;
};

const generateQuotes = (formData: FormData): string[] => {
  return [
    `Preciso de uma solução que realmente resolva ${formData.problem.toLowerCase()}`,
    'Valorizo empresas que demonstram diferencial no mercado',
    'Busco praticidade e resultados reais'
  ];
};

const generateContentStrategies = (formData: FormData): string[] => {
  const strategies = [
    'Posts educativos sobre o problema que você resolve',
    'Cases de sucesso e depoimentos',
    'Dicas práticas relacionadas ao seu nicho'
  ];
  
  if (formData.tone === 'divertido') {
    strategies.push('Conteúdo descontraído com humor relevante');
  } else if (formData.tone === 'tecnico') {
    strategies.push('Artigos técnicos e análises aprofundadas');
  }
  
  return strategies;
};

const generateMarketingChannels = (formData: FormData): string[] => {
  const channels = ['Instagram', 'Facebook', 'WhatsApp Business'];
  
  if (formData.businessType === 'tecnologia' || formData.businessType === 'consultoria') {
    channels.push('LinkedIn');
  }
  
  if (formData.tone === 'formal') {
    channels.push('Email Marketing');
  }
  
  return channels;
};

const generateSalesArguments = (formData: FormData): string[] => {
  return [
    `Resolução direta do problema: ${formData.problem}`,
    `Diferencial único: ${formData.differentials}`,
    'Comprovação através de resultados reais',
    'Suporte personalizado durante todo o processo'
  ];
};

const generateApproachTips = (formData: FormData): string[] => {
  const tips = [
    'Inicie a conversa focando no problema do cliente',
    'Apresente casos similares ao dele',
    'Demonstre como seu diferencial resolve a dor específica'
  ];
  
  if (formData.tone === 'informal') {
    tips.push('Use linguagem acessível e próxima');
  } else if (formData.tone === 'formal') {
    tips.push('Mantenha comunicação profissional e técnica');
  }
  
  return tips;
};

const generatePartnerships = (formData: FormData): string[] => {
  const partnerships = [
    'Influenciadores do seu nicho de mercado',
    'Empresas complementares (não concorrentes)',
    'Associações e grupos profissionais relevantes'
  ];
  
  if (formData.businessType === 'saude') {
    partnerships.push('Clínicas e profissionais da área da saúde');
  } else if (formData.businessType === 'educacao') {
    partnerships.push('Instituições de ensino e educadores');
  }
  
  return partnerships;
};
