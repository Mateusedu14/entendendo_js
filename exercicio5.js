//Entrada de dados
let numero1 = parseInt(prompt("Informe o Primeiro Numero:"));
let numero2 = parseInt(prompt("Informe o Segundo Numero:"));
let numero3 = parseInt(prompt("Informe o Terceiro Numero:"));

if ((numero1 > numero2) && (numero2 > numero3)) {
    alert("O Numero 1 é o Maior");
}
else if ((numero2 > numero1) && (numero2 > numero3)) {
    alert("O Numero 2 é o Maior");

} else if ((numero3 > numero1) && (numero3 > numero2)) {

    alert("O Numero 3 é o Maior");
}
if ((numero1 < numero2) && (numero2 < numero3)) {
    alert("O Numero 1 é o Maior");
}
else if ((numero2 < numero1) && (numero2 < numero3)) {
    alert("O Numero 2 é o Maior");

} else if ((numero3 > numero1) && (numero3 > numero2)) {

    alert("O Numero 3 é o Maior");
}