// ========================================
// ATIVIDADES - COMEÇANDO COM JAVASCRIPT
// ========================================


// ========================================
// 1. IF / ELSE - NÚMERO POSITIVO, NEGATIVO OU ZERO
// ========================================

let numero1 = 10;

if (numero1 > 0) {
    console.log("O número é positivo.");
} else if (numero1 < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é igual a zero.");
}


// ========================================
// 2. IF / ELSE - VERIFICAR MAIORIDADE
// ========================================

let idade = 20;

if (idade >= 18) {
    console.log("A pessoa é maior de idade.");
} else {
    console.log("A pessoa é menor de idade.");
}


// ========================================
// 3. IF / ELSE - NÚMERO PAR OU ÍMPAR
// ========================================

let numero2 = 7;

if (numero2 % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}


// ========================================
// 4. IF / ELSE IF - COMPARAR DOIS NÚMEROS
// ========================================

let numero3 = 15;
let numero4 = 20;

if (numero3 > numero4) {
    console.log("O primeiro número é maior.");
} else if (numero4 > numero3) {
    console.log("O segundo número é maior.");
} else {
    console.log("Os dois números são iguais.");
}


// ========================================
// 5. IF ENCADEADO - CLASSIFICAÇÃO DE NOTA
// ========================================

let nota = 8;

if (nota >= 0 && nota <= 4) {
    console.log("Nota baixa.");
} else if (nota >= 5 && nota <= 7) {
    console.log("Nota média.");
} else if (nota >= 8 && nota <= 10) {
    console.log("Nota alta.");
} else {
    console.log("Nota inválida.");
}


// ========================================
// 6. IF ENCADEADO - CALCULADORA DE IMC
// ========================================

let peso = 70;
let altura = 1.75;

let imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
    console.log("Classificação: Abaixo do peso.");
} else if (imc < 25) {
    console.log("Classificação: Peso normal.");
} else {
    console.log("Classificação: Acima do peso.");
}


// ========================================
// 7. SWITCH - CALCULADORA SIMPLES
// ========================================

let numero5 = 10;
let numero6 = 5;
let operacao = "+";
let resultado;

switch (operacao) {

    case "+":
        resultado = numero5 + numero6;
        break;

    case "-":
        resultado = numero5 - numero6;
        break;

    case "*":
        resultado = numero5 * numero6;
        break;

    case "/":
        if (numero6 !== 0) {
            resultado = numero5 / numero6;
        } else {
            resultado = "Não é possível dividir por zero.";
        }
        break;

    default:
        resultado = "Operação inválida.";
}

console.log("Resultado da operação: " + resultado);


// ========================================
// 8. SWITCH - DIA DA SEMANA
// ========================================

let dia = 3;

switch (dia) {

    case 1:
        console.log("Domingo.");
        break;

    case 2:
        console.log("Segunda-feira.");
        break;

    case 3:
        console.log("Terça-feira.");
        break;

    case 4:
        console.log("Quarta-feira.");
        break;

    case 5:
        console.log("Quinta-feira.");
        break;

    case 6:
        console.log("Sexta-feira.");
        break;

    case 7:
        console.log("Sábado.");
        break;

    default:
        console.log("Número inválido.");
}


// ========================================
// 9. IF - VERIFICAR MÚLTIPLOS
// ========================================

let numero7 = 20;
let numero8 = 5;

if (numero7 % numero8 === 0) {
    console.log(numero7 + " é múltiplo de " + numero8 + ".");
} else {
    console.log(numero7 + " não é múltiplo de " + numero8 + ".");
}


// ========================================
// 10. IF / ELSE - SISTEMA DE LOGIN
// ========================================

let usuario = "Cristine";
let senha = "1234";

let usuarioCorreto = "Cristine";
let senhaCorreta = "1234";

if (usuario === usuarioCorreto && senha === senhaCorreta) {
    console.log("Login bem-sucedido!");
} else {
    console.log("Usuário ou senha incorretos.");
}