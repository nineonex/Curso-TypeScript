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

const comida = () => {
  return 'Comidas muito apetitosas!';
};
