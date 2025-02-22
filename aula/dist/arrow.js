"use strict";

var _this = void 0;
// #01
var minhaFuncao = function minhaFuncao() {
  console.log("Olá");
};

// #02
minhaFuncao();
var minhaFuncao2 = function minhaFuncao2() {
  return "Olá";
};
console.log(minhaFuncao2());

// #03
var minhaFuncao3 = function minhaFuncao3() {
  return "Olá";
};
console.log(minhaFuncao3());

// Retorno de objetos
var retornaCarro = function retornaCarro() {
  return {
    modelo: 'Ka',
    fabricante: 'Ford'
  };
};
console.log(retornaCarro());
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    _this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);