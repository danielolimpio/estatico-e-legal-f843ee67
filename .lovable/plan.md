
# Plano: Tornar URLs Estáticas Indexáveis

## Diagnóstico do Problema

O Screaming Frog está marcando as páginas como "Non-Indexable" porque o servidor está redirecionando URLs sem extensão (ex: `/sobre-nos`) para o `index.html` da SPA React, em vez de servir os arquivos HTML estáticos correspondentes (ex: `sobre-nos.html`).

**Fluxo atual (problemático):**
```text
Requisição: /sobre-nos
    ↓
.htaccess: arquivo não existe
    ↓
Redireciona para index.html (SPA React)
    ↓
Googlebot: "Non-Indexable" (precisa de JS)
```

**Fluxo desejado:**
```text
Requisição: /sobre-nos
    ↓
.htaccess: reescreve para sobre-nos.html
    ↓
Servidor entrega HTML estático
    ↓
Googlebot: "Indexable"
```

---

## Solução

### Etapa 1: Atualizar o .htaccess

Modificar o `public/.htaccess` para:
1. Primeiro tentar servir arquivos `.html` correspondentes às URLs sem extensão
2. Só depois redirecionar para `index.html` como fallback para a SPA

**Nova configuração:**

```text
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # 1. Se a URL não tem extensão, tenta adicionar .html
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME}.html -f
  RewriteRule ^(.*)$ $1.html [L]

  # 2. Fallback para SPA - só se .html também não existe
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

### Etapa 2: Verificar Headers HTTP

Adicionar configurações para garantir que o servidor envia os headers corretos:

```text
# Garantir Content-Type correto para HTML
<IfModule mod_mime.c>
  AddType text/html .html
</IfModule>

# Cache para arquivos estáticos
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 1 hour"
</IfModule>
```

---

## Resumo das Alterações

| Arquivo | Ação |
|---------|------|
| `public/.htaccess` | Adicionar regra de rewrite para servir `.html` antes de redirecionar para SPA |

---

## Resultado Esperado

Após a alteração:

- `/sobre-nos` → servidor entrega `sobre-nos.html` → **Indexable**
- `/servicos` → servidor entrega `servicos.html` → **Indexable**
- `/contato` → servidor entrega `contato.html` → **Indexable**
- Todas as 16 páginas serão corretamente indexadas pelo Googlebot

---

## Seção Técnica

### Por que isso funciona?

A nova regra no `.htaccess` usa uma condição adicional:
```text
RewriteCond %{REQUEST_FILENAME}.html -f
```

Esta linha verifica se existe um arquivo `.html` correspondente à URL requisitada. Se existir, faz o rewrite para esse arquivo. Caso contrário, passa para a próxima regra (fallback para SPA).

### Ordem de prioridade:
1. Arquivo exato existe → servir arquivo
2. Arquivo + `.html` existe → servir arquivo HTML
3. Nenhum existe → fallback para SPA (`index.html`)
