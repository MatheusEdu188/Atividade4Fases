const pessoas = [ { nome: 'Ana', cidade: 'SP' }, { nome: 'Lucas', cidade: 'RJ' }, { nome: 'Bruna', 
cidade: 'SP' }, { nome: 'Caio', cidade: 'MG' } ]


/*criamos a lista com as cidades*/

const novaLista = pessoas.reduce((acc, atual)=>{
    const cidade = atual.cidade;
    /*aqui salvamos a cidade atual que o indice está*/
    if(!acc[cidade]){
        acc[cidade] = []
        /*verificamos se há essa cidade no array, se houver, ele não criarar um objeto expecifico para essa cidade*/
    }

    acc[cidade].push(atual);
    /*colocamos o resultado do indice na lista com a cidade dele*/

    return acc;
}, {})


console.log(novaLista);
