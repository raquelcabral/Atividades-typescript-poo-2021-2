// 1- QUESTAO 

// a) 

let a = 10;
a = "2"; 

// Não compila, pois o tipo ‘string’ não pode ser atribuído ao tipo ‘number’.

// b)

let b: any = 10;
b = 2;

console.log(b);
// 2

// c) 

let c: number = 10;
c = 2;

console.log(c);
// 2


// 2- QUESTAO

function soma(x: number, y: any): number {
    return x + y;
}

// a)

console.log(soma(1,2));
// 3

// b)

console.log(soma(1,"2"));
// 12

// c)
console.log(soma(1));
// NanN - Erro no codigo: 2 argumentos eram esperados mas só 1 foi passado. Nao foi fornecido um argumento para y

// 3- QUESTAO
// a) 

enum Estados {PI, CE, MA};
 
for (let i= 0; i < 3; i++){
    console.log(Estados[i])
};

// PI
// CE
// MA

// b)

enum Estados {PI, CE, MA};
let e  = 0
while (e < 3) {
    
    console.log(e); 
    e = e +1;
};

// 0
// 1
// 2


// 5-QUESTAO

function exibir (...letra: string[]) {
    return letra;
}

console.log(exibir("a", "b"));
// ['a','b']

console.log(exibir("a", "b", "c"));
// ['a', 'b', 'c']

console.log(exibir('a', 'b','c','d'));
// ['a', 'b', 'c', 'd']



