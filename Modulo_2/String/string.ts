// String
let nomeVariavel: string = 'valor';

//Single Quotes
let animal1: string = 'Panda';
console.log(animal1);
//Double Quotes
let animal2: string = 'Elefante';
console.log(animal2);

//Back-Ticks
let nomePessoa: string = 'Jão';
let nomeEmpresa: string = 'IBGE';
let detalhesPessoa: string = `${nomePessoa} trabalha na empresa ${nomeEmpresa}.`;
console.log('Detalhes: ' + detalhesPessoa);

//Demo

//Exemplo 1 - Single Quotes
let nomeCompleto: string = 'João Carlos Sousa Alves Junior';
console.log(nomeCompleto);

//Exemplo 2 - Double Quotes
let funcaoEmpresa: string = 'Recensiador';
console.log(funcaoEmpresa);

//Exemplo 3 - Back-Ticks
let dadosFuncionario: string = `Seja bem-vindo ${nomeCompleto}! Você será ${funcaoEmpresa} na empresa ${nomeEmpresa}.`;
console.log(dadosFuncionario);
