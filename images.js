// Criação de uma timeline do GSAP com animações sincronizadas com o scroll

var imagens = gsap.timeline({
    scrollTrigger: {
        trigger: '.imagens',
        start: '0% 95%',
        end: '50% 50%',
        scrub: true,
    }
})

imagens.to(
    '#Porsche',
    {
        left: '10%',
    },
    'imgs'
); // Nomeando esse trecho de animação como 'orange' para sincronuzação

imagens.to(
    '#Mercedes',
    {
        top: '6.7%',
    },
    'imgs'
); // Nomeando esse trecho de animação como 'orange' para sincronuzação

imagens.to(
    '#GTR',
    {
        left: '70%',
    },
    'imgs'
); // Nomeando esse trecho de animação como 'orange' para sincronuzação