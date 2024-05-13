function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (altura > 0 && peso > 0) {
        const imc = peso / (altura * altura);
        const resultado = `Seu IMC é: ${imc.toFixed(2)}`;

        document.getElementById('resultado').innerHTML = resultado;
    } else {
        document.getElementById('resultado').innerHTML = "Preencha altura e peso válidos.";
    }
}
