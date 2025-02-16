const r34Images = [
    "img/R34/Skyline1.jpg",
    "img/R34/Skyline2.jpg",
    "img/R34/Skyline3.jpg",
    "img/R34/Skyline4.jpg",
    "img/R34/Skyline5.jpg",
    "img/R34/Skyline6.jpg"
];

// Índice inicial da imagem exibida
let currentR34ImageIndex = 0;

// Elemento da imagem no HTML
const r34ImageElement = document.getElementById("r34Image");

// Função para trocar a imagem do R34 com animação
function changeImageR34(direction) {
    // Aplica a classe fade-out antes de trocar a imagem
    r34ImageElement.classList.add("fade-out");

    // Espera a transição de fade-out antes de trocar a imagem
    setTimeout(() => {
        // Atualiza o índice com base na direção
        currentR34ImageIndex += direction;

        // Garante que o índice fique no intervalo válido
        if (currentR34ImageIndex < 0) {
            currentR34ImageIndex = r34Images.length - 1; // Volta para a última imagem
        } else if (currentR34ImageIndex >= r34Images.length) {
            currentR34ImageIndex = 0; // Volta para a primeira imagem
        }

        // Atualiza o atributo "src" da imagem para exibir a nova
        r34ImageElement.src = r34Images[currentR34ImageIndex];

        // Remove a classe fade-out e adiciona fade-in após a troca
        r34ImageElement.classList.remove("fade-out");
        r34ImageElement.classList.add("fade-in");
    }, 500); // Tempo de fade-out (igual ao tempo definido no CSS)

    // Remove a classe fade-in após a transição
    setTimeout(() => {
        r34ImageElement.classList.remove("fade-in");
    }, 1000); // Tempo total da animação
}
