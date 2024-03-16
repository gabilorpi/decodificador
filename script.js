var textoDigitado = document.getElementById("inputText");

textoDigitado.addEventListener("input", function(event) {
    let texto = event.target.value;
    let novoTexto = removerMaiusculasAcentos(texto);
    event.target.value = novoTexto;
});

function removerMaiusculasAcentos(texto) {
    return texto.replace(/[A-ZÁÉÍÓÚÀÂÊÔÃÕÜ]/g, "").replace(/[áéíóúàâêôãõü]/g, "");
}

function criptografar() {
    let texto = textoDigitado.value;

    let criptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("resultado").innerText = criptado;
}

function descriptografar() {
    let texto = textoDigitado.value;

    let descriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("resultado").innerText = descriptado;
}

function copiarResultado() {
    var resultado = document.getElementById("resultado").innerText;

    if (resultado) {
        navigator.clipboard.writeText(resultado);
        alert("Copiado para a área de transferência!");
    } else {
        alert("Nenhum resultado para copiar.");
    }
}
