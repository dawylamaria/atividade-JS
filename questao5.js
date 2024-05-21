function removerCaractere(string, posicao) {
    if (posicao < 0 || posicao >= string.length) {
        console.log("Posição inválida.");
        return;
    }

    var caractereRemovido = "";
    var stringModificada = "";

    for (var i = 0; i < string.length; i++) {
        if (i === posicao) {
            caractereRemovido = string[i];
            continue; 
        }
        stringModificada += string[i];
    }

    console.log("Caractere removido:", caractereRemovido);
    console.log("String modificada:", stringModificada);
}


removerCaractere("casa", 3);
