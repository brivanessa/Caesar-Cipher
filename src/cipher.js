


const cipher = {
   encode:function (offset,string) {
      let resultar="";
      let letras=0;
      let stringMayus=string.toUpperCase();
      console.log(stringMayus);
      while (letras < string.length)  {
        //this.string=string.toUpperCase();
        let letra= stringMayus.charCodeAt(letras);
          letras++;
        let camb;
          if ((Number(letra)<65) || (Number(letra)>90)) {
            camb=String.fromCharCode(Number(letra));
          } else {
           let  cifra=(Number(letra)-65+Number(offset))%26+65;
            camb=String.fromCharCode(cifra); 
          }
      //console.log(camb);
        resultar+=camb; 
      //console.log(typeof(resultar));
      }
   if(typeof(Number(offset))==='number' && typeof(string)==='string') return resultar ; 
 //console.log(resultar);
//return  "HIJKLMNOPQRSTUVWXYZABCDEFG";

}
};
//var resultado= cipher.encode(Number(prompt("offset")),prompt("string"));
//console.log(resultado);

export default cipher;

