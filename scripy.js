var valor = document.getElementById("valor")
var valorDolar = document.getElementById("Dolar")
var valorEuro = document.getElementById("Euro")
var valorLibras = document.getElementById("Libras")

function converter(){
    var valorDigitado = valor.value
    
    var valorConvertido = Number(valorDigitado) * 5.15
    valorDolar.innerHTML = valorConvertido.toFixed(2)

    var valorConvertidoEuro = Number(valorDigitado) * 5.23

    valorEuro.innerHTML = valorConvertidoEuro.toFixed(2)

    var valorConvertidoLibras = Number(valorDigitado) * 5.95
    valorLibras.innerHTML = valorConvertidoLibras.toFixed(2)
}

function Limpar(){

    valorDolar.innerHTML = ""
    valorEuro.innerHTML = ""
    valorLibras.innerHTML = ""
    valor.value = ""
}


