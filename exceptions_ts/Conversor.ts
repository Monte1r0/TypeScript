try{
    const resultado = converte('abc');

    console.log(resultado);
}catch (error: any) {
    if (error instanceof TypeError)
        console.error("\nVoce digitou um numero. Digite um texto e tente novamente")
    else
    console.log("\nError inesperado! Contate o Administrador do Sistema")
}finally{
    console.log("\nFim do Código")
}
export function converte(conteudo: any): string {
    return conteudo.toUpperCase();
}