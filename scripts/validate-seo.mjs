// Valida no build que cada dist/<rota>/index.html possui as tags SEO
// obrigatórias, com valores únicos por rota. Falha o build ao primeiro erro.

import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routes, canonicalUrl } from './routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

const errors = [];
const seen = { title: new Map(), description: new Map(), canonical: new Map() };

const rules = [
  { name: 'title',            re: /<title>([\s\S]*?)<\/title>/i,                                        unique: true },
  { name: 'description',      re: /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i,        unique: true },
  { name: 'canonical',        re: /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i,             unique: true },
  { name: 'og:title',         re: /<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i },
  { name: 'og:description',   re: /<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i },
  { name: 'og:url',           re: /<meta\s+property=["']og:url["']\s+content=["']([^"']+)["']/i },
  { name: 'og:type',          re: /<meta\s+property=["']og:type["']\s+content=["']([^"']+)["']/i },
  { name: 'twitter:card',     re: /<meta\s+name=["']twitter:card["']\s+content=["']([^"']+)["']/i },
  { name: 'twitter:title',    re: /<meta\s+name=["']twitter:title["']\s+content=["']([^"']+)["']/i },
  { name: 'twitter:description', re: /<meta\s+name=["']twitter:description["']\s+content=["']([^"']+)["']/i },
  { name: 'json-ld',          re: /<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/i },
];

for (const r of routes) {
  const file = join(DIST, r.slug, 'index.html');
  if (!existsSync(file)) { errors.push(`[${r.slug || '/'}] arquivo ausente: ${file}`); continue; }
  const html = readFileSync(file, 'utf8');

  for (const rule of rules) {
    const m = html.match(rule.re);
    if (!m) { errors.push(`[${r.slug || '/'}] tag ausente: ${rule.name}`); continue; }
    const value = (m[1] || '').trim();

    if (rule.name === 'canonical' && value !== canonicalUrl(r.slug)) {
      errors.push(`[${r.slug || '/'}] canonical incorreto: "${value}" != "${canonicalUrl(r.slug)}"`);
    }
    if (rule.name === 'og:url' && value !== canonicalUrl(r.slug)) {
      errors.push(`[${r.slug || '/'}] og:url incorreto: "${value}" != "${canonicalUrl(r.slug)}"`);
    }
    if (rule.name === 'title' && value !== r.title) {
      errors.push(`[${r.slug || '/'}] title diverge de routes.mjs: "${value}"`);
    }
    if (rule.name === 'description' && value !== r.description) {
      errors.push(`[${r.slug || '/'}] description diverge de routes.mjs: "${value}"`);
    }
    if (rule.unique) {
      const map = seen[rule.name];
      if (map.has(value)) {
        errors.push(`[${r.slug || '/'}] ${rule.name} duplicado (também em [${map.get(value) || '/'}]): "${value}"`);
      } else {
        map.set(value, r.slug);
      }
    }
  }
}

if (errors.length) {
  console.error('\n[validate-seo] Falhas encontradas:\n' + errors.map((e) => '  - ' + e).join('\n') + '\n');
  process.exit(1);
}

console.log(`[validate-seo] OK — ${routes.length} rotas com SEO válido e único.`);
