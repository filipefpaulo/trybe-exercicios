// Agora a prática
// Bora fixar o conteúdo de hoje?! 🎯 💪
// Preparamos estes exercícios para você fixar seus conhecimentos em sobre Lógica de Programação e Algoritmos . Eles já contam com feedback na hora e são rapidinhos! Vamos lá?
// Aprofunde seus conhecimentos
// Leia atentamente os enunciados e faça o que se pede!
// Recomendamos que você utilize o debugger durante a realização dos exercícios, desse modo será mais fácil acompanhar o comportamento do código e entender o que ocorre em cada uma das linhas. Para saber mais sobre como utilizar o debugger , acesse nosso conteúdo sobre isso.
// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// Copiar
// n = 5

// *****
// *****
// *****
// *****
// *****

let n = 5;
let str = [];

for (let index = 0; index < n; index += 1) {
    for (let index2 = 0; index2 < n; index2 += 1) {
        str[index2] = '*';
    }
    console.log(str)
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// Copiar
// n = 5

// *
// **
// ***
// ****
// *****

let n = 5;
let str = [];

for (let index = 0; index < n; index += 1) {
    for (let index2 = 0; index2 < n; index2 += 1) {
        if (str.length === index + 1) {
            break;
        }
        str[index2] = '*'
    }
    console.log(str)
}

// 3- Agora inverta o lado do triângulo. Por exemplo:
// Copiar
// n = 5

//     *
//    **
//   ***
//  ****
// *****
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

let n = 5;
let str = [];

for (let index = 0; index < n; index += 1) {
    for (let index2 = 0; index2 < n; index2 += 1) {
        if (str[index2] <= n - index2) {
            str[index2] = '*'
        } else {
            str[index2] = ' '
        }
    }
    console.log(str)
}

// 4- Depois, faça uma pirâmide com n asteriscos de base:
// Copiar
// n = 5

//   *
//  ***
// *****
