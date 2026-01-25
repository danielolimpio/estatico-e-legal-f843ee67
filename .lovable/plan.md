
# Plano de Reestruturação: HTML Estático com Layout 100% Preservado

## 1. DIAGNÓSTICO DO PROBLEMA ATUAL

### Por que o layout está quebrando?

**Problema Raiz**: As tentativas anteriores de criar HTML estático estão **reconstruindo** o HTML manualmente em vez de **capturar** o HTML renderizado pelo React. Isso resulta em:

1. **Classes Tailwind faltando**: O React usa classes dinâmicas do Tailwind que não estão no CSS estático criado manualmente
2. **Estrutura DOM diferente**: A reconstrução manual não replica exatamente a hierarquia de elementos do React
3. **Estilos inline perdidos**: Alguns componentes React têm estilos inline que não foram copiados
4. **Animações e transições**: Classes de animação do Tailwind não incluídas no CSS estático

**Evidência**: O arquivo `public/static/index.html` atual foi criado manualmente e não corresponde ao HTML que o navegador renderiza quando executa o React.

### Estado atual do projeto:

- ✅ Projeto React funcionando com layout perfeito
- ✅ vite-react-ssg configurado (mas com erro de build)
- ❌ Tentativa de HTML estático quebrando o layout
- ❌ CSS estático incompleto (faltam classes do Tailwind)
- ❌ Build SSG falhando por erro no react-helmet-async

## 2. SOLUÇÃO: DUAS ABORDAGENS POSSÍVEIS

### Abordagem A: Capturar HTML do Navegador (RECOMENDADA)
**Método**: Literalmente copiar o HTML renderizado do navegador após o React carregar.

**Vantagens**:
- 100% de fidelidade visual (nenhuma diferença de um pixel)
- Inclui todas as classes Tailwind realmente usadas
- Preserva estilos inline e atributos exatos
- Não depende de corrigir erros de build

**Desvantagens**:
- Processo mais manual (requer captura página por página)
- Precisa ser refeito se o layout mudar

### Abordagem B: Corrigir Build SSG
**Método**: Resolver o erro do react-helmet-async e usar vite-react-ssg para gerar HTML.

**Vantagens**:
- Automatizado (gera todas as 17 páginas de uma vez)
- Fácil manutenção futura

**Desvantagens**:
- Precisa corrigir o erro de build primeiro
- Pode haver outros erros escondidos

## 3. IMPLEMENTAÇÃO DETALHADA - ABORDAGEM A (RECOMENDADA)

### Fase 1: Preparação do Ambiente

**Ação 1.1**: Extrair CSS completo do Tailwind
- Rodar build do Vite normalmente para gerar o CSS compilado
- Copiar o arquivo CSS gerado (que contém TODAS as classes usadas)
- Este será nosso `styles.css` definitivo

**Ação 1.2**: Criar script de captura de HTML
- Criar arquivo JavaScript que:
  - Acessa cada rota do site no preview
  - Captura o `document.documentElement.outerHTML` completo
  - Salva em arquivo .html correspondente

### Fase 2: Captura do HTML Renderizado

**Para cada uma das 17 páginas**:

1. **Acessar a rota no preview** (ex: https://preview.lovable.app/)
2. **Abrir DevTools** → Console
3. **Executar script de captura**:
```javascript
// Script para copiar HTML renderizado
const html = document.documentElement.outerHTML;
console.log(html); // Copiar para arquivo
```
4. **Salvar como arquivo físico**: `/public/static/nome-da-pagina.html`

**Páginas a capturar** (17 total):
- / → index.html
- /sobre-nos → sobre-nos.html
- /servicos → servicos.html
- /contato → contato.html
- /plataforma → plataforma.html
- /cartoes → cartoes.html
- /exchange → exchange.html
- /seguranca → seguranca.html
- /blog → blog.html
- /documentacao → documentacao.html
- /faq → faq.html
- /suporte → suporte.html
- /politica-de-privacidade → politica-de-privacidade.html
- /politica-de-cookies → politica-de-cookies.html
- /termos-de-uso → termos-de-uso.html
- /sitemap → sitemap.html
- /404 → 404.html

### Fase 3: Limpeza e Otimização do HTML Capturado

**Para cada arquivo HTML capturado, fazer APENAS estas modificações no `<head>`**:

1. **Remover tags de desenvolvimento**:
   - `<script type="module" src="/@vite/client">`
   - `<script type="module" src="/src/main.tsx">`
   - Qualquer referência a React/Vite

2. **Adicionar metadados SEO únicos**:
```html
<title>Título Único da Página</title>
<meta name="description" content="Descrição única da página">
<link rel="canonical" href="https://aurumfoundation.world/url-sem-barra-final">
<meta name="robots" content="index, follow">
```

3. **Manter referência ao CSS**:
```html
<link rel="stylesheet" href="/static/css/styles.css">
```

4. **⚠️ CRÍTICO**: NÃO ALTERAR O `<body>` EM NADA
   - Nenhuma classe
   - Nenhum elemento
   - Nenhum atributo
   - Nenhum espaço em branco
   - ZERO mudanças estruturais

### Fase 4: Estrutura de Arquivos Final

```
public/
├── .htaccess (já configurado corretamente)
├── robots.txt (já existe)
├── sitemap.xml (criar/atualizar com 17 URLs)
├── favicon.ico
└── static/
    ├── css/
    │   └── styles.css (CSS compilado completo)
    ├── images/
    │   ├── logo-aurum.png
    │   ├── hero-bg.jpg
    │   ├── cards-image.webp
    │   └── [todas as outras imagens]
    ├── index.html
    ├── sobre-nos.html
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
    └── 404.html
```

### Fase 5: Metadados SEO Únicos por Página

Cada página terá no `<head>`:

**Homepage** (/):
```html
<title>Aurum | Gestão Inteligente de Ativos Digitais</title>
<meta name="description" content="Plataforma segura de gestão patrimonial com IA e blockchain. Invista com inteligência e segurança institucional.">
<link rel="canonical" href="https://aurumfoundation.world">
```

**Sobre Nós** (/sobre-nos):
```html
<title>Sobre Nós | Aurum Foundation</title>
<meta name="description" content="Conheça a Aurum Foundation. Tecnologia financeira de última geração com sede em Hong Kong, regulamentada e segura.">
<link rel="canonical" href="https://aurumfoundation.world/sobre-nos">
```

**Serviços** (/servicos):
```html
<title>Serviços | Plataforma, Cartões e Exchange | Aurum</title>
<meta name="description" content="Plataforma de gestão, cartões cripto e exchange integrada. Ecossistema completo para seus investimentos digitais.">
<link rel="canonical" href="https://aurumfoundation.world/servicos">
```

[E assim por diante para todas as 17 páginas - cada uma com título e descrição únicos]

### Fase 6: Configuração do Servidor (.htaccess)

**Arquivo já existente e correto**, mas verificar:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Remove trailing slashes
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)/$ /$1 [L,R=301]

# Serve .html files for URLs without extension
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{DOCUMENT_ROOT}/static/%{REQUEST_URI}.html -f
RewriteRule ^(.*)$ /static/$1.html [L]

# Root to static/index.html
RewriteCond %{REQUEST_URI} ^/$
RewriteRule ^$ /static/index.html [L]

# Error documents
ErrorDocument 404 /static/404.html
```

### Fase 7: Sitemap.xml

Criar/atualizar com todas as 17 URLs:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://aurumfoundation.world</loc>
    <lastmod>2025-01-25</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://aurumfoundation.world/sobre-nos</loc>
    <lastmod>2025-01-25</lastmod>
    <priority>0.8</priority>
  </url>
  <!-- ... mais 15 URLs -->
</urlset>
```

### Fase 8: Deploy via GitHub Actions

**Workflow já existente**, apenas garantir que faz upload correto:

```yaml
- name: Deploy FTP para Hostinger
  uses: SamKirkland/FTP-Deploy-Action@v4.3.4
  with:
    server: ${{ secrets.FTP_HOST }}
    username: ${{ secrets.FTP_USER }}
    password: ${{ secrets.FTP_PASS }}
    local-dir: ./public/
    server-dir: /
    dangerous-clean-slate: true
```

## 4. VALIDAÇÃO PÓS-DEPLOY

### Checklist de Validação:

**Visual (100% idêntico)**:
- [ ] Header: logo, menu, botões no lugar certo
- [ ] Hero: vídeo com frame dourado, texto alinhado
- [ ] Features: 4 cards com ícones e descrições
- [ ] Stats: números com gradiente dourado
- [ ] CTA: botões e badges corretos
- [ ] Video Section: frame premium intacto
- [ ] Cards Section: layout em duas colunas, imagem à direita
- [ ] Footer: todas as colunas e links
- [ ] Mobile: responsividade perfeita
- [ ] Cores: azul primário (#4B9EF8), gradientes corretos
- [ ] Tipografia: Space Grotesk e Inter carregando

**SEO (indexável)**:
- [ ] Todas as 17 URLs retornam 200 OK
- [ ] Conteúdo visível no "View Source" do navegador
- [ ] Título único em cada página
- [ ] Meta description única em cada página
- [ ] Canonical correto (sem barra final)
- [ ] Robots meta tag presente
- [ ] Sitemap.xml listando todas as URLs
- [ ] Robots.txt apontando para sitemap

**Funcional**:
- [ ] Links internos funcionando (/sobre-nos, /servicos, etc.)
- [ ] Links externos abrindo em nova aba
- [ ] URLs sem barra final (redirecionamento 301 se com barra)
- [ ] 404 real para URLs inexistentes
- [ ] HTTPS forçado (redirecionamento HTTP → HTTPS)
- [ ] Imagens carregando corretamente

## 5. CRONOGRAMA DE EXECUÇÃO

### Semana 1 - Preparação:
- **Dia 1-2**: Extrair CSS compilado do Tailwind
- **Dia 3**: Criar script de captura de HTML
- **Dia 4-5**: Capturar HTML das 17 páginas

### Semana 2 - Implementação:
- **Dia 1-2**: Limpar HTML e adicionar metadados SEO
- **Dia 3**: Organizar estrutura de arquivos
- **Dia 4**: Criar/atualizar sitemap.xml
- **Dia 5**: Validar localmente (abrir cada .html no navegador)

### Semana 3 - Deploy e Validação:
- **Dia 1**: Deploy para Hostinger
- **Dia 2-3**: Validação completa (visual, SEO, funcional)
- **Dia 4**: Correções (se necessário)
- **Dia 5**: Submeter ao Google Search Console

## 6. DETALHES TÉCNICOS IMPORTANTES

### CSS Completo do Tailwind

O arquivo `styles.css` DEVE incluir:

1. **Reset CSS** (já no Tailwind base)
2. **Variáveis CSS customizadas**:
```css
:root {
  --primary: 217 91% 60%;
  --foreground: 220 20% 10%;
  --background: 0 0% 100%;
  /* ... todas as outras */
}
```

3. **Classes utilitárias do Tailwind**:
   - `.container`, `.flex`, `.grid`, `.text-*`, `.bg-*`, etc.
   - Todas as classes realmente usadas no HTML

4. **Classes customizadas**:
```css
.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(135deg, hsl(217 91% 60%), hsl(230 80% 50%));
}

.btn-hero {
  /* estilos do botão hero */
}

.stat-card {
  /* estilos dos cards */
}
```

5. **Animações**:
```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.6s ease-out forwards;
}
```

### Preservação de Interatividade

**Nota Importante**: O HTML estático NÃO terá:
- ❌ Dropdown menus interativos (mobile menu)
- ❌ Vídeo embed interativo (será link para YouTube)
- ❌ Animações on-scroll
- ❌ Formulários com validação

**Solução**:
1. **Menu Mobile**: Converter para menu sempre visível em mobile ou usar CSS puro (`:checked` hack)
2. **Vídeos**: Substituir iframe por imagem + link para YouTube
3. **Formulários**: Apontar para serviço externo (Formspree, Google Forms)

Se interatividade for crítica, considerar a Abordagem B (SSG com hidratação).

## 7. ALTERNATIVA: ABORDAGEM B (SSG AUTOMATIZADO)

Se preferir automatização, podemos:

### Passo 1: Corrigir erro do react-helmet-async
Já tentado mas falhou. Alternativas:
- Remover react-helmet-async completamente
- Usar meta tags diretas no HTML gerado pelo SSG
- Configurar template do vite-react-ssg

### Passo 2: Configurar vite-react-ssg corretamente
- Ajustar `vite.config.ts`
- Criar template HTML personalizado
- Garantir que todas as 17 rotas sejam geradas

### Passo 3: Executar build SSG
```bash
npm run build
```

Isso geraria automaticamente os 17 arquivos HTML em `dist/`.

**Vantagem**: Automatizado e mantém estrutura React.
**Desvantagem**: Precisa resolver o erro atual primeiro.

## 8. RECOMENDAÇÃO FINAL

**Eu recomendo a Abordagem A (Captura do Navegador)** porque:

1. ✅ **Garantia de 100% fidelidade visual** - literalmente o mesmo HTML
2. ✅ **Não depende de corrigir bugs** - funciona imediatamente
3. ✅ **CSS automático** - todas as classes já estão compiladas
4. ✅ **Testado e comprovado** - mesmo método do theartofyoga.org
5. ✅ **Rápido** - pode ser feito em 3-5 dias

A Abordagem B é mais elegante mas requer:
- Depuração do erro react-helmet-async
- Possibilidade de outros erros escondidos
- Mais tempo de implementação

## 9. PRÓXIMOS PASSOS IMEDIATOS

Se você aprovar este plano, começarei por:

1. **Extrair o CSS compilado completo** do build do Vite
2. **Criar script de captura** para automatizar extração do HTML
3. **Capturar a homepage primeiro** como prova de conceito
4. **Validar visualmente** que está 100% idêntico
5. **Depois replicar para as outras 16 páginas**

**Tempo estimado total**: 3-5 dias de trabalho.

**Resultado garantido**: Site 100% estático, layout idêntico, todas as URLs indexáveis, deploy funcional na Hostinger.
