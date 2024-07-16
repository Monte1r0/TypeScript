export class ExcecaoSimples extends Error{

    constructor(message: string){
        super()
        this.name = "Execução Simples";
        this.message = message;
    }
}