document.title = "Clase 14 | Comisión 34065";
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2"),
  card = document.querySelector(".card");
const btn = document.querySelector("#btn"),
  contenedor = document.querySelector(".contenedor");

titulo.innerText = "Clase 14";
tituloSecundario.innerText = "Asincronía y promesas";
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

//asincronia
function square(num) {
  return num * num;
}

function logSquare(num) {
  console.log(square(num));
}

logSquare(2);
/* 
console.log("Inicia el proceso");

setTimeout(() => {
  console.log("Mitad  del proceso");
}, 0);

console.log("Fin del proceso");
btn.addEventListener("click", () => {
  card.classList.add("active");
 
setTimeout(()=>{
  card.classList.remove("active");
},2500)

}); */
//setInterval
/* let intervalo = setInterval(()=>{
console.log("hola");
},1000);

setTimeout(()=>{
  clearInterval(intervalo);
},4000);
 */
//Promesas
console.log(new Promise((resolve,reject)=>{
  //cuerpo de la promesa
  }));

let hamburguesa= true;
let sinPapas= false;

const pedirHamburguesa=(respuesta)=>{
  return new Promise((resolve,reject)=>{
    if(respuesta){
      resolve("Veni a retirar");
    }else{
      reject("No hay papas");
    }

    })}

   /*  console.log(pedirHamburguesa(true));
    console.log(pedirHamburguesa(false)); */

pedirHamburguesa(sinPapas)
.then((response)=>{
  console.log(response);
}).catch((err)=>{
  console.log(err);
}).finally(()=>{
  console.log('Gracias vuelva prontos');
});
