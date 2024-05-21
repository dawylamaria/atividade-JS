function calcularMedia(num1, num2) {

    if (num1 < 0 || num1 > 10) {
        console.log("Valor inválido " + num1);
        return;
    }
    if (num2 < 0 || num2 > 10) {
        console.log("Valor inválido " + num2);
        return;
    }

    
    var media = (num1 + num2) / 2;
    console.log("A média entre", num1, "e", num2, "é:", media);
}


calcularMedia(7, 9); 
calcularMedia(4, 12); 
