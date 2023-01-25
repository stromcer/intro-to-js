// STRINGS
// Son cadenas de caracteres. Los definimos con comillas simples o dobles

// const example = 'Hello, world!';
// console.log(example);

// const secondExample = "Hello, world!"
// console.log(secondExample);

// También podemos utilizar los template literals, que nos permiten:
// 1. Introducir saltos de línea sin utilizar el escape \n
// 2. Introducir variables de JS dentro de la propia string

// const hello = 'Hello';
// const world = 'World';
// const fullString = '' // A COMPLETAR POR LOS ESTUDIANTES
// console.log(fullString);

// Podemos concatenar strings con el operador +

// const hello = 'Hello';
// const world = 'World';
// const fullString = '' // A COMPLETAR POR LOS ESTUDIANTES
// console.log(fullString);


const leaveThisUncommented = '   This is an Example String. Use your methods here   ';
// Además, las strings tienen una propiedad length...


// console.log(leaveThisUncommented.length);

// ...que nos permite utilizarlas como arrays

//console.log(leaveThisUncommented[1]);
// console.log(leaveThisUncommented[6]);
// console.log(leaveThisUncommented[0]);
//console.log(leaveThisUncommented[leaveThisUncommented.length - 1]);

// Por último, podemos utilizar los métodos nativos de JavaScript


// EJERCICIOS CON MÉTODOS

// 1.- Imprime leaveThisUncommented todo en minúsculas

//const minusculas = leaveThisUncommented.toLowerCase() ;
//console.log(minusculas)


// 2.- Imprime leaveThisUncommented todo en mayúsculas


//const mayusculas = leaveThisUncommented.toUpperCase();
//console.log(mayusculas)

// 3.- Quita los espacios iniciales y finales de leaveThisUncommented

//const sinEspacio = leaveThisUncommented.trim();
//console.log(trimed)

// 4.- Determina si leaveThisUncommented incluye la palabra 'stop'

//const contiene = leaveThisUncommented.includes("stop");
//console.log(contiene)

// 5.- Determina si leaveThisUncommented termina con la palabra 'here'

//const terminaHere = leaveThisUncommented.trim().split(" ")[leaveThisUncommented.trim().split(" ").length -1] === "here" ;
//console.log(terminaHere) ;

//forma de hacerlo bien:

//const finishWith = leaveThisUncommented.trim().endsWith('here')
//console.log(finishWith)


// 6.- Sustituye todas las "e" de leaveThisUncommented por "a"

//const sustitutyePorE = leaveThisUncommented.toLowerCase().replaceAll("e","a");
//console.log(sustitutyePorE) ;

// 7.- Encuentra en qué posición de leaveThisUncommented se encuentra la palabra "Use"

// Si da -1 esque no lo ha encontrado

//const searchUse = leaveThisUncommented.search("Use");
//console.log(searchUse);

// 8.- Divide leaveThisUncommented por el punto

//const divididoPorPunto = leaveThisUncommented.split(".")
//console.log(divididoPorPunto)


// 9.- Obtén el fragmento de leaveThisUncommented que va desde el índice 30 hasta el final

//const primeraParte = leaveThisUncommented.slice(30)
//console.log(primeraParte)

// 10.- Obtén el fragmento de leaveThisUncommented que va desde el índice 30 hasta el 46

//const segundaParte = leaveThisUncommented.slice(30,46)
//console.log(segundaParte)
