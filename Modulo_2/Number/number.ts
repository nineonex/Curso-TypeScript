// Number & Bigint
//Number
let num1: number = 14.0; //number
let num2: number = 0x37cf; //hexadecimal
let num3: number = 0o377; //octal
let num4: number = 0b111001; //binary

console.log('Number - Ponto flutuant: ', num1);
console.log('Number - Hexadecimal: ', num2);
console.log('Number - Octal: ', num3);
console.log('Number - Binary: ', num4);

//BigInt
let big1: bigint = 9007199254740991n;
let big2: bigint = 9007199254740995n;
let big3: bigint = 0x20000000000003n;
let big4: bigint = 900719925474099511n;

console.log('Bigint...: ', big1);
console.log('Bigint - Binário...: ', big2);
console.log('Bigint - Hexadecimal...: ', big3);
console.log('Bigint - Octal...: ', big4);
