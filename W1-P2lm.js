/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

//Per scrivere un algoritmo per trovare il numero più grande tra due numeri interi :

function trovaIlPiuGrande(num1, num2) {
  if (num1 > num2) {   //La condizione if (num1 > num2) verifica se il primo numero è maggiore del secondo//
    return num1;       // Se la condizione è vera, la funzione restituisce il valore del primo numero.
  } else {
    return num2;  ////Altrimenti, la funzione restituisce il valore del secondo numero.//
  }
}

//Per chiamare questa funzione passando due numeri come argomenti, ad esempio:

console.log(trovaIlPiuGrande(10, 5)); // stampa 10
console.log(trovaIlPiuGrande(20, 25)); // stampa 25

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

//Per scrivere un algoritmo che mostra "not equal" in console se un numero intero fornito è diverso da 5 in JavaScript:

function controllaSeUguale(num) {  //La funzione controllaSeUguale() accetta un argomento num che rappresenta il numero da verificare.
  if (num !== 5) {    //Utilizza l'operatore di confronto "non uguale a" (!==) per verificare se il numero è diverso da 5
    console.log("not equal"); //Se la condizione è vera, viene stampato "not equal" in console. Altrimenti, non viene eseguita alcuna azione.
  }
}

//per richiamare questa funzione passando un numero come argomento, ad esempio:

controllaSeUguale(3); // stampa "not equal"
controllaSeUguale(5); // non viene stampato nulla
controllaSeUguale(10); // stampa "not equal"

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

//per scrivere un algoritmo che mostra "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 :

function controllaSeDivisibilePerCinque(num) { //La funzione controllaSeDivisibilePerCinque() accetta un argomento num che rappresenta il numero da verificare.
  if (num % 5 === 0) {  //Utilizza l'operatore di modulo (%) per verificare se il numero è perfettamente divisibile per 5.
    console.log("divisible by 5");  //Se il resto della divisione è uguale a 0, viene stampato "divisible by 5" in console. Altrimenti, non viene eseguita alcuna azione. L'operatore di modulo restituisce il resto della divisione di un numero per un altro. Ad esempio, 10 % 3 restituisce 1, poiché 3 può essere diviso una volta perfettamente in 10, con un resto di 1.
  }
}

//Puoi chiamare questa funzione passando un numero come argomento, ad esempio:

controllaSeDivisibilePerCinque(10); // stampa "divisible by 5"
controllaSeDivisibilePerCinque(15); // stampa "divisible by 5"
controllaSeDivisibilePerCinque(20); // stampa "divisible by 5"
controllaSeDivisibilePerCinque(25); // stampa "divisible by 5"

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

//Per scrivere un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8 :

function controllaSeUgualeAOtto(num1, num2) {  //La funzione controllaSeUgualeAOtto() accetta due argomenti num1 e num2 che rappresentano i due numeri da verificare. (dichiariamo le funzione)
  if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8) { // Utilizza una struttura di controllo if-else con una condizione composta (if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8)) per verificare se uno dei numeri è uguale a 8 o se la loro somma o differenza è uguale a 8
    return true; //L'operatore di OR (||) verifica se almeno una delle condizioni è vera. Se la condizione è vera, la funzione restituisce true. 
  } else {
    return false;  //Altrimenti, la funzione restituisce false
  }
}

//PLUS
//L'operatore di OR (||) in JavaScript è un operatore di confronto che restituisce true se almeno una delle due condizioni è vera, altrimenti restituisce false.

//Ecco un esempio di come puoi utilizzare l'operatore di OR:

if (num1 > num2 || num1 === num2) { //(dichiariamo le funzione)
  // questo codice viene eseguito se la prima condizione (num1 > num2) o la seconda condizione (num1 === num2) sono vere
}

//L'operatore di OR viene spesso utilizzato in combinazione con l'operatore di AND (&&), che restituisce true solo se entrambe le condizioni sono vere. Ad esempio:

if (num1 > 0 && num1 < 10) {
  // questo codice viene eseguito solo se num1 è maggiore di 0 e minore di 10
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

//per scrivere un algoritmo che determina l'ammontare totale che deve essere addebitato all'utente per il checkout in JavaScript:

function calcolaTotaleCheckout(totalShoppingCart) { //La funzione calcolaTotaleCheckout() accetta un argomento totalShoppingCart che rappresenta il totale del carrello dell'utente
  let costoSpedizione;  //Dichiara una variabile locale costoSpedizione
  if (totalShoppingCart > 50) {  //se il totale del carrello supera 50 Se la condizione è vera,
    costoSpedizione = 0; // il costo di spedizione viene impostato a 0
  } else { //se il totale del carrello non supera 50 Se la condizione è falsa 
    costoSpedizione = 10;  //il costo di spedizione viene impostato a 10.
  }
  return totalShoppingCart + costoSpedizione; //Infine, la funzione restituisce il totale del carrello più il costo di spedizione
}

//Puoi chiamare questa funzione passando il totale del carrello dell'utente come argomento, ad esempio:

console.log(calcolaTotaleCheckout(40)); // stampa 50
console.log(calcolaTotaleCheckout(60)); // stampa 60

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

//per modificare l'algoritmo per includere la promozione del Black Friday e calcolare il totale corretto:

function calcolaTotaleCheckout(totalShoppingCart) {  //La funzione calcolaTotaleCheckout() accetta ancora un argomento totalShoppingCart che rappresenta il totale del carrello dell'utente.
  let costoSpedizione; //Dichiara ancora una variabile locale costoSpedizione
  if (totalShoppingCart > 50) {  // se il totale del carrello supera 50. Se la condizione è vera
    costoSpedizione = 0;  //  il costo di spedizione viene impostato a 0
  } else { //se il totale del carrello non supera 50
    costoSpedizione = 10; //il costo di spedizione viene impostato a 10.
  }
  const sconto = totalShoppingCart * 0.2; //dichiariamo una costante "sconto" che calcola il valore dello sconto del 20% sul totale del carrello.
  return totalShoppingCart - sconto + costoSpedizione;  //la funzione mi deve restituire il totale del carrello meno lo sconto più il costo di spedizione.
}

//potete chiamare questa funzione passando il totale del carrello dell'utente come argomento, ad esempio:

console.log(calcolaTotaleCheckout(40)); // stampa 32
console.log(calcolaTotaleCheckout(60)); // stampa 48

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

//per scrivere un algoritmo per ordinare tre variabili secondo il loro valore, dal più alto al più basso, in JavaScript:

function ordinaNumeri(num1, num2, num3) {  //La funzione ordinaNumeri() accetta tre argomenti num1, num2 e num3 che rappresentano i numeri da ordinare.
  let numeriOrdinati = [num1, num2, num3];  //Dichiara una variabile locale numeriOrdinati e assegna ad essa un array che contiene i tre numeri.
  numeriOrdinati.sort(function(a, b) {  //Il metodo sort() accetta una funzione di confronto come argomento, che specifica come gli elementi dell'array devono essere ordinati. In questo caso, la funzione di confronto restituisce la differenza tra b e a, il che causa l'ordinamento in ordine decrescente.
    return b - a;
  });
  console.log(numeriOrdinati); Infine, la funzione stampa il risultato in console.
}

//Puoi chiamare questa funzione passando tre numeri come argomenti, ad esempio:
ordinaNumeri(10, 5, 8); // stampa [10, 8, 5]
ordinaNumeri(20, 15, 10); // stampa [20, 15, 10]


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

//puoi scrivere un algoritmo per verificare se un numero fornito è un intero :

function controllaSeIntero(num) {  //La funzione controllaSeIntero() accetta un argomento num che rappresenta il numero da verificare. 
  //Utilizza una struttura di controllo if-else con una condizione composta//
  if (typeof num === "number" && Number.isInteger(num)) {  // per verificare se il tipo di num è "number" si utilizza l'operatore di uguaglianza stretta "===" e se num è un intero si utilizza il metodo Number.isInteger()).
    return true; //Se entrambe le condizioni sono vere, la funzione restituisce true
  } else {
    return false; //Altrimenti, la funzione restituisce false.
  }
}


//Puoi chiamare questa funzione passando un numero come argomento, ad esempio:

console.log(controllaSeIntero(5)); // stampa true
console.log(controllaSeIntero(5.5)); // stampa false
console.log(controllaSeIntero("5")); // stampa false


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

//per scrivere un algoritmo per verificare se un numero fornito è pari o dispari in JavaScript:

function controllaPariDispari(num) {  //La funzione controllaPariDispari() accetta un argomento num che rappresenta il numero da verificare
  if (num % 2 === 0) { //questa condizione serve per verificare se il resto della divisione di num per 2 è uguale a 0 si utilizza l'operatore di uguaglianza stretta === e l'operatore di modulo % 
    return "pari"; //Se la condizione è vera, la funzione restituisce "pari"
  } else {
    return "dispari"; //Altrimenti, la funzione restituisce "dispari".
  }
}

//per chiamare questa funzione passando un numero come argomento, ad esempio:
console.log(controllaPariDispari(5)); // stampa "dispari"
console.log(controllaPariDispari(6)); // stampa "pari"


//L'operatore di modulo (%) in JavaScript restituisce il resto della divisione di un numero per un altro. Ad esempio, 5 % 2 restituisce 1 e 6 % 2 restituisce 0.//

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

//per modificare l'algoritmo per mostrare il messaggio corretto in ogni circostanza:

let val = 7;
if (val < 5) { //In questo modo, il primo if verifica se val è minore di 5
  console.log("Meno di 5"); 
} else if (val < 10) { //il secondo if verifica se val è minore di 10 (ma non minore di 5)
  console.log("Meno di 10");
} else { 
  console.log("Uguale a 10 o maggiore"); //l'else gestisce il caso in cui val è uguale o maggiore di 10.
}

// Output: "Meno di 10"

//Il motivo per cui l'algoritmo originale non funziona correttamente è che l'ordine delle condizioni dei primi due if è sbagliato. Se val è minore di 10, verrà eseguito il primo if e verrà visualizzato il messaggio "Meno di 10". Tuttavia, se val è uguale a 10 o maggiore, verrà eseguito il secondo if e verrà visualizzato il messaggio "Meno di 5", che non è corretto.

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

//Per creare un blocco condizionale if/else annidato per mostrare in console il messaggio corretto in ogni condizione:

let num = 17;

if (num < 5) { //il primo if verifica se num è minore di 5
  console.log("Tiny"); //Se lo è, viene visualizzato il messaggio "Tiny"
} else { //e il blocco else viene ignorato
  if (num < 10) { //Altrimenti, viene eseguito il primo else e viene verificato se num è minore di 10
    console.log("Small"); //Se lo è, viene visualizzato il messaggio "Small" 
  } else { //e il resto del blocco viene ignorato
    if (num < 15) { //Altrimenti, viene eseguito il secondo else e viene verificato se num è minore di 15
      console.log("Medium"); //Se lo è, viene visualizzato il messaggio "Medium"
    } else { //e il resto del blocco viene ignorato.
      if (num < 20) { //Altrimenti, viene eseguito il terzo else e viene verificato se num è minore di 20
        console.log("Large"); //Se lo è, viene visualizzato il messaggio "Large"
      } else { //e il resto del blocco viene ignorato
        console.log("Huge"); //Altrimenti, viene visualizzato il messaggio "Huge"
      }
    }
  }
}

// Output: "Large"


//Questo tipo di struttura a blocchi "annidati" può essere utile quando si desidera eseguire una serie di controlli su una variabile e visualizzare il messaggio appropriato in base al risultato di ogni controllo. Però che in alcuni casi può essere più semplice e leggibile utilizzare una struttura a cascata di if/else if invece di una struttura a blocchi annidati. 

//un esempio di una struttura a cascata di if/else 

let num = 17;

if (num < 5) { // il primo if verifica se num è minore di 5
  console.log("Tiny"); // Se lo è, viene visualizzato il messaggio "Tiny" e il resto della struttura viene ignorato.
} else if (num < 10) { //Altrimenti, viene eseguito il primo else if e viene verificato se num è minore di 10
  console.log("Small"); //Se lo è, viene visualizzato il messaggio "Small" e il resto della struttura viene ignorato.
} else if (num < 15) { //Altrimenti, viene eseguito il secondo else if e viene verificato se num è minore di 15
  console.log("Medium"); // Se lo è, viene visualizzato il messaggio "Medium" e il resto della struttura viene ignorato.
} else if (num < 20) {  //Altrimenti, viene eseguito il terzo else if e viene verificato se num è minore di 20
  console.log("Large"); //Se lo è, viene visualizzato il messaggio "Large" e il resto della struttura viene ignorato
} else {
  console.log("Huge"); //Altrimenti, viene visualizzato il messaggio "Huge".
}

// Output: "Large"


//la struttura a cascata di if/else è molto simile alla struttura a blocchi annidati che ho mostrato prima. però la struttura a cascata di if/else è leggibile in modo più efficiente e facile da modificare, perchè ogni else if è collegato direttamente al suo if corrispondente e non è necessario "annidare" i blocchi. Inoltre, con questo modo si evita di fare troppe verifiche, perché ogni else if viene eseguito solo se il precedente if e tutti gli else if precedenti sono stati falsi.


/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

//per usare un operatore ternario per assegnare ad una variabile chiamata "gender" il valore "male" o "female" in base al valore di un'altra variabile chiamata "isMale" come segue:
//L'operatore ternario è composto da tre parti


let isMale = true;
let gender = isMale ? "male" : "female";

console.log(gender);

// Output: "male"

let isMale = true; //una condizione che viene valutata come vera o falsa un valore che viene restituito se la condizione è vera, e un valore che viene restituito se la condizione è falsa.
let gender = isMale ?// la condizione è "isMale", che viene valutata come vera (true) o falsa (false)//
 "male" //Se la condizione è vera, il valore "male" viene assegnato alla variabile "gender"
  : "female"; //Altrimenti, il valore "female" viene assegnato alla variabile "gender".

console.log(gender);

// Output: "male"
//L'operatore ternario può essere utile quando si vuole eseguire una semplice assegnazione basata su una condizione, senza la necessità di utilizzare una struttura if/else. Tieni presente che l'operatore ternario può essere meno leggibile di una struttura if/else in alcuni casi, quindi bisogna usarlo con attenzione.
/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

//per mostrare i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while:

let num = 0;

while (num <= 5) {  //con questa condizione  il ciclo viene eseguito finché "num" è minore o uguale a 5
  console.log(num); //Ogni volta che il ciclo viene eseguito, il valore di "num" viene visualizzato in console e
  num++; //num" viene incrementato di 1 (num++).
}

//In questo codice, il ciclo while viene eseguito finché la variabile "num" è minore o uguale a 5. All'interno del ciclo, viene visualizzato il valore di "num" in console e "num" viene incrementato di 1 ad ogni iterazione del ciclo. Quando "num" diventa maggiore di 5, il ciclo viene interrotto e il programma continua l'esecuzione dopo il ciclo.

// Output:
// 0
// 1
// 2
// 3
// 4
// 5 
//È importante assicurarsi che la condizione del ciclo venga modificata in modo che il ciclo non diventi infinito, altrimenti il programma rimarrà bloccato in un loop senza fine. Nel nostro esempio, la variabile "num" viene incrementata di 1 ad ogni iterazione, il che significa che il ciclo verrà interrotto quando "num" diventa maggiore di 5.
9
//ll ciclo while è uno dei due tipi di cicli in JavaScript (l'altro è il ciclo for). Viene utilizzato per eseguire una serie di istruzioni ripetutamente finché una determinata condizione è vera. Nel nostro caso, la condizione è "num <= 5", il che significa che il ciclo viene eseguito finché "num" è minore o uguale a 5. Ogni volta che il ciclo viene eseguito, il valore di "num" viene visualizzato in console e "num" viene incrementato di 1 (num++).


/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

//per utilizzare un ciclo for , per stampare i numeri da 0 a 10 in ordine ascendente:

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

0
1
2
3
4
5
6
7
8
9
10


for //La parola chiave for indica che stiamo iniziando un ciclo for
 (var i = 0 //All'interno delle parentesi, c'è la dichiarazione del nostro contatore i. Inizialmente, viene impostato su 0.
 ; i <= 10;//Dopo il primo punto e virgola, c'è la condizione di continuazione del ciclo. In questo caso, il ciclo continuerà finché i è minore o uguale a 10
  i++ //Dopo il secondo punto e virgola, c'è l'istruzione di incremento del contatore. In questo caso, stiamo aumentando i di 1 ad ogni iterazione del ciclo.)
   {
  console.log(i); //All'interno delle graffe, c'è il codice che verrà eseguito ad ogni iterazione del ciclo. In questo caso, stiamo semplicemente utilizzando la funzione console.log per stampare il valore di i a ogni iterazione.
}

//rispiegazione 
//Il ciclo for funziona in questo modo:

//La dichiarazione del contatore i viene eseguita una volta all'inizio del ciclo, impostando il valore iniziale di i su 0.
//La condizione di continuazione del ciclo viene controllata. Se la condizione è vera, il ciclo continua. In questo caso, la condizione è i <= 10, quindi il ciclo continuerà finché i è minore o uguale a 10.
//Il codice all'interno delle graffe viene eseguito. Nel nostro caso, stiamo stampando il valore di i con la funzione console.log.
//L'istruzione di incremento viene eseguita. Nel nostro caso, stiamo aumentando i di 1 ad ogni iterazione del ciclo.
//Il processo riprende al passo 2 finché la condizione di continuazione del ciclo è vera. Quando i diventa 11, la condizione diventa falsa e il ciclo viene interrotto.

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/
//per stampare i numeri da 0 a 10 in ordine ascendente, evitando di stampare i numeri 3 e 8 utilizzando un ciclo for :  

for (var i = 0; i <= 10; i++) {
  if (i !== 3 && i !== 8) {
    console.log(i);
  }
}

//per stampare i numeri da 0 a 10 in ordine ascendente, evitando di stampare i numeri 3 e 8 utilizzando un ciclo for :  
for // La parola chiave for indica che stiamo iniziando un ciclo for
(var i = 0;//  la dichiarazione del nostro contatore i. Inizialmente, viene impostato su 0
 i <= 10;// Dopo il primo punto e virgola, c'è la condizione di continuazione del ciclo. In questo caso, il ciclo continuerà finché i è minore o uguale a 10
  i++) //Dopo il secondo punto e virgola, c'è l'istruzione di incremento del contatore. In questo caso, stiamo aumentando i di 1 ad ogni iterazione del ciclo. {
  //All'interno delle graffe, c'è il codice che verrà eseguito ad ogni iterazione del ciclo 

  if (i !== 3 && i !== 8) { //Prima di tutto, c'è una struttura if che controlla se i è uguale a 3 o 8. 
    console.log(i); //Se nessuna delle due condizioni è vera, il codice all'interno delle graffe viene eseguito e il valore di i viene stampato con la funzione console.log.

  }
}
//Questo codice stamperà i numeri da 0 a 10 in ordine ascendente, evitando di stampare i numeri 3 e 8. Quindi, l'output sulla console sarà:
0
1
2
4
5
6
7
9
10
//Ricapitolo
//Il ciclo for funziona in questo modo:
//1 La dichiarazione del contatore i viene eseguita una volta all'inizio del ciclo, impostando il valore iniziale di i su 0.
//2 La condizione di continuazione del ciclo viene controllata. Se la condizione è vera, il ciclo continua. In questo caso, la condizione è i <= 10, quindi il ciclo continuerà finché i è minore o uguale a 10.
//3 Il codice all'interno delle graffe viene eseguito. Prima di tutto, c'è una struttura if che controlla se i è uguale a 3 o 8. Se nessuna delle due condizioni è vera, il codice all'interno delle graffe viene eseguito e il valore di i viene stampato con la funzione console.log.
//4 L'istruzione di incremento viene eseguita. Nel nostro caso, stiamo aumentando i di 1 ad ogni iterazione del ciclo.
//5 Il processo riprende al passo 2 finché la condizione di continuazione del ciclo è vera. Quando i diventa 11, la condizione diventa falsa e il ciclo viene interrotto.

/* SCRIVI QUI LA TUA RISPOSTA */
/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/
//per iterare da 0 a 15 e mostrare se ogni valore è pari o dispari:
for var i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " è pari");
  } else {
    console.log(i + " è dispari");
  }
}
for //La parola chiave for indica che stiamo iniziando un ciclo for
 (var i = 0;// All'interno delle parentesi, c'è la dichiarazione del nostro contatore i. Inizialmente, viene impostato su 0.
  i <= 15; //Dopo il primo punto e virgola, c'è la condizione di continuazione del ciclo. In questo caso, il ciclo continuerà finché i è minore o uguale a 15
  i++) // Dopo il secondo punto e virgola, c'è l'istruzione di incremento del contatore. In questo caso, stiamo aumentando i di 1 ad ogni iterazione del ciclo.
  { //All'interno delle graffe, c'è il codice che verrà eseguito ad ogni iterazione del ciclo. 
  if // Prima di tutto, c'è una struttura if
   (i % 2 === 0)//controlla se il resto di i diviso 2 è uguale a 0
    {
    console.log(i + " è pari"); //Se questa condizione è vera, il valore di i viene stampato come "pari" 
  } else { //Se la condizione è falsa
    console.log(i + " è dispari"); //il valore di i viene stampato come "dispari" con la funzione console.log.
  }
}
//Questa funzione stamperà i numeri da 0 a 15 e mostrerà se ogni numero è pari o dispari. Quindi, l'output sulla console sarà:


0 è pari
1 è dispari
2 è pari
3 è dispari
4 è pari
5 è dispari
6 è pari
7 è dispari
8 è pari
9 è dispari
10 è pari
11 è dispari
12 è pari
13 è dispari
14 è pari
15 è dispari

//Ricapitolo 
//1 La dichiarazione del contatore i viene eseguita una volta all'inizio del ciclo, impostando il valore iniziale di i su 0.
//2 La condizione di continuazione del ciclo viene controllata. Se la condizione è vera, il ciclo continua. In questo caso, la condizione è i <= 15, quindi il ciclo continuerà finché i è minore o uguale a 15.
//3 Il codice all'interno delle graffe viene eseguito. Prima di tutto, c'è una struttura if che controlla se il resto di i diviso 2 è uguale a 0. Se questa condizione è vera, il valore di i viene stampato come "pari" con la funzione console.log. Se la condizione è falsa, il valore di i viene stampato come "dispari" con la funzione console.log.
//4 L'istruzione di incremento viene eseguita. Nel nostro caso, stiamo aumentando i di 1 ad ogni iterazione del ciclo.
//5 Il processo riprende al passo 2 finché la condizione di continuazione del ciclo è vera. Quando i diventa 16, la condizione diventa falsa e il ciclo viene interrotto.

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

//per scrivere un algoritmo in JavaScript che iteri i numeri da 1 a 100, stampandoli in console. Se un valore è multiplo di 3, viene stampata la parola "Fizz" al suo posto, se è multiplo di 5 viene stampata la parola "Buzz" e se è multiplo sia di 3 che di 5 viene stampata la parola "FizzBuzz":
for (let i = 1; i <= 100; i++) {
  // Se il numero è multiplo sia di 3 che di 5
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } 
  // Se il numero è multiplo solo di 3
  else if (i % 3 == 0) {
    console.log("Fizz");
  } 
  // Se il numero è multiplo solo di 5
  else if (i % 5 == 0) {
    console.log("Buzz");
  } 
  // Se il numero non è multiplo né di 3 né di 5
  else {
    console.log(i);
  }
}
//La prima riga di codice for (let i = 1; i <= 100; i++) rappresenta un ciclo for che itererà da 1 a 100. La variabile i rappresenterà il numero corrente nell'iterazione.
for (let i = 1; i <= 100; i++) {
  // Se il numero è multiplo sia di 3 che di 5
  if (i % 3 == 0 && i % 5 == 0) { //La prima condizione if verifica se il numero corrente è multiplo sia di 3 che di 5. L'operatore % (modulo) restituisce il resto della divisione di un numero per un altro. Quindi, se il resto della divisione di i per 3 e per 5 è uguale a 0, significa che i è multiplo di entrambi i numeri. 
    console.log("FizzBuzz"); //Se la condizione è vera, viene stampata la stringa "FizzBuzz".
  } 
  // Se il numero è multiplo solo di 3
  else if (i % 3 == 0) { //La seconda condizione else if (i % 3 == 0) verifica se il numero corrente è solo multiplo di 3.
    console.log("Fizz"); //Se la condizione è vera, viene stampata la stringa "Fizz".
  } 
  // Se il numero è multiplo solo di 5
  else if (i % 5 == 0) { //La terza condizione else if (i % 5 == 0) verifica se il numero corrente è solo multiplo di 5. 
    console.log("Buzz"); // Se la condizione è vera, viene stampata la stringa "Buzz"
  } 
  // Se il numero non è multiplo né di 3 né di 5
  else { //La quarta e ultima condizione else viene eseguita se nessuna delle condizioni precedenti è vera
    console.log(i); //In questo caso, viene stampato il numero corrente.
  }
}

//viene stampato a console un elenco di numeri da 1 a 100, con le seguenti sostituzioni:

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz
Buzz

//1 Se un numero è multiplo sia di 3 che di 5, viene stampata la stringa "FizzBuzz" al posto del numero.
//2 Se un numero è multiplo solo di 3, viene stampata la stringa "Fizz" al posto del numero.
//3 Se un numero è multiplo solo di 5, viene stampata la stringa "Buzz" al posto del numero.
//4 Se un numero non è multiplo né di 3 né di 5, viene stampato il numero stesso.

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/
let day = 1 

switch (day) {
  case 1:
    console.log("Lunedì");
    break;
  case 2:
    console.log("Martedì");
    break;
  case 3:
    console.log("Mercoledì");
    break;
  case 4:
    console.log("Giovedì");
    break;
  case 5:
    console.log("Venerdì");
    break;
  case 6:
    console.log("Sabato");
    break;
  case 7:
    console.log("Domenica");
    break;
  default:
    console.log("Valore non valido");
}

switch (day) { // //La prima riga di codice switch (day) rappresenta uno switch che controlla il valore della variabile day
  case 1: //Le istruzioni case seguenti rappresentano i casi da verificare. Ogni case verifica se il valore di day è uguale al valore specificato.
    console.log("Lunedì"); //Se il valore corrisponde, viene eseguito il codice scritto sotto il case.
    break; //L'istruzione break interrompe l'esecuzione dello switch e fa passare il controllo del codice dopo lo switch. Se non ci fosse il break, l'esecuzione del codice continuerebbe con il prossimo case (anche se il valore di day non corrisponde).
  case 2:
    console.log("Martedì");
    break;
  case 3:
    console.log("Mercoledì");
    break;
  case 4:
    console.log("Giovedì");
    break;
  case 5:
    console.log("Venerdì");
    break;
  case 6:
    console.log("Sabato");
    break;
  case 7:
    console.log("Domenica");
    break;
  default: // L'istruzione default viene eseguita se nessun altro case è stato eseguito. Questa istruzione può essere usata per gestire i valori di day che non sono coperti dai casi precedenti.
    console.log("Valore non valido");
}


//Per ottenere l'output desiderato, è necessario specificare il valore della variabile day prima di eseguire lo switch. Ad esempio:

let day = 3;

switch (day) {
  // codice dello switch come sopra
}

//In questo caso, il valore di day è 3, quindi verrà stampata a console la stringa "Mercoledì".


