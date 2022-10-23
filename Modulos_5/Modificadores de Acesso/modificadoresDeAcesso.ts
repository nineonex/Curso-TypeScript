//Modificadores de Acesso
export {};
//Public geral ve
class Estudante {
  codigoEstudante: number;
  protected nomeEstudante: string;
  private idade: number;
  constructor(codigoEstudante: number, nomeEstudante: string, idade?: number) {
    this.codigoEstudante = codigoEstudante;
    this.nomeEstudante = nomeEstudante;
    this.idade = idade;
  }
  retornarDadosAluno() {
    return `Codigo do Aluno: ${this.codigoEstudante}
Nome do Aluno: ${this.nomeEstudante}
Idade do Aluno: ${this.idade}`;
  }
}
const estudante = new Estudante(123123, 'Sergio Alves', 52);
console.log(estudante.retornarDadosAluno());
class EstudanteDados extends Estudante {
  private curso: string;
  readonly corno: boolean;

  constructor(
    codigoEstudante: number,
    nomeEstudante: string,
    curso: string,
    corno: boolean = true,
  ) {
    super(codigoEstudante, nomeEstudante);
    this.corno = corno;
    this.curso = curso;
  }
  retornarDadosAluno(): string {
    return `Codigo ${this.codigoEstudante}
Nome ${this.nomeEstudante}
Curso ${this.curso}
Corno: ${this.corno}`;
  }
}
const estudanteDados = new EstudanteDados(
  2020104100910436,
  'Matheus Batista',
  'Pseudo Python',
);
console.log(estudanteDados.retornarDadosAluno());
