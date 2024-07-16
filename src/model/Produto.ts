export abstract class Produto{
    //Definir os Atributos da classe (Caracteristicas)

    private _numero: number;
    private _id: number;
    private _tipo: number;
    private _nomeProduto: string;
    private _preco: number;

    // Definimos o Método construtor, responsável por criar os objetos da classe. 
	constructor(numero: number, id: number, tipo: number, nomeProduto: string, preco: number) {
		this._numero = numero;
		this._id = id;
		this._tipo = tipo;
		this._nomeProduto = nomeProduto;
		this._preco = preco;
	}

    // Definindo cada Atributo
	public get numero(): number {
		return this._numero;
	}
 
	public get id(): number {
		return this._id;
	}

	public get tipo(): number {
		return this._tipo;
	}
 
	public get nomeProduto(): string {
		return this._nomeProduto;
	}

	public get preco(): number {
		return this._preco;
	}

	public set numero(value: number) {
		this._numero = value;
	}

	public set id(value: number) {
		this._id = value;
	}
  
	public set tipo(value: number) {
		this._tipo = value;
	}

	public set nomeProduto(value: string) {
		this._nomeProduto = value;
	}
    
	public set preco(value: number) {
		this._preco = value;
	}

    


    //Método para vizualizar todos os dados do Objeto
    public visualizar(): void{
        
        


        let tipo: string = "";

        switch(this._tipo){
            case 1:
                tipo = "Cosmetico";
            break;
            case 2:
                tipo = "Generico";
            break;
        }
        console.log("\n************************************");
        console.log("\n Dados dos Produtos");
        console.log("\n************************************");
        console.log(`\nNumero do Produto: ${this._numero}`);
        console.log(`\nID do Produto: ${this._id}`);
        console.log(`\nTipo de Produto: ${tipo}`);
        console.log(`\nNome do Produto: ${this._nomeProduto}`);
        console.log(`\nPreço: ${this._preco.toFixed(2)}`);
    }
}