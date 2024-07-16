import { Transporte } from "./Transporte";
import { Terrestre } from "./Terrestre";
import { Automovel } from "./Automovel";

const t1: Transporte = new Transporte(5);
t1.visualizar();

console.log("\n")

const tr1: Terrestre = new Terrestre(5, 4, 250);
tr1.visualizar();

console.log("\n")

const aut1: Automovel = new Automovel(5, 4, 300, "Azul", 4, "GEN-1802", 6);
aut1.visualizar();