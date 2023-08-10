/* activando el modo Strict */
"use strict"

/*ejercicio#1 */
/* el siguiente codigo se ejecuta una vez cargue el documento html */
alert ("bienvenidos al mundo de la perdición...:)");


/* ejercicio#2 use strict no permite utilizar variables 
que no hayan sido declaradas...*/
 let nombreAprendiz = "juan carlos";
alert(nombreAprendiz);

 /* ejercicio#3 */
 /* crear 2 variables de tipo string (nombre y apellidos)
    y las mostraramos en consola...*/

let nombresAprendiz = "cristian";
let apellidosAprendiz = "Benitez Guzman";
console.log ("Ejercicio#3");
console.log(nombreAprendiz + ""+apellidosAprendiz); 

/*Ejercicio#4 */
let num1Int =5;
let num2Int ="3";
let num3Str = "4";
let num4Str = "8";

console.log();
console.log ("Ejercicio 4");
console.log ("entero + entero ( 5+ 3)");
console.log (num1Int + num2Int);
console.log ("String + String (\"4\" + \"8\")");
console.log (num3Str + num4Str);
console.log ("Entero + String  (5 +\" 4\")");
console.log (num1Int + num3Str);

/* Ejercicio#5 */
/* De string a Entero */

console.log ("Conversion explicita de variables");
console.log ("convertir string a entero");
let num3Int =  parseInt(num3Str);
let resultadoInt = num1Int + num2Int;
console.log (resultados);
/* De entero a string */ 
console.log ("conversion explicita de Entero a String");
let num1Str = num1Int.toString();
let resultadosStr = num3Str + num1Str;
console.log (resultadosStr);
/* De entero y String a decimal */
console.log("conversion de entero a decimal");
let num1Float = parseFloat (num1Int);
let num3Float = parseFloat(num3Str);
let num5Float = 5.3;
console.log ("Valores " + num1Float + " + " + num3Float + " + " +num5Float );
console.log ("Resultado:" + (num1Float + num3Float + num5Float));

/* De Decimal a entero */
let num6Int = Match.ceil (num5Float);
console.log ("conversion de decimal (5.3) a entero con ajuste hacia el techo: " + num6Int);
/*  limitaciones para declaracion de variables  */
/*  1. No iniciar variables con numeros  */
let nombre = "vicente";
let nombre1 = "Thalia";
/* los nombres de variables no llevan espacio */  

console.log ("operadores Aritmeticos");
let numArit1 = 8;
let numArit2 = 6;

console.log ("suma:")
console.log("suma numArit1 (8) +  numArit2 (6) :" + numArit1 + numArit2);
console.log ("resta;");
console.log ("numArit2 (6)  - numArit1 (8):" + (numArit2 - numArit1))
    
