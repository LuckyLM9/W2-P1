/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

NE SONO 5

1)
string: una serie di caratteri racchiusi tra apici singoli (') o doppi ("). Ad esempio: 'ciao' o "ciao".

let auto1 = "Ford fiesta" ;  // Doppie virgole
let auto2 = 'Panda 4x4';  // singola virgola
2)
number: rappresenta un numero. In JavaScript, non esiste un tipo di dato per i numeri interi o per i numeri a virgola mobile separati, quindi tutti i numeri sono considerati numeri "float". prendiamo per esempio 42 o 3.14.

let numeroIntero = 42; ////dichiaro la variabile 
console.log(numeroIntero); // Output: 42

let numeroVirgolaMobile = 3.14; ////dichiaro la variabile 
console.log(numeroVirgolaMobile); // Output: 3.14

let somma = numeroIntero + numeroVirgolaMobile;
console.log(somma); // Output: 45.14

let differenza = numeroIntero - numeroVirgolaMobile;
console.log(differenza); // Output: 38.86

let prodotto = numeroIntero * numeroVirgolaMobile;
console.log(prodotto); // Output: 131.88

let divisione = numeroIntero / numeroVirgolaMobile;
console.log(divisione); // Output: 13.180327868852459

let resto = numeroIntero % numeroVirgolaMobile;
console.log(resto); // Output: 1.0799999999999983

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

un oggetto è una raccolta di coppie chiave-valore. Un oggetto può rappresentare qualsiasi cosa, dalle informazioni di una persona (come il nome o l'età) ai dati di un gioco (come il punteggio o il livello).

let persona = {
nome : "Mario" ; 
età : "30" ; 
sesso : "Maschio" ;
}

Per accedere ai valori di un oggetto, si può utilizzare la notazione a punti (.) o le quadre ([]) come questo:

Copy code

console.log(persona.nome);  // stampa "Mario"

console.log(persona["età"]);  // stampa 30


/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
Per effettuare un'addizione (una somma) dei numeri 12 e 20 , si può utilizzare l'operatore di somma (+). 

let num1 = 12;  //dichiariamo le variabili

let num2 = 20;  //dichiariamo le variabili

let somma = num1 + num2; //dichiarato una terza variabile (somma)

console.log(somma);  // stampa 32

abbiamo dichiarato due variabili (num1 e num2) che contengono i valori 12 e 20, rispettivamente. Abbiamo quindi dichiarato una terza variabile (somma) che contiene il risultato della somma delle due variabili precedenti.

Infine, abbiamo utilizzato il metodo console.log() per stampare il risultato della somma (32) sulla console.



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

Per creare una variabile in JavaScript e assegnarle un valore, si può utilizzare la parola chiave "let" seguita dal nome della variabile e dal simbolo di assegnazione (=). un esempio di come creare una variabile di nome "x" che contiene il numero 12:

let x = 12;

In questo esempio, abbiamo utilizzato la parola chiave "let" per dichiarare una nuova variabile di nome "x". Abbiamo quindi assegnato alla variabile il valore 12 utilizzando il simbolo di assegnazione (=).

Una volta che la variabile è stata dichiarata e assegnata un valore, è possibile utilizzarla in tutto il resto del codice. Ad esempio, si può utilizzare la variabile "x" per effettuare un'operazione matematica:
... (77 righe a disposizione)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name ="Luca";



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let x = 12;
let num = 4;
console.log(x-num);



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";
console.log(name1===name2);
