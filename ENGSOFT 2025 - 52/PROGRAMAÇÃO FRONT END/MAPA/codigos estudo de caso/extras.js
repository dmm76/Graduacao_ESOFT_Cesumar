// Funcionalidades extras e ajudas

// Implementar ajudas
elementos.ajudas.cartas.addEventListener('click', usarAjudaCartas);
elementos.ajudas.pular.addEventListener('click', usarAjudaPular);
elementos.ajudas.plateia.addEventListener('click', usarAjudaPlateia);
elementos.ajudas.eliminar.addEventListener('click', usarAjudaEliminar);

// Ajuda das Cartas
function usarAjudaCartas() {
    if (ajudasUsadas.cartas || !jogoAtivo) return;
    
    ajudasUsadas.cartas = true;
    elementos.ajudas.cartas.classList.add('usada');
    
    // Simular 3 cartas de especialistas
    const especialistas = [
        { nome: "Prof. JavaScript", certeza: 85 },
        { nome: "Dev Senior", certeza: 70 },
        { nome: "Estudante", certeza: 60 }
    ];
    
    let mensagemCartas = "📧 CARTAS DOS ESPECIALISTAS:\n\n";
    
    especialistas.forEach(esp => {
        const opcoes = [...perguntaAtual.alternativas];
        const resposta = Math.random() < (esp.certeza / 100) 
            ? perguntaAtual.resposta 
            : opcoes[Math.floor(Math.random() * opcoes.length)];
        
        mensagemCartas += `${esp.nome} (${esp.certeza}% certeza): "${resposta}"\n`;
    });
    
    mostrarModal('Ajuda das Cartas', mensagemCartas, null);
}

// Ajuda Pular
function usarAjudaPular() {
    if (ajudasUsadas.pular || !jogoAtivo) return;
    
    ajudasUsadas.pular = true;
    elementos.ajudas.pular.classList.add('usada');
    
    mostrarModal(
        'Pular Pergunta',
        'Você decidiu pular esta pergunta. Vamos para a próxima!',
        () => {
            rodadaAtual++;
            jogoAtivo = true;
            carregarPergunta();
        }
    );
}

// Ajuda da Plateia
function usarAjudaPlateia() {
    if (ajudasUsadas.plateia || !jogoAtivo) return;
    
    ajudasUsadas.plateia = true;
    elementos.ajudas.plateia.classList.add('usada');
    
    // Simular votação da plateia
    const votos = {};
    let totalVotos = 100;
    
    // Dar mais votos para a resposta correta
    perguntaAtual.alternativas.forEach(alt => {
        if (alt === perguntaAtual.resposta) {
            votos[alt] = 40 + Math.floor(Math.random() * 30); // 40-70%
        } else {
            votos[alt] = Math.floor(Math.random() * 20); // 0-20%
        }
    });
    
    // Normalizar para 100%
    const somaVotos = Object.values(votos).reduce((a, b) => a + b, 0);
    Object.keys(votos).forEach(key => {
        votos[key] = Math.round((votos[key] / somaVotos) * 100);
    });
    
    // Criar gráfico visual
    let grafico = "👥 VOTAÇÃO DA PLATEIA:\n\n";
    perguntaAtual.alternativas.forEach((alt, i) => {
        const letra = String.fromCharCode(65 + i); // A, B, C, D
        const barra = '█'.repeat(Math.floor(votos[alt] / 5));
        grafico += `${letra}) ${alt}\n   ${barra} ${votos[alt]}%\n\n`;
    });
    
    mostrarModal('Ajuda da Plateia', grafico, null);
}

// Ajuda Eliminar 2
function usarAjudaEliminar() {
    if (ajudasUsadas.eliminar || !jogoAtivo) return;
    
    ajudasUsadas.eliminar = true;
    elementos.ajudas.eliminar.classList.add('usada');
    
    // Encontrar alternativas incorretas
    const incorretas = [];
    elementos.alternativas.forEach((btn, index) => {
        const texto = btn.querySelector('.texto-alternativa').textContent;
        if (texto !== perguntaAtual.resposta) {
            incorretas.push({ btn, index });
        }
    });
    
    // Embaralhar e pegar 2
    incorretas.sort(() => Math.random() - 0.5);
    const paraEliminar = incorretas.slice(0, 2);
    
    // Eliminar visualmente
    paraEliminar.forEach(({ btn }) => {
        btn.classList.add('eliminada');
        btn.disabled = true;
        btn.style.opacity = '0.3';
        btn.style.textDecoration = 'line-through';
    });
    
    elementos.mensagem.textContent = '❌ Duas alternativas incorretas foram eliminadas!';
}

// Efeitos sonoros e visuais
function adicionarEfeitosSonoros() {
    const sons = {
        acerto: new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBi2Ey/LXijAGHm7A7+OZURE'),
        erro: new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAADmq4yBWGCDpLCqcCkLLm7N8+2kUhAJT6zs+OGeShELWrbv9+CRPQUWbMDy+NVyIAUzh9f0+cdmFAUvg9L0+s1tGwUxfM/y+tJ1JAYwdcvy+th9KAYsb8bx+t+GMAcpZsHu+eWRNwglYLzs+eykQwkdWLfq+O+wVg0UV7Hl'),
        suspense: new Audio('data:audio/wav;base64,UklGRkQFAABXQVZFZm10IBAAAAABAAEARKwAAEisAAABAAgAZGF0YQAFAABxhYuFbW9wfJCRkYNwZW+ElZKFc2Rqf5SVko5/a2hxhJGTlJKIe25ub4GNkpOTj4N4cXB0g4+Sk5OHfHZxcoCKkJKTkIt/eHd2eYOMkJKTjYV+e3p3fISOkZKTjYd/vbq1m0gzNVyRp6GWdjkwV3+rrqiccy0oUI+9x7mNUCkkRn7M2tK2b0QdIlyk3OLau2sSDxZovuXn3sJzKwUJT5vj7OTKfT0UBDyJ0+zuzYVEIA1BjcXo7+PAfTAVFU2Uy9/s69KGSCQTTpLL2+Xe1aFdMxtLj8DZ59/RqGY2GUuMu9Xj4NWvazMYQ4i3zt/j37VtNBxPbWUqj8LL0dK'),
        final: new Audio('data:audio/wav;base64,UklGRn4GAABXQVZFZm10IBAAAAABAAEAESsAABErAAABAAgAZGF0YVoGAAApKy0vMTM1Nzk7PT9BQ0VHSUpMTk9RU1VWWFpbXV5gYWNkZmdpamxub3Fyc3V2eHl7fH5/gYKDhYaIiYqMjY+QkZOUlZeYmZqcnZ+goaKkpaanqKmrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHR0tPU1dbW19jZ2drb3Nzd3t/g4eLi4+Tl5ufo6enq6+zt7u/w8fLz9PX29/j5+vv8/f7/AAAAAAAA')
    };
    
    return sons;
}

// Animações especiais
function animacaoVitoria() {
    // Criar confetes
    const cores = ['#FFD700', '#FFA500', '#FF6347', '#00CED1', '#9370DB'];
    const confeteContainer = document.createElement('div');
    confeteContainer.style.position = 'fixed';
    confeteContainer.style.top = '0';
    confeteContainer.style.left = '0';
    confeteContainer.style.width = '100%';
    confeteContainer.style.height = '100%';
    confeteContainer.style.pointerEvents = 'none';
    confeteContainer.style.zIndex = '9999';
    document.body.appendChild(confeteContainer);
    
    for (let i = 0; i < 100; i++) {
        const confete = document.createElement('div');
        confete.style.position = 'absolute';
        confete.style.width = '10px';
        confete.style.height = '10px';
        confete.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
        confete.style.left = Math.random() * 100 + '%';
        confete.style.top = '-10px';
        confete.style.transform = `rotate(${Math.random() * 360}deg)`;
        confete.style.animation = `cair ${3 + Math.random() * 2}s linear`;
        confeteContainer.appendChild(confete);
    }
    
    // Remover após animação
    setTimeout(() => confeteContainer.remove(), 5000);
}

// CSS para animação de confete
const style = document.createElement('style');
style.textContent = `
    @keyframes cair {
        to {
            top: 100%;
            transform: rotate(720deg);
        }
    }
    
    .premio-brilho {
        animation: brilho-premio 1s ease-in-out infinite;
    }
    
    @keyframes brilho-premio {
        0%, 100% { 
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
            transform: scale(1);
        }
        50% { 
            box-shadow: 0 0 40px rgba(255, 215, 0, 1);
            transform: scale(1.05);
        }
    }
`;
document.head.appendChild(style);

// Timer para resposta
let timerInterval;
let tempoRestante = 30;

function iniciarTimer() {
    tempoRestante = 30;
    clearInterval(timerInterval);
    
    const timerDisplay = document.createElement('div');
    timerDisplay.id = 'timer';
    timerDisplay.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.8);
        color: #FFD700;
        padding: 15px 20px;
        border-radius: 50%;
        font-size: 1.5em;
        font-weight: bold;
        border: 3px solid #FFD700;
        z-index: 100;
    `;
    document.body.appendChild(timerDisplay);
    
    timerInterval = setInterval(() => {
        tempoRestante--;
        timerDisplay.textContent = tempoRestante;
        
        if (tempoRestante <= 10) {
            timerDisplay.style.color = '#ff6347';
            timerDisplay.style.borderColor = '#ff6347';
        }
        
        if (tempoRestante <= 0) {
            clearInterval(timerInterval);
            timerDisplay.remove();
            // Tempo esgotado
            if (jogoAtivo) {
                elementos.mensagem.textContent = '⏰ Tempo esgotado!';
                errarPergunta();
            }
        }
    }, 1000);
}

// Estatísticas do jogador
let estatisticas = {
    jogosJogados: 0,
    jogosVencidos: 0,
    melhorPremio: 0,
    perguntasRespondidas: 0,
    perguntasCorretas: 0
};

function carregarEstatisticas() {
    const stats = localStorage.getItem('estatisticas');
    if (stats) {
        estatisticas = JSON.parse(stats);
    }
}

function salvarEstatisticas() {
    localStorage.setItem('estatisticas', JSON.stringify(estatisticas));
}

function mostrarEstatisticas() {
    const taxaAcerto = estatisticas.perguntasRespondidas > 0 
        ? Math.round((estatisticas.perguntasCorretas / estatisticas.perguntasRespondidas) * 100)
        : 0;
    
    const mensagem = `
        📊 SUAS ESTATÍSTICAS:
        
        Jogos Jogados: ${estatisticas.jogosJogados}
        Jogos Vencidos: ${estatisticas.jogosVencidos}
        Melhor Prêmio: R$ ${estatisticas.melhorPremio.toLocaleString('pt-BR')}
        Taxa de Acerto: ${taxaAcerto}%
        
        Continue jogando para melhorar!
    `;
    
    mostrarModal('Estatísticas', mensagem, null);
}

// Adicionar botão de estatísticas
const btnStats = document.createElement('button');
btnStats.textContent = '📊';
btnStats.className = 'btn-stats';
btnStats.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--cor-destaque);
    color: var(--cor-primaria);
    border: none;
    font-size: 1.5em;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
`;
btnStats.addEventListener('click', mostrarEstatisticas);
document.body.appendChild(btnStats);

// Modo treino
function modoTreino() {
    const treino = confirm('Deseja ativar o modo treino? (Sem limite de tempo e com dicas)');
    if (treino) {
        clearInterval(timerInterval);
        document.getElementById('timer')?.remove();
        elementos.mensagem.textContent = '📚 Modo Treino Ativado!';
    }
}

// Adicionar atalhos de teclado
document.addEventListener('keydown', (e) => {
    if (!jogoAtivo) return;
    
    switch(e.key) {
        case '1':
        case 'a':
        case 'A':
            elementos.alternativas[0].click();
            break;
        case '2':
        case 'b':
        case 'B':
            elementos.alternativas[1].click();
            break;
        case '3':
        case 'c':
        case 'C':
            elementos.alternativas[2].click();
            break;
        case '4':
        case 'd':
        case 'D':
            elementos.alternativas[3].click();
            break;
        case 'Enter':
            if (!elementos.btnPerguntar.disabled) {
                elementos.btnPerguntar.click();
            }
            break;
        case 'Escape':
            elementos.btnParar.click();
            break;
    }
});

// Easter egg
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        alert('🎮 Código secreto ativado! Você ganhou uma vida extra!');
        ajudasUsadas = {
            cartas: false,
            pular: false,
            plateia: false,
            eliminar: false
        };
        document.querySelectorAll('.ajuda').forEach(ajuda => {
            ajuda.classList.remove('usada');
        });
    }
});

// Carregar estatísticas ao iniciar
carregarEstatisticas();

// Modificar função de vitória para incluir animação
const vencerJogoOriginal = vencerJogo;
vencerJogo = function() {
    animacaoVitoria();
    estatisticas.jogosVencidos++;
    estatisticas.melhorPremio = 1000000;
    salvarEstatisticas();
    vencerJogoOriginal();
};

// Log de desenvolvimento
console.log('%c🎮 Quem quer ser um milionário?', 'font-size: 24px; color: #FFD700; font-weight: bold;');
console.log('%cDesenvolvido com ❤️ para aprender JavaScript', 'font-size: 14px; color: #4B0082;');
console.log('%cDica: Use as teclas A, B, C, D para selecionar alternativas!', 'font-size: 12px; color: #00CED1;');