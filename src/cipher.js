



const cipher = {
   encode:function (offset,string) {
      let resultar="";
      let letras=0;
      while (letras <= string.length){
      let letra= string.charCodeAt(letras);
          letras++;
      let cifra=(Number(letra)-65+Number(offset))%26+65;
      let camb=String.fromCharCode(cifra);   
      resultar+=camb; 
      }
  return resultar;
}
};
//var resultado= cipher.encode(prompt("xxxx"),Number(prompt("xxx")));
//console.log(resultado);

export default cipher;

