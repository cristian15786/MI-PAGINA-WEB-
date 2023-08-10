console.log ("hola mundo");
let ciudad = "Pitalito";
let ciudadUpper = ciudad.toUpperCase();
console.log(ciudadUpper);
/*  Todo a Miniscula  */
let ciudadLow = ciudad.toLowerCase();
console.log (ciudadLow);
/* Primer letra en Mayuscula  */
let ciudadOracion = ciudad[0].toUpperCase() + ciudad.slice (1).toLocaleLowerCase();
console.log (ciudadOracion);
/*  Extraer partes de una cadena */ 
let anyo = "2023-06-02";
let anyoStr = anyo.toString();
let anyioCard = anyo.slice(2);
console.log( "año:"  +  anyoCard);
let nombres