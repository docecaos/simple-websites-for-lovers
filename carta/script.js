let clicado = false;

function abrirEnvelope() {
    if (clicado) return;

    clicado = true;

    const card = document.getElementById('card');

    if (card) {
        requestAnimationFrame(() => {
            card.style.transition = 'transform 1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out';
            card.style.transform = 'translateY(-200px)';

            setTimeout(() => {
                card.style.zIndex = '10000';
                card.style.transform = 'translateY(0)';

                card.style.position = 'absolute';
                    card.style.width = '50vw';
                    card.style.height = '80vh';

                
                    card.style.transition = 'transform 1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out, opacity 1s ease-in-out, animation 1s ease-in-out';
                    card.style.opacity = '1';
                    
                    card.style.transform = 'scale(1)';

                setTimeout(() => {

                    document.getElementById('valentines').style.animation = 'center';

                }, 1000); // tempo para a carta se mover para o centro
            }, 1000); // tempo de transição inicial
        });
    }
}
