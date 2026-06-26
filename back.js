function abrirMenu() {
    document.getElementById("menu").classList.add("ativo");
}

function fecharMenu() {
    document.getElementById("menu").classList.remove("ativo");
}

function alterarFonte(valor) {

    valor = parseInt(valor);

    document.body.style.fontSize = valor + "px";

    document.querySelectorAll("h1").forEach(el => {
        el.style.fontSize = (valor + 16) + "px";
    });

    document.querySelectorAll("h2").forEach(el => {
        el.style.fontSize = (valor + 10) + "px";
    });

    document.querySelectorAll("h3").forEach(el => {
        el.style.fontSize = (valor + 6) + "px";
    });

    document.querySelectorAll("p").forEach(el => {
        el.style.fontSize = valor + "px";
    });

    localStorage.setItem("fonteSite", valor);
}

window.onload = function() {

    const fonteSalva = localStorage.getItem("fonteSite");

    if (fonteSalva) {

        alterarFonte(fonteSalva);

        const select = document.querySelector("select");

        if (select) {
            select.value = fonteSalva;
        }
    }
};

document.addEventListener("click", function(e){

    const menu = document.getElementById("menu");
    const botao = document.querySelector(".menu-btn");

    if(
        menu &&
        botao &&
        !menu.contains(e.target) &&
        !botao.contains(e.target)
    ){
        menu.classList.remove("ativo");
    }

});

/* =========================
   POPUP ÁREAS DE T.I.
   ========================= */

function abrirPopupAreas() {
    const popup = document.getElementById("popupAreas");
    if (popup) {
        popup.style.display = "flex";
    }
}

function fecharPopupAreas() {
    const popup = document.getElementById("popupAreas");
    if (popup) {
        popup.style.display = "none";
    }
}

/* fechar clicando fora da caixa */
document.addEventListener("click", function(e){

    const popup = document.getElementById("popupAreas");

    if (popup && e.target === popup) {
        popup.style.display = "none";
    }

});

function abrirPopupDocs() {
    const popup = document.getElementById("popupDocs");

    if (popup) {
        popup.style.display = "flex";
    }
}

function fecharPopupDocs() {
    const popup = document.getElementById("popupDocs");

    if (popup) {
        popup.style.display = "none";
    }
}
