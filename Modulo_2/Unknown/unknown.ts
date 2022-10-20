//Unknow
let nomeVariavel2: unknown = undefined;

//Exemplo
let valorVariavel: unknown;
valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi!';

//Exemplo erro
//let valor: unknown;
//let valor1: boolean = valor;
//let valor2: any = valor;
//let valor3: any[] = valor;
//let valor4: string = valor;

//Diferença entre any vs unknown
let any: any;
let unknown: unknown;
console.log(any.toFixed(2));
// erro console.log(unknown.toFixed(2));

if (typeof unknown === 'number') {
  console.log(unknown.toFixed());
}
