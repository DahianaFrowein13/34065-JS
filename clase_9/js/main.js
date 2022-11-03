document.title = "Clase 9 | Comisión 34065";
//querySelector
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2#secundario");

titulo.innerText = "Clase 9";
tituloSecundario.innerText = "Eventos";
//Array Servicios
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
const paises = [
  "Argentina",
  "Colombia",
  "Brasil",
  "México",
  "Uruguay",
  "Venezuela",
  "Perú",
  "Chile",
  "Polonia"
];
//funciones de busqueda
function buscarServicio(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.nombre.includes(filtro);
  });
  return encontrado;
}
function filtrarServicio(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}
//EVENTOS
const btnBuscar= document.querySelector('#btnSearch');
/* console.log(btnBuscar); */
//addEventListener()
/* btnBuscar.addEventListener('click',()=>{
console.log('Hiciste click');
}) */

//prefijo onnombredelevento
/* btnBuscar.onclick = ()=>{
  console.log('Hiciste click');
} */

/* btnBuscar.addEventListener('mouseup', ()=>{
  console.log('soltaste el boton');
}) */
/* btnBuscar.addEventListener('mouseover', ()=>{
  console.log('soltaste el boton');
})


titulo.addEventListener('mouseover', ()=>{
  titulo.className = "box";
})
titulo.addEventListener('mouseout', ()=>{
  titulo.className = "";
}) */


//eventos del teclado
const input= document.querySelectorAll('input')
//console.log(input);

const inputSearch= input[0];
const mensaje= document.querySelector('#mensaje')
/* inputSearch.addEventListener('keyup',()=>{
  mensaje.innerText = inputSearch.value;
}) */

btnBuscar.addEventListener('click', ()=>{
  mensaje.innerText = inputSearch.value;
})
const select = document.querySelector('select[name="paises"]')

paises.forEach(pais=>{
  let option = document.createElement('option');
  option.value = pais;
  option.innerText = pais;
  select.appendChild(option)
})

//change
select.addEventListener('change',()=>{
    let option= select.options[select.selectedIndex].value;
    console.log(option);
    mensaje.innerHTML= `<h3>Seleccionaste ${option}</h3>`
})
//evento input
inputSearch.addEventListener('input',()=>{
  const encontrado = buscarServicio(servicios,inputSearch.value.toLowerCase())
  console.log(encontrado);
});

const formulario=document.querySelector('form')


formulario.addEventListener('submit',(e)=>{
e.preventDefault()
//console.log(e.target);
let formu= e.target
//console.log("formulario enviado");
console.log(formu);
console.log(formu.children[0].value)
console.log(formu.children[1].value)
console.log(formu.children[2])
})