import ProductPage from '@/components/ProductPage';

const SobreNos = () => (
  <ProductPage
    slug="sobre-nos"
    title="Sobre Nós | Aurum Foundation - Ecossistema Cripto Global"
    description="Conheça a Aurum Foundation: missão, visão, equipe global e ecossistema integrado de produtos cripto, IA e neobanking de nível institucional."
    keywords="sobre Aurum Foundation, equipe Aurum, missão Aurum, empresa cripto, fundadores Aurum"
    h1="Sobre a Aurum Foundation"
    subtitle="Construindo o futuro financeiro com estratégias de gestão seguras, inovadoras e impulsionadas por inteligência artificial."
    intro="A Aurum Foundation é um ecossistema global de produtos financeiros descentralizados, reconhecido por publicações como Forbes, Entrepreneur, Cointelegraph e Bitcoin.com. Combinamos trading institucional, IA aplicada e infraestrutura blockchain para entregar soluções de gestão de capital de nova geração."
    sections={[
      {
        h2: 'Nossa missão',
        paragraphs: [
          'Democratizar o acesso a estratégias financeiras de nível institucional, oferecendo a qualquer investidor as mesmas ferramentas, segurança e tecnologia usadas por grandes fundos.',
        ],
      },
      {
        h2: 'Liderança global',
        paragraphs: [
          'Bryan Benson (CEO) - 27 anos de experiência Web3, ex-líder da expansão Binance na América Latina.',
          'Ahmad Zen (Co-Fundador / CMO) - mais de 15 anos em marketing de rede e cripto.',
          'Shane Morand (Diretor de Desenvolvimento de Rede) - décadas em sistemas de crescimento global.',
          'Leonardo Galindez (CEO Aurum Exchange) - infraestrutura cripto regulada e pagamentos.',
          'Andrew Isaacs (COO) - 18 anos em banco de investimento, US$ 23B em transações executadas.',
          'Nicholas Kelland (Chefe de Parcerias) - parcerias institucionais Web3 e fintech.',
          'Al Rizqi (Diretor de Produto) - desenvolvimento de soluções fintech inovadoras.',
          'Dr Bryan (Chief Blockchain Officer) - 25 anos em blockchain e marketing digital.',
          'Drei Menza (Co-Fundador / Diretor de Trading) - especialista em trading algorítmico.',
        ],
      },
      {
        h2: 'Reconhecimento global',
        paragraphs: [
          'A Aurum é reconhecida globalmente como provedora de trading de nível institucional e infraestrutura financeira por veículos como Forbes, Benzinga, Entrepreneur, Cointelegraph, Bitcoin.com, Crypto.news, Hackernoon, Binance, Bitget e MEXC.',
        ],
      },
    ]}
    features={[
      '3 licenças internacionais',
      'US$ 30M+ em ativos sob gestão',
      'Parceiros ativos no mundo todo',
      'Equipe sênior multinacional',
      'Coberta por imprensa global',
      'Custódia institucional regulada',
    ]}
    faqs={[
      { q: 'Onde a Aurum Foundation atua?', a: 'A Aurum opera globalmente com 3 licenças internacionais e parceiros em diversos países.' },
      { q: 'Quem fundou a Aurum?', a: 'A Aurum foi fundada por uma equipe sênior de Web3, finanças e blockchain, liderada por Bryan Benson, Ahmad Zen e Drei Menza.' },
      { q: 'A Aurum é regulada?', a: 'Sim, opera sob 3 licenças internacionais com KYC, AML e auditorias contínuas.' },
    ]}
  />
);

export default SobreNos;
