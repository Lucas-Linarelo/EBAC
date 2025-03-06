"use strict";
//  Função de multiplicação
function multiplica(num1, num2) {
    return num1 * num2;
}
console.log(multiplica(5, 3));
// Função multiplicação com arrowfunction
const multiplica2 = (num1, num2) => num1 * num2;
console.log(multiplica2(10, 29));
// Função concatenação Olá+nome
function dizOi(nome) {
    return `Olá ${nome}`;
}
console.log(dizOi("Lucas"));
// Função concatenação Olá+nome com arrowfunction
const dizOi2 = (nome) => `Olá ${nome}`;
console.log(dizOi2("Alex"));
