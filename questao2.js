function imprimirExtensao(nomeArquivo) {
    
    var posicaoPonto = nomeArquivo.lastIndexOf('.');
    
    
    if (posicaoPonto !== -1 && posicaoPonto !== nomeArquivo.length - 1) {
        
        var extensao = nomeArquivo.substring(posicaoPonto + 1);
        
        
        console.log(extensao);
    } else {
        console.log("O arquivo não possui uma extensão válida.");
    }
}


imprimirExtensao("texto.docx");
imprimirExtensao("roteiro.pdf");
