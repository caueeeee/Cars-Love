document.addEventListener("DOMContentLoaded", function() {
    let bmwImages = [
        "img/BMW/BMW.jpg",
        "img/BMW/BMW1.jpg",
        "img/BMW/BMW2.jpg",
        "img/BMW/BMW3.jpg",
        "img/BMW/BMW4.jpg",
        "img/BMW/BMW5.jpg"
    ];

    let currentIndex = 0;

    function changeImage(direction) {
        const imageElement = document.getElementById("bmwImage");

        if (!imageElement) {
            console.error("Elemento de imagem não encontrado.");
            return;
        }

        // Adiciona a animação de fade-out
        imageElement.style.opacity = 0;

        // Espera o tempo da animação de fade-out para atualizar a imagem
        setTimeout(() => {
            currentIndex += direction;

            // Se o índice ultrapassar o tamanho do array, ele volta ao início ou vai para o fim
            if (currentIndex < 0) {
                currentIndex = bmwImages.length - 1;
            } else if (currentIndex >= bmwImages.length) {
                currentIndex = 0;
            }

            // Atualiza a imagem
            imageElement.src = bmwImages[currentIndex];

            // Restaura a opacidade para 1, fazendo a imagem aparecer
            setTimeout(() => {
                imageElement.style.opacity = 1;
            }, 50); // Um pequeno delay para garantir que o fade-in aconteça após a troca da imagem
        }, 500); // Tempo do fade-out (500ms)
    }

    // Função para conectar as setas ao evento de clique
    const leftArrow = document.querySelector(".arrow-left");
    const rightArrow = document.querySelector(".arrow-right");

    leftArrow.addEventListener("click", function() {
        changeImage(-1);
    });

    rightArrow.addEventListener("click", function() {
        changeImage(1);
    });
});
