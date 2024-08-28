/* Faça um algoritmo para montar uma calculadora simples, onde o usuário vai optar em escolher conforme o menu 
adiante. 
Observação: no caso de divisão, o denominador não pode ser zero, invalidando a operação.
1. Soma.
2. Subtração.
3. Multiplicação.
4. Divisão
5. Potenciação
6. Radiciação */

let textomenu = `Calculadora simples, escolha a operação:
                1- Soma 
                2- Subtração
                3- Multiplicação
                4- Divisão
                5- Potenciação
                6- Radiciação`;

let Num1, Num2;

let result;

let operEscolhida = parseInt(prompt(textomenu));

switch (operEscolhida) {
    case 1:
        Num1 = parseFloat(prompt("Digite o primeiro nº: "));
        Num2 = parseFloat(prompt("Digite o segundo nº: "));

        result = (Num1 + Num2);

        alert(`${Num1} + ${Num2} = ${result}`);
        break;
    case 2:
        Num1 = parseFloat(prompt("Digite o primeiro nº: "));
        Num2 = parseFloat(prompt("Digite o segundo nº: "));

        result = (Num1 - Num2);

        alert(`${Num1} - ${Num2} = ${result}`);
        break;

    case 3:
        Num1 = parseFloat(prompt("Digite o primeiro nº: "));
        Num2 = parseFloat(prompt("Digite o segundo nº: "));

        result = (Num1 * Num2);

        alert(`${Num1} * ${Num2} = ${result}`);
        break;

    case 4:
        Num1 = parseFloat(prompt("Digite o primeiro nº: "));
        Num2 = parseFloat(prompt("Digite o segundo nº: "));

        if (Num2 == 0) {
            alert("Operação Inválida");
        } else {

            result = (Num1 / Num2);

            alert(`${Num1} / ${Num2} = ${result}`);
            break;


        }

    case 5:
        Num1 = parseFloat(prompt("Digite o primeiro nº: "));
        Num2 = parseFloat(prompt("Digite o segundo nº: "));

        result = (Num1 ** Num2);

        alert(`${Num1} ** ${Num2} = ${result}`);
        break;

    case 6:

        Num1 = parseFloat(prompt("Digite o primeiro nº: "));
        Num2 = parseFloat(prompt("Digite o segundo nº: "));

        result = (Num1 ** (1 / Num2));

        alert(`A raiz de ${Num1} é ${result}`);
        break;

    default:
        alert("Opção Inválida")
        break;
};

