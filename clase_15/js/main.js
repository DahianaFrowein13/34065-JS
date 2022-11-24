document.title = "Clase 15 | Comisión 34065";
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2"),
  card = document.querySelector(".card");
const btn = document.querySelector("#btn"),
  contenedor = document.querySelector(".contenedor");

titulo.innerText = "Clase 15";
tituloSecundario.innerText = "Fetch";
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

//óunción que simula un acceso a una BD externa
const pedirServicios = (arr) => {
  return new Promise((resolve, reject) => {
    //esto simula el retraso que hay al acceder a un recurso externo
    setTimeout(() => {
      resolve(arr);
    }, 2500);
  });
};

//variable auxiliar
let productos = [];

const renderServicios = (arr) => {
  let html;
  contenedor.innerText = "";
  for (const item of arr) {
    const { id, nombre, img, precio } = item;

    html = `
      <div class="card">
          <div class="card-image">
           <img src="../img/${img}">
          </div>
        <div class="card-content">
          <span class="card-title">${nombre.toUpperCase()}</span>
          <p>$${precio}</p>
      
        </div>
        <div class="card-action">
          <button class="btn" id="${id}">Comprar</button>
        </div>
      </div>
     `;

    contenedor.innerHTML += html;
  }
};
/* pedirServicios(servicios)
.then((res) => {
  productos = res;
  renderServicios(productos)
}); */

const lista = document.querySelector("#listado");

fetch('https://jsonplaceholder.typicode.com/posts/')
.then((response)=>response.json())
.then((data=>{
//console.log(data);
data.forEach(post => {
  const li= document.createElement('li');
  li.innerHTML=`
  <h2>${post.title}</h2>
  <p>${post.body}</p>`;
  //lista.appendChild(li);
});
}));

//POST NOSOTROS NO LO PODEMOS REALIZAR SIN UN BACKEND

/* fetch('https://jsonplaceholder.typicode.com/posts/',
{
method:"POST",
body: JSON.stringify({
  title:"HOLA EBER",
  body:"POST DE PRUEBA"
}),
headers:{
  "Content-type":"application/json; charset=UTF-8"
}
})
.then((response)=>response.json())
.then((data=>{
console.log(data);

})); */

//rutas relativas ./imagenes/bg1.jpg

fetch('./data/datos.json')
.then(res=>res.json())
.then(data=>{
  //console.log(data);
 // renderServicios(data)
})

//ASYNC AWAIT
async function fetchAPI(){
  const response = await fetch('./data/datos.json');
  const datos= await response.json();

  console.log(datos);
  renderServicios(datos);
}

fetchAPI()