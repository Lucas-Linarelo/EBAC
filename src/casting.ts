/* No TS não podemos ter o mesmo em diferentes variáveis pois ocorrera erros.
Exemplos: let idade:any = 25 (erro)
Devemos utilizar o conceito de NameSpac - Uma estrutura de pastas virtuais
*/
//Casting - pratica útil, utilzada em alguns casos de dados.
namespace casting{
    let idade:any = 25;
    (idade as number).toFixed(); // toFixed é usado para formatar um número com um número fixo de casas decimais

    let nome:string = 25 as unknown as string; //Permite que o TS entenda que o 25, apesar de ser um número, passe a ser uma string.
}


