/* ==========================================================
   PROJETO TI V5
   BACK.JS
==========================================================*/

/* ===========================
   MENU LATERAL
=========================== */

const menu = document.getElementById("menu");

function abrirMenu() {

    if (menu) {
        menu.classList.add("ativo");
    }

}

function fecharMenu() {

    if (menu) {
        menu.classList.remove("ativo");
    }

}

/* ===========================
   FECHAR MENU AO CLICAR
=========================== */

document.querySelectorAll(".menu-links a").forEach(link => {

    link.addEventListener("click", () => {

        fecharMenu();

    });

});

/* ===========================
   ANIMAÇÃO AO ROLAR
=========================== */

const elementosFade = document.querySelectorAll(".fade");

function revelarElementos() {

    const pontoTela = window.innerHeight * 0.85;

    elementosFade.forEach(elemento => {

        const topo = elemento.getBoundingClientRect().top;

        if (topo < pontoTela) {

            elemento.classList.add("ativo");

        }

    });

}

window.addEventListener("scroll", revelarElementos);

window.addEventListener("load", revelarElementos);

/* ===========================
   BOTÃO TOPO
=========================== */

const botaoTopo = document.querySelector(".topo");

function controlarBotaoTopo() {

    if (!botaoTopo) return;

    if (window.scrollY > 300) {

        botaoTopo.style.opacity = "1";
        botaoTopo.style.pointerEvents = "all";

    } else {

        botaoTopo.style.opacity = "0";
        botaoTopo.style.pointerEvents = "none";

    }

}

window.addEventListener("scroll", controlarBotaoTopo);

window.addEventListener("load", controlarBotaoTopo);

/* ===========================
   HEADER
=========================== */
/* ===========================
   HEADER INTELIGENTE
=========================== */
const header = document.querySelector(".header-apple");
let ultimoScroll = window.scrollY || 0;

function controlarHeader() {
    if (!header) return;

    const atual = window.scrollY || 0;

    header.style.transition = "transform .35s ease, background .35s ease, box-shadow .35s ease";
    header.style.willChange = "transform";

    if (atual > 60) {
        header.style.background = "rgba(5,18,32,.92)";
        header.style.boxShadow = "0 20px 45px rgba(0,0,0,.45)";
    } else {
        header.style.background = "rgba(8,22,35,.72)";
        header.style.boxShadow = "0 20px 40px rgba(0,0,0,.35)";
    }

    if (atual > ultimoScroll && atual > 120) {
        header.style.transform = "translateY(-110%)";
    } else {
        header.style.transform = "translateY(0)";
    }

    ultimoScroll = atual;
}

window.addEventListener("scroll", controlarHeader, { passive: true });
window.addEventListener("load", controlarHeader);
controlarHeader();
/* ===========================
   EFEITO NOS CARDS
=========================== */

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".35s";

    });

});

/* ===========================
   SCROLL SUAVE LINKS
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (!destino) return;

        e.preventDefault();

        destino.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* ===========================
   ANO AUTOMÁTICO
=========================== */

const ano = document.getElementById("ano");

if (ano) {

    ano.textContent = new Date().getFullYear();

}


/* ==========================================
   SCROLL PRINCIPAL
========================================== */

window.addEventListener("scroll", () => {
    revelarElementos();
    controlarBotaoTopo();
    animarContadores();
    controlarHeader();
});

window.addEventListener("load", () => {
    revelarElementos();
    controlarBotaoTopo();
    controlarHeader();
});

/* ===========================
   TI EM NÚMEROS
=========================== */

const contadores = document.querySelectorAll(".contador");

let contadoresAnimados = false;

function animarContadores() {

    if (contadoresAnimados) return;

    const secao = document.querySelector(".ti-numeros");

    if (!secao) return;

    const topo = secao.getBoundingClientRect().top;

    if (topo < window.innerHeight * 0.8) {

        contadoresAnimados = true;

        contadores.forEach(contador => {

            const alvo = Number(contador.dataset.target);

            let valor = 0;

            const incremento = Math.max(1, Math.ceil(alvo / 100));

            const intervalo = setInterval(() => {

                valor += incremento;

                if (valor >= alvo) {

                    valor = alvo;

                    clearInterval(intervalo);

                }

                contador.textContent = valor.toLocaleString("pt-BR");

            }, 20);

        });

    }
}
function selecionar(card,indiceResposta){

    clearInterval(intervalo);

    document.querySelectorAll(".resposta").forEach((resposta,index)=>{

        resposta.classList.add("desabilitada");

        if(index===perguntas[indice].correta){

            resposta.classList.add("correta");

        }

    });

    if(indiceResposta!==perguntas[indice].correta){

        card.classList.add("errada");

    }

    respostaSelecionada=indiceResposta;

    setTimeout(()=>{

        proximaPergunta();

    },1200);

}
console.log("Projeto TI V5 carregado com sucesso.");
