

import cipher from './cipher.js';

console.log(cipher);

// BOTONES PAGE 1
///function mensaje1(){alert("vvvvvvvvvv")} //es para con onclick pero en este js no funciona (si funciona en script.js)
//Botón Emoji Foquito 1
var idea1=document.getElementById("buttonIdea1"); //estaba trabajando con onclic pero no funciona en este index.js pero si creo otro js si funciona (la diferencia es el tipo- este js es de tipo modulo)
idea1.addEventListener("click", funcion1); //no puedo poner un alert dentro de add Event listener porque no lo reconoce y el alert sale al inicio y no cuando hago clic
function funcion1(){
  alert("¿QUÉ ES EL CIFRADO POR SUSTITUCIÓN?"+"\n"+"Es un tipo de cifrado en el que cada letra del texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.");
}
//Botón Emoji Foquito 2
var idea2=document.getElementById("buttonIdea2");
idea2.addEventListener("click",funcion2);
function funcion2(){
    alert("¿QUÉ ES EL CIFRADO CÉSAR?"+"\n"+"El cifrado César es una de las técnicas más simples para cifrar un mensaje y uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.");
}


// BOTONES PAGE 2 Contenedor 1
//Botón Emoji Asustado de person1 (Mata Hari - Mh)
var Mh1=document.getElementById("buttonMh1");
Mh1.addEventListener("click",funcionMh1);
function funcionMh1(){
    alert("En enero de 1917, el Mayor Kalle transmitió mensajes de radio a Berlín describiendo las actividades útiles de un espía alemán con el nombre en código H-21. Los mensajes estaban cifrados con un código que la inteligencia alemana sabía que los franceses ya habían roto, lo que sugiere que los mensajes fueron ideados con la firme intención de exponerla para que fuera arrestada por los franceses. Fue ejecutada el 15 de octubre de 1917.");
} 
//Botón Emoji heart de person1 (Mata Hari - Mh)
var Mh2=document.getElementById("buttonMh2");
Mh2.addEventListener("click",funcionMh2);
function funcionMh2(){
    alert("«No sé si en el futuro se me recordará, pero si así fuera, que nadie me vea como a una víctima sino como a alguien que nunca dejó de luchar con valentía y pagó el precio que le tocó pagar»");
} 
//Botón Emoji sorprendido de person1 (Mata Hari - Mh)
var Mh3=document.getElementById("buttonMh3");
Mh3.addEventListener("click",funcionMh3);
function funcionMh3(){
    alert("Se han producido series, peliculas y libros sobre su vida. Además de canciones y una aventura gráfica para PC (videojuegos).");
}
//Botón Emoji trailer de person1 (Mata Hari - Mh)



// BOTONES PAGE 2 Contenedor 3
//Botón Emoji Asustado de person1 (Maria Estuardo - Me)
var Me1=document.getElementById("buttonMe1");
Me1.addEventListener("click",funcionMe1);
function funcionMe1(){
    alert("Fue condenada a muerte por conspirar contra su prima, y murió en Inglaterra como una mártir católica. El origen fue la conspiración encabezada por Anthony Babington cuyo fin era matar a la reina Isabel I y sustituirla por ella. El servicio de contraespionaje de la reina inglesa obtuvo cartas en las que ella estaba al tanto de todo y lo aprobaba, aunque aún hay controversia en relación a las cartas y su veracidad. En la redacción los conspiradores sustituían las letras por otras (cifrado), y algunas palabras se sustituían por símbolos (codificación).");
} 
//Botón Emoji heart de person1 (Maria Estuardo - Me)
var Me2=document.getElementById("buttonMe2");
Me2.addEventListener("click",funcionMe2);
function funcionMe2(){
    alert("«...¿Creéis que denigraré mi posición, mi estatus, la familia de la que vengo... al aceptar tal requerimiento? ¡No! ¡Nunca! Por más torcido que parezca, mi corazón es firme y no sufrirá ninguna humillación»...«Mirad vuestras conciencias y recordad que el teatro mundial es más amplio que el reino de Inglaterra»");
} 
//Botón Emoji sorprendido de person1 (Maria Estuardo - Me)
var Me3=document.getElementById("buttonMe3");
Me3.addEventListener("click",funcionMe3);
function funcionMe3(){
    alert("Pocas figuras históricas han fascinado tanto a académicos, escritores y cineastas. A lo largo de cuatro siglos, la poesía, teatro, ópera y cine han mantenido vivo su recuerdo.");
}
//Botón Emoji trailer de person1  (Maria Estuardo - Me)