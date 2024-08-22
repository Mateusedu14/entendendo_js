/*
Informe se um aluno está aprovado,
de recuperação ou reprovado
seguindo os seguintes critérios:
informar 3 notas
media > 6: aprovado.
media < 4: reprovado.

Obs use o promt e exiba os resultado em alert.

*/

let nome1 = "";
let nota1, nota2, nota3

nome1 = prompt("Digite o Nome do Aluno 1: ");
nota1 = parseFloat(prompt("Digite a Nota 1: "));
nota2 = parseFloat(prompt("Digite a Nota 2: "));
nota3 = parseFloat(prompt("Digite a Nota 3: "));

let media = 0;
media = (nota1 + nota2 + nota3) / 3;

let mensagem = `
${nome1}, sua média é ${media1}
`
if (media >= 6) {
    alert(mensagem);("Aprovado");
}


