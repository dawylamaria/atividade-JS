function somaOuTriplo(num1, num2) {
    var soma = num1 + num2; 
    
    if (num1 === num2) {
        return soma * 3; 
    } else {
        return soma; 
    }
}

console.log(somaOuTriplo(3, 5)); 
console.log(somaOuTriplo(4, 4)); 
