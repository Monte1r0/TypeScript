import { Queue } from "../interface/Queue";

const leia = require('readline-sync');

const fila = new Queue<string>();

let cliente;
let adicionar;
let verificador = true;

while (verificador){

    console.log("\n*************************************************");
    console.log("\n********* Menu *********");
    console.log("\n 1 - Adicionar Cliente na Fila");
    console.log(" 2 - Listar Todos os Clientes");
    console.log(" 3 - Retirar Cliente da fila");
    console.log(" 0 - Sair");

    console.log("\n*************************************************");

    cliente = leia.questionInt("\nDigite qual o código da função que você gostario: ");


    switch (cliente) {
        case 1:
            adicionar = leia.question("\nDigite qual o nome que gostaria de adicionar: ");
            fila.enqueue(adicionar);
            break;
        case 2:
            console.log("\n Exibir todos os Elementos da Fila: ");
            fila.printQueue();
            fila.isEmpty();
            if (fila.isEmpty() == true ){
                console.log(" A fila está vazia! ")
            };
            break;
        case 3:
            console.log("\n Remover Nome da Lista: "+ fila.dequeue());
            break;
            
        case 0:
            console.log("\nFinalizando Programa");
            verificador = false;
            break;
        
    };

};
console.log("\n*********************FIM*************************");
