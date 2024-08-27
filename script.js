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

    const adicionarNota = () => {
        const nome = document.getElementById('nomeAluno').value.trim();
        const turma = document.getElementById('turma').value.trim();
        const nota = parseFloat(document.getElementById('nota').value);
        if (nome && turma && !isNaN(nota)) {
            const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
            const alunoIndex = alunos.findIndex(a => a.nome === nome && a.turma === turma);
            if (alunoIndex > -1) {
                alunos[alunoIndex].notas.push(nota);
            } else {
                alunos.push({ nome, turma, notas: [nota] });
            }
            localStorage.setItem('alunos', JSON.stringify(alunos));
            atualizarResultados();
        } else {
            alert('Preencha todos os campos corretamente.');
        }
    };

    const finalizarCadastro = () => {
        const nome = document.getElementById('nomeAluno').value.trim();
        const turma = document.getElementById('turma').value.trim();
        if (nome && turma) {
            const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
            const alunoIndex = alunos.findIndex(a => a.nome === nome && a.turma === turma);
            if (alunoIndex > -1) {
                alunos[alunoIndex].nome = nome;
                alunos[alunoIndex].turma = turma;
            } else {
                alunos.push({ nome, turma, notas: [] });
            }
            localStorage.setItem('alunos', JSON.stringify(alunos));
            atualizarResultados();
        } else {
            alert('Preencha todos os campos corretamente.');
        }
    };

    const atualizarResultados = () => {
        const listaAlunos = document.getElementById('resultados');
        const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');

        const pesquisar = document.getElementById('pesquisar').value.trim().toLowerCase();

        const filtroAlunos = alunos.filter(aluno => 
            aluno.nome && aluno.nome.toLowerCase().includes(pesquisar) ||
            aluno.turma && aluno.turma.toLowerCase().includes(pesquisar)
        );

        listaAlunos.innerHTML = filtroAlunos.map(aluno => {
            const media = aluno.notas.length ? (aluno.notas.reduce((a, b) => a + b) / aluno.notas.length).toFixed(2) : 'Não Informada';
            return `<div>Nome: ${aluno.nome}, Turma: ${aluno.turma}, Média: ${media}</div>`;
        }).join('');
    };

    document.getElementById('adicionarNota').addEventListener('click', adicionarNota);
    document.getElementById('finalizarAluno').addEventListener('click', finalizarCadastro);
    document.getElementById('pesquisar').addEventListener('input', atualizarResultados);

    atualizarResultados();

    const criarChunks = (numero) => {
        return Array.from({ length: numero }, (_, i) => numero - i).join('-');
    };

    document.getElementById('gerarChunks').addEventListener('click', () => {
        const numero = parseInt(document.getElementById('numero').value);
        document.getElementById('resultadoChunks').textContent = `Resultado: ${criarChunks(numero)}`;
    });

    const inverterArray = (array) => {
        let novoArray = [];
        for (let i = array.length - 1; i >= 0; i--) {
            novoArray[novoArray.length] = array[i];
        }
        return novoArray;
    };

    document.getElementById('inverterBtn').addEventListener('click', () => {
        const arrayInput = document.getElementById('arrayInput').value.split(',').map(Number);
        document.getElementById('resultado').textContent = `Resultado: ${inverterArray(arrayInput).join(', ')}`;
    });

    const calcularQuadradoAlgarismos = (numero) => {
        return Array.from(String(numero), digit => Math.pow(Number(digit), 2)).join('');
    };

    document.getElementById('calcularQuadrado').addEventListener('click', () => {
        const numeroQuadrado = document.getElementById('numeroQuadrado').value;
        document.getElementById('resultadoQuadrado').textContent = `Resultado: ${calcularQuadradoAlgarismos(numeroQuadrado)}`;
    });

    const encontrarMaiorLetra = (str) => {
        let maiorLetra = '';
        for (let i = 0; i < str.length; i++) {
            let letra = str[i].toLowerCase();
            if (letra > maiorLetra) {
                maiorLetra = letra;
            }
        }
        return maiorLetra;
    };

    document.getElementById('encontrarMaiorLetra').addEventListener('click', () => {
        const stringInput = document.getElementById('stringInput').value;
        document.getElementById('resultadoMaiorLetra').textContent = `Maior Letra: ${encontrarMaiorLetra(stringInput)}`;
    });

    const inverterPalavras = (str) => {
        return str
            .split(' ')
            .map(palavra => palavra.toLowerCase().split('').reverse().join(''))
            .join(' ');
    };

    document.getElementById('inverterPalavras').addEventListener('click', () => {
        const stringPalavras = document.getElementById('stringPalavras').value;
        document.getElementById('resultadoPalavras').textContent = `Resultado: ${inverterPalavras(stringPalavras)}`;
    });
});
