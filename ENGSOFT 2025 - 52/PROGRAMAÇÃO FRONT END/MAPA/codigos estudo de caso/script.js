// Dados do jogo
const perguntas = [
    // Perguntas Fáceis (R$ 1.000 - R$ 5.000)
    {
        enunciado: "Qual é a forma correta de declarar uma variável em JavaScript moderno?",
        alternativas: ["var nome", "let nome", "variable nome", "dim nome"],
        resposta: "let nome",
        dificuldade: "Fácil",
        valor: 1000
    },
    {
        enunciado: "Qual símbolo é usado para comentários de linha única em JavaScript?",
        alternativas: ["#", "//", "/*", "--"],
        resposta: "//",
        dificuldade: "Fácil",
        valor: 2000
    },
    {
        enunciado: "Qual método exibe uma mensagem no console do navegador?",
        alternativas: ["console.log()", "alert()", "print()", "display()"],
        resposta: "console.log()",
        dificuldade: "Fácil",
        valor: 3000
    },
    {
        enunciado: "Como acessar o primeiro elemento de um array chamado 'frutas'?",
        alternativas: ["frutas[1]", "frutas[0]", "frutas.first()", "frutas.get(0)"],
        resposta: "frutas[0]",
        dificuldade: "Fácil",
        valor: 4000
    },
    {
        enunciado: "Qual é o operador de comparação estrita em JavaScript?",
        alternativas: ["==", "===", "=", "!="],
        resposta: "===",
        dificuldade: "Fácil",
        valor: 5000
    },
    
    // Perguntas Médias (R$ 10.000 - R$ 50.000)
    {
        enunciado: "O que o método querySelector() retorna quando não encontra nenhum elemento?",
        alternativas: ["undefined", "null", "false", "empty"],
        resposta: "null",
        dificuldade: "Médio",
        valor: 10000
    },
    {
        enunciado: "Qual é a diferença principal entre let e const?",
        alternativas: [
            "let é mais rápido",
            "const não pode ser reatribuída",
            "let não existe em JavaScript",
            "const é apenas para números"
        ],
        resposta: "const não pode ser reatribuída",
        dificuldade: "Médio",
        valor: 20000
    },
    {
        enunciado: "Como adicionar um evento de clique a um botão?",
        alternativas: [
            "button.onClick()",
            "button.click()",
            "button.addEventListener('click', função)",
            "button.on('click')"
        ],
        resposta: "button.addEventListener('click', função)",
        dificuldade: "Médio",
        valor: 30000
    },
    {
        enunciado: "O que é o DOM?",
        alternativas: [
            "Um tipo de variável",
            "Document Object Model",
            "Data Object Management",
            "Dynamic Output Method"
        ],
        resposta: "Document Object Model",
        dificuldade: "Médio",
        valor: 40000
    },
    {
        enunciado: "Qual método de array retorna um novo array com elementos filtrados?",
        alternativas: ["map()", "filter()", "reduce()", "forEach()"],
        resposta: "filter()",
        dificuldade: "Médio",
        valor: 50000
    },
    
    // Perguntas Difíceis (R$ 100.000 - R$ 1.000.000)
    {
        enunciado: "O que é uma closure em JavaScript?",
        alternativas: [
            "Um erro de sintaxe",
            "Uma função que tem acesso ao escopo externo",
            "Um tipo de loop",
            "Um método de array"
        ],
        resposta: "Uma função que tem acesso ao escopo externo",
        dificuldade: "Difícil",
        valor: 100000
    },
    {
        enunciado: "Qual é a saída de: console.log(typeof null)?",
        alternativas: ["'null'", "'undefined'", "'object'", "'empty'"],
        resposta: "'object'",
        dificuldade: "Difícil",
        valor: 200000
    },
    {
        enunciado: "O que o operador '...' (spread) faz?",
        alternativas: [
            "Cria um loop infinito",
            "Espalha elementos de um array ou objeto",
            "Define uma função",
            "Cria uma classe"
        ],
        resposta: "Espalha elementos de um array ou objeto",
        dificuldade: "Difícil",
        valor: 300000
    },
    {
        enunciado: "Qual é a diferença entre '==' e '==='?",
        alternativas: [
            "Não há diferença",
            "'===' compara valor e tipo",
            "'==' é mais rápido",
            "'===' só funciona com números"
        ],
        resposta: "'===' compara valor e tipo",
        dificuldade: "Difícil",
        valor: 500000
    },
    {
        enunciado: "O que é o Event Loop em JavaScript?",
        alternativas: [
            "Um tipo de for loop",
            "Mecanismo que gerencia operações assíncronas",
            "Um erro comum",
            "Uma biblioteca externa"
        ],
        resposta: "Mecanismo que gerencia operações assíncronas",
        dificuldade: "Difícil",
        valor: 1000000
    }
];

// Valores dos prêmios
const premios = [
    { valor: 1000, seguro: false },
    { valor: 2000, seguro: false },
    { valor: 3000, seguro: false },
    { valor: 4000, seguro: false },
    { valor: 5000, seguro: true },
    { valor: 10000, seguro: false },
    { valor: 20000, seguro: false },
    { valor: 30000, seguro: false },
    { valor: 40000, seguro: false },
    { valor: 50000, seguro: true },
    { valor: 100000, seguro: false },
    { valor: 200000, seguro: false },
    { valor: 300000, seguro: false },
    { valor: 500000, seguro: false },
    { valor: 1000000, seguro: true }
];

// Estado do jogo
let rodadaAtual = 0;
let perguntaAtual = null;
let respostaSelecionada = null;
let jogoAtivo = true;
let ajudasUsadas = {
    cartas: false,
    pular: false,
    plateia: false,
    eliminar: false
};

// Elementos do DOM
const elementos = {
    enunciado: document.getElementById('enunciado'),
    alternativas: document.querySelectorAll('.alternativa'),
    btnPerguntar: document.getElementById('btnPerguntar'),
    btnParar: document.getElementById('btnParar'),
    numeroRodada: document.getElementById('numeroRodada'),
    premioAtual: document.getElementById('premioAtual'),
    listaPremios: document.getElementById('listaPremios'),
    modal: document.getElementById('modal'),
    modalTitulo: document.getElementById('modalTitulo'),
    modalMensagem: document.getElementById('modalMensagem'),
    btnModalOk: document.getElementById('btnModalOk'),
    mensagem: document.getElementById('mensagem'),
    ajudas: {
        cartas: document.getElementById('ajuda-cartas'),
        pular: document.getElementById('ajuda-pular'),
        plateia: document.getElementById('ajuda-plateia'),
        eliminar: document.getElementById('ajuda-eliminar')
    }
};

// Funções do jogo
function iniciarJogo() {
    rodadaAtual = 0;
    jogoAtivo = true;
    respostaSelecionada = null;
    ajudasUsadas = {
        cartas: false,
        pular: false,
        plateia: false,
        eliminar: false
    };
    
    // Verificar localStorage
    const rodadaSalva = localStorage.getItem('rodada');
    if (rodadaSalva !== null) {
        rodadaAtual = parseInt(rodadaSalva);
        mostrarModal(
            'Bem-vindo de volta!',
            `Você estava na pergunta ${rodadaAtual + 1}. Vamos continuar?`,
            () => carregarPergunta()
        );
    } else {
        mostrarModal(
            'Bem-vindo ao Show do Javascriptão!',
            'Responda corretamente às 15 perguntas e ganhe R$ 1 MILHÃO!',
            () => carregarPergunta()
        );
    }
    
    criarListaPremios();
    atualizarInterface();
}

function criarListaPremios() {
    elementos.listaPremios.innerHTML = '';
    premios.forEach((premio, index) => {
        const div = document.createElement('div');
        div.className = 'premio-item';
        if (premio.seguro) div.classList.add('seguro');
        div.textContent = `R$ ${premio.valor.toLocaleString('pt-BR')}`;
        div.id = `premio-${index}`;
        elementos.listaPremios.appendChild(div);
    });
}

function carregarPergunta() {
    if (rodadaAtual >= perguntas.length) {
        vencerJogo();
        return;
    }
    
    perguntaAtual = perguntas[rodadaAtual];
    elementos.enunciado.textContent = perguntaAtual.enunciado;
    
    // Embaralhar alternativas
    const alternativasEmbaralhadas = [...perguntaAtual.alternativas].sort(() => Math.random() - 0.5);
    
    elementos.alternativas.forEach((btn, index) => {
        const texto = btn.querySelector('.texto-alternativa');
        texto.textContent = alternativasEmbaralhadas[index];
        btn.classList.remove('selecionada', 'correta', 'incorreta', 'eliminada');
        btn.disabled = false;
    });
    
    respostaSelecionada = null;
    elementos.btnPerguntar.disabled = true;
    atualizarInterface();
    
    // Salvar progresso
    localStorage.setItem('rodada', rodadaAtual);
}

function selecionarAlternativa(evento) {
    if (!jogoAtivo) return;
    
    // Remover seleção anterior
    elementos.alternativas.forEach(alt => alt.classList.remove('selecionada'));
    
    // Adicionar seleção atual
    const alternativa = evento.currentTarget;
    alternativa.classList.add('selecionada');
    respostaSelecionada = alternativa.querySelector('.texto-alternativa').textContent;
    
    elementos.btnPerguntar.disabled = false;
    elementos.mensagem.textContent = '';
}

function verificarResposta() {
    if (!respostaSelecionada || !jogoAtivo) return;
    
    jogoAtivo = false;
    elementos.btnPerguntar.disabled = true;
    
    const acertou = respostaSelecionada === perguntaAtual.resposta;
    
    // Mostrar resposta correta
    elementos.alternativas.forEach(alt => {
        const texto = alt.querySelector('.texto-alternativa').textContent;
        if (texto === perguntaAtual.resposta) {
            alt.classList.add('correta');
        } else if (alt.classList.contains('selecionada') && !acertou) {
            alt.classList.add('incorreta');
        }
    });
    
    setTimeout(() => {
        if (acertou) {
            acertarPergunta();
        } else {
            errarPergunta();
        }
    }, 2000);
}

function acertarPergunta() {
    const premio = premios[rodadaAtual].valor;
    rodadaAtual++;
    
    if (rodadaAtual >= perguntas.length) {
        vencerJogo();
    } else {
        mostrarModal(
            'Resposta Correta!',
            `Você acertou e garantiu R$ ${premio.toLocaleString('pt-BR')}!`,
            () => {
                jogoAtivo = true;
                carregarPergunta();
            }
        );
    }
}

function errarPergunta() {
    const premioFinal = calcularPremioFinal();
    localStorage.removeItem('rodada');
    
    mostrarModal(
        'Resposta Incorreta!',
        `Que pena! A resposta correta era: ${perguntaAtual.resposta}\n\nVocê ganhou R$ ${premioFinal.toLocaleString('pt-BR')}`,
        () => reiniciarJogo()
    );
}

function pararJogo() {
    if (!jogoAtivo || rodadaAtual === 0) return;
    
    const premio = premios[rodadaAtual - 1].valor;
    localStorage.removeItem('rodada');
    
    mostrarModal(
        'Parou!',
        `Você decidiu parar e levou R$ ${premio.toLocaleString('pt-BR')}!`,
        () => reiniciarJogo()
    );
}

function vencerJogo() {
    localStorage.removeItem('rodada');
    jogoAtivo = false;
    
    mostrarModal(
        '🎉 PARABÉNS! 🎉',
        'Você acertou todas as perguntas e ganhou R$ 1.000.000,00!',
        () => reiniciarJogo()
    );
}

function calcularPremioFinal() {
    // Retorna o valor do último prêmio seguro alcançado
    let ultimoPremioSeguro = 0;
    for (let i = 0; i < rodadaAtual; i++) {
        if (premios[i].seguro) {
            ultimoPremioSeguro = premios[i].valor;
        }
    }
    return ultimoPremioSeguro;
}

function reiniciarJogo() {
    rodadaAtual = 0;
    jogoAtivo = true;
    respostaSelecionada = null;
    carregarPergunta();
}

function atualizarInterface() {
    // Atualizar número da rodada
    elementos.numeroRodada.textContent = rodadaAtual + 1;
    
    // Atualizar prêmio atual
    if (rodadaAtual < premios.length) {
        elementos.premioAtual.textContent = premios[rodadaAtual].valor.toLocaleString('pt-BR');
    }
    
    // Atualizar lista de prêmios
    document.querySelectorAll('.premio-item').forEach((item, index) => {
        item.classList.remove('ativo');
        if (index === rodadaAtual) {
            item.classList.add('ativo');
        }
    });
}

function mostrarModal(titulo, mensagem, callback) {
    elementos.modalTitulo.textContent = titulo;
    elementos.modalMensagem.textContent = mensagem;
    elementos.modal.classList.remove('hidden');
    
    elementos.btnModalOk.onclick = () => {
        elementos.modal.classList.add('hidden');
        if (callback) callback();
    };
}

// Event Listeners
elementos.alternativas.forEach(alt => {
    alt.addEventListener('click', selecionarAlternativa);
});

elementos.btnPerguntar.addEventListener('click', verificarResposta);
elementos.btnParar.addEventListener('click', pararJogo);

// Iniciar o jogo
iniciarJogo();