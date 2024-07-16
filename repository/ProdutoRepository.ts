import { Produto } from "../src/model/Produto"

export interface ProdutoRepository{

        // Métpdps do CRUD
        procurarPorNumero(numero: number): void;
        listarTodas(): void;
        cadastrar(produto: Produto): void;
        atualizar(produto: Produto): void;
        deletar(numero: number): void;
}