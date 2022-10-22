//Optional Parameters
export {};
const informarDados = (idPessoa: number, nome: string, email?: string) => {
  console.log('Id Funcionario...:', idPessoa, 'Nome...:', nome);
  if (email !== undefined) {
    console.log('Email: ', email);
  }
};
informarDados(123123123, 'jao');
informarDados(32132131, 'Marciano', 'marci@gmail.com');

//Exemplo 1
const mensagemLog = (mensagem: string, usuarioId?: number) => {
  const horaLog = new Date().toLocaleTimeString();
  console.log(horaLog, mensagem, usuarioId || 'Usuario(a) não conectado(a)');
};
mensagemLog('Atualizar Pagina');
mensagemLog('Usuario(a) logado(a) com sucesso', 123123);

//Exemplo 2
type Pessoa = {
  idFuncionario: number;
  nome: string;
  idade?: number;
  email?: string;
};
let pessoa: Pessoa;
pessoa = {
  idFuncionario: 112233,
  nome: 'Marciano',
};
console.log(pessoa);

