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
      }, 100);
    }
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

