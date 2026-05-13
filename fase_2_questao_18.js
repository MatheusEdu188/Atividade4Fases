const lista = [4, 8, 12, 16];
const r = lista.slice(1,3);
console.log(lista, r);

/*ou*/

const lista = [4, 8, 12, 16];
const r = [...lista].splice(1,2);
console.log(lista, r);


