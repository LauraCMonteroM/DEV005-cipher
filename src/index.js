import cipher from './cipher.js';

//Elementos del DOM en variables
    const mensajeaCifrar = document.getElementById('txtacifrar')
    const mensajeaDescifrar = document.getElementById('txtadcifrar')
    const btnCifrar = document.getElementById('cifrar')
    const btnDescifrar = document.getElementById('dcifrar')
    const desplCifrar = document.getElementById('cifraroffset')
    const desplDcifrar = document.getElementById('dcifraroffset')

//Funciones que interactúan con el DOM
    function mostrarCifrado()
    {
        const mensajeaCifrar = document.getElementById('txtacifrar').value
        const desplCifrar = document.getElementById('cifraroffset').value
        //función que me muestre el cifrado en el div
    }

    function mostrarDescifrado()
    {
        const mensajeaDescifrar = document.getElementById('txtadcifrar').value
        const desplDcifrar = document.getElementById('dcifraroffset').value
        //función que me muestre el descifrado en el div
    }

//Eventos del DOM
    btnCifrar.addEventListener('click', mostrarCifrado)

    btnDescifrar.addEventListener('click' , mostrarDescifrado)


console.log(cipher);





