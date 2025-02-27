//Classe genérica de conta
class Conta{
    numeroDaConta:number;
    saldo: number=0;

    constructor(numeroDaConta:number){
        this.numeroDaConta=numeroDaConta;
    }
}

// Class conta salário
class ContaSalario extends Conta{
    depositar(valor:number){
        this.saldo+=valor;
    }
}

//Interface - É um acordo, onde temos que atender algumas regras para que seja satisfeito.
interface ITransacional{
    transferir:(valor:number, destinatario:Conta) => boolean;
    taxaTranferencia:number;
}
interface Iinterface2{
    cnpj:number;
}
interface Iinterface3 extends Iinterface2{
    telefone:number;
}
class contaCorrente extends Conta implements ITransacional{
    transferir(valor: number, destinatario: Conta){
        destinatario.saldo+=(valor-this.taxaTranferencia);
        return true;
    };
    taxaTranferencia: number=0;
}

//Uma classe só herda de outra classe, mas podemos implementar diversas interfaces.
class contaJuridica extends Conta implements ITransacional, Iinterface3 {
    telefone: number;
    cnpj: number;
    taxaTranferencia: number = 0;

    constructor(numeroDaConta: number, cnpj: number, telefone: number) {
        super(numeroDaConta);
        this.cnpj = cnpj;
        this.telefone = telefone;
    }

    transferir(valor: number, destinatario: Conta): boolean {
        destinatario.saldo += (valor - this.taxaTranferencia);
        return true;
    }
}
