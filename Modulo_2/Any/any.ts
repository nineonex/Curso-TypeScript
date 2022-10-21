//Any
//Any se comporta como js padrao
let nomeVariavel1: any = 'valor';
//Exemplo
const a: any = 888;
const b: any = ['perigo'];
const c = a + b;
console.log(c);

//Any inplicito
let frase;
frase = 'oi bomdia';
console.log(frase);

//Quando usar any
const formulario: { [campoFormulario: string]: any } = {
  nome: 'Jao',
  sobrenome: 'Alves',
  idade: 20,
};
console.log(formulario);
