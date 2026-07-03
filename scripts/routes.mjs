// Fonte única de rotas indexáveis do site.
// Consumida por: scripts/prerender.mjs, scripts/generate-sitemap.mjs,
// scripts/validate-seo.mjs. Mantenha sincronizada com src/App.tsx.

export const SITE = 'https://aurumfoundation.world';

/**
 * @typedef {Object} RouteEntry
 * @property {string} slug          Slug sem barras (ex.: 'aurum'). '' = home.
 * @property {string} title         <title> único da rota.
 * @property {string} description   <meta name="description"> único da rota.
 * @property {'website'|'article'} [ogType]
 * @property {'always'|'hourly'|'daily'|'weekly'|'monthly'|'yearly'|'never'} [changefreq]
 * @property {string} [priority]
 */

/** @type {RouteEntry[]} */
export const routes = [
  {
    slug: '',
    title: 'Aurum Foundation | Investimentos Cripto com IA',
    description: 'Aurum Foundation: invista em cripto com IA, Zeus AI, staking, flash loans, exchange e cartão Aurum. Cadastro, login e segurança institucional.',
    ogType: 'website',
    changefreq: 'daily',
    priority: '1.0',
  },
  { slug: 'aurum', title: 'Aurum | Ecossistema Cripto Aurum Foundation', description: 'Aurum: ecossistema cripto da Aurum Foundation com Zeus AI, staking, exchange, cartão Aurum e flash loans. Tudo sobre Aurum em um só lugar.', ogType: 'article', changefreq: 'weekly', priority: '0.95' },
  { slug: 'plataforma', title: 'Plataforma Aurum | Backoffice Aurum Foundation', description: 'Plataforma Aurum Foundation: backoffice unificado para gestão da sua conta, produtos cripto e relatórios em tempo real.', ogType: 'article', changefreq: 'weekly', priority: '0.9' },
  { slug: 'zeus-ai', title: 'Zeus AI | Robô de Trading Cripto com IA | Aurum Foundation', description: 'Zeus AI: robô de trading cripto com inteligência artificial proprietária da Aurum Foundation. Opera 24/7 com segurança institucional.', ogType: 'article', changefreq: 'weekly', priority: '0.9' },
  { slug: 'staking', title: 'Aurum Staking | Rendimento Passivo em Cripto | Aurum Foundation', description: 'Aurum Staking: rendimento passivo em criptomoedas com custódia institucional regulada pela Aurum Foundation.', ogType: 'article', changefreq: 'weekly', priority: '0.9' },
  { slug: 'flash-loans', title: 'Flash Loans Aurum | Empréstimos DeFi Instantâneos', description: 'Flash Loans Aurum Foundation: empréstimos relâmpago para estratégias DeFi avançadas e arbitragem cripto.', ogType: 'article', changefreq: 'weekly', priority: '0.9' },
  { slug: 'cartao-aurum', title: 'Cartão Aurum | Aurum Card Cripto | Aurum Foundation', description: 'Cartão Aurum (Aurum Card): use suas criptomoedas no dia a dia em todo o mundo. Cartão cripto oficial da Aurum Foundation.', ogType: 'article', changefreq: 'weekly', priority: '0.9' },
  { slug: 'cartoes', title: 'Cartões Cripto Aurum | Aurum Foundation', description: 'Linha de cartões cripto Aurum Foundation: gaste seu saldo em criptomoedas no mundo todo com benefícios exclusivos.', ogType: 'article', changefreq: 'weekly', priority: '0.9' },
  { slug: 'exchange', title: 'Aurum Exchange | Corretora Cripto da Aurum Foundation', description: 'Aurum Exchange: corretora cripto integrada ao ecossistema Aurum com alta liquidez e segurança institucional.', ogType: 'article', changefreq: 'weekly', priority: '0.9' },
  { slug: 'seguranca', title: 'Segurança Aurum Foundation | Custódia Institucional', description: 'Segurança Aurum Foundation: criptografia AES-256, cold storage, KYC, AML e auditorias contínuas para proteger seus ativos.', ogType: 'article', changefreq: 'monthly', priority: '0.7' },
  { slug: 'sobre-nos', title: 'Sobre Nós | Aurum Foundation - Ecossistema Cripto Global', description: 'Conheça a Aurum Foundation: missão, visão, equipe global e ecossistema integrado de produtos cripto, IA e neobanking de nível institucional.', ogType: 'article', changefreq: 'monthly', priority: '0.8' },
  { slug: 'carreiras', title: 'Carreiras | Trabalhe na Aurum Foundation', description: 'Carreiras na Aurum Foundation: vagas globais em engenharia, produto, marketing e operações no maior ecossistema cripto com IA.', ogType: 'article', changefreq: 'weekly', priority: '0.6' },
  { slug: 'imprensa', title: 'Imprensa | Aurum Foundation na Mídia Global', description: 'Imprensa Aurum Foundation: cobertura na Forbes, Cointelegraph, Bitcoin.com, Entrepreneur e outros veículos globais.', ogType: 'article', changefreq: 'monthly', priority: '0.6' },
  { slug: 'contato', title: 'Contato | Aurum Foundation', description: 'Fale com a Aurum Foundation: canais oficiais de atendimento, suporte e parcerias.', ogType: 'article', changefreq: 'monthly', priority: '0.7' },
  { slug: 'blog', title: 'Blog Aurum Foundation | Cripto, IA e Mercado Digital', description: 'Blog oficial da Aurum Foundation: análises de mercado cripto, atualizações de produto, tutoriais sobre IA, staking, exchange e cartões cripto.', ogType: 'article', changefreq: 'weekly', priority: '0.7' },
  { slug: 'docs', title: 'Documentação | Aurum Foundation', description: 'Documentação oficial Aurum Foundation: guias, APIs e referências técnicas dos produtos cripto e IA.', ogType: 'article', changefreq: 'weekly', priority: '0.6' },
  { slug: 'faq', title: 'FAQ | Perguntas Frequentes Aurum Foundation', description: 'Perguntas frequentes sobre a Aurum Foundation, Zeus AI, staking, exchange, cartão Aurum e segurança institucional.', ogType: 'article', changefreq: 'monthly', priority: '0.7' },
  { slug: 'suporte', title: 'Suporte | Aurum Foundation', description: 'Suporte oficial Aurum Foundation: ajuda com cadastro, login, produtos cripto, cartões e operações.', ogType: 'article', changefreq: 'monthly', priority: '0.6' },
  { slug: 'termos', title: 'Termos de Uso | Aurum Foundation', description: 'Termos de Uso da Aurum Foundation: condições de uso da plataforma cripto e dos produtos do ecossistema Aurum.', ogType: 'article', changefreq: 'yearly', priority: '0.4' },
  { slug: 'privacidade', title: 'Política de Privacidade | Aurum Foundation', description: 'Política de Privacidade da Aurum Foundation: como tratamos dados pessoais conforme LGPD e padrões internacionais.', ogType: 'article', changefreq: 'yearly', priority: '0.4' },
  { slug: 'cookies', title: 'Política de Cookies | Aurum Foundation', description: 'Política de Cookies Aurum Foundation: como utilizamos cookies para melhorar sua experiência.', ogType: 'article', changefreq: 'yearly', priority: '0.4' },
];

/** URL canônica (sempre com barra final). */
export const canonicalUrl = (slug) => (slug ? `${SITE}/${slug}/` : `${SITE}/`);
