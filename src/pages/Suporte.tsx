import ProductPage from '@/components/ProductPage';

const Suporte = () => (
  <ProductPage
    slug="suporte"
    title="Suporte | Atendimento Oficial Aurum Foundation"
    description="Central de suporte da Aurum Foundation: atendimento 24/7, WhatsApp, Telegram, abertura de chamados e SLA priorizado por nível de cliente."
    keywords="suporte Aurum, atendimento Aurum Foundation, central de ajuda cripto, suporte 24/7"
    h1="Suporte Aurum Foundation"
    subtitle="Atendimento dedicado, multilíngue e disponível 24/7 para todo o ecossistema Aurum."
    intro="A central de suporte da Aurum Foundation oferece atendimento humano e técnico para clientes do NeoBank, Exchange, cartões, bots de IA e demais produtos do ecossistema, com SLA priorizado por nível de cliente."
    sections={[
      {
        h2: 'Como abrir um chamado',
        paragraphs: [
          'A forma mais rápida é pelo painel logado da Aurum Foundation, na seção Suporte. Lá você acompanha todo o histórico de tickets e respostas.',
          'Também é possível falar pelo WhatsApp consultivo +55 12 98251-9116 ou pelo Telegram oficial.',
        ],
      },
      {
        h2: 'O que o suporte resolve',
        paragraphs: [
          'Acesso à conta, KYC, depósitos e saques, ativação de cartões, configuração de bots, dúvidas sobre taxas, relatórios e exportações fiscais.',
          'Casos críticos (suspeita de fraude, bloqueio de cartão, recuperação de acesso) têm fila prioritária com tempo de resposta reduzido.',
        ],
      },
      {
        h2: 'SLA por nível de cliente',
        paragraphs: [
          'Clientes Nova: resposta em até 24h. Imperium: até 12h. World Elite: até 4h. Infinity: atendimento concierge dedicado em minutos.',
        ],
      },
    ]}
    features={[
      'Atendimento 24/7',
      'Equipe multilíngue',
      'Fila prioritária para fraudes',
      'WhatsApp consultivo',
      'SLA por nível de cliente',
      'Histórico completo de tickets',
    ]}
    faqs={[
      { q: 'Qual o canal mais rápido?', a: 'Para casos críticos, o painel logado e o WhatsApp consultivo têm priorização imediata.' },
      { q: 'O suporte fala português?', a: 'Sim. Atendemos em português, espanhol e inglês.' },
      { q: 'Como recupero acesso à minha conta?', a: 'Use o fluxo de recuperação no painel ou abra ticket prioritário pelo WhatsApp oficial.' },
    ]}
  />
);

export default Suporte;
