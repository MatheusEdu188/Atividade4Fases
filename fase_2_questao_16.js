const numss = [1, 2, 3, 4, 5];
const resultado = numss.filter(n => n % 2 === 1).map(n => n * 3).reduce((acc, v) => acc + v, 10);
console.log(resultado);


/*nesse aqui, ele nos apresenta um array de 5 numeros, após isso ele filtra para conseguir apenas os numeros que o resto da divisão deles por 2 é igual a 1(1,3,5). Após isso, ele cria um novo array com os mesmos numeros e os multiplica por 3 cada(3,9,15). Logo depois, esse array é somado completamento, porém, começando do numero 10, resuntando em(37)*/



/*15, 45, 60[5, 15, 20] */