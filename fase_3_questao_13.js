const dados = { a: 1, b: 2, c: 3 };
function processar({ a, ...resto }) {
 resto.c = 99;
 return [a, resto];
}
const r = processar(dados);
console.log(dados.c, r[1].c);
/*será exibido 3 99, isso pq dados.c = 3, e o r[1].c representa o retorno, ou seja, indice 1 do retorno: 99*/