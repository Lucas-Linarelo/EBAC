"use strict";
/* Criação de nome no JS convencional
class Pessoa{
    construtor(nome){
        this.nome=nome;
    }
}
*/
// Criação de classe TS
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    // Métodos
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
//Funcionalidade novas do TS - (Encapsulamento) Modificadores de acesso protected (Público, Privado ou Estático)
class ContaBancaria {
    constructor(numeroConta) {
        // private saldo: number = 0; //Acessível apenas onde ele é criado.
        this.saldo = 0; //Acessível por herança.
        this.numeroConta = numeroConta;
    }
    // O static pertence a classe e não a instância
    static retornaNumeroDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
//Instância
const contaDoPedro = new ContaBancariaPessoaFisica(123456);
ContaBancaria.retornaNumeroDoBanco(); //Não necessita o new, pois pertence a instância e não a classe
