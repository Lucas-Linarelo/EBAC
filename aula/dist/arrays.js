"use strict";

var redesSociais = ['Facebook', 'Instagram', 'X'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}

// Foreach - Só intera e não retorna
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#0".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
console.log(numeros);

// map - Intera, modifica e ainda retorna modificado
var numeros = [1, 2, 3, 4, 5];
var dobroDosNumeros = numeros.map(function (numeroAtual) {
  // numeroAtual = numeroAtual*2;
  return numeroAtual * 2;
});
console.log(dobroDosNumeros);
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
console.log(alunos);

// map - Fazemos a manipulção e podemos ter um novo array como retorno
var alunos2 = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    curso: 'Frontend'
  };
  return itemAtual;
});
console.log(alunos2);

// find - Encontra itens no array
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula';
});
console.log(paula);

// FindIndex Retornamos o índice do item
var IndexPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula';
});
console.log(IndexPaula);

// Push - Retorna se todas os itens do arrays obedecem uma condição determinada
alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});
var todosAlunosFE = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosAlunosFE);

// Some - Mais tolerante do que o Every, necessitando que apenas um item obedeça a condição.
var existeAlgummAlunoBE = alunos2.some(function (item) {
  return item.curso === 'Backend' || item.curso === 'Frontend';
});
console.log(existeAlgummAlunoBE);

// Filter - Filtra itens
var alunosBE = alunos2.filter(function (item) {
  return item.curso === 'Backend';
});
console.log(alunosBE);

// Passando a função diretamente como callback
function filtraAlunoBE(aluno) {
  return aluno.curso === 'Backend';
}
var alunosBE2 = alunos2.filter(filtraAlunoBE);
console.log(alunosBE2);

// Reduce - Agregação de valores (Soma)
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumaldor, itemAtual) {
  acumaldor += itemAtual;
  return acumaldor;
}, 0);
console.log(soma);

// Reduce - Agregação de valores com strings (Concatenação)

var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);

// Somando com For
var somaFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaFor += nums[_i];
}
console.log(somaFor);