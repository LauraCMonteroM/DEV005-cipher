import cipher from './cipher.js';

//Elementos del DOM en variables
    const mensajeaCifrar = document.getElementById('txtacifrar')
    const mensajeaDescifrar = document.getElementById('txtadcifrar')
    const btnCifrar = document.getElementById('cifrar')
    const btnDescifrar = document.getElementById('dcifrar')
    const desplCifrar = document.getElementById('cifraroffset')
    const desplDcifrar = document.getElementById('dcifraroffset')
    const resultadoCifrar = document.getElementById ('muestra-cifrado')
    const resultadoDescifrar = document.getElementById ('muestra-descifrado')

//Funciones que interactúan con el DOM
    function mostrarCifrado()
    {
        const mensajeaCifrar = document.getElementById('txtacifrar').value
        const desplCifrar = document.getElementById('cifraroffset').value
        //función que me muestre el cifrado en el div .cipher.encode(offset, string)
        resultadoCifrar.innerHTML = cipher.encode(mensajeaCifrar, desplCifrar);
    }

    function mostrarDescifrado()
    {
        const mensajeaDescifrar = document.getElementById('txtadcifrar').value
        const desplDcifrar = document.getElementById('dcifraroffset').value
        //función que me muestre el cifrado en el div .cipher.encode(offset, string)
        //resultadoDescifrar.innerHTML = cipher.decode(mensajeaDescifrar, desplDcifrar)
    }

//Eventos del DOM
    btnCifrar.addEventListener('click', mostrarCifrado)

    btnDescifrar.addEventListener('click' , mostrarDescifrado)


console.log(cipher);





