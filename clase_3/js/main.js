//let nombreIngresado= prompt('Ingresa tu nombre');
/* let ingresoNumero= parseInt(prompt('Ingresa un número')); */

//for
//i++ -> i = i + 1
/* for(let i=1; i <=3; i++){
console.log("Ya llegamos a la India?");
console.log("No");
}
 */
/* console.log("llegamos"); */
/* 
for(let i= 0; i <=15; i=i+3){
  console.log(i);
}
 */
//regresivo
/* for(let j= 10; j > 0; j--){
  console.log(j);
} */
/* let limite=parseInt(prompt('Ingresa un número limite'));

for(let i= 0; i <=limite; i=i+1){
  console.log(ingresoNumero +" * " + i + " = " + (ingresoNumero * i));
}
 */

/* for(let i=1; i<=3; i++ ){
  let nombre = prompt('Ingresa tu nombre')
  console.log(nombre);
} */

/* let intentos= 3;
let palabraClave= "Bazinga";
//break
for(let i = 1; i<=intentos;i++){

let ingresoUsuario= prompt("ingresa la palabra clave")
 if(ingresoUsuario === palabraClave){
  console.log("Acertaste");
  break;
 }
} */

//continue
/* for (let i = 1; i <= 30; i++) {
    if(i % 3 == 0 || i % 5 == 0 ){
     // console.log("🤪​ Bazinga!");
        continue
    }
  console.log(i);
} */

//while

let condicion = true;
/* while (condicion) {
  console.log("Soy un bucle while");
  //condicion de salida
  condicion = false;
} */

/* let ingresarEdad = parseInt(prompt("ingresa tu edad"));

while (ingresarEdad < 16) {
  console.log("no tenes edad para votar en Argentina");
  ingresarEdad = parseInt(prompt("ingresa tu edad"));
}
 */

/* let continuar = true;
let palabraClave = "Bazinga";
let ingreso = prompt("Ingresa la palabra clave");

while (continuar) {
  if (ingreso === palabraClave) {
    console.log("Acertaste");
    continuar = false;
    break;
  }
  console.log("Volve a intentar");
  ingreso = prompt("Ingresa la palabra clave");
} */

//do while
let booleano = 5 < 4;
let condicion2 = false;

/* while (condicion2) {
  console.log("Soy un while");
} */
/* do {
  //codigo a ejecutar
  console.log("Me ejecuto aunque sea una vez");
} while (condicion2); */

console.log("Fin");

let opcion = prompt("Elegí una opción: \n1 - Té \n2 - Café \n3 - Chocolate");
/* if (opcion == "1") {
  alert("Elegiste un té");
} else if (opcion == "2") {
  alert("Elegiste un café");
} else if (opcion == "3") {
  alert("Elegiste un chocolate");
} else {
  alert("Elegiste una opción inválida");
} */
//switch

switch (opcion) {
  case "1":
    console.log("Elegiste un te");
    break;
  case "2":
    console.log("Elegiste un cafe");
    break;
  case "3":
    console.log("Elegiste un chocolate");
    break;

  default:
    console.log("Opcion no valida");
    break;
}
