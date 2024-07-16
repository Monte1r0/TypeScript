import { Queue } from "../interface/Queue";

const fila = new Queue<number>();

for(let i = 1; i <= 10; i++){
    fila.enqueue(i)
}

console.log("\n Exibir todos os Elementos da Fila: ");
fila.printQueue();

console.log("\n Remover Elemento: "+ fila.dequeue());

fila.printQueue();

console.log("\nEsse é o proximo da fila " + fila.peek());

console.log("\nChecar se o Elemento 4 existe na fila? " + fila.contains(4));

console.log("\nVerificar se a fila está vazia " + fila.isEmpty());

// Limpar 
fila.clear()