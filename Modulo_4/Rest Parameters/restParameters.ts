export {};
//Rest parameters
const somarNumeros = (...numeros: number[]) => {
  let total: number = 0;
  numeros.forEach((numero) => (total += numero));
  return total;
};

const exibirMensagem = (mensagem: string, saudar: string = 'Salved') => {
  return saudar + '' + mensagem + '!';
};
console.log(exibirMensagem('Js Developer'));
