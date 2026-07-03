// Gera dist/sitemap.xml a partir da lista canônica de rotas SSG.
// - Apenas URLs canônicas (com barra final).
// - lastmod = data do último commit que tocou dist/<slug>/index.html
//   (fallback: data ISO do build).

import { writeFileSync, existsSync, statSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routes, canonicalUrl, SITE } from './routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PUBLIC = join(__dirname, '..', 'public');
const TODAY = new Date().toISOString().slice(0, 10);

function gitLastMod(slug) {
  const rel = slug ? `src/pages/${slug}.tsx` : 'src/pages/Index.tsx';
  try {
    const out = execSync(`git log -1 --format=%cs -- ${rel}`, { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString().trim();
    if (out) return out;
  } catch { /* git indisponível — cai no fallback */ }
  return TODAY;
}

function fileMtime(slug) {
  const p = join(DIST, slug || '', 'index.html');
  if (!existsSync(p)) return null;
  return statSync(p).mtime.toISOString().slice(0, 10);
}

const urls = routes.map((r) => {
  const lastmod = fileMtime(r.slug) || gitLastMod(r.slug);
  return [
    '  <url>',
    `    <loc>${canonicalUrl(r.slug)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    r.changefreq ? `    <changefreq>${r.changefreq}</changefreq>` : null,
    r.priority ? `    <priority>${r.priority}</priority>` : null,
    r.slug === '' ? `    <xhtml:link rel="alternate" hreflang="pt-BR" href="${SITE}/" />` : null,
    r.slug === '' ? `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/" />` : null,
    '  </url>',
  ].filter(Boolean).join('\n');
});

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
  '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...urls,
  '</urlset>',
  '',
].join('\n');

// Escreve em dist/ (o que vai para produção) e em public/ (para dev/preview).
if (existsSync(DIST)) writeFileSync(join(DIST, 'sitemap.xml'), xml, 'utf8');
writeFileSync(join(PUBLIC, 'sitemap.xml'), xml, 'utf8');

console.log(`[sitemap] ${routes.length} URLs canônicas geradas.`);
