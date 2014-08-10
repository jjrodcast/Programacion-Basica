var peso;
var pesoEnMarte;

alert("¿Quieres saber tu peso en marte?");
peso = prompt("Say your weight","70");
peso = parseInt(peso);

pesoEnMarte = (peso / 9.81) * 3.711;

alert( "Tu peso en Marte es: " + Math.round(pesoEnMarte) + " Kg.");

// alert es una funcion
// (): Parametros de la funcion
// "": Cadena de texto 
//alert( "Me cago haciendo JavaScript :D :D :D");

//var nombre = "Jorge";
//var apellido = "Rodriguez";
//var edad = 28;
//alert(nombre + " " + apellido + "\n" + edad + " años.");
//alert( "2" + 5 * 8 );