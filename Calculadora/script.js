function soma(){
    var n1 = parseFloat(document.getElementById('n1').value)
    var n2 = parseFloat(document.getElementById('n2').value)
    var resp = document.getElementById("respSoma")
    resp.textContent = n1 + n2
}

function subtracao(){
    var n1 = parseFloat(document.getElementById('n3').value)
    var n2 = parseFloat(document.getElementById('n4').value)
    var resp = document.getElementById("respSub")
    resp.textContent = n1 - n2
}

function multiplicacao(){
    var n1 = parseFloat(document.getElementById('n5').value)
    var n2 = parseFloat(document.getElementById('n6').value)
    var resp = document.getElementById("respMult")
    resp.textContent = n1 * n2
}

function divisao(){
    var n1 = parseFloat(document.getElementById('n7').value)
    var n2 = parseFloat(document.getElementById('n8').value)
    var resp = document.getElementById("respDiv")
    resp.textContent = n1 / n2
}