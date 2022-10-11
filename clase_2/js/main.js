//declaración de variables
let nombre;
//asignación
nombre = "Lius"; //String

//Inicialización de variables
let apellido = "Perez";
const PI = 3.14; //number

//ingreso de datos
//let numero = prompt("Ingresa un número");
//parseo
//numero = parseFloat(numero);
//numero = parseInt(numero);

//let resultado = PI + numero;

//salida de datos
/* console.log(numero);
console.log(resultado);
 */

//condicionales
let booleano = true;
booleano = false;

//opradores arimeticos  + - / * =

//comparacion ==  pregunto si es true o false
/* 
if(numero == 5){
    //bloque de ejecución
    console.log("Vas ver este mensaje");
}
console.log("fin del programa"); */

//if else si si no
/* 
let clima = prompt("Hace frio?");
if (clima == 'si'){
    console.log('llevo abrigo');
}else{
    console.log('llevo remera');
}; */
/* 
let edadUsuario= parseInt(prompt("ingresa la edad del usuario"))
let edadLimite= parseInt(prompt("ingresa la edad limite"))

if(edadUsuario >= edadLimite){
console.log('Puedes ingresar al casino');
}else{
    console.log("Eres menor de edad");
}
 */

//Variables boolean
/* let esMayor = 54 > 9;

let edad= '18';
let ingreso= parseInt(prompt("Ingresa tu edad"));
let coincide = edad === ingreso;
console.log(esMayor);
 */
/* if (coincide) {
    console.log("si coincide");
}else{
    console.log("No coincide");
} */

let nombreIngresado = prompt("Ingresa tu nombre");
let apellidoIngresado = prompt("Ingresa tu apellido");

/* if(nombreIngresado !== ""){
    //console.log('Bienvenido/a ' + nombreIngresado);
    if(apellidoIngresado !== ""){
        console.log('Bienvenido/a ' + nombreIngresado + " " + apellidoIngresado);
    }else{
        console.log('Los campos son requeridos');
    }
}else{
    console.log('Los campos son requeridos');
} */
//if else if
/* if (nombreIngresado !== "") {
  console.log("Bienvenido/a " + nombreIngresado);
} else if (apellidoIngresado != "") {
  console.log("Bienvenido/a " + apellidoIngresado);
} else {
  console.log("Los campos son requeridos");
} */

//AND && ambas comparaciones deben ser verdaderas
//OR cualquiera de las dos tienen que ser verdadera

let pass = "1234";
let User = "Dani";
if (nombreIngresado == User || apellidoIngresado == pass) {
  console.log("Bienvenido/a " + nombreIngresado + " " + apellidoIngresado);
} else {
  console.log("Los campos son requeridos");
}
// Optimizar el codigo para que al ingresar usuario y pass me de un mensaje dd bienvenida. Si no vuelva pedir elusrio y la contraseña
