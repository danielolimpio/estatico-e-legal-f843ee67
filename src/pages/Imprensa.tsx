import ProductPage from '@/components/ProductPage';

const Imprensa = () => (
  <ProductPage
    slug="imprensa"
    title="Imprensa | Aurum Foundation na Mídia Global"
    description="Aurum Foundation na imprensa: Forbes, Entrepreneur, Cointelegraph, Bitcoin.com, Hackernoon e mais. Acesse releases, kit de imprensa e contato para mídia."
    keywords="imprensa Aurum, Aurum Foundation Forbes, Aurum Cointelegraph, press kit Aurum, mídia cripto"
    h1="Aurum Foundation na Imprensa"
    subtitle="Reconhecimento global como provedora de trading de nível institucional e infraestrutura financeira de nova geração."
    intro="Principais publicações e plataformas do setor — incluindo Forbes, Entrepreneur, Benzinga, Cointelegraph, Bitcoin.com, Crypto.news, Hackernoon, Binance, Bitget e MEXC — cobrem o crescimento do ecossistema Aurum e sua visão para o futuro das finanças digitais."
    sections={[
      {
        h2: 'Cobertura na mídia',
        paragraphs: [
          'A Aurum Foundation é citada por veículos de referência mundial em finanças, tecnologia e cripto, destacando licenças internacionais, ativos sob gestão e a abordagem orientada por agentes de IA.',
          'Forbes, Entrepreneur, Benzinga, Cointelegraph, Bitcoin.com, Crypto.news, Hackernoon, Binance, Bitget e MEXC são alguns dos parceiros editoriais que reportam a evolução do ecossistema.',
        ],
      },
      {
        h2: 'Kit de imprensa',
        paragraphs: [
          'Logos oficiais, fotos da liderança, material institucional e fact sheet estão disponíveis sob solicitação para jornalistas, analistas e parceiros de comunicação.',
        ],
      },
      {
        h2: 'Contato para mídia',
        paragraphs: [
          'Pedidos de entrevista, declarações oficiais e comentários de mercado podem ser solicitados pelo canal de imprensa indicado na página de Contato.',
        ],
      },
    ]}
    features={[
      'Citada pela Forbes',
      'Cobertura no Cointelegraph',
      'Reconhecida pela Binance',
      'Releases periódicos',
      'Liderança disponível para entrevistas',
      'Kit de imprensa oficial',
    ]}
    faqs={[
      { q: 'Como solicitar uma entrevista?', a: 'Entre em contato pelo canal de imprensa indicado na página de Contato, identificando o veículo e a pauta.' },
      { q: 'Posso usar o logo da Aurum?', a: 'Sim, mediante solicitação do kit de imprensa oficial e seguindo as diretrizes de uso da marca.' },
      { q: 'Onde encontro releases anteriores?', a: 'Em breve nesta página listaremos todos os releases. Hoje estão distribuídos pelos veículos parceiros.' },
    ]}
  />
);

export default Imprensa;
