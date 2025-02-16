window.onload = function() {
    const banner = document.querySelector('.banner');
    const h1 = document.querySelector('h1');
    const p = document.querySelector('p');
    const button = document.querySelector('.Documents-btn');
    const text = document.querySelector('.text');
  
    // Adiciona a classe 'visible' após um pequeno atraso para a animação ocorrer
    setTimeout(function() {
      banner.classList.add('visible');
      h1.classList.add('visible');
      p.classList.add('visible');
      button.classList.add('visible');
      text.classList.add('visible');
    }, 50); // O tempo de delay pode ser ajustado conforme necessário
  };
  