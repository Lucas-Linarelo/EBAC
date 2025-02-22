// Map - Estrutura dicionário, um conjunto de valores que funcionam como objetos

let meuMap = new Map();
meuMap.set("nome","Lucas");
meuMap.set("stack","html, css, js");
console.log(meuMap);

const nome = meuMap.get("nome");
console.log(nome);

// Recuperar a quantidade de itens dentro do map
console.log(meuMap.size);

// Verificar a existência de determinada chave
console.log(meuMap.has("sobrenome"));

// Iteração (for of) dentro dos itens do map
for (let chave of meuMap.keys()){
    console.log(chave);
}
// Recuperar os valores
for (let valor of meuMap.values()){
    console.log(valor);
}
// For pelas entradas (item+valor) em uma tabela
for (let entradas of meuMap.entries()){
    console.log(entradas);
}

// Desestruturação no for
for (let [chave,valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`);
}

// Removendo o item dentro do map
meuMap.delete("stack");
console.log(meuMap);

// Limpeza no map
meuMap.clear();
console.log(meuMap.size);


// Set - Conjunto de dados onde temos apenas o valor e este valor não pode se repetir
const cpfs=new Set();
cpfs.add('67987745804')
cpfs.add('54480799036')
cpfs.add('66608640080')
console.log(cpfs);

// Os conjuto chaves/valor no set existe mas ele funciona de maneira diferente. Ao requisitar as keys, o valor é exibido
console.log(cpfs.keys());
console.log(cpfs.values());

// Iperando com o forEach (logs dos cpfs)
cpfs.forEach((valor)=>{
    console.log(valor);
})

// Listagem de itens únicos com set
const array = ['Gian Souza', 'Josá Paulo', 'Maria Isabel', 'Luana' , 'Luana', 'Gian Souza']

// Remoção de valores repetidos com set e conversão do array para set
const arrayComoSet = new Set([...array])
console.log(arrayComoSet);

// Conversão de set para array
const arraysSemItensDuplicados=[...arrayComoSet]
console.log(arraysSemItensDuplicados);
