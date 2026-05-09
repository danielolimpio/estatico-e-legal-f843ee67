import ProductPage from '@/components/ProductPage';

const Exchange = () => (
  <ProductPage
    slug="exchange"
    title="Exchange Aurum Foundation | Compre, Venda e Troque Cripto"
    description="Exchange Aurum Foundation: corretora oficial para comprar, vender e trocar criptomoedas com taxas competitivas, alta liquidez e segurança institucional."
    keywords="exchange Aurum, Aurum Foundation exchange, comprar criptomoedas, corretora cripto, exchange descentralizada"
    h1="Exchange Aurum Foundation"
    subtitle="A corretora oficial da Aurum Foundation para negociar criptomoedas com liquidez global e taxas competitivas."
    intro="A Exchange Aurum Foundation oferece pares de negociação para as principais criptomoedas, execução rápida, ferramentas profissionais e integração nativa com Zeus AI, staking, Flash Loans e Cartão Aurum."
    sections={[
      {
        h2: 'Por que usar a Exchange da Aurum Foundation',
        paragraphs: [
          'A Exchange Aurum Foundation foi desenhada para entregar uma experiência fluida tanto para iniciantes quanto para traders avançados. Você negocia diretamente do mesmo painel onde gerencia staking, bots e cartão.',
          'Com infraestrutura de alta disponibilidade e custódia segura, a Aurum Foundation garante execução confiável até em momentos de alta volatilidade.',
        ],
      },
      {
        h2: 'Funcionalidades principais',
        paragraphs: [
          'Ordens spot, gráficos avançados, livro de ofertas em tempo real, depósitos e saques rápidos. Tudo integrado ao ecossistema Aurum Foundation.',
        ],
      },
    ]}
    features={[
      'Pares spot principais',
      'Taxas competitivas',
      'Execução de baixa latência',
      'Integração com Zeus AI',
      'Custódia segura',
      'Suporte 24/7',
    ]}
    faqs={[
      { q: 'Quais cripto posso negociar?', a: 'A Exchange Aurum Foundation lista BTC, ETH, stablecoins e principais altcoins. A lista é atualizada regularmente no painel.' },
      { q: 'Quais as taxas?', a: 'As taxas da Exchange Aurum Foundation são competitivas e detalhadas na seção de tarifas do backoffice.' },
      { q: 'Como faço meu primeiro depósito?', a: 'Após criar conta na Aurum Foundation, acesse Carteira → Depositar e siga as instruções para a moeda escolhida.' },
    ]}
  />
);

export default Exchange;
