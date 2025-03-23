function trocarBnt() {
    const botaoNao = document.getElementById('nao-bnt');
    const botaoFalso = document.getElementById('false-bnt');

    botaoNao.style.width = '0';
    botaoNao.style.padding = '0';
    botaoNao.style.overflow = 'hidden';

    botaoFalso.style.display = 'flex';
    setInterval(() => {
        botaoNao.style.display = 'none';
        botaoFalso.style.padding = '20px 40px 20px 40px';
        botaoFalso.style.width = 'auto';

    }, 250);
}