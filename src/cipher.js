const cipher = {
  // Cifrado
  encode: function (offset, texto) {
    const newOffset = parseInt(offset)
    let resultado1 = "";
    for (let i = 0; i < texto.length; i++) {
      const textoMayus = texto.toUpperCase();
      let codigoAscii = textoMayus.charCodeAt(i);
      if (codigoAscii >= 65 && codigoAscii <= 90) {
        codigoAscii = ((codigoAscii + newOffset - 65) % 26) + 65;
      }
      resultado1 += String.fromCharCode(codigoAscii);
    }
    return resultado1;
  },
  decode: function (offset, texto) {
    const realOffset = parseInt(offset);
    let resultado2 = "";
    for (let letra = 0; letra < texto.length; letra++) {
      let codigoAscii1 = texto.charCodeAt(letra);
      if (codigoAscii1 >= 65 && codigoAscii1 <= 90) {
        codigoAscii1 = ((codigoAscii1 - 65 - realOffset) % 26 + 26) % 26 + 65;
      }
      resultado2 += String.fromCharCode(codigoAscii1);
    }
    return resultado2;
  },
};

export default cipher;
