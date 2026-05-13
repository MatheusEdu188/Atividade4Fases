const valores = [5, 8, 12, 8, 3];
const a = valores.find(v => v === 8);
/*Ele vai retornar apenas 1 oito, no caso, o primeiro a ele encontrar: indice 1 */
const b = valores.filter(v => v === 8);
/* O filter vai retornar todos os numeros que correspondem a 8: o indice 1 e o indice 3*/
const c = valores.some(v => v === 8);
/*o Some vai retornar true ou false se houver esse 8 no array, e nesse caso será: true */
console.log(a, b, c);
