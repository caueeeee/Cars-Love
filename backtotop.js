// Seleciona o botão
const backToTopButton = document.getElementById("backToTop");

// Mostra ou esconde o botão com base na rolagem
window.onscroll = () => {
    if (document.documentElement.scrollTop > 100) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
};

// Adiciona o comportamento de voltar ao topo
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Animação suave
    });
});
