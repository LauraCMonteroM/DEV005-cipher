const cipher = {
    // Cifrado
    encode: function (string, offset)
    {
      let resultado = "";
      for (let letra = 0; letra < string.length; letra++)
      {
        let codigoAscii = string.charCodeAt(letra)
        let codigoCifrado;
        if (codigoAscii >= 65 && codigoAscii <=90)
          {
            codigoCifrado = ((codigoAscii + offset - 65) % 26 ) + 65;
          }
        else {
          codigoAscii = codigoCifrado;
        }
        resultado += string.fromCharCode(codigoCifrado);
      }
      return resultado;
    }        
}    
  
  