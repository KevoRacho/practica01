/* Anteriormente se habrían declarado estas variables, pero con la funcion asignarTexto podemos reducir código, lo dejo apra que no olvide otra manera en cual se puede hacer, pero menos optimizada.
let titulo = document.querySelector('h1');
let parrafo = document.querySelector('p');
titulo.innerHTML = 'Bienvenido a juego del número secreto.';
parrafo.innerHTML = 'Indica un número del 1 al 10: ';*/

let numeroSecreto = 0;
let numeroIntentos = 1;
let rango = 0;
let listaDeNumerosSorteados = [];

//console.log(numeroSecreto);

function asignarTexto (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    /* Estos console los ocupamos para verificar los tipos de datos.
    console.log(numeroUsuario);
    console.log(typeof(numeroUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroUsuario === numeroSecreto);*/
    if (numeroUsuario === numeroSecreto) {
        asignarTexto ('p', `Acertaste al número secreto! y sólo te tomo ${numeroIntentos} ${numeroIntentos === 1 ? 'intento' : 'intentos'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (numeroUsuario > numeroSecreto) {
        asignarTexto ('p', 'Haz errado, el numero secreto es menor');
        }else {
            asignarTexto ('p', 'Haz errado, el numero secreto es mayor');
        }
        numeroIntentos ++;
        limpiarCaja ();

    return; 
}

function limpiarCaja () {
    //A continuación, se muestra otro método para obtener un elemento por id, mediante el uso de querySelector y el caracter "#" antes de llamar el id.
    document.querySelector('#valorUsuario').value = "";
}

function reiniciarJuego (){
    limpiarCaja ();
    condicionesInciales ();
}

function generarNumeroSecreto () {
    let numeroSorteado = Math.floor(Math.random()*10)+1;
    console.log(numeroSorteado)
    if (listaDeNumerosSorteados.includes(numeroSorteado)){
    return generarNumeroSecreto();
    } else {
        listaDeNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    } 
}

function condicionesInciales () {
    asignarTexto ('h1', 'Juego del número secreto!');
    asignarTexto ('p', 'Dame un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto ();
    numeroIntentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');       
}

condicionesInciales ();