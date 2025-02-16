let porscheImages = [
    "img/Porsche/Porsche carrera GT.jpg",
    "img/Porsche/Porsche1.jpg",
    "img/Porsche/Porsche2.jpg",
    "img/Porsche/Porsche3.jpg",
    "img/Porsche/Porsche4.jpg",
];

let currentIndex = 0;

function changeImage(direction) {
    const imageElement = document.getElementById("porscheImage");

    // Adiciona a animação de fade-out
    imageElement.style.opacity = 0;

    // Espera o tempo da animação de fade-out para atualizar a imagem
    setTimeout(() => {
        currentIndex += direction;

        // Se o índice ultrapassar o tamanho do array, ele volta ao início ou vai para o fim
        if (currentIndex < 0) {
            currentIndex = porscheImages.length - 1;
        } else if (currentIndex >= porscheImages.length) {
            currentIndex = 0;
        }

        // Atualiza a imagem
        imageElement.src = porscheImages[currentIndex];

        // Restaura a opacidade para 1, fazendo a imagem aparecer
        setTimeout(() => {
            imageElement.style.opacity = 1;
        }, 50); // Um pequeno delay para garantir que o fade-in aconteça após a troca da imagem
    }, 500); // Tempo do fade-out (500ms)
}
