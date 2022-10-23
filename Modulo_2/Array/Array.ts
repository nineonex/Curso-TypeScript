export {}
//Array
let nome: string[] = ['Itens'];

//Colchetes
let frutas: string[] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[0]);

//Array Object
let frutas1: Array<string> = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas1[2]);

//Push
let idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas);
idiomas.push('Mandarim');
console.log(idiomas);
idiomas.push('Italiano');
console.log(idiomas);

//Length
let idiomas1: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas1.length);

//Array com Spread Operator
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);

//Array com Laco de interação

let linguagensArrays: string[] = new Array('Js', 'Python', 'C#');
function funcaoLinguagem(lingua: string[]) {
  for (let i = 0; i < lingua.length; i++) {
    console.log(lingua[i]);
  }
}
funcaoLinguagem(linguagensArrays);
