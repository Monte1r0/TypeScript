import { Produto } from "./Produto";


export class Cosmetico extends Produto{
    private _fragrancia: string;



	constructor( numero: number, id: number, tipo: number, nomeProduto: string, preco: number, fragrancia: string) {
        super(numero, id, tipo, nomeProduto, preco)
		this._fragrancia = fragrancia;
	}

	public get fragrancia(): string {
		return this._fragrancia;
	}

	public set fragrancia(value: string) {
		this._fragrancia = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`\nFragrancia do Produto. ${this.fragrancia}`)
    }
	

}