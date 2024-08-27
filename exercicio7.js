/* Algoritmo que valida se pode entrar na montanha
russa ou não, os critérios são:
Ter 1,70 de altura.
Ter no mínimo 1,60 de altura e ser maior de 18 anos. */

let pergunta1 = parseFloat(prompt("Bem-vindo, qual é a sua altura?"));

let mensagem = "";

if (pergunta1 >= 1.70) {

    mensagem = ("Você pode entrar");
    
} else {

    let pergunta2 = parseInt(prompt("você parece pequeno, qual sua idade?"));

    if (pergunta1 >= 1.60 && pergunta2 >= 18){
        mensagem = ("Você pode entrar");
    } else {
        mensagem = ("Você infelizmente não pode entrar, adeus");
    }

}

alert(mensagem);