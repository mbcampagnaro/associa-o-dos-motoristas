# Estrutura do Projeto - Componentização

Este projeto foi organizado seguindo uma arquitetura de componentes para facilitar a manutenção e identificação do código.

## 📁 Estrutura de Pastas

```
associacao-site-main/
├── components/          # Componentes HTML reutilizáveis
│   ├── header.html      # Cabeçalho do site
│   ├── footer.html      # Rodapé do site
│   └── whatsapp-float.html  # Botão flutuante do WhatsApp
│
├── css/                 # Estilos
│   └── style.css        # Estilos principais do site
│
├── js/                  # Scripts JavaScript
│   ├── components-loader.js  # Carregador de componentes
│   └── menu-toggle.js   # Script do menu mobile
│
├── img/                 # Imagens
│   └── logo-amv.png     # Logo da associação
│
└── *.html               # Páginas do site
```

## 🔧 Componentes

### Header (`components/header.html`)
- Cabeçalho fixo com logo e navegação
- Menu responsivo para mobile
- Links de navegação com identificação de página ativa

### Footer (`components/footer.html`)
- Informações de contato
- Localizações (Sede e Escritório)
- Copyright

### WhatsApp Float (`components/whatsapp-float.html`)
- Botão flutuante para contato via WhatsApp

## 📄 Scripts

### `js/components-loader.js`
Sistema que carrega os componentes HTML dinamicamente nas páginas:
- Carrega header, footer e WhatsApp float
- Define automaticamente o link ativo na navegação baseado na página atual
- Usa Fetch API para carregar componentes

### `js/menu-toggle.js`
Script responsável pelo funcionamento do menu mobile:
- Toggle do menu hamburguer
- Abre/fecha o menu de navegação em dispositivos móveis

## 🎨 Estilos

### `css/style.css`
Arquivo único com todos os estilos do site:
- Variáveis CSS para cores da marca
- Estilos responsivos
- Componentes visuais (cards, botões, tabelas, etc.)

## 📝 Como Usar

### Adicionar um novo componente:

1. Crie o arquivo HTML do componente em `components/`
2. Adicione o container na página HTML:
   ```html
   <div id="meu-componente-container"></div>
   ```
3. Carregue o componente no `components-loader.js`:
   ```javascript
   await this.loadComponent('meu-componente', '#meu-componente-container');
   ```

### Modificar um componente existente:

1. Edite o arquivo em `components/`
2. A alteração será refletida em todas as páginas que usam o componente

### Adicionar uma nova página:

1. Crie o arquivo HTML
2. Inclua os containers dos componentes:
   ```html
   <div id="header-container"></div>
   <!-- Conteúdo da página -->
   <div id="footer-container"></div>
   <div id="whatsapp-container"></div>
   ```
3. Inclua os scripts:
   ```html
   <script src="js/components-loader.js"></script>
   <script src="js/menu-toggle.js"></script>
   ```
4. Inclua o CSS:
   ```html
   <link rel="stylesheet" href="css/style.css" />
   ```

## ✅ Benefícios da Componentização

- **Manutenibilidade**: Alterações em componentes são refletidas em todas as páginas
- **Organização**: Código separado por responsabilidade
- **Reutilização**: Componentes podem ser usados em múltiplas páginas
- **Identificação**: Estrutura clara facilita encontrar e modificar código
- **Escalabilidade**: Fácil adicionar novos componentes e páginas

## 🔍 Identificação de Componentes

Cada componente está claramente identificado:
- Arquivos em `components/` são componentes reutilizáveis
- Scripts em `js/` são funcionalidades específicas
- Estilos em `css/` são organizados por seção no arquivo




