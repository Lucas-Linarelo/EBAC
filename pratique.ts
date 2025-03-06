//  Função de multiplicação
function multiplica(num1:number,num2:number):number{
    return num1*num2;
}
console.log(multiplica(5,3));
// Função multiplicação com arrowfunction
const multiplica2=(num1:number,num2:number):number => num1*num2
console.log(multiplica2(10,29));
// Função concatenação Olá+nome
function dizOi(nome:string):string{
    return `Olá ${nome}`;
}
console.log(dizOi("Lucas"));
// Função concatenação Olá+nome com arrowfunction
const dizOi2=(nome:string):string => `Olá ${nome}`;
console.log(dizOi2("Alex"));
