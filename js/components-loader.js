// Component Loader - Carrega componentes HTML dinamicamente
class ComponentLoader {
  static async loadComponent(componentName, targetSelector) {
    try {
      const response = await fetch(`components/${componentName}.html`);
      if (!response.ok) {
        throw new Error(`Erro ao carregar componente: ${componentName}`);
      }
      const html = await response.text();
      const target = document.querySelector(targetSelector);
      if (target) {
        target.innerHTML = html;
        return true;
      }
      return false;
    } catch (error) {
      console.error(`Erro ao carregar componente ${componentName}:`, error);
      return false;
    }
  }

  static async loadAllComponents() {
    // Carrega header
    const headerLoaded = await this.loadComponent('header', '#header-container');
    
    // Carrega footer
    await this.loadComponent('footer', '#footer-container');
    
    // Carrega WhatsApp float
    await this.loadComponent('whatsapp-float', '#whatsapp-container');
    
    // Ativa link ativo baseado na página atual (após header ser carregado)
    if (headerLoaded) {
      // Aguarda um pouco para garantir que o DOM foi atualizado
      setTimeout(() => {
        this.setActiveLink();
        this.initMenuToggle();
      }, 150);
    } else {
      // Se o header não foi carregado, tenta inicializar o menu toggle de qualquer forma
      setTimeout(() => {
        this.initMenuToggle();
      }, 300);
    }
  }

  static initMenuToggle() {
    // Aguarda um pouco mais para garantir que o DOM está pronto
    setTimeout(() => {
      const menuToggle = document.querySelector('.menu-toggle');
      const nav = document.querySelector('nav');
      
      if (!menuToggle || !nav) {
        console.warn('Menu toggle ou nav não encontrado. Tentando novamente...');
        // Tenta novamente após mais tempo
        setTimeout(() => this.initMenuToggle(), 200);
        return;
      }
      
      const navLinks = document.querySelectorAll('nav a');
      
      function closeMenu() {
        nav.classList.remove('open');
      }
      
      function toggleMenu() {
        nav.classList.toggle('open');
      }
      
      // Remove event listeners anteriores se existirem (marca o botão)
      if (menuToggle.dataset.initialized === 'true') {
        return; // Já foi inicializado
      }
      
      menuToggle.dataset.initialized = 'true';
      
      // Toggle menu ao clicar no botão
      menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
      });
      
      // Fechar menu ao clicar em um link
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          closeMenu();
        });
      });
      
      // Fechar menu ao clicar fora
      document.addEventListener('click', function(e) {
        if (nav.classList.contains('open')) {
          if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            closeMenu();
          }
        }
      });
      
      // Prevenir fechamento ao clicar dentro do menu
      nav.addEventListener('click', function(e) {
        e.stopPropagation();
      });
      
      console.log('Menu toggle inicializado com sucesso');
    }, 50);
  }

  static setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const pageName = currentPage.replace('.html', '') || 'index';
    
    const navLinks = document.querySelectorAll('nav a[data-page]');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-page') === pageName) {
        link.classList.add('active');
      }
    });
  }
}

// Carrega componentes quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
  ComponentLoader.loadAllComponents();
});

