
const cipher = {                          //Es un objeto - siempre con const
   encode:function (offset,string) {      //El objeto cipher tiene 2 métodos - Método encode
      let resultar="";
      let letras=0;
      let stringMayus=string.toUpperCase();
      //console.log(stringMayus);
      while (letras < stringMayus.length)  {
        //this.string=string.toUpperCase(); // this es para llamar var que estan dentro de un elemento
        let letra= string.charCodeAt(letras);
        letras++;
       let camb=0;
       // let cifra;
          if (((Number(letra))>=97) && ((Number(letra))<=122)) {
              camb=String.fromCharCode(((Number(letra))-97+(Math.abs(offset)))%26+97);
              //let camb=String.fromCharCode(cifra);
            } else if ((Number(letra)>=65) && (Number(letra)<=90)) {
              camb=String.fromCharCode(((Number(letra))-65+(Math.abs(offset)))%26+65);
              //let camb=String.fromCharCode(cifra); 
            } else {
              camb=String.fromCharCode(Number(letra));
            }
      //console.log(camb);
        resultar+=camb;  // += es un operador aritmetico (resultar=resultar+camb)
      //console.log(typeof(resultar));
      }
       //console.log(typeof(offser));
      // console.log(typeof(stringMayusc));
      return resultar;  
    },

    decode:function (offset,string) {                        //El objeto cipher tiene 2 métodos - Método encode
      let resultar="";
      let letras=0;
      let stringMayus=string.toUpperCase();
      //console.log(stringMayus);
      while (letras < stringMayus.length)  {
        //this.string=string.toUpperCase(); // this es para llamar var que estan dentro de un elemento
        let letra= string.charCodeAt(letras);
        letras++;
        let camb="";
          if ((Number(letra)>=65) && (Number(letra)<=90)) {
            camb=String.fromCharCode(((Number(letra)-65)+(26 -(Math.abs(offset)%26)))%26+65);
            //camb=String.fromCharCode(cifra); 
          } else if ((Number(letra)>=97) && (Number(letra)<=122)) {
            camb=String.fromCharCode(((Number(letra)-97)+(26 -(Math.abs(offset)%26)))%26+97);
              //camb=String.fromCharCode(cifra);
               } else {
             camb=String.fromCharCode(Number(letra));
            }
      //console.log(camb);
        resultar+=camb; 
      }
      return resultar;  
    },
};
export default cipher; //siempre export va al final

