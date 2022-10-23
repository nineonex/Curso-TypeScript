export {};
//Classes
class Pessoa {
  nome: string;
  sobrenome: string;
  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}
const pessoa = new Pessoa('Jao', 'Carlos');

console.log(pessoa.nomeCompleto());

//Classes sem constructor
class Estudante {
  codigoEstudante: number;
  nomeEstudante: string;
}
const estudante = new Estudante();
estudante.codigoEstudante = 15;
estudante.nomeEstudante = 'Jojo';
console.log(estudante.codigoEstudante);
console.log(estudante.nomeEstudante);

//Classe com constructor
class Estudante_1 {
  codigoEstudante: number;
  nomeEstudante: string;
  constructor(codigoEstudante: number, nomeEstudante: string) {
    this.codigoEstudante = codigoEstudante;
    this.nomeEstudante = nomeEstudante;
  }
  listarEstudante(): void {
    console.log('Codigo do estudante..: ', this.codigoEstudante);
    console.log('Nome do estudante..: ', this.nomeEstudante);
  }
}
const estudante_1 = new Estudante_1(6969, 'Matheus');
console.log('Lendo o atributo do estudante..: ', estudante_1.nomeEstudante);
console.log('O id dele...: ', estudante_1.codigoEstudante);
