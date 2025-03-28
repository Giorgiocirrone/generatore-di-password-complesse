/**
 * Generatore di password complesse
 * creare un generatore di passowrd complesse
 * 
 */

/**
 * Step1 
 * Prendere tutti gli elementi dal Dom
 */

/**
 * Step 2 
 * creare tutte le variabili 
 */

/**
 * Step 3 impostare tutta la logica con un ciclo 
 */


/**
 * Step 4 
 * collegare all'evento del bottone
 */


const lungehzzaPassword = document.getElementById('lunghezza');
const caratteriMinuscoli = document.getElementById('caratteri-minuscoli');
const caratteriMaiuscoli = document.getElementById('caratteri-maiuscoli');
const caratteriNumerici = document.getElementById('caratteri-numerici');
const caratteriSpeciali = document.getElementById('caratteri-speciali');
const btnGenera = document.getElementById('btn-genera');
const risultatoDiv = document.getElementById('risultato');

/**
 * Inizio indroduzione logica di stistema 
 */


const listaCaratteriMaiuscoli = 'ABCDEFGHIJKLMNOPQRSTUVWXY';
const listaCaratteriMinuscoli = 'abcdefghijklmnopqrstuvwxyz';
const listaCarattriNumerici = '0123456789';
const listaCaratteriSpeciali = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~)";


btnGenera.addEventListener('click',generaPassword);

function generaPassword() {

    let stringaIniziale = '';
    let risultato = '';
    if (caratteriMaiuscoli.checked) {
        stringaIniziale += listaCaratteriMaiuscoli;

    }
    if (caratteriMinuscoli.checked) {
        stringaIniziale += listaCaratteriMinuscoli;
    }
    if (caratteriNumerici.checked) {
        stringaIniziale += listaCarattriNumerici;
    }

    if (caratteriSpeciali.checked) {
        stringaIniziale += listaCaratteriSpeciali;
    }



    for (let i = 0; i < lungehzzaPassword.value; i++) {
        risultato += stringaIniziale.charAt(
            Math.floor(Math.random() * stringaIniziale.length)
        );


        risultatoDiv.textContent = '';
        risultatoDiv.textContent = risultato;

    }
}