const redesSociais = ['Facebook','Instagram', 'X'];
for (let i=0; i<redesSociais.length; i++){
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

// Foreach - Só intera e não retorna
redesSociais.forEach(function(nomeDaRedeSocial, indice){
    console.log(`#0${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})
console.log(numeros)

// map - Intera, modifica e ainda retorna modificado
const numeros = [1,2,3,4,5]
const dobroDosNumeros = numeros.map(function(numeroAtual){
    // numeroAtual = numeroAtual*2;
    return numeroAtual*2;
})
console.log(dobroDosNumeros)

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
console.log(alunos)

// map - Fazemos a manipulção e podemos ter um novo array como retorno
const alunos2 = alunos.map(function(itemAtual){
    itemAtual={
        nome: itemAtual,
        curso: 'Frontend'
    }
    return itemAtual;
})
console.log(alunos2)

// find - Encontra itens no array
const paula = alunos2.find(function(item){
    return item.nome =='Paula'
})
console.log(paula)

// FindIndex Retornamos o índice do item
const IndexPaula = alunos2.findIndex(function(item){
    return item.nome =='Paula'
})
console.log(IndexPaula)

// Push - Retorna se todas os itens do arrays obedecem uma condição determinada
alunos2.push({
    nome: 'Lucio',
    curso:'Backend'
})
const todosAlunosFE = alunos2.every(function(item){
    return item.curso === 'Frontend';
})
console.log(todosAlunosFE);

// Some - Mais tolerante do que o Every, necessitando que apenas um item obedeça a condição.
const existeAlgummAlunoBE = alunos2.some(function(item){
    return item.curso ==='Backend' || item.curso === 'Frontend';
})
console.log(existeAlgummAlunoBE);

// Filter - Filtra itens
const alunosBE = alunos2.filter(function(item){
    return item.curso==='Backend';
})
console.log(alunosBE);

// Passando a função diretamente como callback
function filtraAlunoBE(aluno){
    return aluno.curso ==='Backend';
}
const alunosBE2 = alunos2.filter(filtraAlunoBE)
console.log(alunosBE2);

// Reduce - Agregação de valores (Soma)
const nums = [10,20,30,10]
const soma=nums.reduce(function(acumaldor, itemAtual){
    acumaldor +=itemAtual;
    return acumaldor;
}, 0)
console.log(soma);

// Reduce - Agregação de valores com strings (Concatenação)

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome} `;
    return acumulador;
},'')
console.log(nomesDosAlunos);

// Somando com For
let somaFor = 0;
for(let i=0; i<nums.length;i++){
    somaFor+=nums[i];
}
console.log(somaFor);


