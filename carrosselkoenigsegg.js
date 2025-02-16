const koenigseggImages = [
    "Img/Koenigsegg/Koenigsegg1.jpg",
    "Img/Koenigsegg/Koenigsegg2.jpg",
    "Img/Koenigsegg/Koenigsegg3.jpg",
    "Img/Koenigsegg/Koenigsegg4.jpg",
    "Img/Koenigsegg/Koenigsegg5.jpg"
];

// Índice inicial da imagem exibida
let currentKoenigseggImageIndex = 0;

// Elemento da imagem no HTML
const koenigseggImageElement = document.getElementById("koenigseggImage");

// Função para trocar a imagem do Koenigsegg com animação
function changeImageKoenigsegg(direction) {
    // Aplica a classe fade-out antes de trocar a imagem
    koenigseggImageElement.classList.add("fade-out");

    // Espera a transição de fade-out antes de trocar a imagem
    setTimeout(() => {
        // Atualiza o índice com base na direção
        currentKoenigseggImageIndex += direction;

        // Garante que o índice fique no intervalo válido
        if (currentKoenigseggImageIndex < 0) {
            currentKoenigseggImageIndex = koenigseggImages.length - 1; // Volta para a última imagem
        } else if (currentKoenigseggImageIndex >= koenigseggImages.length) {
            currentKoenigseggImageIndex = 0; // Volta para a primeira imagem
        }

        // Atualiza o atributo "src" da imagem para exibir a nova
        koenigseggImageElement.src = koenigseggImages[currentKoenigseggImageIndex];

        // Remove a classe fade-out e adiciona fade-in após a troca
        koenigseggImageElement.classList.remove("fade-out");
        koenigseggImageElement.classList.add("fade-in");
    }, 500); // Tempo de fade-out (igual ao tempo definido no CSS)

    // Remove a classe fade-in após a transição
    setTimeout(() => {
        koenigseggImageElement.classList.remove("fade-in");
    }, 1000); // Tempo total da animação
}
