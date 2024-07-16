import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../../repository/ProdutoRepository";


export class ProdutoController implements ProdutoRepository{

    private listaprodutos: Array<Produto> = new Array<Produto>();

    public numero: number = 0;


    procurarPorNumero(numero: number): void {
        let buscaProdutos = this.buscarNoArray(numero);

        if (buscaProdutos != null )
            buscaProdutos.visualizar();
        else
            console.log("\nO produto não foi encontrada");
    }
    listarTodas(): void {
        for(let produto of this.listaprodutos){
            produto.visualizar();
        }
    }
    cadastrar(produto: Produto): void {
        this.listaprodutos.push(produto);
        console.log("\nO Produto foi cadastrada com sucesso! ")
    }
    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.numero);

        if (buscaProduto != null ){
            this.listaprodutos[(this.listaprodutos.indexOf(buscaProduto))] = produto;
            console.log("\nO Produto foi Atualizado com Sucesso!")
        }else
            console.log("\nO produto não foi encontrado")
    }
    deletar(numero: number): void {
        let buscaProduto = this.buscarNoArray(numero);

        if (buscaProduto != null ){
            this.listaprodutos.splice(this.listaprodutos.indexOf(buscaProduto), 1);
            console.log("\nO produto foi Deletado com Sucesso!")
        }else
            console.log("\nO Produto não foi encontrada")
    }


    // Métodos Auxiliares

    public gerarNumero(): number{
        return ++ this.numero;
    
    }
    
    //Buscar no Array
    public buscarNoArray(numero: number): Produto | null{
        for (let conta of this.listaprodutos){
            if (conta.numero === numero)
                return conta;
        }
    
            return null;
    
    }
}