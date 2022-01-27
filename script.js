const botao = document.getElementById("botao")
const body = document.getElementsByTagName("body")

function ligaDesliga() {
    botao.classList.toggle("ligaDesliga")
    if (botao.classList.contains("ligaDesliga")) {
        document.body.style.backgroundColor = "white"
    } else {
        document.body.style.backgroundColor = "black"
    }
}