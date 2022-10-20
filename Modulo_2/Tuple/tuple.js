"use strict";
//Tuple
let nomeTupla;
nomeTupla = ['Exemplo', 'Exemplo', 0];
//Uso Simples de Tuple
let pessoa;
pessoa = ['Jão', 'Trouxa', 34];
//Acessando o valor da Tupla
console.log(pessoa[1]);
//Tuple com labels
let pessoas1 = ['Jão', 'Trouxa', 20];
//Tuple com Spread Operator
let listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);
//Lista Heterogênea de tuplas:
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
//Função com Tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Jao', 'João'], [20, 56]);
console.log(resultado);
const criarPessoas = (...nome) => {
    return [...nome];
};
console.log(criarPessoas('Joao Carlos', 'Alves'));
console.log(criarPessoas('Joao Carlos', 'Sousa', 'Alves'));
