//Void
// Oposto do tipo any

import { Variable } from '@typescript-eslint/scope-manager';

//Função void
const logError = (errorMessage: string): void => {
  console.log(errorMessage);
};
logError('Deu ruim');

// Varaiavel void
let variavelVoid: void;
//variavelVoid = 1;
variavelVoid = null;
variavelVoid = undefined;
