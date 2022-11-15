document.title = "Clase 12 | Comisión 34065";
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2#secundario");

titulo.innerText = "Clase 12";
tituloSecundario.innerText = "Operadores avanzados";
const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
  },
];
const almacenados = [];
const formulario = document.querySelector("form"),
  checkbox = document.getElementById("check"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  p = document.querySelector("p");

function guardarLS(valor) {
  let user = { usuario: email.value, pass: password.value };

  if (user.usuario == "" || user.pass == "") {
    p.innerText = "Todos los campos son requeridos";
    return;
  } else {
    if (valor === "localStorage") {
      localStorage.setItem("item", JSON.stringify(user));
    }
    if (valor === "sessionStorage") {
      sessionStorage.setItem("item", JSON.stringify(user));
    }
  }
  return user;
}
//Crear la funcion que traiga los datos

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  //CÓDIGO A EJECUTAR
  /* if (checkbox.checked) {
    guardarLS("localStorage");
  } else {
    guardarLS("sessionStorage");
  } */

  //op ternario
  checkbox.checked ? guardarLS("localStorage") :  guardarLS("sessionStorage");
});

let contenedor = document.querySelector(".contenedor");
function crearHtml(arr) {
  let html;
  arr.forEach((el) => {
const {nombre, precio, img}= el

    html = ` <div class="card">
  <img src="./img/${img}" alt="">
  <hr>
  <h3>${nombre}</h3>
  <p>$${precio}</p>
 
  </div>`;
    contenedor.innerHTML += html;
  });
}
crearHtml(servicios)
//OPERADORES AVANZADOS
//condicional simple
let temp = 31;
/* if(temp>30){
  console.log("Dia caluroso");
}else{
  console.log("Dia agradable");
} */

//op ternario
temp>30 ? console.log("Dia caluroso") : console.log("Dia agradable");

/* let permiso;
if(persona1.edad>=18){
  permiso=true
}else{
  permiso=false
}

console.log(permiso);

if(permiso){
  console.log("Puede ganar el concurso");
}else{
  console.log("NO Puede ganar el concurso");
} */

/* let permiso = (persona1.edad>=18)? true : false;
console.log(permiso);

permiso ?  console.log("Puede ganar el concurso"):  console.log("NO Puede ganar el concurso"); */

//OPERADOR AND

const almacen= [1];

/* if(almacen.length===0){
  console.log("No seleccionaste nigún producto");
} */

almacen.length===0 && console.log("No seleccionaste ningún producto");


//coercion
/* if("0"==[]){
  console.log(true);
} */
const persona1 = {
  nombre: "Juanito",
  apellido: "Arcoiris",
  edad: 10,
  manager: { nombre: "Homero", apellido: "Simpson" },
};
const persona2 = null;
//OR
//console.log(persona2 || "la persona no existe");
//inicializar variables de manera condicional
/* let carrito;
let carritoLS= JSON.parse(localStorage.getItem('carrito'));
if(carritoLS){
  carrito = carritoLS
}else{
  carrito = [];
} */
/* 
const carrito = JSON.parse(localStorage.getItem('carrito'))|| []; */
/* console.log(carrito); */
/* console.log(persona1.nombre|| "La persona no existe");
console.log(persona2?.nombre|| "La persona no existe");
console.log(persona1.nombre); */

//DESESTRUCTURACION
let nombrePersona= persona1.nombre
console.log(nombrePersona);

const {nombre, apellido, manager: {nombre : nombreManager }}= persona1;

console.log(nombre);
console.log(apellido);
console.log(nombreManager);
//console.log(manager);
//console.log(telefono);
 // esato no funciona => const {nombre, apellido}= manager

const producto={
  product_id:1
}

//alias
const { product_id: id }= producto
console.log(id);

const nombres= ['Eber', 'Emi', 'Eleonora', 'Clara']

const [ ,a, b, c]= nombres

console.log(nombres[0]);

//spread ...

console.log(nombres);
console.log(...nombres);
const nums=[1,4,2,3,-9,7,22];

console.log(Math.min(...nums));

const total= servicios.map(el=>el.precio)

console.log(total);
console.log(Math.max(...total));

const nums2=[0,4,3,7,2, -8];

const nuevoArray=[...nums, ...nums2]
console.log(nuevoArray);

const nuevaPersona={
  ...persona1,
  apellido:"Perez",
  curso:"Javascript"
}
console.log(nuevaPersona);