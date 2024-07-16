const frutas: Set<string> = new Set<string>();

frutas.add("Kiwi");
frutas.add("Caqui");
frutas.add("Manga");
frutas.add("Kiwi");

console.table(frutas);

console.log(`\n A fruta Caqui existe? ${frutas.has("Caqui")}`);

// Apagar

frutas.delete("Kiwi");
console.table(frutas);