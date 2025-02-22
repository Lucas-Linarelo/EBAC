// #01
const minhaFuncao = ()=>{
    console.log("Olá");
}

// #02
minhaFuncao();

const minhaFuncao2 = ()=>{
    return "Olá";
}

console.log (minhaFuncao2());

// #03
const minhaFuncao3=()=>"Olá";
console.log(minhaFuncao3());

// Retorno de objetos
const retornaCarro = () =>({
        modelo: 'Ka',
        fabricante: 'Ford'
})
console.log(retornaCarro());

const carro = {
    velocidadeAtual:40,
    acelerar: function(){
        this.velocidadeAtual+=10;
    },
    frear: () => {
        this.velocidadeAtual -=10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual);


