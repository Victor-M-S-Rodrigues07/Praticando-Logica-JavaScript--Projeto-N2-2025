// function media (N1, N2) {

//     if (isNaN (N1) || isNaN (N2)) {

//         //isNAN () -> Verifica se o objeto dentro do parênteses"is not a number."

//         alert ("Um dos números não é válido");
//         return;
//     }

//     let media = (N1 + N2) / 2;
//     return media;
// }

// alert ("A média é: " + media (2, 3));

// 6) Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.

// function tamanhoArray (array) {

//     alert ("O tamanho da array é " + array.length);
// }

// let array = [1, 2, 3, 4, 5]
// tamanhoArray(array);

// 7) Crie um array e utilize a função includes para verificar se um elemento específico está presente

// function verificarElementos (array, elemento) {

//     if (array.includes (elemento)) {

//         console.log (`O elemento ${elemento} está incluído!`);
//         return;
//     }

//     console.log (`O elemento ${elemento} não está incluído no array`);
// }

// let array = [1, 2, 3, 4, 5, 6, 8, 9, 10];
// verificarElementos (array, 7);

// 8) Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.

// 9) Crie um array de strings e utilize includes para verificar se uma determinada string está presente.

// function verificarElementosString (array, elemento) {

//     if (array.includes (elemento)) {

//         console.log (`${elemento} está presente na array`);
//     }

//     else {

//         console.log (`${elemento} não está presente na array`)
//     }
// }

// let frutas = ["maçã", "abacate", "banana", "manga"];
// verificarElementosString (frutas, "abacaxi");

// 10) Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.

// function procurarEstudante (sala, procurado) {

//     if (sala.includes (procurado)) {

//         return "Aluno está presente";
//     }

//     else {

//         return "Aluno faltou";
//     }
// }

// let sala9B = ["Amanda", "Laura", "Maria", "Vitória"]; 
// let sala9A = ["Pedro", "Leonardo", "Leidivan", "Murilo"];

// procurarEstudante (sala9B, "Pedro");

// 11) Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.

// function calcularNumeros (numeros) {

//     let soma = 0;
//     let produto = 1;

//     for (i = 0; i <= numeros.length - 1; i++) {

//         if (numeros [i] % 2 == 0) {

//             soma += numeros [i]; 
//         }

//         else {

//             produto *= numeros [i]; 
//         }
//     }

//     return `A soma dos pares: ${soma} \nO produto dos ímpares: ${produto} \n`;
// }

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 6, 8, 9, 0, 1, 10, 2, 13];
// console.log (calcularNumeros (numeros));