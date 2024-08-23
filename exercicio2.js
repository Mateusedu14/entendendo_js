/*
Solicite ao usuário um número de 1 a 7 e
exiba em texto o dia da semana representado 
conforme abaixo

1. Domingo
2. Segunda-feira
3. Terça-feira
4. Quarta-feira
5. Quinta-feira
6. Sexta-feira
7. Sábado
*/
let dia_escolhido = 
parseInt(prompt("Informe o numero do dia da Semana a exibir:"));

if (dia_escolhido === 1) {
    alert("O dia escolhido é Domingo");
} else if (dia_escolhido === 2) {
    alert("O dia escolhido é Segunda");
} else if (dia_escolhido === 3) {
    alert("O dia escolhido é Terça");
} else if (dia_escolhido === 4) {
    alert("O dia escolhido é Quarta");
} else if (dia_escolhido === 5) {
    alert("O dia escolhido é Quinta");
} else if (dia_escolhido === 6) {
    alert("O dia escolhido é Sexta");
} else if (dia_escolhido === 7) {
    alert("O dia escolhido é Sábado");
} else {
    alert("Dia Inválido");
}