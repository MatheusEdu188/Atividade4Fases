const numeros = [1, 2, 3, 4, 5];
const [a, , b, ...c] = numeros;
/*pega o primeiro numero: 1 e armazena na variavel "a", pular um indice e armazena o "3" no b. Por fim, ele armazena 4 e 5 no C */
console.log(a, b, c);
/*imprime 1 3 [4, 5] */