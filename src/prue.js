   //let mensaje=document.getElementById("escribir").value //typeof mensaje: undefined
   let mensaje =prompt("Tu mensaje es: "); //typeof mensaje: consola undefined
   document.getElementById("escribir").value ="Escribiste: " + mensaje;
   let position =prompt("Tu clave es: ");
   document.getElementById("clave").value ="El desplazamiento es: " + position;
   
   console.log(mensaje);
   let resultar="";
   let letras=0;
   while (letras <= mensaje.length){
   let letra= mensaje.charCodeAt(letras);
       letras++;
     //console.log(letra);
     //console.log(typeof mensaje);
   let cifra=(Number(letra)-65+Number(position))%26+65;
     //console.log(String.fromCharCode(cifra));
   let camb=String.fromCharCode(cifra);
       // console.log(camb.concat(camb[1]));    
   resultar+=camb; 
   }
   console.log(resultar);
   alert(resultar);
   document.getElementById("resultado").value ="Tu mensaje cifrado es: " + resultar;
   


