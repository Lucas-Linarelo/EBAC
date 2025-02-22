// Função simples de soma
function somar(a,b){
    return a+b;
}
console.log(somar(10,20));

// Função simples de soma com arguments
function somar2(){
    let soma = 0;
    for(let i=0;i<arguments.length;i++){
        soma += arguments[i];
    }
    return soma;
}
console.log(somar2(10,20,30,40))
// Rest - Usado como argumento de função
// Função de soma com rest operator
function somarComRest(...numeros){
    const soma = numeros.reduce((total, numeroAtual)=>{
        total+=numeroAtual;
        return total;
    }, 0)
    return soma;
}
console.log(somarComRest(10,20,30,40,50))

// Spread - Permite espalhar os itens de um array. Utilizado para concatenações, console.log, preenchimento de objeto...
const numeros =[1,2,3,4]
console.log(...numeros);

const timeFBSP = ['Santos', 'Palmeiras', 'Bragantino', 'Saõ Paulo'];
const timeFBRJ = ['Vasco', 'Flamengo', 'Bota Fogo', 'Fluminense'];

// Com função concat
const timesFB=timeFBSP.concat(timeFBRJ);
console.log(timesFB);

// Com Spread
const timesFB2=[...timeFBSP, ...timeFBRJ];
console.log(timesFB2);

// Espalhar Propiedades do Objeto
const carroJulia={
    modelo:'Gol',
    marca:'Volkswagen',
    motor: 1.6,
    titular: 'Júlia'
}

const carroAna={
    ...carroJulia,
    motor: 1.8,
    titular:'Ana'
}
const carros=[carroJulia,carroAna];
console.log(carros);


// Desestruturação
const {motor: motorCarroAna} = carroAna;
const {motor: motorCarroJulia} = carroJulia;
console.log(motorCarroAna);
console.log(motorCarroJulia);


// Desestruturação de um Array
const [item1,item2,item3,...outrosTimes]=timesFB;

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);
