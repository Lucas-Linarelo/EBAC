// O Type permite que o comportamento do TS de conhecer a nossa estrutura do objeto, seja feita de forma explícita.

type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
} 
const novoAluno: aluno ={
    nome:"Lucas",
    idade: 32,
}

const alunos: aluno[] = [
    {
        nome: "Carlos",
        cursos: ["Front-end", "UX/UI"],
        idade: 27,
    },
    {
        nome: "Ana",
        cursos: ["Front-end", "Python"],
        idade: 23,
    },
]

alunos.push({
    nome:"Julia",
    cursos:["Arquitetura"],
    idade:29
})

function exibideAluno(aluno:aluno){
    console.log(aluno.nome)
}
