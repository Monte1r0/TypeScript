import readlinesync = require("readline-sync");
import { colors } from "../src/util/Color";
import { Produto } from "../src/model/Produto";
import { Cosmetico } from "../src/model/Cosmetico";
import { Generico } from "../src/model/Generico";
import { ProdutoController } from "../src/controller/ProdutoController";


export function main() {

let opcao, numero, id, tipo, preco: number;
let nomeProduto: string;
let fragrancia, generico: string;

const tipoProdutos = ['Fragancia', 'Generico'];

const produtos: ProdutoController = new ProdutoController();
    
    while (true) {

        console.log(colors.bg.black, colors.fg.redstrong,
                    "=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=");
        console.log("                                                     ");
        console.log("              🌟 Bem vindo a Lojinha 🌟             ");
        console.log("                                                     ");
        console.log("=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=");
        console.log("                                                     ");
        console.log("            9️⃣  - Sair 🚪                             ");
        console.log("            5️⃣  - Deletar algum Produto                      ");
        console.log("            4️⃣  - Atualizar Produto                    ");
        console.log("            3️⃣  - Buscar Produtos                       ");
        console.log("            2️⃣  - Explorar Produtos                    ");
        console.log("            1️⃣  - Criar Produto                        ");
        console.log("                                                     ");
        console.log("=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=");
        console.log(colors.reset,
                    "                                                     ");

        console.log(colors.bg.black, colors.fg.whitestrong,
                    "Escolha qual opção ira lhe atender melhor: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.bg.black, colors.fg.yellow,
                        "\n💫 Lojinha - 37 Anos Transformando Sonhos em Realidade! 💫");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\n🚀 Vamos criar o seu produto! 🚀\n\n");
                    console.log("Digite o ID do Produto: ");
                    id = readlinesync.questionInt("");

                    console.log("Digite o Nome do Produto: ");
                    nomeProduto = readlinesync.question("");

                    console.log("Digite o Tipo: ");
                    tipo = readlinesync.keyInSelect(tipoProdutos, "", { cancel : false}) + 1;

                    console.log("Digite o preço : ");
                    preco = readlinesync.questionFloat("");

                    switch (tipo){
                        case 1:
                    
                            console.log("Digite a Fragancia do Produto: ");   
                            fragrancia = readlinesync.question("");
                            produtos.cadastrar(
                                new Cosmetico(produtos.gerarNumero(),id, tipo, nomeProduto, preco, fragrancia)
                            )
                        break;
                        case 2:

                            console.log("Digite o Nome Generico do Produto:  ");
                            generico = readlinesync.question("");
                            produtos.cadastrar(
                                new Generico(produtos.gerarNumero(),id, tipo, nomeProduto, preco, generico)
                            )
                        break;
                    }



                break;
            case 2:
                console.log("\n\n🔍 Explorando todas os Produtos 🔍\n\n");
                    produtos.listarTodas();
                break;
            case 3:
                console.log("\n\n🔎 Procurando seu Produto... 🔎\n\n");
                console.log("Digite o numero do Produto: ")
                numero = readlinesync.questionInt("")

                produtos.procurarPorNumero(numero);
                break;
            case 4:
                console.log("\n\n✏️ Atualize os dados do Produto ✏️\n\n");

                console.log("Digite o numero do Produto: ");
                numero = readlinesync.questionInt("");

                let produto = produtos.buscarNoArray(numero);

                if (produto){

                console.log("Digite o ID do Produto: ");
                id = readlinesync.questionInt("");

                console.log("Digite o Nome do Produto: ");
                nomeProduto = readlinesync.question("");

                console.log("Digite o Preço do Produto: ");
                preco = readlinesync.questionFloat("");

                tipo = produto.tipo;

                switch (tipo){
                    case 1:
                
                        console.log("Digite a Fragrancia: ");   
                        fragrancia = readlinesync.question("");
                        produtos.atualizar(
                            new Cosmetico(numero, id, tipo, nomeProduto, preco, fragrancia)
                        )
                        break;
                    case 2:

                        console.log("Digite o Nome do Generico:  ");
                        generico = readlinesync.question("");
                        produtos.atualizar(
                            new Generico(numero, id, tipo, nomeProduto, preco, generico)
                        )
                        break;
                }


            }else{
                console.log(`\n A Conta numero ${produto} não existe`)
            }
                break;
            case 5:
                console.log("\n\n🗑️ Deletando um Produto 🗑️\n\n");

                console.log("Digite o numero do Produto: ")
                numero = readlinesync.questionInt("")

                produtos.deletar(numero);
            default:
                console.log("\n⚠️ Opção inválida, tente novamente! ⚠️\n");
                break;
        }
    }

}


export function sobre(): void {
    console.log(colors.bg.black, colors.fg.whitestrong,
                "\n\n######### Projeto desenvolvido por: Samuel Monteiro #########");
    console.log("######### Generation Brasil - samuel.monteiro@genstudents.org #########");
    console.log("######### github.com/Monte1r0 #########");
}

main();
