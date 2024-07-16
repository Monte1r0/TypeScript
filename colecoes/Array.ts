import readlinesync = require("readline-sync");

const numeros: Array<number> = new Array<number>();

numeros.push(7);
numeros.push(5);
numeros.push(1);
numeros.push(7);

numeros.push(readlinesync.questionFloat("Digite um numero"));

numeros.unshift(2.5, 3.6, 8 )



for( let numero of numeros)
    console.log(numero);

console.log(numeros);

//Atualização de valor
console.log(`\n A posicao do elemento 5 é: ${numeros.indexOf(5)}`);
numeros[numeros.indexOf(5)] = 10;

console.table(numeros)



//Excluir valor
numeros.splice(numeros.indexOf(10), 1);

console.table(numeros);