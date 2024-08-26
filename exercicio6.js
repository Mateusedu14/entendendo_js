let nome = "";
let valorhora, hora = 0;

nome = prompt("Digite o seu nome: ");
valorhora = parseFloat(prompt("Digite quanto você recebe por hora: "));
hora = parseFloat(prompt("Digite o número de horas trabalhadas no mês: "));

let resultado = (valorhora * hora);

alert(`${nome} você recebe R$ ${resultado.toFixed(2)} por mês`)



