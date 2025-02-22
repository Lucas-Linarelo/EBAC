// Abstração, a classe, função construtura no JS
function Pokemon (nome,tipo){
this.nome=nome;
this.tipo=tipo;
}
// Instância de "Pokemon"
const pikachu = new Pokemon("Pikachu","Elétrico");
console.log('Inicio Pokemon');
console.log(pikachu);
console.log('Fim Pokemon');

//  Introdução das classes com ECMAScript (ao invés das funções)
class Pokemon2 {
    nome = '';
    tipo = '';
}
const pikachu2 = new Pokemon2();
pikachu2.nome='Pikachu';
pikachu2.tipo='Elétrico';
console.log('Inicio Pokemon 2');
console.log(pikachu2);
console.log('Fim Pokemon 2');

// Conceito de construtor
class Pokemon3 {
    nome = '';
    tipo = '';
    constructor(nomePokemon, tipoPokemon){
        this.nome= nomePokemon;
        this.tipo= tipoPokemon;
    }
}
const pikachu3 = new Pokemon3('Pikachu','Elétrico');
const bulba=new Pokemon3('Bulbasauro','Grama');
console.log('Inicio Pokemon 3');
console.log(pikachu3);
console.log(bulba);
console.log('Fim Pokemon 3');

// Criar metodos
class Pokemon4 {
    constructor(nomePokemon, tipoPokemon){
        this.nome= nomePokemon;
        this.tipo= tipoPokemon;
    }
    atacar(nomeAtaque){
        console.log(`${this.nome} atacou com ${nomeAtaque}`)
    }
}
const pikachu4 = new Pokemon4('Pikachu','Elétrico');
console.log('Inicio Pokemon 4');
pikachu4.atacar('Choque do trovão!')
const bulba2=new Pokemon4('Bulbasauro','Grama');
console.log(pikachu4);
console.log(bulba2);
console.log('Fim Pokemon 4');

// Polimorfismo e Herança(As instâncias da classe filha tbm são consideradas intâncias da classe mãe)
class Pokemon5 {
    constructor(nomePokemon, tipoPokemon){
        this.nome= nomePokemon;
        this.tipo= tipoPokemon;
    }
}
class Pikachu extends Pokemon5{
    constructor(){
        super('Pikachu','Elétrico');
    }
    atacar(){
        console.log(`${this.nome} atacou com Coque do trovão!`)
    }
}
const pikachuAsh = new Pikachu();
console.log('Inicio Pokemon 5');
console.log(pikachuAsh);
pikachuAsh.atacar();
console.log(pikachuAsh instanceof Pikachu);
console.log(pikachuAsh instanceof Pokemon5);
console.log('Fim Pokemon 5');

// Encapsulamento
class Pokemon6 {
    #hp=100;  // A '#' indica o recuso como privado, acessível apenas dentro da classe

    constructor(nomePokemon, tipoPokemon){
        this.nome= nomePokemon;
        this.tipo= tipoPokemon;
    }

    atacar(){
        console.log(`${this.nome} atacou com Coque do trovão!`)
    }
    recebeuAtaque(){
        this.#hp -= 10;
        console.log(`${this.nome} recebeu um ataque.`)
    }
    exibeHp(){
        console.log('HP:',this.#hp);
    }
}

class Pikachu2 extends Pokemon6{
    constructor(){
        super ('Pikachu', 'Elétrico')
    }
}
const pikachuAsh2 = new Pikachu2();
console.log('Inicio Pokemon 6');
pikachuAsh2.hp=5000;  // Tentativa de adicionar HP | É criado um novo e não substitui o HP privado
console.log('HP HACK:',pikachuAsh2.hp);
pikachuAsh2.exibeHp();
pikachuAsh2.recebeuAtaque();
pikachuAsh2.exibeHp();
pikachuAsh2.atacar();
console.log('Fim Pokemon 6');