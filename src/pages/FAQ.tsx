import ProductPage from '@/components/ProductPage';

const FAQ = () => (
  <ProductPage
    slug="faq"
    title="FAQ | Perguntas Frequentes - Aurum Foundation"
    description="Tire suas dúvidas sobre a Aurum Foundation: cadastro, segurança, cartões, exchange, bots de IA, staking, taxas e suporte."
    keywords="FAQ Aurum, perguntas frequentes Aurum, dúvidas Aurum Foundation, suporte cripto"
    h1="Perguntas Frequentes"
    subtitle="Tudo o que você precisa saber sobre a Aurum Foundation em um só lugar."
    intro="Reunimos as perguntas mais comuns sobre o ecossistema Aurum Foundation. Se sua dúvida não estiver aqui, fale com o time pelos canais oficiais listados na página de Contato."
    sections={[
      {
        h2: 'Sobre a Aurum Foundation',
        paragraphs: [
          'A Aurum Foundation é um ecossistema global de produtos cripto: NeoBank, Exchange, bots de IA (Zeus AI, Ex-Ai, Ex-Ai Pro), cartões Visa cripto e Agentes de IA — tudo integrado em uma única conta.',
          'Operamos com 3 licenças internacionais, mais de US$ 30 milhões em ativos sob gestão e cobertura por veículos como Forbes, Cointelegraph e Binance.',
        ],
      },
      {
        h2: 'Conta e segurança',
        paragraphs: [
          'O cadastro é gratuito e leva poucos minutos. KYC é exigido para liberar limites maiores, saques em fiat e emissão de cartões físicos.',
          'A Aurum Foundation usa custódia institucional, autenticação 2FA, biometria, whitelist de saques e monitoramento antifraude 24/7.',
        ],
      },
      {
        h2: 'Produtos e taxas',
        paragraphs: [
          'As taxas de Exchange, cartões e bots variam por nível de cliente. Os valores atualizados estão sempre disponíveis no painel logado.',
          'Não cobramos taxa de cadastro nem mensalidade básica para começar a usar o NeoBank.',
        ],
      },
    ]}
    features={[
      'Cadastro gratuito',
      'KYC simples e rápido',
      'Custódia institucional',
      'Suporte 24/7',
      'Taxas transparentes',
      'Sem mensalidade básica',
    ]}
    faqs={[
      { q: 'Como abrir conta na Aurum Foundation?', a: 'Acesse o backoffice oficial, preencha seus dados e siga o fluxo de KYC.' },
      { q: 'Quais países são atendidos?', a: 'A Aurum opera globalmente, exceto em jurisdições com restrição regulatória.' },
      { q: 'Existe valor mínimo para começar?', a: 'Não há valor mínimo de cadastro. Cada produto tem seus próprios mínimos operacionais.' },
      { q: 'A Aurum Foundation é segura?', a: 'Sim, com custódia institucional, 3 licenças internacionais e auditorias contínuas.' },
      { q: 'Como falar com o suporte?', a: 'Pelo painel logado, WhatsApp +55 12 98251-9116 ou Telegram oficial.' },
    ]}
  />
);

export default FAQ;
