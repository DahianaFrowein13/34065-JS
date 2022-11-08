document.title = "Clase 10 | Comisión 34065";
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2#secundario");

titulo.innerText = "Clase 10";
tituloSecundario.innerText = "LocalStorage y JSON";
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

  function guardarLS(valor){
    let user={usuario:email.value, pass: password.value};
    if(user.usuario=="" || user.pass==""){
      p.innerText= "Todos los campos son requeridos";
      return;
    }else{
      if(valor=== "localStorage"){
        localStorage.setItem('item',JSON.stringify(user))
      }
      if(valor==="sessionStorage"){
        sessionStorage.setItem('item',JSON.stringify(user))
      }
    }
    return user
  }
//Crear la funcion que traiga los datos
 
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  //CÓDIGO A EJECUTAR
  if(checkbox.checked){
    guardarLS("localStorage")
  }else{
    guardarLS('sessionStorage')
  }

});




//Setear claves y valores
localStorage.setItem('saludo', 'Hola tarola');
localStorage.setItem('numero', 1);
localStorage.setItem('esValido', true);

//Traer los valores de Storage
let mensaje= localStorage.getItem('saludo');
let num= localStorage.getItem('numero');
let valido= localStorage.getItem('esValido');
/* console.log(typeof mensaje);
console.log(typeof num);
console.log(typeof valido);
 */
//sessionStorage
sessionStorage.setItem('email', "mail@mail.com")
sessionStorage.setItem('select', [1,2,3,4,5,6,7,8]);

let numeros= sessionStorage.getItem('select').split(',')
//console.log(numeros);

//recorrer el storage
for (let i = 0; i < localStorage.length; i++) {
  let clave= localStorage.key(i)
  //console.log(clave);
  //console.log(clave + ' '+localStorage.getItem(clave));
  
}

//eliminar datos storage
localStorage.removeItem('esValido');
localStorage.clear()
sessionStorage.clear()

//////////
/* const serv= {nombre: "Encerado", precio: 2500};
const servLS=JSON.stringify(serv)
console.log(servLS);

localStorage.setItem('servicio', servLS);

const servAObj= JSON.parse(localStorage.getItem('servicio'));

console.log(servAObj);
function filtrar(arr, filtro){
  return arr.filter(el=> el.nombre.includes(filtro))
}
function encontrar(arr, filtro){
  return arr.find(el=> el.nombre.includes(filtro))
}
let filtrado= filtrar(servicios, "ma")
console.log(filtrado);
const encontrado= encontrar(servicios, email.value)
almacenados.push(encontrado)
localStorage.setItem("fitrado", JSON.stringify(almacenados)) */