//Enums
enum Exemplo {
  constant1,
  constant2,
}

//Numeric Enum
enum Idioma {
  Portugues,
  Espanhol,
  Ingles,
  Frances,
}
console.log(Idioma);

//String Enum
enum Dia {
  Segunda = 'SEG',
  Terca = 'TER',
  Quarta = 'QUA',
  Quinta = 'QUI',
  Sexta = 'SEX',
  Sabado = 'SAB',
  Domingo = 'DOM',
}
console.log(Dia);

//Enum usando const
const enum Comida {
  Hamburger,
  Massa,
  Pizza,
  Torta,
  Churrasco,
}

const comida = (c: Comida) => {
  return 'Comidas muito apetitosas!';
};

console.log(comida(Comida.Massa));
console.log(comida(Comida.Pizza));
console.log(comida(5));

//Quando usar Enum
enum Tarefa {
  Todo,
  Progress,
  Done,
}
const concluidaTarefa = {
  id: 1,
  status: Tarefa.Done,
  descricao: 'Parabens! Tarefa concluida com sucesso!',
};
if (concluidaTarefa.status === Tarefa.Done) {
  console.log(concluidaTarefa.descricao);
}
