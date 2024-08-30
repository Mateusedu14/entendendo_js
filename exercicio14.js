/*Desenvolva um gerador de tabuada, capaz de gerar 
através de qualquer número inteiro, solicitando 
ao usuário o número e mostrando na tela conforme 
o exemplo abaixo:
Tabuada de 5
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
Ao final, pergunte ao usuário se ele deseja 
realizar uma outra geração ou sair.*/
let continuar = "S";
do {
    let num = parseInt(prompt("Informe sua tabuada!"));
    let stringTab =
        `
        ${num} X 1 = ${num * 1} 
        ${num} X 2 = ${num * 2}
        ${num} X 3 = ${num * 3}
        ${num} X 4 = ${num * 4}
        ${num} X 5 = ${num * 5}
        ${num} X 6 = ${num * 6}
        ${num} X 7 = ${num * 7}
        ${num} X 8 = ${num * 8}
        ${num} X 9 = ${num * 9}
        ${num} X 10 = ${num * 10}
    `;
    alert(stringTab);
    continuar = prompt("Você deseja gerar outra Tabuada? S=Sim e N=Não")

} while (continuar == "S");