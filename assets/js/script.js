/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const nome = 'Mario';
const cognome = 'Rossi';
console.log('Ciao mi chiamo ' + nome + ' ' + cognome);

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 10;
let b = 5;
console.log(a + ' + ' + b + ' = ' + (a + b));
console.log(a + ' - ' + b + ' = ' + (a - b));
console.log(a + ' * ' + b + ' = ' + (a * b));
console.log(a + ' / ' + b + ' = ' + (a / b));
console.log(a + ' % ' + b + ' = ' + (a % b));
console.log(a + ' ** ' + b + ' = ' + (a ** b));

/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const annoNascita = 2002;
const annoCorrente = 2026;
console.log('La tua età ad oggi è ' + (annoCorrente - annoNascita) + ' anni');
console.log('Tra 10 anni avrai ' + ((annoCorrente - annoNascita) + 10) + ' anni');
console.log('5 anni fa avevi ' + ((annoCorrente - annoNascita) - 5) + ' anni');

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let eta;
eta = 24;
let maggiorenne;
if (eta >= 18) {
   maggiorenne = true;
} else {
   maggiorenne = false;
}
console.log('Età: ' + eta + ' - Maggiorenne: ' + maggiorenne);

/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let string = 'stringa';
let num = 1;
let condizione = true;
let vuoto = null;
let indefinita;
console.log('string è di tipo: ' + typeof (string));
console.log('num è di tipo: ' + typeof (num));
console.log('condizione è di tipo: ' + typeof (condizione));
console.log('vuoto è di tipo: ' + typeof (vuoto));
console.log('indefinita è di tipo: ' + typeof (indefinita));

/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 5;
let stringa = '5';
console.log(stringa == numero);
console.log(stringa === numero);
/* Con l'operatore == si confrontano sia il tipo della variabile e sia il contenuto, il confornto risulta true solo se almeno una delle due condizioni è uguale tra le due variabili. 
Invece, con l'operatore === si confrontano sempre sia il tipo della variabile e sia il contenuto, ma il confornto risulta true solo se tutte e due le condizioni risultano uguali tra le due variabili. *\

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3
   - "5" - 3
   - true + 1
   - "10" * "2"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* Il risultato di "5" + 3 sarà: 53
Il risultato di "5" - 3 sarà: 2
Il risultato di true + 1 sarà: 2
Il risultato di "10" * "2" sarà: 20*/
console.log("5" + 3);
console.log("5" - 3);
console.log(true + 1);
console.log("10" * "2");

/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n = 24;
if (n % 2 === 0) {
   console.log('n è pari: true');
} else {
   console.log('n è pari: false');
}
if (n % 3 === 0) {
   console.log('n è divisibile per 3: true');
} else {
   console.log('n è divisibile per 3: false');
}
if (n % 2 === 0 && n % 3 === 0) {
   console.log('n è pari e divisibile per 3: true');
} else {
   console.log('n è pari e divisibile per 3: false');
}

/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const l1 = 10;
const l2 = 10;
const l3 = 10;
if (l1 === l2 && l2 === l3 && l1 === l3) {
   console.log('Triangolo equilatero, perimetro ' + (l1 + l2 + l3) + 'cm');
} else if (l1 === l2 || l2 === l3 || l1 === l3) {
   console.log('Triangolo isoscele, perimetro ' + (l1 + l2 + l3) + 'cm');
} else {
   console.log('Triangolo scaleno, perimetro ' + (l1 + l2 + l3) + 'cm');
}
