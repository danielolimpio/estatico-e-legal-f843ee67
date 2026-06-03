// Pós-build: gera dist/<rota>/index.html físico para cada rota,
// injetando <title>, meta description, canonical e og:* únicos.
// Crawlers e bots de redes sociais leem o HTML estático sem precisar de JS;
// no browser real, o SPA hidrata normalmente (mesmo bundle JS em todas as rotas).

import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const SITE = 'https://aurumfoundation.world';

if (!existsSync(join(DIST, 'index.html'))) {
  console.error('[prerender] dist/index.html não encontrado. Pulando.');
  process.exit(0);
}

const shell = readFileSync(join(DIST, 'index.html'), 'utf8');

/** @type {{slug:string,title:string,description:string,ogType?:string}[]} */
const routes = [
  { slug: 'aurum', title: 'Aurum | Ecossistema Cripto Aurum Foundation', description: 'Aurum: ecossistema cripto da Aurum Foundation com Zeus AI, staking, exchange, cartão Aurum e flash loans. Tudo sobre Aurum em um só lugar.', ogType: 'article' },
  { slug: 'zeus-ai', title: 'Zeus AI | Robô de Trading Cripto com IA | Aurum Foundation', description: 'Zeus AI: robô de trading cripto com inteligência artificial proprietária da Aurum Foundation. Opera 24/7 com segurança institucional.', ogType: 'article' },
  { slug: 'staking', title: 'Aurum Staking | Rendimento Passivo em Cripto | Aurum Foundation', description: 'Aurum Staking: rendimento passivo em criptomoedas com custódia institucional regulada pela Aurum Foundation.', ogType: 'article' },
  { slug: 'flash-loans', title: 'Flash Loans Aurum | Empréstimos DeFi Instantâneos', description: 'Flash Loans Aurum Foundation: empréstimos relâmpago para estratégias DeFi avançadas e arbitragem cripto.', ogType: 'article' },
  { slug: 'cartao-aurum', title: 'Cartão Aurum | Aurum Card Cripto | Aurum Foundation', description: 'Cartão Aurum (Aurum Card): use suas criptomoedas no dia a dia em todo o mundo. Cartão cripto oficial da Aurum Foundation.', ogType: 'article' },
  { slug: 'exchange', title: 'Aurum Exchange | Corretora Cripto da Aurum Foundation', description: 'Aurum Exchange: corretora cripto integrada ao ecossistema Aurum com alta liquidez e segurança institucional.', ogType: 'article' },
  { slug: 'plataforma', title: 'Plataforma Aurum | Backoffice Aurum Foundation', description: 'Plataforma Aurum Foundation: backoffice unificado para gestão da sua conta, produtos cripto e relatórios em tempo real.', ogType: 'article' },
  { slug: 'cartoes', title: 'Cartões Cripto Aurum | Aurum Foundation', description: 'Linha de cartões cripto Aurum Foundation: gaste seu saldo em criptomoedas no mundo todo com benefícios exclusivos.', ogType: 'article' },
  { slug: 'seguranca', title: 'Segurança Aurum Foundation | Custódia Institucional', description: 'Segurança Aurum Foundation: criptografia AES-256, cold storage, KYC, AML e auditorias contínuas para proteger seus ativos.', ogType: 'article' },
  { slug: 'sobre-nos', title: 'Sobre Nós | Aurum Foundation - Ecossistema Cripto Global', description: 'Conheça a Aurum Foundation: missão, visão, equipe global e ecossistema integrado de produtos cripto, IA e neobanking de nível institucional.', ogType: 'article' },
  { slug: 'carreiras', title: 'Carreiras | Trabalhe na Aurum Foundation', description: 'Carreiras na Aurum Foundation: vagas globais em engenharia, produto, marketing e operações no maior ecossistema cripto com IA.', ogType: 'article' },
  { slug: 'imprensa', title: 'Imprensa | Aurum Foundation na Mídia Global', description: 'Imprensa Aurum Foundation: cobertura na Forbes, Cointelegraph, Bitcoin.com, Entrepreneur e outros veículos globais.', ogType: 'article' },
  { slug: 'contato', title: 'Contato | Aurum Foundation', description: 'Fale com a Aurum Foundation: canais oficiais de atendimento, suporte e parcerias.', ogType: 'article' },
  { slug: 'blog', title: 'Blog Aurum Foundation | Cripto, IA e Mercado Digital', description: 'Blog oficial da Aurum Foundation: análises de mercado cripto, atualizações de produto, tutoriais sobre IA, staking, exchange e cartões cripto.', ogType: 'article' },
  { slug: 'docs', title: 'Documentação | Aurum Foundation', description: 'Documentação oficial Aurum Foundation: guias, APIs e referências técnicas dos produtos cripto e IA.', ogType: 'article' },
  { slug: 'faq', title: 'FAQ | Perguntas Frequentes Aurum Foundation', description: 'Perguntas frequentes sobre a Aurum Foundation, Zeus AI, staking, exchange, cartão Aurum e segurança institucional.', ogType: 'article' },
  { slug: 'suporte', title: 'Suporte | Aurum Foundation', description: 'Suporte oficial Aurum Foundation: ajuda com cadastro, login, produtos cripto, cartões e operações.', ogType: 'article' },
  { slug: 'termos', title: 'Termos de Uso | Aurum Foundation', description: 'Termos de Uso da Aurum Foundation: condições de uso da plataforma cripto e dos produtos do ecossistema Aurum.', ogType: 'article' },
  { slug: 'privacidade', title: 'Política de Privacidade | Aurum Foundation', description: 'Política de Privacidade da Aurum Foundation: como tratamos dados pessoais conforme LGPD e padrões internacionais.', ogType: 'article' },
  { slug: 'cookies', title: 'Política de Cookies | Aurum Foundation', description: 'Política de Cookies Aurum Foundation: como utilizamos cookies para melhorar sua experiência.', ogType: 'article' },
];

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function rewrite(html, { title, description, url, ogType }) {
  const t = escape(title);
  const d = escape(description);
  const u = escape(url);
  // <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${t}</title>`);
  // meta description
  html = html.replace(/<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${d}" />`);
  // canonical
  html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${u}" />`);
  // og:title
  html = html.replace(/<meta\s+property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${t}" />`);
  // og:description
  html = html.replace(/<meta\s+property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${d}" />`);
  // og:type (substitui se existir; senão acrescenta)
  if (/<meta\s+property=["']og:type["']/i.test(html)) {
    html = html.replace(/<meta\s+property=["']og:type["'][^>]*>/i, `<meta property="og:type" content="${ogType || 'website'}" />`);
  }
  // og:url (acrescenta após og:type ou antes de </head>)
  html = html.replace(/<meta\s+property=["']og:url["'][^>]*>\s*/i, '');
  html = html.replace(/<\/head>/i, `    <meta property="og:url" content="${u}" />\n  </head>`);
  // twitter
  html = html.replace(/<meta\s+name=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${t}" />`);
  html = html.replace(/<meta\s+name=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${d}" />`);
  return html;
}

let count = 0;
for (const r of routes) {
  const url = `${SITE}/${r.slug}/`;
  const out = rewrite(shell, { ...r, url });
  const outDir = join(DIST, r.slug);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), out, 'utf8');
  count++;
}

// Atualiza a home com og:url canônico
const homeOut = rewrite(shell, {
  title: 'Aurum Foundation | Investimentos Cripto com IA',
  description: 'Aurum Foundation: invista em cripto com IA, Zeus AI, staking, flash loans, exchange e cartão Aurum. Cadastro, login e segurança institucional.',
  url: `${SITE}/`,
  ogType: 'website',
});
writeFileSync(join(DIST, 'index.html'), homeOut, 'utf8');

console.log(`[prerender] Gerados ${count} arquivos estáticos em dist/<rota>/index.html.`);
