//Object
const pessoa1 = {
  nome: 'nome',
  sobrenome: 'sobrenome',
  idade: 'idade',
  sexo: 'sexo',
};
console.log(pessoa1);

//Object como parametro de function
const onboarding01 = (funcionario: { nome: string }) => {
  return 'Seja bem vindo ' + funcionario.nome;
};
console.log(onboarding01({ nome: 'Jao' }));

//Objeto nomeados
interface Pessoa {
  nome: string;
  funcao: string;
}
const onboarding02 = (pessoa: Pessoa) => {
  return 'Seja bem vindo ' + pessoa.nome + '!' + pessoa.funcao;
};
console.log(onboarding02({ nome: 'Jao', funcao: 'IBGe' }));

//Object com type allias
type Pessoa03 = {
  nome: string;
  funcao: string;
  linguagem: string;
};

const onboarding03 = (pessoa: Pessoa04) => {
  return (
    'Seja bem vindo ' +
    pessoa.nome +
    '!' +
    pessoa.funcao +
    ' ' +
    pessoa.linguagem
  );
};
console.log(onboarding03({ nome: 'Jao', funcao: 'IBGe', linguagem: 'TS ' }));

//Optional Object
interface Pessoa04 {
  nome: string;
  funcao: string;
  linguagem: string;
  email?: string;
}

const onboarding04 = (pessoa: Pessoa04) => {
  return (
    'Seja bem vindo ' +
    pessoa.nome +
    '!' +
    pessoa.funcao +
    ' ' +
    pessoa.linguagem
  );
};
console.log(onboarding04({ nome: 'Jao', funcao: 'IBGe', linguagem: 'TS ' }));

//Propriedade readonly

interface Pessoa05 {
  nome: string;
  funcao: string;
  linguagem: string;
  readonly email: string;
}

const onboarding05 = (pessoa: Pessoa05) => {
  return (
    'Seja bem vindo ' +
    pessoa.nome +
    '!' +
    pessoa.funcao +
    ' ' +
    pessoa.linguagem
  );
};
console.log(
  onboarding05({
    nome: 'Jao',
    funcao: 'IBGe',
    linguagem: 'TS ',
    email: '@gmail.com',
  }),
);

//Tipos de extensoes
interface Mae {
  name: string;
}

interface Pai {
  sobrenome: string;
}

interface Filha extends Mae, Pai {
  idade: number;
}
const filha: Filha = {
  name: 'Jao',
  sobrenome: 'Carlos',
  idade: 23,
};

//Tipos de intersecoes

interface Cachorro {
  tipo: string;
}
interface Cat {
  tipo: string;
}

type Animal = Cachorro & Cat;

//Generic Object
type Usuario = {
  name: string;
  email: string;
};
type Adim = {
  nome: string;
  email: string;
  admin: true;
};
const usuario: Usuario = {
  name: 'Jao',
  email: '@gmail.com',
};
const admin: Adim = {
  nome: 'Jao',
  email: '@gmail.com',
  admin: true,
};
const acessar = <T>(usuario: T): T => {
  return usuario;
};
console.log(usuario);
console.log(admin);
