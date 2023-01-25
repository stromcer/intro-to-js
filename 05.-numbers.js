// NUMBERS
// Son números, útiles para hacer operaciones matemáticas

// const positiveExample = 8291;
// console.log(positiveExample);

// const negativeExample = -8291;
// console.log(negativeExample);

// const floatExample = 82.91;
// console.log(floatExample);

// Podemos combinarlos con operadores aritméticos y comparadores lógicos
// ¿Necesitamos ejemplos?

// Podemos convertir otros tipos de datos en numbers

// const booleanExampleTrue = true;
// const booleanExampleFalse = false;

// const stringExampleOne = '123';
// const stringExampleTwo = '';

// console.log(Number(booleanExampleTrue));
// console.log(Number(booleanExampleFalse));
// console.log(Number(stringExampleOne));
// console.log(Number(stringExampleTwo));

// Tenemos un tipo especial de número: NaN

// const stringExampleThree = 'Something';

// console.log(Number(stringExampleThree));
// console.log(typeof Number(stringExampleThree));

// Y también tenemos el objeto Math, que nos permite realizar
// operaciones avanzadas e incluye funcionalidades relacionadas
// con las matemáticas

// EJERCICIOS CON MÉTODOS Y MATH

const leaveThisUncommented = 156.34589;

// 1. Cambia el tipo de leaveThisUncommented a string

//const tipoString = String(leaveThisUncommented)
//onsole.log(typeof(tipoString))
//console.log(tipoString)


// 1. Redondea leaveThisUncommented a dos decimales

//const dosDecimales = leaveThisUncommented.toFixed(2);
//console.log(dosDecimales)


// 3. Determina si leaveThisUncommented es un número entero

//const entero = Number.isInteger(leaveThisUncommented);
//console.log(entero)

// 4. Determina si leaveThisUncommented es NaN

//const esNan = Number.isNaN(leaveThisUncommented);
//console.log(esNan)

// 5. Castea leaveThisUncommented a número entero

//const nEntero = parseInt(leaveThisUncommented);
//console.log(nEntero);



// 6. Imprime el número PI

//const numberPi = Math.PI ;
//console.log(numberPi)


// 7. Redondea leaveThisUncommented al número entero superior más cercano

//const redondeoArriba = Math.ceil(leaveThisUncommented);
//console.log(redondeoArriba)


// 8. Redondea leaveThisUncommented al número entero inferior más cercano

//const redondeoAbajo = Math.floor(leaveThisUncommented);
//console.log(redondeoAbajo);

// 9. Genera un número entero aleatorio del 1 al 3

const random = Math.ceil(Math.random()*3)
console.log(random)