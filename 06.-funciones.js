// FUNCIONES
// Las funciones son bloques de código reutilizable.
// Como las variables, lo primero que hacemos es declararlas,
// para almacenarlas en la memoria. Luego podemos ejecutarlas

// function exampleFunction() {
//     console.log('Hello, world!');
// }

// exampleFunction();

// A nuestras funciones les podemos pasar argumentos. Se trata de
// variables que utilizaremos dentro de la propia función

// const helloWorld = 'Hello, world!';

// function exampleFunction(printStatement) {
//     console.log(printStatement);
// }

// exampleFunction(helloWorld);


// EJERCICIOS

// 1. Escribe una función que imprima la suma de dos números
// proporcionados como parámetros

let numA = 3;
let numB = 4;

function sumAB(a, b) {
    return a + b
}

//console.log(sumAB(numA,numB))



// 2. Escribe una función que imprima un número aleatorio, de 1
// hasta el rango proporcionado

function randomTo(num) {
    return Math.floor(Math.random() * num) + 1
}

//console.log(randomTo(4));


// Las funciones pueden utilizar la keyword return, que:
// 1. Les asigna un valor de retorno
// 2. Interrumpe la ejecución del código

// function addTwoNumbers(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }

// const addResult = addTwoNumbers(1, 3);

// console.log(addResult);









// ARROW FUNCTIONS:

//Se inician en una variable (son anonimas)

let addTwoNumbers = (a, b) => {
    return a + b
}

//PARTICULARIDADES:
// Si solo tenemos un parametro no hace faltan parentesis , en este caso word es el parametro:

let printWord = word => { console.log(word) };
//console.log(printWord);


// Si solo tenemos una linea de codigo no hace falta los corchetes que indican bloque de codigo {}:

let printWord2 = word => console.log(word);
//console.log(printWord2("Hola"));

//Cuando solo usamos una linea no hace falta el return:

let sumtwo = (a, b) => a + b;
//console.log(sumtwo(2,3));










// EJERCICIO

// 1. Retomando la función que genera números aleatorios, haz que retorne
// el resultado, no que lo imprima en consola

let randomNumberTwo = num => Math.floor(Math.random() * num) + 1;
//console.log(randomNumberTwo(5));


// IMPORTANTE
// 1. Debemos tratar de que nuestras funciones solo cumplan un cometido
// 2. Debemos tratar de escribir funciones puras (siempre devuelven el mismo
// resultado con los mismos parámetros)
// 3. Debemos evitar los efectos secundarios en nuestras funciones
// 4. Debemos tener mucho cuidado con el nombre de nuestras funciones

// Podemos utilizar funciones sin nombre. Las llamaremos funciones anónimas.

// const exampleFunction = function () {
//     console.log('Anonymous function!');
// }

// exampleFunction();

// Existe una sintaxis especial desde EC6: las arrow functions

// const exampleFunction = () => {
//     console.log('Anonymous function!');
// }

// exampleFunction();



// EJERCICIOS

// 1. Escribe una arrow function que imprima en la consola el parámetro
// que le proporciones

let printThis = wantToPrint => console.log(wantToPrint);

//printThis("Hola");


// 2. Escribe una arrow function que sume dos números proporcionados


let sumTwoAgain = (numA, numB) => numA + numB;
//console.log(sumTwoAgain(2, 3));

// 3. Escribe una arrow function que imprima en la consola la multiplicación
// de dos números proporcionados

let multTwo = (numA, numB) => console.log(numA * numB);
//console.log(multTwo(2, 3));

// 4. Escribe una arrow function que reste dos números proporcionados

let substract = (numA, numB) => numA - numB;
//console.log(substract(2, 3));


// 5. Escribe una arrow function que multiplique dos números proporcionados

let multiTwo = (numA, numB) => numA * numB;
//console.log(multiTwo(2, 3));

// 6. Escribe una arrow function que divida dos números proporcionados

let divideTwo = (numA, numB) => numA / numB;
//console.log(divideTwo(6, 3));

// 7. Escribe una arrow function que reciba dos números y una operación,
// ejecute la operación e imprima el resultado en pantalla

let operation = (numA, numB, sign) => numA sign numB;