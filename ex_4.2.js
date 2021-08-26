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

// Bônus
// Para os próximos dois exercícios leia este artigo e tente entender o que está acontencedo no código abaixo:

// for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (array[index] < array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     }
//   }
// }

// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] < numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}

console.log(numbers)

// Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] > numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}

console.log(numbers);

// Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newNumbers = [];

for (let index = 0; index < numbers.length; index++) {
    if (index === numbers.length - 1) {
        let double = numbers[index] * 2;
        newNumbers[index] = double;
    } else {
        let mut = numbers[index] * numbers[index + 1];
        newNumbers[index] = mut;
    }
}

console.log (newNumbers);