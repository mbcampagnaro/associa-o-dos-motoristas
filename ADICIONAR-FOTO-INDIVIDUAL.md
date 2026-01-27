# 📷 Como Adicionar Foto Individual do Google Drive

Para adicionar a foto: `https://drive.google.com/file/d/1SSUlP6c0qrG6lGN-T3i-RA0HFsS_v70E/view?usp=sharing`

## 🎯 Opções Disponíveis

### Opção 1: Link Direto (Mais Simples) ⭐

Adicione um link que abre a foto no Google Drive.

**Exemplo na galeria:**
```html
<div class="gallery-card">
  <h3>Nome da Foto</h3>
  <a href="https://drive.google.com/file/d/1SSUlP6c0qrG6lGN-T3i-RA0HFsS_v70E/view?usp=sharing" target="_blank">Ver foto</a>
</div>
```

### Opção 2: Exibir Foto Diretamente no Site (Recomendado) ⭐⭐⭐

Para exibir a foto diretamente no site (sem abrir o Google Drive):

1. **Extraia o ID do arquivo do link:**
   - ID: `1SSUlP6c0qrG6lGN-T3i-RA0HFsS_v70E`

2. **Use este formato de link para exibição:**
   ```
   https://drive.google.com/uc?export=view&id=1SSUlP6c0qrG6lGN-T3i-RA0HFsS_v70E
   ```

3. **Adicione na página HTML:**
   ```html
   <img src="https://drive.google.com/uc?export=view&id=1SSUlP6c0qrG6lGN-T3i-RA0HFsS_v70E" 
        alt="Descrição da foto" 
        style="max-width: 100%; height: auto; border-radius: 8px;" />
   ```

**⚠️ Importante:** A foto precisa estar configurada como "Qualquer pessoa com o link pode ver" no Google Drive.

### Opção 3: Adicionar na Página Inicial (Destaque)

Se quiser destacar essa foto na página inicial:

**Edite `index.html`** e adicione uma nova seção:

```html
<section class="card">
  <h2>Título da Seção</h2>
  <img src="https://drive.google.com/uc?export=view&id=1SSUlP6c0qrG6lGN-T3i-RA0HFsS_v70E" 
       alt="Descrição" 
       style="max-width: 100%; height: auto; border-radius: 8px; margin: 20px 0;" />
  <p>Descrição da foto ou evento.</p>
</section>
```

### Opção 4: Criar Página Dedicada

Crie uma página específica para essa foto:

1. **Crie `foto-destaque.html`:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Foto Destaque - AMV</title>
  <link rel="icon" href="img/logo-amv.png" type="image/png" />
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <div id="header-container"></div>
  <main>
    <section class="card">
      <h2>Título da Foto</h2>
      <div style="text-align: center; margin: 20px 0;">
        <img src="https://drive.google.com/uc?export=view&id=1SSUlP6c0qrG6lGN-T3i-RA0HFsS_v70E" 
             alt="Descrição" 
             style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
      </div>
      <p>Descrição ou informações sobre a foto.</p>
    </section>
  </main>
  <div id="footer-container"></div>
  <script src="js/components-loader.js"></script>
  <script src="js/menu-toggle.js"></script>
</body>
</html>
```

2. **Adicione link na galeria ou menu:**
```html
<a href="foto-destaque.html">Ver foto</a>
```

---

## 🔧 Exemplo Prático: Adicionar na Galeria

**Edite `galeria.html`** e adicione:

```html
<div class="gallery-card">
  <h3>Nome da Foto</h3>
  <a href="https://drive.google.com/file/d/1SSUlP6c0qrG6lGN-T3i-RA0HFsS_v70E/view?usp=sharing" target="_blank">Ver foto</a>
</div>
```

Ou para exibir diretamente:

```html
<div class="gallery-card">
  <h3>Nome da Foto</h3>
  <img src="https://drive.google.com/uc?export=view&id=1SSUlP6c0qrG6lGN-T3i-RA0HFsS_v70E" 
       alt="Descrição" 
       style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;" />
  <a href="https://drive.google.com/file/d/1SSUlP6c0qrG6lGN-T3i-RA0HFsS_v70E/view?usp=sharing" target="_blank">Ver em tamanho maior</a>
</div>
```

---

## ✅ Checklist

- [ ] Foto configurada como "Qualquer pessoa com o link pode ver" no Google Drive
- [ ] ID do arquivo extraído do link
- [ ] Decidido onde adicionar (galeria, página inicial, página dedicada)
- [ ] Código HTML adicionado
- [ ] Testado localmente
- [ ] Commit e push feito

---

## 💡 Dica: Converter Link do Google Drive

**Link original:**
```
https://drive.google.com/file/d/1SSUlP6c0qrG6lGN-T3i-RA0HFsS_v70E/view?usp=sharing
```

**Link para exibição direta:**
```
https://drive.google.com/uc?export=view&id=1SSUlP6c0qrG6lGN-T3i-RA0HFsS_v70E
```

**Fórmula:** 
- Extraia o ID (entre `/d/` e `/view`)
- Use: `https://drive.google.com/uc?export=view&id=ID_AQUI`

---

## 🎨 Estilização Adicional

Para melhorar a aparência da foto, você pode adicionar estilos:

```html
<img src="https://drive.google.com/uc?export=view&id=1SSUlP6c0qrG6lGN-T3i-RA0HFsS_v70E" 
     alt="Descrição" 
     class="foto-destaque" />
```

E adicionar no CSS (`css/style.css`):

```css
.foto-destaque {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.foto-destaque:hover {
  transform: scale(1.02);
}
```



