"use strict";
//Classe genérica de conta
class Conta {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }
}
// Class conta salário
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
class contaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTranferencia = 0;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.taxaTranferencia);
        return true;
    }
    ;
}
//Uma classe só herda de outra classe, mas podemos implementar diversas interfaces.
class contaJuridica extends Conta {
    constructor(numeroDaConta, cnpj, telefone) {
        super(numeroDaConta);
        this.taxaTranferencia = 0;
        this.cnpj = cnpj;
        this.telefone = telefone;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.taxaTranferencia);
        return true;
    }
}
