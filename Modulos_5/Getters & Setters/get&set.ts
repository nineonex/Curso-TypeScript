export {};
// Get
class Quadrado {
  private _largura: number = 6;
  private _altura: number = 12;
  get calcularQuadrado(): number {
    return this._largura * this._altura;
  }
}
console.log(new Quadrado().calcularQuadrado);

//Set
class Pessoa {
  nome: string;
  retornarNome(setNome: string) {
    this.nome = setNome;
  }
}
const pessoa = new Pessoa();
pessoa.retornarNome('Jao');
console.log(pessoa.nome);

//Get
class Estudante {
  private _nome: string;
  private _curso: string;
  private _semestre: number;

  constructor(nome: string, curso: string, semestre: number) {
    this._curso = curso;
    this._nome = nome;
    this._semestre = semestre;
  }
  public get cursos(): string {
    return this._curso;
  }
  public set cursos(setCurso: string) {
    this._curso = setCurso;
  }
}
const estudante = new Estudante('Marciano', 'SI', 8);
console.log(estudante);
estudante.cursos = 'Matematica';
console.log(estudante);
