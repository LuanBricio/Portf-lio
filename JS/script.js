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