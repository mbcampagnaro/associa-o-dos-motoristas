# 📝 Exemplo Prático: Adicionar Nova Galeria

## Exemplo: Adicionar "Festa 2026"

### Passo 1: Preparar as Fotos no Google Drive

1. Acesse o Google Drive
2. Crie uma pasta chamada "Festa 2026 - AMV"
3. Faça upload das fotos
4. Clique com botão direito na pasta → "Obter link"
5. Configure como "Qualquer pessoa com o link pode ver"
6. Copie o link (exemplo: `https://drive.google.com/drive/folders/ABC123XYZ?usp=sharing`)

### Passo 2: Editar `galeria.html`

Abra o arquivo `galeria.html` e adicione este código **antes** do fechamento da `</div>` da `gallery-grid` (antes da linha 52):

```html
<div class="gallery-card">
  <h3>Festa 2026</h3>
  <a href="https://drive.google.com/drive/folders/ABC123XYZ?usp=sharing" target="_blank">Ver fotos</a>
</div>
```

**Resultado final** (exemplo de como ficaria):

```html
<div class="gallery-grid">
  <div class="gallery-card">
    <h3>Festa 2025</h3>
    <a href="captura-rainha-2025.html">Ver fotos</a>
  </div>
  <!-- ... outras galerias ... -->
  <div class="gallery-card">
    <h3>Festa 2026</h3>
    <a href="https://drive.google.com/drive/folders/ABC123XYZ?usp=sharing" target="_blank">Ver fotos</a>
  </div>
</div>
```

### Passo 3: Testar Localmente

1. Abra o site no navegador: `http://localhost:3000`
2. Vá para a página "Galeria"
3. Clique no novo card "Festa 2026"
4. Verifique se abre o Google Drive corretamente

### Passo 4: Fazer Commit e Push

```bash
git add galeria.html
git commit -m "feat: adicionar galeria Festa 2026"
git push
```

---

## 🎯 Exemplo: Adicionar Galeria com Captura de Dados

Se quiser capturar dados antes de dar acesso (como a Festa 2025):

### Passo 1: Criar Nova Página

```bash
cp captura-rainha-2025.html captura-festa-2026.html
```

### Passo 2: Editar a Nova Página

Abra `captura-festa-2026.html` e altere:

**Linha 6:**
```html
<title>Festa 2026 - AMV</title>
```

**Linha 150:**
```html
<h1>Festa 2026</h1>
<p>Preencha seus dados para acessar as fotos exclusivas da Festa 2026 da AMV</p>
```

**Linha 174:**
```html
<button type="submit" class="btn-submit" id="submitBtn">
  Acessar Fotos da Festa 2026
</button>
```

**Linha 284:**
```html
pagina: 'Festa 2026'
```

**Linha 305:**
```html
window.open('https://drive.google.com/drive/folders/ABC123XYZ?usp=sharing', '_blank');
```

### Passo 3: Adicionar na Galeria

Em `galeria.html`, adicione:

```html
<div class="gallery-card">
  <h3>Festa 2026</h3>
  <a href="captura-festa-2026.html">Ver fotos</a>
</div>
```

---

## ✅ Checklist Rápido

- [ ] Fotos no Google Drive (pasta compartilhada)
- [ ] Link copiado
- [ ] Card adicionado em `galeria.html`
- [ ] Testado localmente
- [ ] Commit feito
- [ ] Push realizado

---

## 💡 Dica Extra: Ordenar por Data

Para manter as galerias ordenadas (mais recente primeiro), adicione o novo card **no início** da `gallery-grid`:

```html
<div class="gallery-grid">
  <!-- NOVA GALERIA AQUI (mais recente) -->
  <div class="gallery-card">
    <h3>Festa 2026</h3>
    <a href="...">Ver fotos</a>
  </div>
  
  <!-- Galerias antigas abaixo -->
  <div class="gallery-card">
    <h3>Festa 2025</h3>
    ...
  </div>
</div>
```


