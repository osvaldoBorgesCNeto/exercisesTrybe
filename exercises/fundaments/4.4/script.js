// Objetos
console.log('Exercicio Objetos');

let player = {
    name: 'Osvaldo',
    lastName: 'Borges',
    age: 25,
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
    medals: {
        golden: 2,
        silver: 3,
    }
};

console.log('O jogador ' + player.name + ' tem ' + player.age + ' anos de idade');

console.log('O jogador ' + player.name + ' ' + player.lastName + ' foi eleito a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes');

console.log('O jogador ' + player.name + ' ' + player.lastName + ' possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');


// for/in
console.log('Exercicio for/in');

let cars = ['Saab','Volvo', 'BMW']

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
}

for (let key in cars) {
    console.log(cars[key]);
}

for (let key in car) {
    console.log(key, car[key]);
}

// Funcoes
console.log('Exercicio funcoes');

// 1- Adicao
console.log('Exercicio 01');

function soma(a, b) {
    return a + b;
}

console.log(soma(4, 3));

// Subtracao
function subtracao(subA, subB) {
    return subA - subB;
}

console.log(subtracao(4, 3))

// 2
console.log('Exercicio 02');

function maxNumber(maxA, maxB) {
    return Math.max(maxA, maxB);
}

console.log(maxNumber(22, 11));

// 4
console.log('Exercicio 04');

function numberValor(valor) {
    if (valor > 0) {
        return 'positivo';
    } else if (valor < 0) {
        return 'negativo';
    } else {
        return'zero';
    }
}

console.log(numberValor(50));

// 5
console.log('Exercicio 05');

function anguloTriangulo(ang1, ang2, ang3) {
    let angT = ang1 + ang2 + ang3;
    switch  (angT) {
        case 180:
            return true;
            break;
    
        default:
            return false;
    }
}
console.log(anguloTriangulo(60, 60, 60));

// 10
console.log('Exercicio 10')

function vendas(imposto, custo, venda, vendaTotal) {
    let custoTotal = custo * imposto;
    let lucro = venda - custoTotal;
    let lucroF = lucro * vendaTotal;

    if (custo > 0){
        return ('O lucro final e ' + lucroF + ' e o lucro por venda e ' + lucro + '.');
    }else {
        return 'Custo invalido';
    }
}
console.log(vendas(1.2, 200, 300, 1000));

// 11
console.log('Exercicio 11')

function salario(salarioBruto) {
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
        return 'Salario invalido';
    }

    if (salarioINSS < 1903.98) {
        salarioLiquido = salarioINSS;
        return salarioLiquido;
    }else if (salarioINSS > 1903.99 && salarioINSS < 2826.65) {
        salarioIR = (salarioINSS * 0.075) - 142.8;
        salarioLiquido = salarioINSS - salarioIR;
        return salarioLiquido;
    }else if (salarioINSS > 2826.66 && salarioINSS < 3751.05) {
        salarioIR = (salarioINSS * 0.15) - 354.8;
        salarioLiquido = salarioINSS - salarioIR;
        return salarioLiquido;
    }else if (salarioINSS > 3751.06 && salarioINSS < 4664.68) {
        salarioIR = (salarioINSS * 0.225) - 636.13;
        salarioLiquido = salarioINSS - salarioIR;
        return salarioLiquido;
    }else if (salarioINSS > 4664.68) {
        salarioIR = (salarioINSS * 0.275) - 869.36;
        salarioLiquido = salarioINSS - salarioIR;
        return salarioLiquido;
    }
}

console.log(salario(3000));

// Apos a aula ao VIVO
console.log('Objetos e For/in');
console.log('Exercicio 01');

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}

console.log('Bem-Vinda, ' + info.personagem);

console.log('Exercicio 02');

info.recorrente = 'Sim';

console.log(info);

console.log('Exercicio 03');

for (let key in info) {
    console.log(key);
}

console.log('Exercicio 04');

for (let key in info) {
    console.log(info[key]);
}

console.log('Exercicio 05');

let infoTioPatinhas = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O ultimo MacPatinhas',
    recorrente: 'Sim',
}

for (let key in info, infoTioPatinhas) {
    if (info[key] === infoTioPatinhas[key]){
        console.log('Ambos recorrentes');
    }else {
        console.log(info[key] + ' e ' + infoTioPatinhas[key]);
    }
    
}

console.log('Funcoes')
console.log('Exercicio 01')

function verificaPalindromo(string) {
    let palavra = '';

    for (let contador = string.length - 1; contador >= 0; contador -=1) {
        palavra += string[contador];
    }
    if (palavra === string) {
        return true;
    }else {
        return false;
    }
}
console.log(verificaPalindromo('arara'));

console.log('Exercicio 02');

let valoresMaior = [2, 3, 6, 7, 10, 1];

function maiorIndex(array) {
    let indiceMaior = 0;
    for (let index = 0; index < array.length; index += 1) {
        if (indiceMaior < array[index]) {
            indiceMaior = index;
        }else if (indiceMaior === array[index]) {
            indiceMaior = index;
        }
    }
    return indiceMaior;
}
console.log(maiorIndex(valoresMaior));

console.log('Exercicio 03')

let valoresMenor = [2, 4, 6, 7, 10, 0, -3];

function menorIndex(array) {
    let indiceMaior = 0;
    for (let index = 0; index < array.length; index += 1) {
        if (indiceMaior > array[index]) {
            indiceMaior = index;
        }else if (indiceMaior === array[index]) {
            indiceMaior = index;
        }
    }
    return indiceMaior;
}
console.log(menorIndex(valoresMenor));

console.log('Exercicio 04');

let arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorLetra(array) {
    let maiorNome = 0;
    let nome = 0

    for (let contador = 0; contador <  array.length; contador += 1) {
        for (let contadorLetras = 0; contadorLetras < array[contador].length; contadorLetras += 1) {
            if (array[contador].length > nome) {
                maiorNome = contador;
                nome = array[contador].length;
            }
        }
    }
    return array[maiorNome];
}
console.log(maiorLetra(arrayNomes));

console.log('Exercicio 05');

let arrayRepete = [2, 3, 2, 5, 8, 2, 3];

function maiorRepete(array) {

let soma = 0;
let somaMaior = 0;
let repete = 0;

    for (let index = 0; index < array.length; index += 1) {
        for (let contador = 0; contador < array.length; contador += 1) {
          if (array[index] === array[contador])
            soma += 1;              
        }
        if (soma > somaMaior) {
            somaMaior = soma;
            repete = index;
        }
        soma = 0;
    }
    return array[repete];
}
console.log(maiorRepete(arrayRepete));

console.log('Exercicio 06');

function somatorio(numero) {

let soma = 0;

     for (let index = 1; index <= numero; index += 1) {
        soma += index;
     }
     return soma;
}
console.log(somatorio(5));

console.log('Exercicio 07');

function verificarEnding(word, ending) {

let wordEnding = 0;
let criandoWord = '';
let criandoEnding = '';
let menorPalavra = 0;
let maiorPalavra = 0;


    for (let contador = 0; contador < ending.length; contador += 1) {
        wordEnding += 1;
        menorPalavra += 1;
    }

    for (let contador = 0; contador < word.length; contador += 1) {
        maiorPalavra += 1;
    }

    for (let index2 = (ending.length - 1); index2 >= 0; index2 -= 1) {
        criandoEnding += ending[index2];
    }

    if (maiorPalavra > menorPalavra) {
        for (let index = (word.length - 1); index > ((word.length - 1) - wordEnding); index -= 1) {
            criandoWord += word[index];
            }
            if (criandoWord === criandoEnding) {
                return true;
            }else {
                return false;
            }
    }else {
        return 'Segunda palavra maior que a Primeira';
    }
}
console.log(verificarEnding('osvaldo', 'aldo'));