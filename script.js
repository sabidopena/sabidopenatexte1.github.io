function calcular() {
    var total = parseFloat(document.getElementById("total").value);
    var percent = parseFloat(document.getElementById("percent").value);
    var resultado = total * percent / 100;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado.toFixed(2);
}
