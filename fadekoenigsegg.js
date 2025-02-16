// Seleciona o elemento que será observado
const koenigseggElement = document.querySelector('.koenigsegg');

// Verifica se o elemento foi encontrado
if (koenigseggElement) {
  // Função para adicionar a animação de fade
  function fadeInOutOnScroll(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Se a div estiver visível, adiciona a classe de animação fade-in
        entry.target.classList.add('fade-in');
        entry.target.classList.remove('fade-out'); // Garante que a classe fade-out seja removida ao entrar
      } else {
        // Se a div sair da tela, adiciona a classe de animação fade-out
        entry.target.classList.add('fade-out');
        entry.target.classList.remove('fade-in'); // Garante que a classe fade-in seja removida ao sair
      }
    });
  }

  // Cria o observer e passa as configurações
  const observer = new IntersectionObserver(fadeInOutOnScroll, {
    threshold: 0.5  // A animação será disparada quando 50% da div estiver visível
  });

  // Começa a observar a div .koenigsegg
  observer.observe(koenigseggElement);
} else {
  console.log("Elemento Koenigsegg não encontrado!");
}
