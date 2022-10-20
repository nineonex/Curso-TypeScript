"use strict";
//Enums 
var Exemplo;
(function (Exemplo) {
    Exemplo[Exemplo["constant1"] = 0] = "constant1";
    Exemplo[Exemplo["constant2"] = 1] = "constant2";
})(Exemplo || (Exemplo = {}));
//Numeric Enum
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingles"] = 2] = "Ingles";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
console.log(Idioma);
//String Enum
var Idioma1;
(function (Idioma1) {
    Idioma1["Portugues"] = "PT-BR";
    Idioma1["Espanhol"] = "ES";
    Idioma1["Ingles"] = "IN";
    Idioma1["Frances"] = "FR";
})(Idioma1 || (Idioma1 = {}));
console.log(Idioma1);
