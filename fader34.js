// Seleciona o elemento que será observado
const r34Element = document.querySelector('.r34');

// Função para adicionar e remover classes com base na visibilidade
function fadeInOutOnScroll(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Quando a div estiver visível na tela
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
        } else {
            // Quando a div sair da tela
            entry.target.classList.add('fade-out');
            entry.target.classList.remove('fade-in');
        }
    });
}

// Cria o observer com as configurações
const observerR34 = new IntersectionObserver(fadeInOutOnScroll, {
    threshold: 0.5 // A animação será disparada quando 50% da div estiver visível
});

// Começa a observar a div .r34
observerR34.observe(r34Element);
