import { Stack } from "../interface/Stack";
const leia = require('readline-sync');

const pilha = new Stack<string>();


let cliente;
let adicionar;
let verificador = true;

while (verificador){

    console.log("\n*************************************************");
    console.log("\n********* Menu *********");
    console.log("\n 1 - Adicionar Livro na Pilha");
    console.log(" 2 - Listar Todos os Livros");
    console.log(" 3 - Retirar Livro da Pilha");
    console.log(" 0 - Sair");

    console.log("\n*************************************************");

    cliente = leia.questionInt("\nDigite qual o código da função que você gostaria: ");


    switch (cliente){
        case 1:
            adicionar = leia.question("\nDigite qual o nome que gostaria de adicionar: ");
            pilha.push(adicionar);
            break;
        case 2:
            console.log("\n Exibir todos os Elementos da Pilha: ");
            pilha.printStack();
            if (pilha.isEmpty()) {
                console.log(" A pilha está vazia!");
            }
            break;
        case 3:
            console.log("\nRemover Elemento: " + pilha.pop());
            break;
            
        case 0:
            console.log("\nFinalizando Programa");
            verificador = false;
            break;
        
    };
};
console.log("\n*********************FIM*************************");

