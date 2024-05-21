
var lado1 = 5;
var lado2 = 6;
var lado3 = 7;


var semiPerimetro = (lado1 + lado2 + lado3) / 2;


var area = Math.sqrt(semiPerimetro * (semiPerimetro - lado1) * (semiPerimetro - lado2) * (semiPerimetro - lado3));


console.log("A área do triângulo é: " + area);


