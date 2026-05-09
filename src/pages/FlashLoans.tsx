import ProductPage from '@/components/ProductPage';

const FlashLoans = () => (
  <ProductPage
    slug="flash-loans"
    title="Flash Loans Aurum Foundation | Empréstimos Instantâneos DeFi"
    description="Flash Loans da Aurum Foundation: empréstimos instantâneos para arbitragem em DeFi, sem colateral, com execução atômica em smart contracts."
    keywords="flash loans, Aurum Foundation flash loans, empréstimo defi, arbitragem cripto, flash loan sem colateral"
    h1="Flash Loans"
    subtitle="Empréstimos instantâneos da Aurum Foundation para estratégias de arbitragem e otimização de capital em DeFi."
    intro="Os Flash Loans da Aurum Foundation permitem tomar emprestadas grandes quantias de cripto sem colateral, desde que a operação seja liquidada na mesma transação on-chain — ideal para arbitragem, refinanciamento e estratégias avançadas de DeFi."
    sections={[
      {
        h2: 'O que são Flash Loans',
        paragraphs: [
          'Flash Loans são uma inovação da finança descentralizada (DeFi) que permite tomar empréstimos sem colateral, contanto que o valor seja devolvido dentro da mesma transação blockchain. Se a devolução não acontecer, toda a operação é revertida automaticamente.',
          'A Aurum Foundation oferece infraestrutura de Flash Loans com taxas competitivas, alta liquidez e integração simplificada para traders e desenvolvedores.',
        ],
      },
      {
        h2: 'Casos de uso dos Flash Loans da Aurum Foundation',
        paragraphs: [
          'Arbitragem entre DEXs, refinanciamento de posições alavancadas, troca de colateral e liquidações são alguns dos principais casos de uso. A Aurum Foundation fornece documentação técnica completa para integrar Flash Loans em estratégias personalizadas.',
        ],
      },
    ]}
    features={[
      'Empréstimos sem colateral',
      'Execução atômica on-chain',
      'Alta liquidez disponível',
      'Taxas competitivas',
      'Integração via smart contract',
      'Suporte técnico Aurum Foundation',
    ]}
    faqs={[
      { q: 'Preciso de colateral para Flash Loans?', a: 'Não. Flash Loans da Aurum Foundation são empréstimos sem colateral, garantidos pela atomicidade da transação.' },
      { q: 'Quais ativos estão disponíveis?', a: 'A Aurum Foundation oferece Flash Loans em stablecoins e principais criptos, com lista atualizada na documentação oficial.' },
      { q: 'Como integro Flash Loans?', a: 'Acesse a documentação da Aurum Foundation para SDKs, exemplos e endereços de contratos.' },
    ]}
  />
);

export default FlashLoans;
