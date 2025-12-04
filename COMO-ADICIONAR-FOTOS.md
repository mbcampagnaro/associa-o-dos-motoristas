# 📸 Guia: Como Adicionar Fotos no Site

Este guia explica as diferentes formas de adicionar fotos ao site da AMV.

## 📋 Formas de Adicionar Fotos

O site suporta **duas formas principais** de exibir fotos:

### 1️⃣ **Link Direto para Google Drive** (Mais Simples)
Ideal para galerias públicas que não precisam de captura de dados.

### 2️⃣ **Página de Captura** (Com Formulário)
Ideal para fotos exclusivas que requerem captura de dados antes do acesso.

---

## 🎯 Método 1: Adicionar Galeria com Link Direto

### Passo a Passo:

1. **Organize as fotos no Google Drive:**
   - Crie uma pasta no Google Drive
   - Faça upload das fotos
   - Configure a pasta como **"Qualquer pessoa com o link pode ver"**

2. **Copie o link de compartilhamento:**
   - Clique com botão direito na pasta
   - Selecione "Obter link"
   - Copie o link completo

3. **Adicione na página `galeria.html`:**

   Abra o arquivo `galeria.html` e adicione um novo card dentro da `<div class="gallery-grid">`:

   ```html
   <div class="gallery-card">
     <h3>Nome do Evento</h3>
     <a href="LINK_DO_GOOGLE_DRIVE_AQUI" target="_blank">Ver fotos</a>
   </div>
   ```

   **Exemplo:**
   ```html
   <div class="gallery-card">
     <h3>Festa 2026</h3>
     <a href="https://drive.google.com/drive/folders/SEU_ID_AQUI?usp=sharing" target="_blank">Ver fotos</a>
   </div>
   ```

4. **Salve e faça commit:**
   ```bash
   git add galeria.html
   git commit -m "feat: adicionar galeria Festa 2026"
   git push
   ```

---

## 🔒 Método 2: Adicionar Galeria com Captura de Dados

Use este método quando quiser capturar dados dos visitantes antes de dar acesso às fotos.

### Passo a Passo:

1. **Crie uma nova página HTML** (exemplo: `captura-evento-2026.html`):

   Copie o arquivo `captura-rainha-2025.html` como base:

   ```bash
   cp captura-rainha-2025.html captura-evento-2026.html
   ```

2. **Edite a nova página:**

   - Altere o título e textos
   - Atualize o link do Google Drive (linha 305)
   - Atualize o nome do evento no formulário (linha 284)

   **Exemplo de alterações:**
   ```html
   <!-- Linha 6: Título -->
   <title>Evento 2026 - AMV</title>
   
   <!-- Linha 150: Título na página -->
   <h1>Evento 2026</h1>
   
   <!-- Linha 305: Link do Google Drive -->
   window.open('https://drive.google.com/drive/folders/SEU_ID_AQUI?usp=sharing', '_blank');
   ```

3. **Adicione na galeria:**

   Em `galeria.html`, adicione:
   ```html
   <div class="gallery-card">
     <h3>Evento 2026</h3>
     <a href="captura-evento-2026.html">Ver fotos</a>
   </div>
   ```

4. **Configure o Google Sheets** (se necessário):

   O formulário envia dados para o Google Sheets. Se quiser capturar dados:
   - Siga as instruções em `INSTRUCOES-GOOGLE-SHEETS.md`
   - Ou use o mesmo script já configurado (funciona para todos os eventos)

---

## 🖼️ Método 3: Adicionar Fotos Diretamente no Site (Avançado)

Se quiser exibir fotos diretamente no site (sem Google Drive):

### Opção A: Usar Imagens Locais

1. **Crie uma pasta para as fotos:**
   ```bash
   mkdir -p img/galeria/evento-2026
   ```

2. **Adicione as fotos** (otimize antes - máximo 500KB cada)

3. **Crie uma página de galeria** (exemplo: `galeria-evento-2026.html`):

   ```html
   <!DOCTYPE html>
   <html lang="pt-BR">
   <head>
     <title>Evento 2026 - AMV</title>
     <link rel="stylesheet" href="css/style.css" />
   </head>
   <body>
     <div id="header-container"></div>
     <main>
       <section class="card">
         <h2>Evento 2026</h2>
         <div class="gallery-grid">
           <img src="img/galeria/evento-2026/foto1.jpg" alt="Foto 1" />
           <img src="img/galeria/evento-2026/foto2.jpg" alt="Foto 2" />
           <!-- Adicione mais imagens -->
         </div>
       </section>
     </main>
     <div id="footer-container"></div>
     <script src="js/components-loader.js"></script>
     <script src="js/menu-toggle.js"></script>
   </body>
   </html>
   ```

### Opção B: Usar Lightbox (Recomendado)

Para uma experiência melhor, você pode adicionar um lightbox. Exemplo usando uma biblioteca simples.

---

## 📝 Checklist para Adicionar Nova Galeria

- [ ] Fotos organizadas no Google Drive (ou pasta local)
- [ ] Link de compartilhamento copiado (se Google Drive)
- [ ] Card adicionado em `galeria.html`
- [ ] Página de captura criada (se necessário)
- [ ] Testado localmente
- [ ] Commit e push feito

---

## 💡 Dicas Importantes

### Para Google Drive:
- ✅ Use pastas organizadas por evento/ano
- ✅ Configure permissões: "Qualquer pessoa com o link pode ver"
- ✅ Use nomes descritivos nas pastas
- ✅ Mantenha o link atualizado se mover a pasta

### Para Fotos Locais:
- ✅ Otimize as imagens antes de adicionar (use ferramentas como TinyPNG)
- ✅ Use formatos WebP ou JPG otimizado
- ✅ Tamanho recomendado: máximo 500KB por foto
- ✅ Resolução recomendada: máximo 1920px de largura

### Organização:
- ✅ Mantenha um padrão de nomenclatura
- ✅ Documente os links no código (comentários)
- ✅ Atualize a lista de eventos regularmente

---

## 🔗 Links Úteis

- **Google Drive:** https://drive.google.com
- **Otimizador de Imagens:** https://tinypng.com
- **Repositório:** https://github.com/mbcampagnaro/associa-o-dos-motoristas

---

## ❓ Dúvidas?

Se precisar de ajuda, verifique:
- `ESTRUTURA-PROJETO.md` - Estrutura do projeto
- `INSTRUCOES-GOOGLE-SHEETS.md` - Configuração do Google Sheets

