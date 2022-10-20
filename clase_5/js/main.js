//variables
/* let nombre = "Bart";
let apellido = "Simpson";
let edad = 10;
let saludo =
  "Hola soy " + nombre + " " + apellido + " y tengo " + edad + " años";
console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(saludo);

let nombre2 = "Lisa";
let apellido2 = "Simpson";
let edad2= 8;
let saludo2 =
  "Hola soy " + nombre2 + " " + apellido2 + " y tengo " + edad2 + " años";
console.log(nombre2);
console.log(apellido2);
console.log(edad2);
console.log(saludo2); */
//Objetos literales
const personaje1 = {
  nombre: "Bart",
  apellido: "Simpson",
  edad: 10,
  frases: {
    frase1: "Ay Caramba",
    frase2: "Yo no fui",
  },
  casado: false,
};

const personaje2 = {
  nombre: "Homero",
  apellido: "Simpson",
  edad: 39,
  frases: {
    frase1: "A la grande le puse Cuca.",
    frase2: "Hable más fuerte que tengo una toalla",
  },
};

//Acceso al objeto
/* console.log(personaje1);
console.log(personaje2); */

//Acceso a las props
/* console.log(personaje1.nombre);
console.log(personaje1.apellido);
console.log(personaje2.nombre);
console.log(personaje2.edad); */

//notacion de corchetes []
/* console.log(personaje1["edad"]);
console.log(personaje2["edad"]); */

//accediendo a props dentro otro obj
/* console.log(personaje2.frases);
console.log(personaje2.frases.frase1);
console.log(personaje2.frases.frase2);
 */
//reasignar valores
personaje2.edad = 40;
personaje2.nombre = "Homero Jay";
//console.log(personaje2.edad);
//console.log(personaje2.nombre + " " + personaje2.apellido);

//crear propiedades que no exiten
personaje1.amigo = "Milhouse";

//console.log(personaje1.amigo);

//Constructores
function Auto(marca, modelo, color, anio) {
  this.marca = marca;
  this.modelo = modelo;
  this.color = color;
  this.anio = anio;
}

const auto1 = new Auto("Audi", "TT", "negro", 2014);
/* console.log(auto1)
 console.log(auto1.marca)
 console.log(auto1.modelo)
 console.log(auto1.color)
 console.log(auto1.anio)
let marca=prompt("igresa la marca") */
const auto2 = new Auto("FIAT", undefined, "blanco", 1994);

/*  console.log(auto2)
 console.log(auto2.marca)
 console.log(auto2.modelo)
 console.log(auto2.color)
 console.log(auto2.anio)
 auto2.color="verde"
 auto2.patente="ACB123"
 console.log(auto2.color);
 console.log(auto2.patente); */

//funcion(obj){}
//metodos

let frase = "A la grande le puse CUCA";
console.log(frase.length);
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());

function Producto(nombre, precio, stock) {
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;

  this.sumarIva = function () {
    return (this.precio = this.precio * 1.21);
  };

  this.calcularStok= ()=>{
    if(this.stock == 0){
      return "Sin stock" 
    }else{
      return "El stock disponible es  " + this.stock
    }
//crear el metodo vender
  }
}

const producto1 = new Producto("Arroz", 123, 100);
/* console.log(producto1.precio);
console.log(producto1.sumarIva());
const producto2 = new Producto("Fideos", 90, 0);
console.log(producto2.precio);
console.log(producto2.sumarIva());

console.log(producto2.calcularStok()); */
/* 
console.log("nombre" in producto1);
console.log("marca" in producto1); */

//iterador forin

for(const propiedad in producto1){
console.log(producto1[propiedad]);
}


