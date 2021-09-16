// 1-QUESTAO

function ehPar(n: number) : boolean {
    return (n % 2) == 0;
}

// ARROW FUNCTION
let ehPar = (n) => n % 2 ==0;

//console.log(ehPar(8))
// true

// 2-QUESTAO

function ola () {
    console.log('Olá');
}

// ARROW FUNCTION
const ola = () => ('Olá');

console.log(ola());
// Olá

// 3-QUESTAO 

const array= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const elementosPares = array.filter(x => x % 2 ==0 );

console.log(elementosPares);
// [2, 4, 6, 8, 10, 12, 14]
