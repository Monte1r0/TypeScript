import { Produto } from "./Produto";


export class Generico extends Produto{
    private _generico: string;



	constructor( numero: number, id: number, tipo: number, nomeProduto: string, preco: number, generico: string) {
        super(numero, id, tipo, nomeProduto, preco)
		this._generico = generico;
	}

	public get generico(): string {
		return this._generico;
	}

	public set generico(value: string) {
		this._generico = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`\nGenerico do Produto. ${this.generico}`)
    }
}