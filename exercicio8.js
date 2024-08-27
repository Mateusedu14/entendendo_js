/* Faça um algoritmo que o usuário escreva o nome e o preço de três produtos e assim que terminar de escrever o ultimo 
produto, mostre o nome e o valor do produto mais barato. */


let menorValor, menorNomeProduto;

let produto1 = prompt("Informe o nome do produto 1");
let valor1 = parseFloat(prompt("Informe o preço do produto 1: "));
let produto2 = prompt("Informe o nome do produto 2");
let valor2 = parseFloat(prompt("Informe o preço do produto 2: "));
let produto3 = prompt("Informe o nome do produto 3");
let valor3 = parseFloat(prompt("Informe o preço do produto 3: "));

if ((valor1 <= valor2) && (valor1 <= valor3)) {
    menorValor = valor1; 
    menorNomeProduto = produto1;
}
else if ((valor2 <= valor1) && (valor2 <= valor3)) {
    menorValor = valor2; 
    menorNomeProduto = produto2;

} else if ((valor3 <= valor1) && (valor3 <= valor2)) {
    menorValor = valor3;
    menorNomeProduto = produto3;
}

alert(`O produto ${menorNomeProduto}
    é o mais barato com o valor de R$ ${menorValor}`);
    