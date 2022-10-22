export {};
// Default Parameters
const descontoCompra = (preco: number, desconto: number = 0.08) => {
  return preco * (1 - desconto);
};
console.log(descontoCompra(100));
console.log(descontoCompra(100, 0.12));
