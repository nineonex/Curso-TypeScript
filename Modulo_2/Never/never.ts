//Never
// Usado para excessão da regra

//Never Throw Exception
const error = (message: string): never => {
  throw new Error(message);
};
console.log(error('Mensagem de erro 01'));

//Never inferido automaticamente
const rejectMessage = () => {
  return error('Erro 2');
};
console.log(rejectMessage());

//Looping Infinito retona never
const loopInfinito = function loop() {
  while (true) {
    console.log('oi');
  }
};

//Diferença entre void vs never
const algoVoid: void = null;
//const algoNever: never = null;
