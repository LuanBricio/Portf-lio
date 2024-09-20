const text = "Luan Brício Cruz Santos";
let index = 0;

function type() {
    if (index < text.length) {
        document.getElementById("typing-effect").textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Ajuste o tempo de digitação aqui
    }
}

type();

let ativado = false

function ativaMenu() {
    let menu = document.getElementById('menu')



    if (ativado == false) {
        menu.style.display = 'inline'
        ativado = true
    } else if (ativado == true) {
        menu.style.display = 'none'
        ativado = false
    }


}