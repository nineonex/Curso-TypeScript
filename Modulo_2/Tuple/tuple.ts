//Tuple
let nomeTupla:[string, string, number]
nomeTupla = ['Exemplo', 'Exemplo', 0]

//Uso Simples de Tuple
let pessoa:[string, string, number]
pessoa = ['Jão', 'Trouxa', 34]

//Acessando o valor da Tupla
console.log(pessoa[1])

//Tuple com labels
let pessoas1: [nome:string, posicao:string, idade:number] = ['Jão', 'Trouxa', 20]

//Tuple com Spread Operator
let listaFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭']
console.log(...listaFrutas)

//Lista Heterogênea de tuplas:
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas]
console.log(listaFrutas2)

//Função com Tuplas
function listarPessoas(nomes:string[], idades:number[]){
    return [...nomes,...idades]
}
let resultado = listarPessoas(['Jao', 'João'], [20, 56])
console.log(resultado)

//Labeled Tuples com Spread Operator na função
type Nome = 
        |[primeiroNome:string, sobrenome:string]
        |[primeiroNome:string, nomeMeio:string, sobrenome:string]

const criarPessoas = (...nome:Nome) => {
    return[...nome]
}
console.log(criarPessoas('Joao Carlos', 'Alves'))
console.log(criarPessoas('Joao Carlos','Sousa', 'Alves'))
