import cipher from './cipher.js';   //Siempre import va al inicio

//BOTONES PAGE 2 Contenedor 2
let cipherCesar=document.getElementById("buttonCifrar");
cipherCesar.addEventListener("click",mostrarPrompt);
function mostrarPrompt(){
    let mensajeCifrar=prompt("Mensaje a Cifrar: ");
    let desplazamiento=prompt("Cada letra será reemplazada según este número fijo de posiciones. Desplazamiento:");
    let resultado= cipher.encode(Number(desplazamiento),mensajeCifrar);
    document.getElementById("resumen").value= "Tu mensaje para cifrar fue: "+"\n" + mensajeCifrar +"\n" +"\n" + " Con un desplazamiento de:" +"\n"+ desplazamiento +  " position(s).";
    document.getElementById("resultado").value= "Tu mensaje cifrado es: "+"\n" + resultado;
}

let decipherCesar=document.getElementById("buttonDescifrar");
decipherCesar.addEventListener("click",mostrarPromptDes);
function mostrarPromptDes(){
    let mensajeDescifrar=prompt("Mensaje a Descificar: ");
    let retrocede=prompt("Cada letra será reemplazada según este número fijo de posiciones. Desplazamiento:");
    let resultado= cipher.decode(Number(retrocede),mensajeDescifrar);
    document.getElementById("resumen").value= "Tu mensaje para descifrar fue: "+"\n" + mensajeDescifrar +"\n" +"\n" + " Con un desplazamiento de:" +"\n"+ retrocede +  " position(s).";
    document.getElementById("resultado").value= "Tu mensaje descifrado es: "+"\n" + resultado;
}

let borrar=document.getElementById("buttonClear");
borrar.addEventListener("click",borrarTextarea);
function borrarTextarea(){
    document.getElementById("resumen").value= "";
    document.getElementById("resultado").value= "";
}





// BOTONES PAGE 2 Contenedor 1
//Botón Emoji Asustado de person1 (Mata Hari - Mh)
var Mh1=document.getElementById("buttonM1");
Mh1.addEventListener("click",funcionMh1);
function funcionMh1(){
    alert("En enero de 1917, el Mayor Kalle transmitió mensajes de radio a Berlín describiendo las actividades de una espía alemana con el nombre H-21 (código). Los mensajes estaban cifrados con un código que la inteligencia alemana sabía que los franceses ya habían descifrado, lo que sugiere que los mensajes fueron ideados con la intención de exponerla para que sea arrestada por los franceses. Fue ejecutada el 15 de octubre de 1917.");
} 
//Botón Emoji heart de person1 (Mata Hari - Mh)
var Mh2=document.getElementById("buttonM2");
Mh2.addEventListener("click",funcionMh2);
function funcionMh2(){
    alert("«No sé si en el futuro se me recordará, pero si así fuera, que nadie me vea como a una víctima sino como alguien que nunca dejó de luchar con valentía y pagó el precio que le tocó pagar»");
} 
//Botón Emoji sorprendido de person1 (Mata Hari - Mh)
var Mh3=document.getElementById("buttonM3");
Mh3.addEventListener("click",funcionMh3);
function funcionMh3(){
    alert("Se han producido series, películas y libros sobre su vida. Además de canciones y una aventura gráfica para PC (videojuegos).");
}


// BOTONES PAGE 2 Contenedor 3
//Botón Emoji Asustado de person2 (Maria Estuardo - Me)
const Me1=document.getElementById("button1");
Me1.addEventListener("click",funcionMe1);
function funcionMe1(){
  return  alert("Fue condenada a muerte por conspirar contra su prima y murió en Inglaterra como una mártir católica. El origen fue la conspiración liderada por Anthony Babington cuyo fin era matar a la reina Isabel I. El servicio de contraespionaje de la corona inglesa obtuvo cartas en las que ella estaba al tanto de todo y lo aprobaba (aún hay controversia en relación a la veracidad de las cartas). En la redacción los conspiradores sustituían las letras por otras (cifrado), y algunas palabras se sustituían por símbolos (codificación).");
} 
//Botón Emoji heart de person2 (Maria Estuardo - Me)
const Me2=document.getElementById("button2");
Me2.addEventListener("click",funcionMe2);
function funcionMe2(){
    alert("«...¿Creéis que denigraré mi posición, mi estatus, la familia de la que vengo... al aceptar tal requerimiento? ¡No! ¡Nunca! Por más torcido que parezca, mi corazón es firme y no sufrirá ninguna humillación»...«Mirad vuestras conciencias y recordad que el teatro mundial es más amplio que el reino de Inglaterra»");
} 
//Botón Emoji sorprendido de person2 (Maria Estuardo - Me)
const Me3=document.getElementById("button3");
Me3.addEventListener("click",funcionMe3);
function funcionMe3(){
    alert("Escritores y cineastas han usado la poesía, teatro, ópera y cine para retratar su historia. Una de sus últimas adptaciones tuvo 3 nominaciones a los Premios BAFTA 2019 y 2 nominaciones a los Premios Oscar 2019.");
}

