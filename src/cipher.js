const cipher = {
  // Cifrado
  encode: function (texto, offset) {
    let resultado1 = "";
    for (let i = 0; i < texto.length; i++) {
      const textoMayus = texto.toUpperCase();
      let codigoAscii = textoMayus.charCodeAt(i);
      if (codigoAscii >= 65 && codigoAscii <= 90) {
        codigoAscii = ((codigoAscii + parseInt(offset) - 65) % 26) + 65;
      }
      resultado1 += String.fromCharCode(codigoAscii);
    }
    return resultado1;
  },  decode: function (texto, offset) {
    let resultado2 = "";
    for (letra = 0; letra < texto.length; letra++) {
      const textoCif = texto.toUpperCase();
      let codigoAscii1 = textoCif.charCodeAt(letra);
      if (codigoAscii1 >= 65 && codigoAscii1 <= 90) {
        codigoAscii1 = ((codigoAscii1 - parseInt(offset) - 65) % 26) + 65;
      }
      resultado2 += String.fromCharCode(codigoAscii1);
    }
    return resultado2;
  },
};

export default cipher;
