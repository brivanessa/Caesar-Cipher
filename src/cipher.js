
const cipher = {                          
   encode:function (offset,string) {     
      let resultar="";
      let letras=0;
      let stringMayus=string.toUpperCase();
      while (letras < stringMayus.length)  {
        let letra= string.charCodeAt(letras);
        letras++;
       let camb=0;
          if (((Number(letra))>=97) && ((Number(letra))<=122)) {
              camb=String.fromCharCode(((Number(letra))-97+(Math.abs(offset)))%26+97);
          } else if ((Number(letra)>=65) && (Number(letra)<=90)) {
              camb=String.fromCharCode(((Number(letra))-65+(Math.abs(offset)))%26+65);
          } else {
              camb=String.fromCharCode(Number(letra));
          }
        resultar+=camb; 
      }
      return resultar;  
    },

    decode:function (offset,string) {                    
      let resultar="";
      let letras=0;
      let stringMayus=string.toUpperCase();
      while (letras < stringMayus.length)  {
        let letra= string.charCodeAt(letras);
        letras++;
        let camb="";
          if ((Number(letra)>=65) && (Number(letra)<=90)) {
            camb=String.fromCharCode(((Number(letra)-65)+(26 -(Math.abs(offset)%26)))%26+65);
          } else if ((Number(letra)>=97) && (Number(letra)<=122)) {
            camb=String.fromCharCode(((Number(letra)-97)+(26 -(Math.abs(offset)%26)))%26+97);
          } else {
             camb=String.fromCharCode(Number(letra));
          }
        resultar+=camb; 
      }
      return resultar;  
    },
};

export default cipher; //siempre export va al final

