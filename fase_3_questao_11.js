const matriz = [ [1, 2], [3, 4], [5, 6] ];
const [, [, y], ...resto] = matriz;
console.log(y, resto);
/*o resultado será 4, [5,6]. Isso acontece pq o primeiro elemento foi pulado, e dentro do segundo, ele pulou 1 indice e foi para o segundo, já no restante, ele armazenou [5,6]*/