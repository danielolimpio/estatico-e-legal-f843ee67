import ProductPage from '@/components/ProductPage';

const Blog = () => (
  <ProductPage
    slug="blog"
    title="Blog Aurum Foundation | Cripto, IA e Mercado Digital"
    description="Blog oficial da Aurum Foundation: análises de mercado cripto, atualizações de produto, tutoriais sobre IA, staking, exchange e cartões cripto."
    keywords="blog Aurum, blog cripto, blog Aurum Foundation, análises cripto, conteúdo blockchain"
    h1="Blog Aurum Foundation"
    subtitle="Análises, tutoriais e novidades sobre o ecossistema Aurum, mercado cripto, inteligência artificial e finanças descentralizadas."
    intro="O Blog Aurum Foundation é o hub de conteúdo oficial: relatórios de mercado, deep-dives sobre os bots Zeus AI, Ex-Ai e Ex-Ai Pro, tutoriais práticos para o NeoBank e a Exchange, além de análises macro sobre cripto e regulação global."
    sections={[
      {
        h2: 'O que você encontra aqui',
        paragraphs: [
          'Análises técnicas e fundamentalistas dos principais ativos digitais, com perspectiva de longo prazo e foco em construção de patrimônio.',
          'Tutoriais passo a passo dos produtos Aurum: como usar a Exchange, configurar staking, ativar cartões e operar com bots de IA.',
          'Releases e atualizações de produto: novas integrações, listagens, lançamentos de cartões e expansões geográficas.',
        ],
      },
      {
        h2: 'Categorias principais',
        paragraphs: [
          'Mercado cripto · Inteligência artificial · NeoBanking · Cartões · Exchange · Staking · Flash Loans · Educação · Regulação · Cases de clientes.',
        ],
      },
      {
        h2: 'Receba os novos posts',
        paragraphs: [
          'Em breve disponibilizaremos newsletter e RSS. Por enquanto, siga a Aurum Foundation no Telegram, Instagram e X para receber as publicações em primeira mão.',
        ],
      },
    ]}
    features={[
      'Análises de mercado',
      'Tutoriais dos produtos',
      'Releases oficiais',
      'Conteúdo educacional',
      'Cases de clientes',
      'Atualizações regulatórias',
    ]}
    faqs={[
      { q: 'Com que frequência o blog é atualizado?', a: 'Publicamos novos conteúdos semanalmente, com releases pontuais sempre que há atualizações de produto.' },
      { q: 'Posso republicar os artigos?', a: 'Sim, mediante crédito explícito e link canônico para o post original do blog Aurum Foundation.' },
      { q: 'Como sugerir uma pauta?', a: 'Envie sua sugestão pelos canais oficiais listados na página de Contato.' },
    ]}
    relatedLinks={[
      { href: '/aurum/', label: 'Aurum — ecossistema cripto', description: 'Conheça a marca Aurum e todos os produtos da Aurum Foundation reunidos em uma página.' },
      { href: '/sobre-nos/', label: 'Sobre a Aurum Foundation', description: 'Missão, liderança global e reconhecimentos da Aurum Foundation.' },
      { href: '/zeus-ai/', label: 'Zeus AI', description: 'Como funciona o robô de trading com IA da Aurum.' },
    ]}
  />
);

export default Blog;
