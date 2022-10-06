//declaracion de variables
var nombre; //declarando en ES5

let apellido; // declaracion en ES6


/* var nombre; */
//asignar valores (=)

nombre = "Javier"; //Tipo de data STRING
apellido = "Perez";

let numeroPrimo = 11;//Tipo de dato numerico entero

let superficie = 32.45;//tipo de dato numerico decimal
//inicializar variables
let telefono = "675376543";
//reasignar un valor
telefono = "Este es mi numero de telefono";
numeroPrimo = "37";

//Constantes
const IVA = 1.21;

//IVA="Iva"//NO lo puedo hacer

/* Concatenacion */

let descuento = 34;
let recargo= 50;
let precio = 120; 
let precioConIVA;
let precioConDescuento;
let precioConRecargo;
precioConIVA = precio * IVA;

precioConDescuento= precioConIVA - descuento;

precioConRecargo = precioConIVA + recargo;

let mensaje = "El resultado de al Operacion es";

let Factura= mensaje + " " + precioConRecargo;//concatenado

//Salida de información

console.log("Hola soy un mensaje");
console.log(precio);
console.log("El precio con IVA es de  "+precioConIVA);
console.log(Factura);

/* alert(Factura);
alert("El precio con IVA es de  "+precioConIVA); */


//Entrada de datos

let nombre2= prompt("Hola ingresa tu nombre");//STRING
let apellido2= prompt("Hola ingresa tu apellido");

console.log("Hola " +  nombre2 + " " + apellido2);

