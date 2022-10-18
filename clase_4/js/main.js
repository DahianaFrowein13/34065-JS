//funciones
//declaracion

function saludar() {
  console.log("HOLA TAROLA");
}
//llamado o invocacion
/* saludar();
saludar();
saludar(); */

/* let nombre = prompt("Ingresa tu nombre");
console.log("El nombre ingresado es : " + nombre);
nombre = prompt("Ingresa tu nombre");
console.log("El nombre ingresado es : " + nombre);
nombre = prompt("Ingresa tu nombre");
console.log("El nombre ingresado es : " + nombre); */
let nombre;

function ingresoNombre() {
  nombre = prompt("Ingresa tu nombre");
  // console.log("El nombre ingresado es : " + nombre);
}

/* function mostrar() {
  console.log(nombre);
} */
//ingresoNombre();
//mostrar();
//con parametros
/* function conParametros(parametro1, parametro2) {
  console.log(parametro1);
  console.log(parametro2);
}
let nombre2 = prompt("ingresa el nombre");
conParametros("Hola", nombre2); */

//let resultado = 0;

/* function sumar(primerNumero, segundoNumero) {
  resultado = primerNumero + segundoNumero;
} */

function mostrar(mensaje, valor) {
  console.log(mensaje + valor);
}

//mostrar(resultado);

//sumar(33, 99);
//mostrar(resultado);
//sumar(32, 9);

//mostrar(resultado);

//return
function sumar(primerNumero, segundoNumero) {
  return primerNumero + segundoNumero;
}
function restar(primerNumero, segundoNumero) {
  return primerNumero - segundoNumero;
}

function dividir(primerNumero, segundoNumero) {
  if (isNaN(primerNumero) || isNaN(segundoNumero)) {
    return "los valores no son numricos";
  }

  if (segundoNumero == 0) {
    return "Error";
  } else {
    return primerNumero / segundoNumero;
  }
}

let resultadoSuma = sumar(45, 15);
let resultadoResta = restar(12, 9);
let resDiv = dividir(12, 0);
let resDiv2 = dividir(12, 3);
/* mostrar("El resultado de la suma es: ", resultadoSuma);
mostrar("El resultado de la resta es: ", resultadoResta); */
/* 
console.log(resDiv);
console.log(resDiv2);

console.log(sumar(resultadoSuma, resDiv2)); */
//SCOPE
//variable global

let variable = "Soy una variable global";

//console.log(variable);

function cambiar() {
  variable = "Soy la variable global modificada desde una funcion";
  console.log(variable);
}

//cambiar();

if (true) {
  variable = "Soy la variable global modificada desde un if";
  //console.log(variable);
}

let variableLocal = "Soy una variable que estoy fuera de la funcion";

//Variable
function cambiarVariableLocal() {
  let variableLocal = "Soy una variable local dentro de una estructura";
  console.log(variableLocal);
}

//cambiarVariableLocal();

//console.log(variableLocal);

//Funcion anonima

const funcionAnonima = function () {
  console.log("Soy una funcion anonima");
};
funcionAnonima();

const suma = function (n1, n2) {
  return n1 + n2;
};
let numero1 = prompt("Ingresa el primer numero");
let numero2 = prompt("Ingresa el segundo numero");
console.log(suma(numero1, numero2));

//function flecha

const resta = (n1, n2) => n1 - n2; //ES6 return es implicito

console.log(resta(21, 4));
