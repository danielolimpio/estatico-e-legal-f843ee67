

# Plano: Tornar Todas as Páginas Indexáveis com Pré-renderização

## Diagnóstico do Problema

Analisando o screenshot do Screaming Frog e os arquivos do projeto, identifiquei as seguintes causas do problema "Non-Indexable":

### Problema Principal
O servidor Apache está redirecionando TODAS as URLs sem extensão (ex: `/sobre-nos`) para o `index.html` da SPA React. Isso ocorre porque:

1. O arquivo `.htaccess` atual tem apenas uma regra de fallback para SPA
2. Os arquivos HTML estáticos em `public/` (como `sobre-nos.html`) existem, mas o servidor NÃO os serve
3. Resultado: Crawlers recebem o `index.html` que precisa de JavaScript para renderizar

### Fluxo Atual (Problemático)
```text
Requisição: /sobre-nos
    ↓
Apache: arquivo /sobre-nos não existe
    ↓
.htaccess: redireciona para /index.html
    ↓
Screaming Frog: "Non-Indexable" (precisa de JS)
```

### Problema Secundário
Os arquivos HTML estáticos em `public/` têm layout simples (sem CSS/design), diferente do layout React bonito. Você quer manter o visual atual.

---

## Solução Proposta: Pré-renderização com Layout Preservado

A solução envolve duas etapas:
1. **Corrigir o .htaccess** para servir arquivos `.html` existentes
2. **Gerar HTMLs pré-renderizados** com o layout React completo usando `vite-ssg`

---

## Etapa 1: Corrigir o .htaccess

Modificar `public/.htaccess` para priorizar arquivos `.html` antes do fallback SPA:

```text
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # 1. Se a URL termina sem extensão, verifica se existe .html correspondente
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME}.html -f
  RewriteRule ^(.*)$ $1.html [L]

  # 2. Fallback para SPA (apenas se nenhum .html existe)
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Headers corretos
<IfModule mod_mime.c>
  AddType text/html .html
</IfModule>
```

---

## Etapa 2: Configurar Pré-renderização (vite-ssg)

Instalar e configurar `vite-ssg` para gerar HTML estático com o layout React completo durante o build.

### 2.1 Instalar Dependências
```bash
npm install vite-ssg react-router-dom@6
```

### 2.2 Modificar `vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    entry: './src/main-ssg.tsx'
  }
})
```

### 2.3 Criar Arquivo de Entrada SSG
Criar `src/main-ssg.tsx` para definir as rotas a pré-renderizar:

```typescript
import { ViteSSG } from 'vite-ssg'
import App from './App'

const routes = [
  { path: '/', component: () => import('./pages/Index') },
  { path: '/sobre-nos', component: () => import('./pages/SobreNos') },
  { path: '/servicos', component: () => import('./pages/Servicos') },
  { path: '/contato', component: () => import('./pages/Contato') },
  { path: '/plataforma', component: () => import('./pages/Plataforma') },
  { path: '/cartoes', component: () => import('./pages/Cartoes') },
  { path: '/exchange', component: () => import('./pages/Exchange') },
  { path: '/seguranca', component: () => import('./pages/Seguranca') },
  { path: '/blog', component: () => import('./pages/Blog') },
  { path: '/documentacao', component: () => import('./pages/Documentacao') },
  { path: '/faq', component: () => import('./pages/FAQ') },
  { path: '/suporte', component: () => import('./pages/Suporte') },
  { path: '/politica-de-privacidade', component: () => import('./pages/PoliticaPrivacidade') },
  { path: '/politica-de-cookies', component: () => import('./pages/PoliticaCookies') },
  { path: '/termos-de-uso', component: () => import('./pages/TermosDeUso') },
  { path: '/sitemap', component: () => import('./pages/Sitemap') }
]

export const createApp = ViteSSG(App, { routes })
```

### 2.4 Atualizar Script de Build
Em `package.json`, modificar o script de build:

```json
{
  "scripts": {
    "build": "vite-ssg build",
    "build:ssg": "vite-ssg build"
  }
}
```

---

## Etapa 3: Atualizar GitHub Actions

Modificar `.github/workflows/deploy.yml` para usar o novo build:

```yaml
- name: Build do projeto
  run: npm run build
```

O output agora gerará arquivos como:
```text
dist/
├── index.html
├── sobre-nos.html      ← HTML pré-renderizado com layout React
├── servicos.html
├── contato.html
├── plataforma.html
├── cartoes.html
├── exchange.html
├── seguranca.html
├── blog.html
├── documentacao.html
├── faq.html
├── suporte.html
├── politica-de-privacidade.html
├── politica-de-cookies.html
├── termos-de-uso.html
├── sitemap.html
└── assets/
    ├── *.js
    └── *.css
```

---

## Etapa 4: Remover Arquivos HTML Simples Duplicados

Deletar os arquivos HTML simples atuais em `public/` que serão substituídos pelos pré-renderizados:

```text
Arquivos a remover de public/:
- sobre-nos.html
- servicos.html
- contato.html
- plataforma.html
- cartoes.html
- exchange.html
- seguranca.html
- blog.html
- documentacao.html
- faq.html
- suporte.html
- politica-de-privacidade.html
- politica-de-cookies.html
- termos-de-uso.html
- sitemap.html
```

Manter em `public/`:
- `robots.txt`
- `sitemap.xml`
- `favicon.ico`
- `favicon.jpg`
- `.htaccess`

---

## Resultado Esperado

### Fluxo Corrigido
```text
Requisição: /sobre-nos
    ↓
Apache: arquivo /sobre-nos não existe
    ↓
.htaccess: verifica sobre-nos.html → EXISTE!
    ↓
Servidor entrega sobre-nos.html (HTML pré-renderizado)
    ↓
Screaming Frog: "Indexable" ✓
    ↓
React hidrata e torna interativo
```

### Benefícios
- Layout React preservado 100% (mesmo visual)
- HTML completo no source para crawlers
- JavaScript hidrata para interatividade
- SEO perfeito com meta tags e JSON-LD
- Zero dependência de JS para indexação

---

## Páginas que Serão Indexáveis (16 total)

| URL | Status Esperado |
|-----|----------------|
| `/` | Indexable |
| `/sobre-nos` | Indexable |
| `/servicos` | Indexable |
| `/contato` | Indexable |
| `/plataforma` | Indexable |
| `/cartoes` | Indexable |
| `/exchange` | Indexable |
| `/seguranca` | Indexable |
| `/blog` | Indexable |
| `/documentacao` | Indexable |
| `/faq` | Indexable |
| `/suporte` | Indexable |
| `/politica-de-privacidade` | Indexable |
| `/politica-de-cookies` | Indexable |
| `/termos-de-uso` | Indexable |
| `/sitemap` | Indexable |

---

## Seção Técnica Detalhada

### Como funciona o vite-ssg

1. Durante o build, o vite-ssg renderiza cada rota no servidor (Node.js)
2. O HTML completo com todo o conteúdo é salvo como arquivo estático
3. O JavaScript é incluído para "hidratar" a página no navegador
4. Resultado: HTML indexável + interatividade SPA

### Compatibilidade

- `vite-ssg` é compatível com React 18
- Funciona com react-router-dom v6
- Não requer mudanças nos componentes React existentes
- Layout e CSS são preservados 100%

### Arquivos Modificados

| Arquivo | Ação |
|---------|------|
| `public/.htaccess` | Atualizar regras de rewrite |
| `vite.config.ts` | Adicionar configuração SSG |
| `package.json` | Atualizar dependências e scripts |
| `src/main-ssg.tsx` | Criar (novo arquivo) |
| `public/*.html` | Deletar arquivos simples |
| `.github/workflows/deploy.yml` | Sem alteração (mesmo comando) |

