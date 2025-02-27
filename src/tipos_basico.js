"use strict";
// Criando variaveis - Usamos as mesmas palavras reservadas do JS (let e const)
// TS não aceita alterações no tipo de variável
let estaChovendo = false;
estaChovendo = true;
// estaChovendo='true'
// No TS não existe diferença entre numeros inteiros ou fracionários 
let idade = 29;
let altura = 1.92;
//TS tipo string
const nacionalidade = 'Brasileira';
// Arrays no TS - Arrays tipados e não podemos ter arrays com diferentes tipos
const colegas = ['Lucas', 'Fernanda', 'Alex'];
// Outras tipagem
const colegas2 = ['Lucas', 'Fernanda', 'Alex'];
colegas2.push(); //Serve para adicionar novos itens
// Arrays apenas de leitura e não tem método push
const notas = [7, 5, 2];
// Tupla - Estrutura parecida com os arrays, porém com tipos de dados diferentes
const lista = ['Lucas', true, 27];
// Union Type - 
let idadeAna = 25;
idadeAna = '25 anos';
// Any - Aceita qualquer coisa (Geralmente é usado na integração Backend em que não sabemos o tipo de dados que vamos receber)
let dadosApi;
dadosApi = 10;
dadosApi = true;
dadosApi = [1, 2, 3];
dadosApi = 'string';
//Não se engane com as vantagens do any, pois ele foge da proposta do TS com um código bem escrito, escalável e que sirva como documentação
//Tipagem implícita - O TS supõe que a variável recebera apenas dados de um tipo.
let curso = 'string';
//curso=10
