// Agora a prática

// Nos exercícios de hoje, você vai fazer quinze pequenos programas. Todos trabalham a lógica condicional ( if/else e switch/case ), operadores aritméticos ( + , - , * , / , % ) e operadores lógicos ( > , < , && , || ). Para que consiga executar seus códigos recomendamos que utilize a extensão Code Runner , você pode ver mais sobre ela no conteúdo que fizemos sobre o uso do VS Code .

// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
// *Dica: Neste link você encontra mais detalhes sobre operadores matemáticos 😉

let a = 10;

let b = 5;

let sum = a + b
console.log(sum)

let sub = a - b
console.log(sub)

let mult = a * b
console.log(mult)

let div = a / b
console.log(div)

let mod = a % b
console.log(mod)

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

let a = 10;

let b = 5;

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

let a = 10;

let b = 5;

let c = 20;

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else if (c > a && c > b) {
    console.log(c);
}

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const a = 10;

if (a > 0) {
    console.log("Positive");
} else if (a < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

let a = 60;

let b = 60;

let c = 60;

if (a + b + c === 180) {
    console.log(true);
} else if (a < 0 || b < 0 || c < 0) {
    console.log("Os ângulos não são válidos");
} else {
    console.log(false);
}

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let a = "torre"

switch (a) {
    case "torre":
        console.log("Anda em para em linha, para frente, traz, direita e esquerda")
        break;    
    case "cavalo":
        console.log("Anda em L, e pode pular peças no seu caminho")
        break;
    case "bispo":
        console.log("Anda em para na diagonal")
        break;
    case "rainha":
        console.log("Combina os movimentos da torre e do bispo, sendo a peça com maior moiblidade")
        break;
    case "rei":
        console.log("Pode andar em qualquer direção porém anda somente uma casa")
        break;
    case "peao":
        console.log("Anda somente para frente e uma casa por vez, somente no primeiro movimento de cada peão ele pode avançar duas casas, desde que seu movimento não seja impedido por outra peça")
    default:
        console.log("Essa não é uma peça válida no xadrez")
        break;
}

// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let a = "Torre";

a = a.toLowerCase();

switch (a) {
    case "torre":
        console.log("Anda em para em linha, para frente, traz, direita e esquerda")
        break;    
    case "cavalo":
        console.log("Anda em L, e pode pular peças no seu caminho");
        break;
    case "bispo":
        console.log("Anda em para na diagonal");
        break;
    case "rainha":
        console.log("Combina os movimentos da torre e do bispo, sendo a peça com maior moiblidade");
        break;
    case "rei":
        console.log("Pode andar em qualquer direção porém anda somente uma casa");
        break;
    case "peao":
        console.log("Anda somente para frente e uma casa por vez, somente no primeiro movimento de cada peão ele pode avançar duas casas, desde que seu movimento não seja impedido por outra peça");
    default:
        console.log("Essa não é uma peça válida no xadrez");
        break;
}

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

nota = 50;

if (nota >= 90 && nota <= 100) {
    console.log("A");
} else if (nota >= 80 && nota <= 89) {
    console.log("B");
} else if (nota >= 70 && nota <= 79) {
    console.log("C");
} else if (nota >= 60 && nota <= 69) {
    console.log("D");
} else if (nota >= 50 && nota <= 59) {
    console.log("E");
} else if (nota < 50 && nota >= 0) {
    console.log("F")
} else {
    console.log("A nota não é válida")
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const a = 5;

const b = 10;

const c = 15;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const a = 5;

const b = 105;

const c = 15;

if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    console.log(true);
} else {
    console.log(false);
}

// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

let custo = 20;

let venda = 50;

if (custo < 0 || venda < 0) {
    console.log("Os valores digitados são inválidos")
}  else {
    let lucroTotal = 1000 * (50 - (20 * 1.2))
    console.log(lucroTotal)
}

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

let salario = 3000;

let INSS = 0;

let IR = 0;

if (salario <= 1556.94) {
    INSS = salario * 0.08;
} else if (salario <= 2594.92) {
    INSS = salario * 0.09;
} else if (salario <= 5189.82) {
    INSS = salario * 0.11;
} else if (salario > 5189.82) {
    INSS = salario - 570.88;
}

let liqINSS = salario - INSS;

if (liqINSS <= 1903.98) {
    IR = 0;
} else if (liqINSS <= 2826.65) {
    IR = (liqINSS * 0.075) - 142.80;
} else if (liqINSS <= 3751.05) {
    IR = (liqINSS * 0.15) - 354.80;
} else if (liqINSS > 4664.68) {
    IR = (liqINSS * 0.225) - 636.13;
} else if (liqINSS > 4664.68) {
    IR = (liqINSS * 0.275) - 869.36;
}

let liqSalario = liqINSS - IR

console.log(liqSalario)
