function atividadeDoDia(dia) {
    switch(dia.toUpperCase()) {
        case "SEGUNDA":
            console.log("REUNIÃO");
            break;
        case "TERÇA":
            console.log("PALESTRA");
            break;
        case "QUARTA":
            console.log("WORKSHOP");
            break;
        case "QUINTA":
            console.log("TRABALHO REMOTO");
            break;
        case "SEXTA":
            console.log("AGENDAMENTO SEMANAL");
            break;
        case "SÁBADO":
            console.log("SHOPPING");
            break;
        case "DOMINGO":
            console.log("PRAIA");
            break;
        default:
            console.log("Dia inválido");
    }
}


atividadeDoDia("segunda"); 
atividadeDoDia("Sábado"); 
atividadeDoDia("segunda-feira"); 
