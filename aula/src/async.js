// Função pesada
function funcaoPesadona(){
    let execucoes = 0;
    for(let i=0;i<1000000000;i++){
        execucoes++;
    }
    return execucoes;
}
console.log("Inicio");
console.log(funcaoPesadona());
console.log("Fim");

// Promise - Faz com que o código funciona de forma paralela (no hold).
const funcaoPesadonaPromise= new Promise((resolve, reject) =>{
    try {
        let execucoes = 0;
        for(let i=0;i<1000000000;i++){
            execucoes++;
        }
        resolve (execucoes);
    }catch(e){
        reject('Erro na iteração dos números')
    }
})

// Função assíncrona usando .then()
function execucaoPrincipal(){
    console.log("Inicio");
    funcaoPesadonaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
    console.log("Fim");
}
execucaoPrincipal();

// Função síncrona usando await com .then()
async function execucaoPrincipalA(){
    console.log("Inicio");
    await funcaoPesadonaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
    console.log("Fim");
}
execucaoPrincipalA();

// Função síncrona usando await diretamente
async function execucaoPrincipalA2(){
    console.log("Inicio");
    const resultado = await funcaoPesadonaPromise;
    console.log(resultado);
    console.log("Fim");
}
execucaoPrincipalA2();

// Função síncrona usando await pré-executada
async function execucaoPrincipalA3(){
    console.log("Inicio");
    try{
        const resultado = await funcaoPesadonaPromise;
        console.log(resultado);
    }catch(e){
        console.log(e)
    }
    console.log("Fim");
}
execucaoPrincipalA3();

// Passar parametros para um promise
const promiseComParametros = (login,senha)=> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Logado com o usuário: ${login}`)
        },3000)
    })
}
async function execucaoPrincipalA4(){
    console.log("Inicio");
    promiseComParametros('lucas@lucas.com',123456).then(resultado=>{
        console.log(resultado);
    })
    try{
        const resultado = await funcaoPesadonaPromise;
        console.log(resultado);
    }catch(e){
        console.log(e)
    }
    console.log("Fim");
}
execucaoPrincipalA4();