/* 
Faça um algoritmo que faz uma conversão de temperaturas onde . 
1. Converter Celsius para Fahrenheit. formula: (celsius * 9/5) + 32
2. Converter Fahrenheit para Celsius. formula: (fahrenheit - 32) * 5/9
*/

let textomenu = `Escolha uma das opções:
                1 - Conversão de °C para °F
                2 - Conversão de °F para °C `;

let grauEscolhido = parseFloat(prompt(textomenu));
let conver, result;

switch (grauEscolhido) {
    case 1:

        conver = parseInt(prompt("Digite quantos °C: "));
        result = (conver * 9 / 5 + 32);

        alert(`O Resultado é: ${result}`);
        break;

    case 2:
        conver = parseInt(prompt("Digite quantos °F: "));
        result = ((conver - 32) * 5 / 9);

        alert(`O Resultado é: ${result}`);
        break;
    default:
        alert(`Opção Inválida`);
        break
}

