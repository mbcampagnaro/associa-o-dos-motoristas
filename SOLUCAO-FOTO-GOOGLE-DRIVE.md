# 🔧 Solução: Foto não Aparece do Google Drive

Se a foto não está aparecendo, siga estes passos:

## ✅ Passo 1: Verificar Permissões no Google Drive

1. **Acesse o Google Drive**
2. **Encontre o arquivo da foto**
3. **Clique com botão direito → "Compartilhar"**
4. **Configure como:**
   - "Qualquer pessoa com o link pode **VER**" (não apenas "Ver comentários")
   - Ou "Público na web"

## ✅ Passo 2: Obter o Link Correto

Após configurar as permissões, você tem 3 opções:

### Opção A: Usar Link de Visualização (Recomendado)
```
https://drive.google.com/uc?export=view&id=ID_DO_ARQUIVO
```

### Opção B: Usar Link do Googleusercontent
```
https://lh3.googleusercontent.com/d/ID_DO_ARQUIVO
```

### Opção C: Usar Thumbnail
```
https://drive.google.com/thumbnail?id=ID_DO_ARQUIVO&sz=w800
```

## ✅ Passo 3: Alternativa - Baixar e Hospedar Localmente

Se o Google Drive continuar dando problema:

1. **Baixe a foto do Google Drive**
2. **Otimize a imagem** (use https://tinypng.com)
3. **Coloque na pasta `img/`:**
   ```bash
   mkdir -p img/galeria
   # Cole a foto otimizada aqui
   ```
4. **Atualize o código:**
   ```html
   <img src="img/galeria/foto-destaque.jpg" alt="Foto destaque" />
   ```

## 🔍 Como Testar

1. Abra o console do navegador (F12)
2. Vá na aba "Console"
3. Procure por erros relacionados à imagem
4. Se aparecer erro 403 ou 404, é problema de permissão

## 💡 Dica Rápida

Se precisar de uma solução imediata, use um serviço de hospedagem de imagens:
- **Imgur** (gratuito)
- **Cloudinary** (gratuito com limite)
- Ou hospede diretamente no repositório GitHub

