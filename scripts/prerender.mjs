// Pós-build: gera dist/<rota>/index.html físico para cada rota da fonte única
// (scripts/routes.mjs), injetando <title>, meta description, canonical e og:*
// únicos. Crawlers e bots de redes sociais leem o HTML estático sem precisar
// de JS; no browser real, o SPA hidrata normalmente (mesmo bundle JS em todas
// as rotas).

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routes, canonicalUrl } from './routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

if (!existsSync(join(DIST, 'index.html'))) {
  console.error('[prerender] dist/index.html não encontrado. Pulando.');
  process.exit(0);
}

const shell = readFileSync(join(DIST, 'index.html'), 'utf8');
const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function rewrite(html, { title, description, url, ogType }) {
  const t = escape(title);
  const d = escape(description);
  const u = escape(url);
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${t}</title>`);
  html = html.replace(/<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${d}" />`);
  html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${u}" />`);
  html = html.replace(/<meta\s+property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${t}" />`);
  html = html.replace(/<meta\s+property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${d}" />`);
  if (/<meta\s+property=["']og:type["']/i.test(html)) {
    html = html.replace(/<meta\s+property=["']og:type["'][^>]*>/i, `<meta property="og:type" content="${ogType || 'website'}" />`);
  }
  html = html.replace(/<meta\s+property=["']og:url["'][^>]*>\s*/i, '');
  html = html.replace(/<\/head>/i, `    <meta property="og:url" content="${u}" />\n  </head>`);
  html = html.replace(/<meta\s+name=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${t}" />`);
  html = html.replace(/<meta\s+name=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${d}" />`);
  return html;
}

let count = 0;
for (const r of routes) {
  const url = canonicalUrl(r.slug);
  const out = rewrite(shell, { title: r.title, description: r.description, url, ogType: r.ogType || 'website' });
  if (r.slug === '') {
    writeFileSync(join(DIST, 'index.html'), out, 'utf8');
  } else {
    const outDir = join(DIST, r.slug);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), out, 'utf8');
  }
  count++;
}

console.log(`[prerender] ${count} arquivos estáticos gerados em dist/<rota>/index.html.`);
