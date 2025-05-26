
import jsPDF from 'jspdf';

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

interface FormData {
  businessName: string;
  businessType: string;
  products: string;
  problem: string;
  differentials: string;
}

export const generatePDF = (persona: PersonaData, strategies: StrategiesData, formData: FormData) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const margin = 20;
  const lineHeight = 7;
  let currentY = 20;

  // Função para adicionar texto com quebra de linha
  const addWrappedText = (text: string, x: number, y: number, maxWidth: number): number => {
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return y + (lines.length * lineHeight);
  };

  // Função para verificar se precisa de nova página
  const checkNewPage = (requiredHeight: number): number => {
    if (currentY + requiredHeight > 280) {
      doc.addPage();
      return 20;
    }
    return currentY;
  };

  // Título
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('Relatório da Persona Ideal', pageWidth / 2, currentY, { align: 'center' });
  currentY += 15;

  // Subtítulo
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text(`Gerado pela Minha Persona para ${formData.businessName}`, pageWidth / 2, currentY, { align: 'center' });
  currentY += 20;

  // Seção da Persona
  currentY = checkNewPage(80);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('PERFIL DA PERSONA', margin, currentY);
  currentY += 10;

  // Dados básicos da persona
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(persona.name, margin, currentY);
  currentY += 8;

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`${persona.age} • ${persona.profession}`, margin, currentY);
  currentY += 8;
  doc.text(`Renda: ${persona.income}`, margin, currentY);
  currentY += 8;
  doc.text(`Localização: ${persona.location}`, margin, currentY);
  currentY += 12;

  // Background
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Background:', margin, currentY);
  currentY += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  currentY = addWrappedText(persona.background, margin, currentY, pageWidth - (margin * 2));
  currentY += 10;

  // Objetivos
  currentY = checkNewPage(40);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Objetivos e Sonhos:', margin, currentY);
  currentY += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  persona.goals.forEach(goal => {
    doc.text(`• ${goal}`, margin, currentY);
    currentY += 6;
  });
  currentY += 8;

  // Desafios
  currentY = checkNewPage(40);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Desafios e Dores:', margin, currentY);
  currentY += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  persona.challenges.forEach(challenge => {
    currentY = addWrappedText(`• ${challenge}`, margin, currentY, pageWidth - (margin * 2));
    currentY += 2;
  });
  currentY += 8;

  // Solução
  currentY = checkNewPage(30);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Como seu negócio pode ajudar:', margin, currentY);
  currentY += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  currentY = addWrappedText(persona.solution, margin, currentY, pageWidth - (margin * 2));
  currentY += 12;

  // Canais de comunicação
  currentY = checkNewPage(30);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Canais de Comunicação Preferidos:', margin, currentY);
  currentY += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.text(persona.channels.join(', '), margin, currentY);
  currentY += 12;

  // Objeções
  currentY = checkNewPage(40);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Objeções Comuns:', margin, currentY);
  currentY += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  persona.objections.forEach(objection => {
    currentY = addWrappedText(`• ${objection}`, margin, currentY, pageWidth - (margin * 2));
    currentY += 2;
  });
  currentY += 12;

  // Citações
  currentY = checkNewPage(40);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Citações Representativas:', margin, currentY);
  currentY += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  persona.quotes.forEach(quote => {
    currentY = addWrappedText(`"${quote}"`, margin, currentY, pageWidth - (margin * 2));
    currentY += 6;
  });

  // Nova página para estratégias
  doc.addPage();
  currentY = 20;

  // Seção de Estratégias
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('ESTRATÉGIAS PERSONALIZADAS', margin, currentY);
  currentY += 15;

  // Conteúdo que atrai
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Conteúdo que Atrai:', margin, currentY);
  currentY += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  strategies.content.forEach(item => {
    currentY = addWrappedText(`• ${item}`, margin, currentY, pageWidth - (margin * 2));
    currentY += 2;
  });
  currentY += 10;

  // Canais de marketing
  currentY = checkNewPage(30);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Canais de Marketing Eficazes:', margin, currentY);
  currentY += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.text(strategies.marketingChannels.join(', '), margin, currentY);
  currentY += 12;

  // Argumentos de venda
  currentY = checkNewPage(40);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Argumentos de Venda Chave:', margin, currentY);
  currentY += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  strategies.salesArguments.forEach(argument => {
    currentY = addWrappedText(`• ${argument}`, margin, currentY, pageWidth - (margin * 2));
    currentY += 2;
  });
  currentY += 10;

  // Dicas de abordagem
  currentY = checkNewPage(40);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Dicas de Abordagem:', margin, currentY);
  currentY += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  strategies.approach.forEach(tip => {
    currentY = addWrappedText(`• ${tip}`, margin, currentY, pageWidth - (margin * 2));
    currentY += 2;
  });
  currentY += 10;

  // Parcerias sugeridas
  currentY = checkNewPage(40);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Parcerias Sugeridas:', margin, currentY);
  currentY += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  strategies.partnerships.forEach(partnership => {
    currentY = addWrappedText(`• ${partnership}`, margin, currentY, pageWidth - (margin * 2));
    currentY += 2;
  });

  // Rodapé
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(
      `Gerado pela Minha Persona - Página ${i} de ${pageCount}`,
      pageWidth / 2,
      290,
      { align: 'center' }
    );
  }

  // Download do PDF
  const fileName = `persona-${persona.name.toLowerCase().replace(/\s+/g, '-')}.pdf`;
  doc.save(fileName);
};
