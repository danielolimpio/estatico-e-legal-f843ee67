import ProductPage from '@/components/ProductPage';
import cartaoNova from '@/assets/cartao-aurum-nova-visa.webp';

const CartaoAurum = () => (
  <ProductPage
    heroImage={cartaoNova}
    heroImageAlt="Cartão Aurum Nova Visa Business - cartão de débito cripto da Aurum Foundation"
    slug="cartao-aurum"
    title="Cartão Aurum | Cartão de Débito Cripto da Aurum Foundation"
    description="Cartão Aurum: use suas criptomoedas no dia a dia com o cartão de débito oficial da Aurum Foundation, aceito mundialmente."
    keywords="cartão Aurum, cartão Aurum Foundation, cartão débito cripto, cartão de criptomoedas, Aurum card"
    h1="Cartão Aurum"
    subtitle="O cartão de débito cripto oficial da Aurum Foundation para usar suas criptomoedas em qualquer lugar do mundo."
    intro="Com o Cartão Aurum você converte e gasta criptomoedas em milhões de estabelecimentos, com cashback em ativos da Aurum Foundation, segurança avançada e gestão completa pelo aplicativo."
    sections={[
      {
        h2: 'O Cartão Aurum no dia a dia',
        paragraphs: [
          'O Cartão Aurum integra o ecossistema da Aurum Foundation ao consumo cotidiano. Você mantém seus ativos em cripto e usa o saldo em compras físicas, online e saques em ATMs internacionais, com câmbio em tempo real.',
          'A Aurum Foundation gerencia toda a conversão automaticamente, sem que você precise enviar fundos para uma corretora externa.',
        ],
      },
      {
        h2: 'Vantagens do Cartão Aurum',
        paragraphs: [
          'Cashback em tokens Aurum, limites elevados, aceitação global e proteção contra fraudes fazem do Cartão Aurum a solução preferida de quem vive o universo cripto. A Aurum Foundation oferece versões físicas e virtuais.',
        ],
      },
    ]}
    features={[
      'Aceito mundialmente',
      'Cashback em tokens Aurum',
      'Versão física e virtual',
      'Conversão automática cripto/fiat',
      'Gestão pelo app Aurum Foundation',
      'Proteção antifraude',
    ]}
    faqs={[
      { q: 'Como solicitar o Cartão Aurum?', a: 'Acesse o backoffice da Aurum Foundation e siga o fluxo de solicitação na seção Cartão Aurum.' },
      { q: 'Quais moedas posso usar?', a: 'O Cartão Aurum suporta as principais criptomoedas listadas na Aurum Foundation.' },
      { q: 'Existe taxa de manutenção?', a: 'As condições atualizadas estão disponíveis no painel oficial da Aurum Foundation.' },
    ]}
  />
);

export default CartaoAurum;
