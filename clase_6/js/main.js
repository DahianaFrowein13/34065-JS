//Función constructora
/* function Producto(nombre, precio, stock) {
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;

  this.sumarIva = function () {
    return (this.precio = this.precio * 1.21);
  };

  this.calcularStok = () => {
    if (this.stock == 0) {
      return "Sin stock";
    } else {
      return "El stock disponible es " + this.stock;
    }
  };
}
 */
//class
class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
  //metodos
  sumarIva() {
    return (this.precio = this.precio * 1.21);
  }
  calcularStock() {
    if (this.stock == 0) {
      return "Sin stock";
    } else {
      return "El stock disponible es " + this.stock;
    }
  }
}
/* 
const producto1 = new Producto("Arroz", 123, 100);
producto1.sumarIva()
console.log(producto1.precio); */

//ARRAYS
const array1 = [];
const array2 = [1, 2, 3, 7, 4, 9, 2];
const palabras = ["Hola", "soy", "un", "array"];
const mixto = ["Hola", 12, 3.5, true, []];
//console.log(array1[0]);
/* console.log(array2);
console.log(array2[0]);
console.log(array2[1]);
console.log(array2[2]);
console.log(array2[4]);
console.log(palabras[3]);
console.log(mixto); */

/* console.log(array2[3] + array2[2]);
console.log(array2[3] + array2[3]);
console.log(palabras[0] + " " + palabras[3]); */
//console.log(array2);
//console.log(array2.length);

//Agregar elementos al final
array2.push(4, 14, 65, "hola");
//quita el ultimo
array2.pop();

//unshift agrea al inicio
array2.unshift(99);

//shift
array2.shift();

/* for (let i = 0; i < array2.length; i++) {
  console.log(array2[i]); 
} */

//console.log(palabras);

//splice

palabras.splice(2, 2);
//console.log(palabras);
//join
const nombres = ["Emi", "Matias", "Irene", "Eber"];
//console.log(nombres);
//console.log(nombres.join("\n"));

//concat

//const unido = nombres.concat(palabras);

//console.log(unido);


//slice crear una copia 

/* console.log(array2);
const copiaSlice=  array2.slice(2,7)

//console.log(copiaSlice);

//indexOf
console.log(nombres);
console.log(nombres.indexOf('Matias'));
console.log(nombres.indexOf('Eber'));
console.log(nombres.indexOf('Eleonora'));

//includes
console.log(nombres.includes("Irene"));
console.log(nombres.indexOf('Irene'));
console.log(nombres.includes("Eleonora")); */

const alacena = [];
const producto1 = new Producto("Arroz", 123, 100);
const producto2 = {nombre: "Fideos", precio:180, stock: 10};

//console.log(alacena);
alacena.push(producto1,producto2)
alacena.push({nombre:"Queso", precio:1200, stock:10})
//console.log(alacena);

/* for (let index = 0; index < alacena.length; index++) {
  console.log(alacena[index]);
  
} */

const persona= {nombre:"Manuel", amigos: [{nombre: "Julio"}, {nombre: "Maria"}]}
 
//console.log(persona.amigos[1].nombre);

//console.log(alacena[0].nombre);
//for
/* for (const producto of alacena) {
  console.log(producto.nombre);
  console.log(producto.precio);
  console.log(producto.stock);
} */

//Ejemplo
const listaProductos = [];
console.log(listaProductos);
let limite = 2;
do {
  let nombre = prompt("Ingresa el nombre del producto");
  let precio = prompt("Ingresa el precio del producto");
  let stock = prompt("Ingresa el stock del producto");
  
  //caragr productos a la lista
  listaProductos.push(new Producto(nombre, precio, stock));

} while (listaProductos.length != limite);
console.log(listaProductos);
for (const iterator of listaProductos ) {
    console.log(iterator);
}