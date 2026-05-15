import ProductPage from '@/components/ProductPage';
import hero from '@/assets/exchange-aurum-foundation-plataforma-trading.webp';

const Plataforma = () => (
  <ProductPage
    heroImage={hero}
    heroImageAlt="Plataforma Aurum Foundation - ecossistema cripto com IA, exchange e neobank"
    slug="plataforma"
    title="Plataforma Aurum Foundation | Ecossistema Cripto com IA"
    description="Conheça a plataforma Aurum Foundation: exchange, neobank, bots de IA, cartões cripto e gestão de liquidez em um único ecossistema integrado."
    keywords="plataforma Aurum, ecossistema Aurum Foundation, plataforma cripto, exchange cripto, neobank, bots IA"
    h1="Plataforma Aurum Foundation"
    subtitle="Um ecossistema completo que une exchange institucional, banco Web 3.0, inteligência artificial e cartões cripto em uma única experiência."
    intro="A plataforma Aurum Foundation foi desenhada para oferecer ao investidor uma infraestrutura financeira de nova geração: liquidez profunda, segurança institucional, agentes de IA autônomos e ferramentas DeFi avançadas, tudo integrado por padrões abertos de blockchain."
    sections={[
      {
        h2: 'Uma plataforma, todo o ecossistema cripto',
        paragraphs: [
          'A Plataforma Aurum reúne os principais produtos do grupo — Aurum NeoBank, AURUM Exchange, Bots de Gestão de Liquidez, Zeus AI, Cartões Aurum e Agentes de IA — sob uma única identidade de conta, KYC unificado e wallet multichain.',
          'Isso elimina a fricção de operar entre corretoras, bancos e custódia, permitindo que o capital flua sem atrito entre trading, pagamentos, staking e renda passiva.',
        ],
      },
      {
        h2: 'Tecnologia de nível institucional',
        paragraphs: [
          'A infraestrutura é construída com matching engine de alta performance, custódia segregada, monitoramento 24/7 e auditoria contínua — os mesmos padrões usados por instituições financeiras globais.',
          'A Aurum Foundation opera com 3 licenças internacionais e mais de US$ 30 milhões em ativos sob gestão, oferecendo confiança regulatória e robustez operacional ao usuário final.',
        ],
      },
      {
        h2: 'IA aplicada à gestão de capital',
        paragraphs: [
          'Os bots Ex-Ai, Zeus-Ai e Ex-Ai Pro usam aprendizado de máquina para identificar oportunidades de médio prazo e executar estratégias com precisão milimétrica, transformando a volatilidade em rentabilidade consistente.',
        ],
      },
    ]}
    features={[
      'KYC unificado em todo ecossistema',
      'Wallet multichain integrada',
      'Bots de IA para gestão de liquidez',
      'Exchange com liquidez profunda',
      'Cartões cripto físicos e virtuais',
      'Cobertura global e suporte 24/7',
    ]}
    faqs={[
      { q: 'O que é a Plataforma Aurum Foundation?', a: 'É o ecossistema integrado da Aurum que reúne exchange, neobank, bots de IA, cartões cripto e ferramentas DeFi em uma única conta.' },
      { q: 'Preciso de várias contas para usar os produtos?', a: 'Não. Uma única conta Aurum dá acesso a todo o ecossistema com KYC e wallet unificados.' },
      { q: 'A plataforma é regulada?', a: 'Sim. A Aurum Foundation opera com 3 licenças internacionais e custódia institucional.' },
    ]}
  />
);

export default Plataforma;
