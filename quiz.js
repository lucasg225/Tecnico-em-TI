/* ==========================================================
   QUIZ.JS
   WHAY HELP
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {
    const perguntas = [
        {
            pergunta: "Qual é a principal função de um Sistema Operacional?",
            respostas: [
                "Editar imagens",
                "Gerenciar o hardware e o software",
                "Criar planilhas",
                "Programar jogos"
            ],
            correta: 1
        },
        {
            pergunta: "O que significa a sigla CPU?",
            respostas: [
                "Central Processing Unit",
                "Computer Personal Unit",
                "Control Program User",
                "Central Program Utility"
            ],
            correta: 0
        },
        {
            pergunta: "Qual linguagem é usada para estilizar páginas web?",
            respostas: [
                "Python",
                "Java",
                "CSS",
                "PHP"
            ],
            correta: 2
        },
        {
            pergunta: "Qual equipamento conecta computadores em uma rede?",
            respostas: [
                "Monitor",
                "Switch",
                "Teclado",
                "Impressora"
            ],
            correta: 1
        },
        {
            pergunta: "HTML é utilizado para:",
            respostas: [
                "Criar a estrutura da página",
                "Editar vídeos",
                "Criar banco de dados",
                "Montar computadores"
            ],
            correta: 0
        },
        {
            pergunta: "Qual destas áreas trabalha com proteção de sistemas?",
            respostas: [
                "Design",
                "Marketing",
                "Cibersegurança",
                "Suporte Comercial"
            ],
            correta: 2
        },
        {
            pergunta: "O que é um banco de dados?",
            respostas: [
                "Programa para editar fotos",
                "Sistema para armazenar informações",
                "Rede social",
                "Editor de texto"
            ],
            correta: 1
        },
        {
            pergunta: "Qual empresa desenvolveu o Windows?",
            respostas: [
                "Apple",
                "Microsoft",
                "Google",
                "Intel"
            ],
            correta: 1
        },
        {
            pergunta: "O que faz um Técnico em TI?",
            respostas: [
                "Realiza manutenção e suporte",
                "Vende computadores",
                "Projeta prédios",
                "Edita filmes"
            ],
            correta: 0
        },
        {
            pergunta: "Qual destas profissões pertence à área de TI?",
            respostas: [
                "Enfermeiro",
                "Programador",
                "Advogado",
                "Arquiteto"
            ],
            correta: 1
        }
    ];

    const btnComecar = document.getElementById("btnComecar");
    const btnProxima = document.getElementById("btnProxima");
    const perguntaEl = document.getElementById("pergunta");
    const respostasEl = document.getElementById("respostas");
    const contadorEl = document.getElementById("contador");
    const progressoEl = document.getElementById("progresso");
    const resultadoEl = document.getElementById("resultado");
    const pontuacaoEl = document.getElementById("pontuacao");
    const mensagemEl = document.getElementById("mensagem");
    const medalhaEl = document.getElementById("medalha");
    const nivelEl = document.getElementById("nivel");
    const barraFinalEl = document.getElementById("barraFinal");
    const acertosEl = document.getElementById("acertos");
    const errosEl = document.getElementById("erros");
    const percentualEl = document.getElementById("percentual");
    const tempoEl = document.getElementById("tempo");
    const timerEl = document.querySelector(".timer");
    const anoEl = document.getElementById("ano");

    if (anoEl) {
        anoEl.textContent = new Date().getFullYear();
    }

    if (!btnComecar || !perguntaEl || !respostasEl || !contadorEl || !progressoEl || !resultadoEl) {
        return;
    }

    let indice = 0;
    let pontos = 0;
    let respostaSelecionada = null;
    let tempo = 20;
    let intervalo = null;
    let travado = false;

    btnComecar.addEventListener("click", iniciarQuiz);
    if (btnProxima) {
        btnProxima.addEventListener("click", proximaPergunta);
        btnProxima.style.display = "none";
    }

    function iniciarQuiz() {
        indice = 0;
        pontos = 0;
        respostaSelecionada = null;
        tempo = 20;
        travado = false;

        if (btnComecar) btnComecar.style.display = "none";
        if (resultadoEl) resultadoEl.style.display = "none";
        if (document.querySelector(".quiz-area")) document.querySelector(".quiz-area").style.display = "block";

        mostrarPergunta();
    }

    function mostrarPergunta() {
        travado = false;
        respostaSelecionada = null;

        if (btnProxima) btnProxima.style.display = "none";
        if (timerEl) timerEl.classList.remove("amarelo", "vermelho");

        const atual = perguntas[indice];

        perguntaEl.textContent = atual.pergunta;
        contadorEl.textContent = `Pergunta ${indice + 1} de ${perguntas.length}`;
        progressoEl.style.width = `${((indice + 1) / perguntas.length) * 100}%`;
        respostasEl.innerHTML = "";

        atual.respostas.forEach((texto, i) => {
            const div = document.createElement("div");
            div.className = "resposta";
            div.textContent = texto;
            div.addEventListener("click", () => selecionar(div, i));
            respostasEl.appendChild(div);
        });

        iniciarTempo();
    }

    function selecionar(card, indiceResposta) {
        if (travado) return;

        travado = true;
        respostaSelecionada = indiceResposta;
        clearInterval(intervalo);

        const correta = perguntas[indice].correta;

        document.querySelectorAll(".resposta").forEach((r, idx) => {
            r.classList.add("desabilitada");
            if (idx === correta) r.classList.add("correta");
        });

        if (indiceResposta !== correta) {
            card.classList.add("errada");
        }

        card.classList.add("selecionada");

        if (indiceResposta === correta) {
            pontos++;
        }

        setTimeout(() => {
            proximaPergunta();
        }, 650);
    }

    function proximaPergunta() {
        clearInterval(intervalo);

        indice++;

        if (indice < perguntas.length) {
            mostrarPergunta();
        } else {
            finalizarQuiz();
        }
    }

    function finalizarQuiz() {
        clearInterval(intervalo);

        const quizArea = document.querySelector(".quiz-area");
        if (quizArea) quizArea.style.display = "none";
        resultadoEl.style.display = "block";

        const percentualResultado = Math.round((pontos / perguntas.length) * 100);

        pontuacaoEl.textContent = `${pontos}/${perguntas.length}`;
        barraFinalEl.style.width = `${percentualResultado}%`;
        acertosEl.textContent = pontos;
        errosEl.textContent = perguntas.length - pontos;
        percentualEl.textContent = `${percentualResultado}%`;

        if (percentualResultado === 100) {
            medalhaEl.textContent = "💎";
            nivelEl.textContent = "Diamante";
            mensagemEl.textContent = "Perfeito! Você demonstrou domínio dos conceitos básicos de Tecnologia da Informação.";
        } else if (percentualResultado >= 80) {
            medalhaEl.textContent = "🥇";
            nivelEl.textContent = "Ouro";
            mensagemEl.textContent = "Excelente desempenho! Continue estudando e você estará preparado para muitos desafios na área de TI.";
        } else if (percentualResultado >= 60) {
            medalhaEl.textContent = "🥈";
            nivelEl.textContent = "Prata";
            mensagemEl.textContent = "Bom trabalho! Você já possui uma boa base, mas ainda pode evoluir bastante.";
        } else {
            medalhaEl.textContent = "🥉";
            nivelEl.textContent = "Bronze";
            mensagemEl.textContent = "Você está começando sua jornada. Continue aprendendo e evoluindo na área de TI.";
        }
    }

    function iniciarTempo() {
        clearInterval(intervalo);

        tempo = 20;
        if (tempoEl) tempoEl.textContent = tempo;

        intervalo = setInterval(() => {
            tempo--;
            if (tempoEl) tempoEl.textContent = tempo;

            if (tempoEl && timerEl) {
                if (tempo <= 10) timerEl.classList.add("amarelo");
                if (tempo <= 5) {
                    timerEl.classList.remove("amarelo");
                    timerEl.classList.add("vermelho");
                }
            }

            if (tempo <= 0) {
                clearInterval(intervalo);

                if (!travado) {
                    travado = true;

                    document.querySelectorAll(".resposta").forEach((r) => {
                        r.classList.add("desabilitada");
                        if (r.classList.contains("selecionada")) {
                            r.classList.add("errada");
                        }
                    });

                    setTimeout(() => {
                        proximaPergunta();
                    }, 500);
                }
            }
        }, 1000);
    }
});
