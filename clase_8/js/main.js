const productos = [
  { id: 1, nombre: "arroz", precio: 124 },
  { id: 2, nombre: "papa", precio: 90 },
  { id: 3, nombre: "tomate", precio: 204 },
  { id: 4, nombre: "morrón", precio: 870 },
  { id: 5, nombre: "pan", precio: 240 },
  { id: 6, nombre: "fideos", precio: 124 },
  { id: 7, nombre: "fideos", precio: 124 },
  { id: 4, nombre: "morrón", precio: 870 },
  { id: 5, nombre: "pan", precio: 240 },
  { id: 6, nombre: "fideos", precio: 124 },
  { id: 7, nombre: "fideos", precio: 124 },
  { id: 4, nombre: "morrón", precio: 870 },
  { id: 5, nombre: "pan", precio: 240 },
  { id: 6, nombre: "fideos", precio: 124 },
  { id: 7, nombre: "fideos", precio: 124 },
  { id: 4, nombre: "morrón", precio: 870 },
  { id: 5, nombre: "pan", precio: 240 },
  { id: 6, nombre: "fideos", precio: 124 },
  { id: 7, nombre: "fideos", precio: 124 },
  { id: 4, nombre: "morrón", precio: 870 },
  { id: 5, nombre: "pan", precio: 240 },
  { id: 6, nombre: "fideos", precio: 124 },
  { id: 7, nombre: "fideos", precio: 124 },
  { id: 4, nombre: "morrón", precio: 870 },
  { id: 5, nombre: "pan", precio: 240 },
  { id: 6, nombre: "fideos", precio: 124 },
  { id: 7, nombre: "fideos", precio: 124 },
];

/* const personas=["Pedro", 'Jose', "Juan","Lucia","Emiliano", "Belén"]; */

//DOM
/* console.dir(document) 
console.dir(document.head) 
console.dir(document.body)  */

//acceder a los nodos
//porID
const titulo=document.getElementById('titulo');
//console.log(titulo);
//por className
const lista = document.getElementsByClassName('lista');
const pais= document.getElementsByClassName('pais');
const div = document.getElementsByTagName('div');
const h2= document.getElementsByTagName('h2')
console.log(h2[0]);
/* console.log(lista);
console.log(pais);
console.log(div); */

//Como son listas las puedo recorrer
for (const p of pais) {
//  console.log(p.innerHTML);
}
/* 
console.log(lista[0].innerHTML);
console.log(lista[1].innerHTML); */
pais[1].innerHTML="<h1>Uruguay</h1>";


console.log(pais[0].innerText= "ARGENTINA");
//Atributo className

h2[0].className = "box"
//Crear elementos
const parrafo=document.createElement('p')
 parrafo.innerHTML= "<h3>Esto es un nodo creado desde JS</h3>";

 //agregarlo alDOM
 //document.body.append(parrafo)
 div[0].appendChild(parrafo)

 //remover elementos
 parrafo.remove();
 const personas=["Pedro", 'Jose', "Juan","Lucia","Emiliano", "Belén","Eber"];

 console.log(lista);

 for (const persona of personas) {
  const li= document.createElement('li')

  li.innerText= persona;

  lista[1].appendChild(li)
 }

 let producto= {
  nombre:"Papas",
  precio: 230
}

let concatenado = "Nombre producto " 
+ producto.nombre + " su precio es : $ " + producto.precio;
let plantilla= `Nombre producto ${producto.nombre} su precio es : $${producto.precio}`;//interpolacion


console.log(concatenado);
console.log(plantilla);
const inventario= document.getElementById("productos")


for (const producto of productos) {
  console.log(producto);
  const li= document.createElement('li')
    li.innerHTML= `
    <div class="box">
          <h3>${producto.nombre}</h3>
           <p>$${producto.precio}</p>
      </div>
    `;
   inventario.appendChild(li) 

}