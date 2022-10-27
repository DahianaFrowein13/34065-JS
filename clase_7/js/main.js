const numeros = [1, 2, 3, 4, 5, 6, 3, 1, 7];
/* const productos = [
  { id: 1, nombre: "Arroz", precio: 124 },
  { id: 2, nombre: "Papa", precio: 90 },
  { id: 3, nombre: "Tomate", precio: 204 },
  { id: 4, nombre: "Morrón", precio: 870 },
  { id: 5, nombre: "Pan", precio: 240 },
  { id: 6, nombre: "Fideos", precio: 124 },
  { id: 7, nombre: "Fideos", precio: 124 },
]; */
const aleatorio = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "$",
  "+",
  "-",
  "@",
  "!",
  "/",
  "*",
  "%",
];

//codigo tradicional
let total = 0;
for (let i = 2; i <= 12; i++) {
  total = total + i;
}
//console.log(total);

function sumarRango(desde, hasta) {
  let total = 0;
  for (let i = desde; i <= hasta; i++) {
    total = total + i;
  }
  return total;
}

//console.log(sumarRango(2,12));

//Retornar una función
function mayorQue(n) {
  //function (m){
  //reutn m>n
  //}
  return (m) => m > n;
}

let mayorQueDiez = mayorQue(10);
/* console.log(mayorQueDiez);
console.log(mayorQueDiez(12));
console.log(mayorQueDiez(6)); */

function asignarOperacion(op) {
  if (op == "+") {
    return (a, b) => a + b;
  } else if (op == "-") {
    return (a, b) => a - b;
  }
}

let sumar = asignarOperacion("+");
let restar = asignarOperacion("-");

/* console.log(sumar(1,5));
console.log(restar(1,5)); */

//Recibir una función
function porCadaUno(arr, fn) {
  for (const elemento of arr) {
    fn(elemento);
  }
}

let sum=0;
function acumulador(num){
  sum = sum + num;
}

//const numeros = [1, 2, 3, 4, 5, 6,3,1,7];
porCadaUno(numeros, acumulador);

//console.log(sum);

const duplicado=[]
//console.log(duplicado);
porCadaUno(numeros, (item)=>{//el
    duplicado.push(item * 2)
})

//console.log(duplicado);
//Métodos de los arrays
const productos = [
  { id: 1, nombre: "arroz", precio: 124 },
  { id: 2, nombre: "papa", precio: 90 },
  { id: 3, nombre: "tomate", precio: 204 },
  { id: 4, nombre: "morrón", precio: 870 },
  { id: 5, nombre: "pan", precio: 240 },
  { id: 6, nombre: "fideos", precio: 124 },
  { id: 7, nombre: "fideos", precio: 124 },
];
//forEach
/*  numeros.forEach((num)=>{
  console.log(num);
 })

 productos.forEach((producto)=>{
console.log(producto);
 }) */

 //find
 const encontrado= productos.find((producto)=>{
            return producto.precio <= 200
  })
//console.log(encontrado);
//filter
const filtrado =productos.filter((producto)=>{
  return producto.precio <= 200;
})
//console.log(filtrado);
/* let filtro= prompt("ingresa el producto")
const filtrado2 = productos.filter((producto)=>{
        return producto.nombre.includes(filtro.toLowerCase())
})

console.log(filtrado2); */

//some 

let existe = productos.some((producto)=>{
  return producto.nombre.includes("pa")
})
//console.log(existe);

//map
const precios= productos.map((el)=>{
  return el.precio
})
console.log(precios);

const actualizacion = productos.map(el=>{
      return {
        id: el.id,
        nombre: el.nombre,
        precio: el.precio * 1.2
      }
})

//console.log(actualizacion);

//reduce
const totalCapital= precios.reduce((acc, el)=>{
    return acc + el;
},0);

console.log(totalCapital);

// Math

console.log(Math.PI);
console.log(Math.pow(4,3));
console.log(Math.floor(Math.random() * 10));


function crearPass(array, length) {
  let passAleatorio = "";
  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * array.length);
    passAleatorio  = passAleatorio + array[random];
  }
  return passAleatorio;
}

let password = crearPass(aleatorio, 12)

console.log(password);