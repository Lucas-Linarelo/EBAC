class Aluno{
    #nota;

    constructor(nome,nota){
        this.nome=nome;
        this.#nota=nota;
    }
    getNota(){
        return this.#nota;
    }
    aprovado(){
        return this.#nota>=6;
    }
    exibirAluno(){
        console.log(`Nome: ${this.nome} | Nota: ${this.#nota} | Situação: ${this.aprovado()? 'Aprovado' : 'Reprovado'}`);
    }
}

const alunos = [
    new Aluno('Alex', 6.5),
    new Aluno('Ana', 9.5),
    new Aluno('Bruno', 1.5),
    new Aluno('Daniela', 2.5),
    new Aluno('Eduardo', 7.5),
    new Aluno('Leoanrdo', 5.5),
    new Aluno('Lucas', 7.5)
];

const exibeAprovados = (listaAlunos)=>{
    listaAlunos.filter(aluno=>aluno.aprovado()).forEach(aluno=>aluno.exibirAluno());
};
console.log('---Aprovados---');
exibeAprovados(alunos);