function calcularDiferenca(numero) {
    var diferenca = numero - 13; 

    if (numero > 13) {
        diferenca *= 2; 
    }

    return diferenca; 
}


console.log(calcularDiferenca(30)); 
