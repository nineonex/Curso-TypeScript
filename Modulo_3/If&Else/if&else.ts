import { idText } from 'typescript';

//IF e Else
if ('condição') {
  //Instrução if com bloco de fonte
}

const max: number = 100;
let counter: number = 100;

if (counter < max) {
  counter++;
}
console.log(counter);

//IF Else
const permissaoIdadeDirigir = 17;
if (permissaoIdadeDirigir >= 18) {
  console.log('Da pra tirar a carta boy');
} else {
  console.log('N da pra tirar a carta boy');
}

//If else if
let desconto: number;
let itemComprado: number = 14;
if (itemComprado < 0 && itemComprado <= 5) {
  desconto = 5;
} else if (itemComprado > 5 && itemComprado <= 10) {
  desconto = 10;
} else {
  desconto = 15;
}
console.log('Desconto Chave de ' + desconto);

//Ternario
const idadeVotacao: number = 18;
const podeVotar = idadeVotacao >= 18 ? 'Vc vota' : 'Vc n vota';
console.log(podeVotar);
