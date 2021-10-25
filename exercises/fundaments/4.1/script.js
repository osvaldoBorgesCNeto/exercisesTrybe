// 1- Adicao
console.log('Exercicio 01');
let a = 4;
let b = 3;

console.log(a + b);

// Subtracao
console.log(a - b);

// Multiplicacao
console.log(a * b);

// Divisao
console.log(a / b);

// Modulo
console.log(a % b);

// 2
console.log('Exercicio 02');
let c = 22;
let d = 11;

console.log(Math.max(c, d));

// 3
console.log('Exercicio 03');
let e = 33;

console.log(Math.max(c, d, e));

// 4
console.log('Exercicio 04');
let valor = 0;

if (valor > 0) {
    console.log('positivo');
} else if (valor < 0) {
    console.log('negativo')
} else {
    console.log('zero')
}

// 5
console.log('Exercicio 05');
let an1 = 60;
let an2 = 60;
let an3 = 60;

let anTl = an1 + an2 + an3;

switch  (anTl) {
    case 180:
        console.log('true')
        break;

    default:
        console.log('false')
}

// 6
console.log('Exercicio 06');
let pawn = 'forward';
let knight = 'in an L';
let bishop = 'diagonally';
let rook = 'horizontally';
let queen = 'diagonally, horizontally, or vertically any number of squares';
let king = 'one square in any direction, so long as that square is not attacked by an enemy piece.';

let peca = 'King'.toLowerCase();

switch (peca) {
    case 'pawn':
        console.log(pawn)
        break;
    case 'knight':
        console.log(knight)
        break;
    case 'bishop':
        console.log(bishop)
        break;
    case 'rook':
        console.log(rook)
        break;
    case 'queen':
        console.log(queen)
        break;
    case 'king':
        console.log(king)
        break;
    default:
        console.log('Essa peca nao existe')
}

// 7
console.log('Exercicio 07');
let porc = 49;

if (porc < 0 || porc > 100) {
    console.log('Porcentagem maior que 100 ou menor que 0')
}else if (porc >= 90) {
    console.log('A')
}else if (porc >= 80) {
    console.log('B')
}else if (porc >= 70) {
    console.log('C')
}else if (porc >= 60) {
    console.log('D')
}else if (porc >= 50) {
    console.log('E')
}else {
    console.log('F')
}

// 8
console.log('Exercicio 08');
let par1 = 2;
let par2 = 3;
let par3 = 5;
let par = false;

if (par1 % 2 == 0 || par2 % 2 == 0 || par3 % 2 == 0){
    par = true;
}

console.log(par);

// 9
console.log('Exercicio 09');
let impar1 = 2;
let impar2 = 2;
let impar3 = 4;
let impar = false;

if (impar1 % 2 != 0 || impar2 % 2 != 0 || impar3 % 2 != 0){
    impar = true;
}

console.log(impar);

// 10
console.log('Exercicio 10')
let imposto = 1.2;
let custo = 200;
let custoTotal = custo * imposto;
let venda = 300;
let lucro = venda - custoTotal;
let lucroF = lucro * 1000;

if (custo > 0){
    console.log(lucro);
    console.log(lucroF);
}else {
    console.log('Custo invalido')
}

// 11
console.log('Exercicio 11');
let salarioBruto = 3000;
let salarioINSS = null;
let salarioIR = null;
let salarioLiquido = null;

if (salarioBruto >= 0) {
    if (salarioBruto < 1556.94) {
        salarioINSS = salarioBruto * 0.92;
    }else if (salarioBruto > 1556.95 && salarioBruto < 2594.92) {
        salarioINSS = salarioBruto * 0.91;
    }else if (salarioBruto > 2594.93 && salarioBruto < 5189.82) {
        salarioINSS = salarioBruto * 0.89;
    }else if (salarioBruto > 5189.82) {
        salarioINSS = salarioBruto - 570.88;
    }
}else {
    console.log('Salario invalido')
    return;
}

if (salarioINSS < 1903.98) {
    salarioLiquido = salarioINSS;
}else if (salarioINSS > 1903.99 && salarioINSS < 2826.65) {
    salarioIR = (salarioINSS * 0.075) - 142.8;
    salarioLiquido = salarioINSS - salarioIR;
}else if (salarioINSS > 2826.66 && salarioINSS < 3751.05) {
    salarioIR = (salarioINSS * 0.15) - 354.8;
    salarioLiquido = salarioINSS - salarioIR;
}else if (salarioINSS > 3751.06 && salarioINSS < 4664.68) {
    salarioIR = (salarioINSS * 0.225) - 636.13;
    salarioLiquido = salarioINSS - salarioIR;
}else if (salarioINSS > 4664.68) {
    salarioIR = (salarioINSS * 0.275) - 869.36;
    salarioLiquido = salarioINSS - salarioIR;
}

console.log(salarioLiquido);