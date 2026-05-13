const valores = [10, 20, 30, 40];
function soma(a, b, ...resto) {
    /* isso aqui acontece o seguinte: ele armazena 10 no a, e 20 no B. e o resto dos itens são armazenados em resto*/
 return a + b + resto.length;
 /* ele faz a soma de tudo*/
}
console.log(soma(...valores));
/* baseado naquele array, ele soma tudo*/

/* resultado é 32*/