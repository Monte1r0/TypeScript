import readlinesync = require("readline-sync");

const cores: Array<string> = new Array<string>();

cores.push(readlinesync.question("Digite uma Cor: "));
cores.push(readlinesync.question("Digite uma Cor: "));
cores.push(readlinesync.question("Digite uma Cor: "));
cores.push(readlinesync.question("Digite uma Cor: "));
cores.push(readlinesync.question("Digite uma Cor: "));

for( let cor of cores)
    console.log(cor);

console.table(cores.sort(compareAsc))



function compareAsc(a: string, b: string): number {

    return Number(a) - Number(b);
  
  }


