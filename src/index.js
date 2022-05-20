

import cipher from './cipher.js';

console.log(cipher);


///function mensaje1(){alert("vvvvvvvvvv")} //es para con onclick pero en este js no funciona (si funciona en script.js)

var idea1=document.getElementById("buttonIdea1"); //estaba trabajando con onclic pero no funciona en este index.js pero si creo otro js si funciona (la diferencia es el tipo- este js es de tipo modulo)
idea1.addEventListener("click", funcion1); //no puedo poner un alert dentro de add Event listener porque no lo reconoce y el alert sale al inicio y no cuando hago clic
function funcion1(){
  alert("¿QUÉ ES EL CIFRADO POR SUSTITUCÓN?"+"\n"+"Es un tipo de cifrado en el que cada letra del texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.");
}

var idea2=document.getElementById("buttonIdea2");
idea2.addEventListener("click",funcion2);
function funcion2(){
    alert("¿QUÉ ES EL CIFRADO CÉSAR?"+"\n"+"El cifrado César es una de las técnicas más simples para cifrar un mensaje y uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.");
}

 