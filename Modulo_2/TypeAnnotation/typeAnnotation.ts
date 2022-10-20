//String
let nome: string = 'Jao';
console.log(nome);

//Arrays
let animais: string[] = ['elefante', 'leao', 'gato'];
console.log(animais);

//Obejetos
let carro: {
  nome: string;
  ano: number;
  preco: number;
};
carro = { nome: 'Audi RS6`', ano: 2019, preco: 40000 };
console.log(carro);

//Functrion
function multiplicarNumeros(num1: number, num2: number) {
  return num1 * num2;
}
console.log(multiplicarNumeros(12, 23));
