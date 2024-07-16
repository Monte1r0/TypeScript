import readlineSync from "readline-sync";

const numeros: Set<number> = new Set<number>();

let tentativa = 0;

numeros.add(1);
numeros.add(3);
numeros.add(6);
numeros.add(15);
numeros.add(8);
numeros.add(7);
numeros.add(65);
numeros.add(80);
numeros.add(4);
numeros.add(22);

tentativa = readlineSync.questionInt("Digite um número: ");
const existe = numeros.has(tentativa);

console.log(`\nO número ${tentativa} existe? ${existe}`);

if (existe) {
    console.log("\nNúmero encontrado.");
} else {
    console.log("\nNúmero não foi encontrado.");
}
