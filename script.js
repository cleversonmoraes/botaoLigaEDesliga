const botao = document.getElementById("botao")
const body = document.getElementsByTagName("body")
const text_button = document.getElementById("text_button")

function ligaDesliga() {
    botao.classList.toggle("ligaDesliga")
    if (botao.classList.contains("ligaDesliga")) {
        document.body.style.backgroundColor = "white"
        text_button.innerHTML = "off"
    } else {
        document.body.style.backgroundColor = "black"
        text_button.innerHTML = "on"
    }
}