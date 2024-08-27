//Entrada de dados
let numero1 = parseInt(prompt("Informe o Primeiro Numero:"));
let numero2 = parseInt(prompt("Informe o Segundo Numero:"));
let numero3 = parseInt(prompt("Informe o Terceiro Numero:"));
let maior, menor;

if ((numero1 >= numero2) && (numero1 >= numero3)) {
    maior = numero1
}
else if ((numero2 >= numero1) && (numero2 >= numero3)) {
    maior = numero2

} else if ((numero3 >= numero1) && (numero3 >= numero2)) {
    maior = numero3
   
}
if ((numero1 <= numero2) && (numero1 <= numero3)) {
    menor = numero1
}
else if ((numero2 <= numero1) && (numero2 <= numero3)) {
    menor = numero2

} else if ((numero3 <= numero1) && (numero3 <= numero2)) {
    menor = numero3
    
}

alert(`O Numero ${maior} é o Maior de todos!
        E o Numero ${menor} é o menor de todos!`);

        
