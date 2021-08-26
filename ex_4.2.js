// Aprofunde seus conhecimentos

// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (const number of numbers) {
    console.log(number); 
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    let element = numbers[index];
    sum += element;
}

console.log(sum);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    let element = numbers[index];
    sum += element;
}

arithmetic = sum / numbers.length;

console.log(arithmetic);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    let element = numbers[index];
    sum += element;
}

arithmetic = sum / numbers.length;

if (arithmetic > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20") ;
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let max = 0;

for (let index = 0; index < numbers.length; index += 1) {
    let element = numbers[index];
    if (max < element) {
        max = element;
    }
}

console.log(max);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let odd = 0;

for (let index = 0; index < numbers.length; index += 1) {
    let element = numbers[index];
    rest = element % 2;
    if (rest != 0) {
        odd += 1;
    }
}

if (odd != 0) {
    console.log(odd);
} else {
    console.log("Nenhum valor ímpar encontrado");
}

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let min = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    let element = numbers[index];
    if (min > element) {
        min = element;
    }
}

console.log(min);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let numbers = []

add = 0

for (let index = 0; index < 25; index++) {
    numbers[index] = add;
    console.log(numbers[index]);
    add += 1;
}

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let numbers = []

add = 0

for (let index = 0; index < 25; index++) {
    numbers[index] = add;
    console.log(numbers[index] / 2);
    add += 1;
}