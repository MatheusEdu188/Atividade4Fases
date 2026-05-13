

const arr = [10, 15, 22, 34, 45, 60];

const numeroai = []



for(let i = 0; i < arr.length; i++){
    if(arr[i] % 3 === 0){
       numeroai.push({
        original: arr[i],
        metade: arr[i] / 2
       });n
       
    }
    
}
let somaMetade = 0;

for(const met of numeroai){
    somaMetade = somaMetade + met.metade
}



console.log(numeroai);

console.log(somaMetade);

