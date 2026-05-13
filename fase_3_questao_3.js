const pessoa = { nome: "Lucas", endereco: { cidade: "RJ", cep: "12345" } };
const { endereco: { cidade } } = pessoa;

/*basicamente ele procura dentro de endereço, pelo indice, a cidade*/
console.log(cidade);
