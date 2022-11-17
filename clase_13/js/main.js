document.title = "Clase 13 | Comisión 34065";
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2#secundario");

titulo.innerText = "Clase 13";
tituloSecundario.innerText = "Librerías";
const btnSwal = document.getElementById("botonSwal"),
  btnToast = document.getElementById("botonToast"),
  horaActual = document.querySelector("#horaActual");

const cardNumber = document.querySelector("#card-number"),
  icons = document.querySelectorAll(".fa-brands");
/* //rest params
const numeros= [1,3,2,45,8,5,0]
console.log(...numeros);

function sumar(...nums){
  //console.log(nums);
return nums.reduce((acc,num)=>{
  return acc + num
},0)
}
console.log(sumar(1,3,4,2,6))
console.log(sumar(1,3,4)) */

btnSwal.addEventListener("click", () => {
  Swal.fire({
    title: 'Estas seguro?',
    text: "Esta accion no se puede deshacer!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: 'teal',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Dale, no me preguntes!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Borrado!',
        'Your file has been deleted.',
        'success'
      )
      //ejecutar la funcion que borra
      console.log('Borrado');
    }
  })
 /*  if(user.value=== userbd &&  pass.value === passbd){
    Swal.fire({
      icon: "success",
      title: "inicio exitoso",
      text: "Serás redirigido en 5,4,3,!",
    });
  }else{
    Swal.fire({
      icon: "error",
      title: "Error al iniciar",
      text: "Serás redirigido en 5,4,3,!",
    });
  } */
});

btnToast.addEventListener('click',()=>{
  Toastify({
    text: "Producto agregado con exito",
    duration: 3000,
    //destination: "https://github.com/apvarun/toastify-js",
    //newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){ console.log("hola"); } // Callback after click
  }).showToast();
})

//luxon
const DateTime= luxon.DateTime;

//console.log(DateTime.now());
let ahora= DateTime.now()

/* console.log(ahora);
console.log(ahora.toString());
console.log(ahora.toLocaleString());
console.log(ahora.toLocaleString(DateTime.DATE_FULL));
console.log(ahora.setLocale('ru').toLocaleString(DateTime.DATE_FULL));
console.log(ahora.toLocaleString(DateTime.TIME_SIMPLE)); */
horaActual.value= ahora.toLocaleString(DateTime.TIME_SIMPLE)

const btnCalcular = document.getElementById("calcular");
let dates = document.querySelectorAll('input[type="date"]');
let inicio = DateTime.now().toFormat("yyyy-MM-dd");
let fin = DateTime.now().plus({ months: 4 }).toFormat("yyyy-MM-dd");

dates.forEach(el=>{
  el.setAttribute('min', inicio);
  el.setAttribute('max',fin);
})
function calcularEstadia(checkIn, checkOut) {
  let total = checkOut.diff(checkIn);
  return total.as("days");
}

function calcularPrecioTotal(estadia, precio) {
  return estadia * precio;
}
btnCalcular.addEventListener('click', ()=>{
  let checkIn = DateTime.fromISO(document.getElementById("checkIn").value);
  let checkOut = DateTime.fromISO(document.getElementById("checkOut").value);

  let estadia= calcularEstadia(checkIn,checkOut);
  let precioTotal= calcularPrecioTotal(estadia, 2000)
  Swal.fire({
    title: "Resultado",
    text: `Tu estadía de ${estadia} días tiene un precio total de $${precioTotal}`,
    icon: "info",
    iconColor: "#00ff00",
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
    position: "top-center",
    backdrop: "#445566aa",
  });


})

new Cleave("#card-number",{
  creditCard:true,
  onCreditCardTypeChanged: function (type) {
    // update UI ...
    console.log(type);
    switch (type) {
      case "visa":
        document.querySelector(".fa-cc-visa").classList.add("active");
        break;
      case "amex":
        document.querySelector(".fa-cc-amex").classList.add("active");
        break;
      case "diners":
        document.querySelector(".fa-cc-diners-club").classList.add("active");
        break;
      case "mastercard":
        document.querySelector(".fa-cc-mastercard").classList.add("active");
        break;
      default:
        if (type === "unknown") {
          icons.forEach((icon) => icon.classList.remove("active"));
        }
        break;
    }
}
})
