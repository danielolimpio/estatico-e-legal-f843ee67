

# Plano: Restaurar Layout Premium nas Páginas HTML Estáticas

## Resumo

As páginas HTML estáticas criadas perderam completamente o visual premium do site React original. Vou recriar todas as 16 páginas com o mesmo design sofisticado, mantendo a estrutura 100% estática para SEO.

---

## Diferenças Identificadas

### Visual Original (React)
- Fontes premium: Space Grotesk + Inter
- Cores: Paleta azul vibrante (#3b82f6) com detalhes dourados
- Header: Fundo escuro translúcido com backdrop-blur
- Hero: Gradientes suaves, badges decorativos, elementos geométricos
- Cards: Sombras elegantes, bordas sutis, hover effects
- Seções: Alternância de fundos claros/escuros
- Footer: Grid organizado com 5 colunas, ícones sociais, WhatsApp
- Animações CSS: fade-up, float, transições suaves

### Visual Atual (HTML Estático)
- Fontes genéricas de sistema
- Cores: Paleta gold/marrom (#c9a227)
- Header: Design básico sem sofisticação
- Cards: Sombras simples, sem interatividade
- Footer: Simplificado demais
- Sem animações ou efeitos visuais

---

## Plano de Implementação

### Fase 1: Criar CSS Premium Global

Criar um arquivo `style.css` compartilhado com:

1. **Fontes**: Google Fonts (Space Grotesk + Inter)
2. **Paleta de cores** baseada no original:
   - Primary: `#3b82f6` (azul vibrante)
   - Background escuro: `#0a0e17`
   - Gradientes hero e dark
3. **Componentes reutilizáveis**:
   - `.header-premium` com backdrop-blur
   - `.hero-section` com geometric pattern
   - `.stat-card` com hover lift
   - `.cta-section` com gradientes
   - `.footer-premium` completo

4. **Animações CSS**:
   - `@keyframes fadeUp`
   - `@keyframes float`
   - Classes utilitárias de animação

---

### Fase 2: Estrutura HTML Atualizada

Cada página terá:

```text
+------------------------------------------+
|  HEADER PREMIUM (sticky, backdrop-blur)  |
|  - Logo Aurum                            |
|  - Navigation links                      |
|  - Botões "Entrar" e "Começar Agora"     |
+------------------------------------------+
|                                          |
|  HERO SECTION                            |
|  - Badge decorativo                      |
|  - H1 com text-gradient                  |
|  - Subtítulo                             |
|  - Trust indicators                      |
|                                          |
+------------------------------------------+
|                                          |
|  CONTENT SECTIONS                        |
|  - Alternância de backgrounds            |
|  - Cards com hover effects               |
|  - Ícones SVG inline                     |
|                                          |
+------------------------------------------+
|                                          |
|  CTA SECTION                             |
|  - Gradiente de fundo                    |
|  - Botões de ação                        |
|                                          |
+------------------------------------------+
|                                          |
|  FOOTER PREMIUM (5 colunas)              |
|  - Logo + descrição                      |
|  - Produto | Empresa | Recursos | Legal  |
|  - Endereço Hong Kong + Certificado      |
|  - Ícones sociais (WhatsApp, X, etc)     |
|                                          |
+------------------------------------------+
```

---

### Fase 3: Arquivos a Criar/Atualizar

| Arquivo | Ação |
|---------|------|
| `public/css/style.css` | CRIAR - CSS premium compartilhado |
| `public/index.html` | ATUALIZAR - Layout premium |
| `public/sobre-nos/index.html` | ATUALIZAR - Com seções do React original |
| `public/servicos/index.html` | ATUALIZAR - Grid de serviços |
| `public/contato/index.html` | ATUALIZAR - Formulário premium |
| `public/plataforma/index.html` | ATUALIZAR - Layout produto |
| `public/cartoes/index.html` | ATUALIZAR - Apresentação cartões |
| `public/exchange/index.html` | ATUALIZAR - Recursos exchange |
| `public/seguranca/index.html` | ATUALIZAR - Features segurança |
| `public/blog/index.html` | ATUALIZAR - Grid de artigos |
| `public/documentacao/index.html` | ATUALIZAR - Docs API |
| `public/faq/index.html` | ATUALIZAR - Accordion style |
| `public/suporte/index.html` | ATUALIZAR - Central ajuda |
| `public/termos-de-uso/index.html` | ATUALIZAR - Documento legal |
| `public/politica-de-privacidade/index.html` | ATUALIZAR - LGPD |
| `public/politica-de-cookies/index.html` | ATUALIZAR - Cookies |
| `public/sitemap/index.html` | ATUALIZAR - Mapa visual |

---

### Fase 4: Elementos Visuais Premium

**Header Premium**
- Background: gradiente escuro translúcido
- Backdrop-blur para efeito glass
- Logo Aurum (usar favicon.jpg por enquanto)
- Menu desktop com underline animado
- Botões CTA com glow effect

**Hero Sections**
- Padrão geométrico de fundo (CSS pure)
- Badge com ícone Shield
- Título com `text-gradient`
- Descrição com opacity suave
- Trust indicators com ícones

**Cards de Serviço**
- Background branco/card
- Borda sutil + shadow
- Ícone em container azul
- Hover: elevação + shadow azul
- Transições suaves (0.3s)

**Footer Premium**
- Background escuro (#0a0e17)
- Grid 5 colunas responsivo
- Links com hover color
- Ícones sociais SVG (WhatsApp, X, LinkedIn, Instagram)
- Informações legais Hong Kong
- Certificado número

---

## Detalhes Tecnico

### CSS Variables (compatível browsers antigos)
```css
:root {
  --primary: #3b82f6;
  --primary-hover: #2563eb;
  --background: #ffffff;
  --foreground: #0f172a;
  --background-dark: #0a0e17;
  --muted: #64748b;
  --border: #e2e8f0;
  --card-shadow: 0 4px 24px -4px rgba(59,130,246,0.15);
}
```

### Fontes
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Responsividade
- Mobile first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Menu hamburger para mobile (CSS only)

---

## Resultado Esperado

Apos a implementacao:
- Visual identico ao site React original
- 100% estatico (zero JavaScript obrigatorio)
- SEO completo mantido (metatags, canonicals, sitemap)
- Tempo de carregamento rapido
- Compativel com todos os navegadores modernos
- Pronto para AdSense e indexacao Google

---

## Observacao

As imagens de assets (hero-about-bg.webp, cards-image.webp, etc) podem ser copiadas da pasta `src/assets/` para `public/assets/` para uso nas paginas estaticas.

