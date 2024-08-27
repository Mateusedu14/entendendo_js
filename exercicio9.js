/*Faça um algoritmo que pergunte em que turno o usuário estuda. 
Peça para digitar M- matutino, V- Vespertino ou N- Noturno. 
Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso digitado. */

let textomenu = `Escolha o turno do usuário
                M- Matutino
                V- Vespertino
                N- Noturno `;

let turnoEscolhido = prompt(textomenu);
let turnoNome;

switch (turnoEscolhido) {
    case "M":
        turnoNome = "Bom Dia!";
        break;
    case "V":
        turnoNome = "Boa Tarde!";
        break;
    case "N":
        turnoNome = "Boa Noite!";
        break;
    default:
        turnoNome = "Turno Inválido";
        break;    

}
alert(`${turnoNome}`);
