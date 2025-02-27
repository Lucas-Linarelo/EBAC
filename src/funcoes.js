"use strict";
// Função
function calculaArea(base, altura) {
    return base * altura;
}
// Função com arrowfunction
const calculaArea2 = (base, altura) => base * altura;
// Operador rest - Onde não conhecemos todos os argumentos que a função pode receber
// O operador Rest nos devolve um array de valores.
function somar(...numeros) {
    // numeros.reduce()
    console.log(numeros);
}
// Quando não termo o retorno de uma função ele é chamado de 'void'
// UnionType - Retornando dois valores de tipos diferentes em uma mesma função
function teste() {
    if (10 > 5) {
        return 'Dez é maior que cinco';
    }
    else {
        return 5;
    }
}
// Recebendo o valor de uma variável
const resultadoTeste = teste();
