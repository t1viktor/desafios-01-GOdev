function inverterArray(array) {
    let novoArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        novoArray[novoArray.length] = array[i];
    }
    return novoArray;
}

function criarChunks(numero) {
    return Array.from({ length: numero }, (_, i) => numero - i).join('-');
}

function calcularQuadradoAlgarismos(numero) {
    return Array.from(String(numero), digit => Math.pow(Number(digit), 2)).join('');
}

function encontrarMaiorLetra(str) {
    let maiorLetra = '';
    for (let i = 0; i < str.length; i++) {
        let letra = str[i].toLowerCase();
        if (letra > maiorLetra) {
            maiorLetra = letra;
        }
    }
    return maiorLetra;
}

function inverterPalavras(str) {
    return str
        .split(' ')
        .map(palavra => palavra.toLowerCase().split('').reverse().join(''))
        .join(' ');
}

document.addEventListener('DOMContentLoaded', () => {
    const btnCadastro = document.getElementById('btnCadastro');
    const btn02 = document.getElementById('btn02');
    const btn03 = document.getElementById('btn03');
    const btn04 = document.getElementById('btn04');
    const btn05 = document.getElementById('btn05');
    const btn06 = document.getElementById('btn06');

    const containerCadastro = document.getElementById('containerCadastro');
    const container02 = document.getElementById('container02');
    const container03 = document.getElementById('container03');
    const container04 = document.getElementById('container04');
    const container05 = document.getElementById('container05');
    const container06 = document.getElementById('container06');

    const esconderTodosContainers = () => {
        containerCadastro.style.display = 'none';
        container02.style.display = 'none';
        container03.style.display = 'none';
        container04.style.display = 'none';
        container05.style.display = 'none';
        container06.style.display = 'none';
    };

    btnCadastro.addEventListener('click', () => {
        esconderTodosContainers();
        containerCadastro.style.display = 'block';
    });

    btn02.addEventListener('click', () => {
        esconderTodosContainers();
        container02.style.display = 'block';
    });

    btn03.addEventListener('click', () => {
        esconderTodosContainers();
        container03.style.display = 'block';
    });

    btn04.addEventListener('click', () => {
        esconderTodosContainers();
        container04.style.display = 'block';
    });

    btn05.addEventListener('click', () => {
        esconderTodosContainers();
        container05.style.display = 'block';
    });

    btn06.addEventListener('click', () => {
        esconderTodosContainers();
        container06.style.display = 'block';
    });

    const btnGerarChunks = document.getElementById('gerarChunks');
    const resultadoChunks = document.getElementById('resultadoChunks');

    btnGerarChunks.addEventListener('click', () => {
        const numero = parseInt(document.getElementById('numero').value);
        resultadoChunks.textContent = `Resultado: ${criarChunks(numero)}`;
    });

    const btnInverter = document.getElementById('inverterBtn');
    const resultado = document.getElementById('resultado');

    btnInverter.addEventListener('click', () => {
        const arrayInput = document.getElementById('arrayInput').value.split(',').map(Number);
        resultado.textContent = `Resultado: ${inverterArray(arrayInput).join(', ')}`;
    });

    const btnCalcularQuadrado = document.getElementById('calcularQuadrado');
    const resultadoQuadrado = document.getElementById('resultadoQuadrado');

    btnCalcularQuadrado.addEventListener('click', () => {
        const numeroQuadrado = document.getElementById('numeroQuadrado').value;
        resultadoQuadrado.textContent = `Resultado: ${calcularQuadradoAlgarismos(numeroQuadrado)}`;
    });

    const btnEncontrarMaiorLetra = document.getElementById('encontrarMaiorLetra');
    const resultadoMaiorLetra = document.getElementById('resultadoMaiorLetra');

    btnEncontrarMaiorLetra.addEventListener('click', () => {
        const stringInput = document.getElementById('stringInput').value;
        resultadoMaiorLetra.textContent = `Maior Letra: ${encontrarMaiorLetra(stringInput)}`;
    });

    const btnInverterPalavras = document.getElementById('inverterPalavras');
    const resultadoPalavras = document.getElementById('resultadoPalavras');

    btnInverterPalavras.addEventListener('click', () => {
        const stringPalavras = document.getElementById('stringPalavras').value;
        resultadoPalavras.textContent = `Resultado: ${inverterPalavras(stringPalavras)}`;
    });
});
