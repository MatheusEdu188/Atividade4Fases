const usuario = { nome: "Ana", idade: 28, cidade: "SP" };
const { nome, ...resto } = usuario;
/*Utilizando desestruturação, pegamos o primeiro valor (nome), após isso coletamos o resto do array e apelidamos como (resto) com spread */
console.log(nome, resto);

/*o resultado será (Ana { idade: 28, cidade: 'SP' })*/
