"use strict";
/* No TS não podemos ter o mesmo em diferentes variáveis pois ocorrera erros.
Exemplos: let idade:any = 25 (erro)
Devemos utilizar o conceito de NameSpac - Uma estrutura de pastas virtuais
*/
//Casting - pratica útil, utilzada em alguns casos de dados.
var casting;
(function (casting) {
    let idade = 25;
    idade.toFixed(); // toFixed é usado para formatar um número com um número fixo de casas decimais
    let nome = 25; //Permite que o TS entenda que o 25, apesar de ser um número, passe a ser uma string.
})(casting || (casting = {}));
