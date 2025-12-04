// Menu Toggle Script
// Este script agora é inicializado pelo components-loader.js após o header ser carregado
// Este arquivo é mantido apenas para compatibilidade, mas a inicialização principal
// acontece no components-loader.js após o header ser carregado dinamicamente

// Função global para inicialização manual se necessário
window.initMenuToggleManual = function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  
  if (!menuToggle || !nav) {
    return false;
  }
  
  // Se já foi inicializado, não faz nada
  if (menuToggle.dataset.initialized === 'true') {
    return true;
  }
  
  const navLinks = document.querySelectorAll('nav a');
  
  function closeMenu() {
    nav.classList.remove('open');
  }
  
  function toggleMenu() {
    nav.classList.toggle('open');
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
  
  return true;
};

// Tenta inicializar como fallback caso o components-loader não funcione
// Mas aguarda mais tempo para dar prioridade ao components-loader
setTimeout(function() {
  if (document.querySelector('.menu-toggle') && 
      document.querySelector('.menu-toggle').dataset.initialized !== 'true') {
    window.initMenuToggleManual();
  }
}, 500);



