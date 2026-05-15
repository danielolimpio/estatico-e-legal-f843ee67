import ProductPage from '@/components/ProductPage';
import hero from '@/assets/cartao-aurum-world-elite-visa.webp';

const Cartoes = () => (
  <ProductPage
    heroImage={hero}
    heroImageAlt="Cartões Aurum - Nova, Imperium, World Elite e Infinity da Aurum Foundation"
    slug="cartoes"
    title="Cartões Aurum | Nova, Imperium, World Elite e Infinity"
    description="Conheça a linha completa de cartões cripto Aurum: Nova, Imperium, World Elite e Infinity. Gaste suas criptomoedas globalmente com cashback e benefícios premium."
    keywords="cartões Aurum, cartão Nova, cartão Imperium, cartão World Elite, cartão Infinity, cartão cripto"
    h1="Cartões Aurum"
    subtitle="Quatro níveis. Possibilidades ilimitadas. Cada Cartão Aurum libera gastos globais — e cada nível desbloqueia mais benefícios."
    intro="Da entrada virtual sem verificação ao Infinity, com benefícios concierge e limites premium, a linha de cartões Aurum foi desenhada para acompanhar a jornada do investidor cripto — do dia a dia até o private banking digital."
    sections={[
      {
        h2: 'Nova Card – comece simples, use na hora',
        paragraphs: [
          'Cartão virtual da Aurum Foundation sem verificação para gastos imediatos via Apple Pay e Google Pay. Ideal para quem quer começar a gastar cripto rapidamente, com limites básicos e zero burocracia.',
        ],
      },
      {
        h2: 'Imperium Card – mais limite, mais conveniência',
        paragraphs: [
          'Versão intermediária para quem usa cripto no dia a dia com mais frequência: limites maiores, suporte a saques e benefícios de cashback em tokens Aurum.',
        ],
      },
      {
        h2: 'World Elite Card – padrão internacional',
        paragraphs: [
          'O cartão World Elite oferece aceitação global, proteções premium, cashback ampliado e acesso a benefícios Visa de viagem, seguros e experiências.',
        ],
      },
      {
        h2: 'Infinity Card – o topo do ecossistema',
        paragraphs: [
          'Para clientes private: limites elevadíssimos, concierge dedicado, cashback máximo, seguros internacionais e atendimento prioritário em todo o ecossistema Aurum Foundation.',
        ],
      },
    ]}
    features={[
      'Compatível com Apple Pay e Google Pay',
      'Cashback em tokens Aurum',
      'Aceito em milhões de estabelecimentos',
      'Cartão físico e virtual',
      'Conversão automática cripto/fiat',
      'Gestão completa via app',
    ]}
    faqs={[
      { q: 'Qual cartão devo escolher?', a: 'Depende do seu perfil de uso. Nova é ideal para começar; Imperium e World Elite para uso frequente; Infinity para clientes private.' },
      { q: 'Como solicito meu cartão?', a: 'Pelo backoffice da Aurum Foundation ou pelo bot oficial do Aurum NeoBank no Telegram.' },
      { q: 'Existe taxa anual?', a: 'As condições por nível estão disponíveis no painel oficial da Aurum Foundation.' },
    ]}
  />
);

export default Cartoes;
