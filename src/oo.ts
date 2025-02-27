/* Criação de nome no JS convencional 
class Pessoa{
    construtor(nome){
        this.nome=nome;
    }
}
*/

// Criação de classe TS
class Pessoa{
//É necessário declarar a propriedade antes.
    nome: string;
    renda?: number;

    
    constructor(nome:string, renda:number){ //Lembrando que a propriedade obrigatória sempre deve vir antes do opcional.
        this.nome=nome;
        this.renda=renda;
    }
// Métodos
    dizOla():string{
        return`${this.nome} disse oi`;
    }
}

//Funcionalidade novas do TS - (Encapsulamento) Modificadores de acesso protected (Público, Privado ou Estático)
class ContaBancaria{
    // private saldo: number = 0; //Acessível apenas onde ele é criado.
    protected saldo:number=0; //Acessível por herança.
    numeroConta: number;

    constructor(numeroConta:number){
        this.numeroConta=numeroConta;
    }
// O static pertence a classe e não a instância
    static  retornaNumeroDoBanco(){
        return 125;
    }

    private getSaldo(){ //Os métodos tbm podem ter níveis de acessos diferentes.
        return this.saldo;
    }
    depositar(valor:number){
        this.saldo+=valor;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria{
    depositar(valor: number): void {
        this.saldo =valor*2;
    }
}

//Instância
const contaDoPedro = new ContaBancariaPessoaFisica(123456)
ContaBancaria.retornaNumeroDoBanco()//Não necessita o new, pois pertence a instância e não a classe
