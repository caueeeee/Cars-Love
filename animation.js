window.addEventListener('load', function() {
    // Cria o observador que vai monitorar a visibilidade do parágrafo
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Se o parágrafo estiver na tela, adiciona a classe 'visible' para o fade-in
                entry.target.classList.add('visible');
                // Stop observing after the fade-in
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0 }); // Quando qualquer parte do parágrafo estiver visível, dispara a animação

    const paragrafo1 = document.querySelector('.paragrafo1');
    if (paragrafo1) {
        observer.observe(paragrafo1);
    }
});
