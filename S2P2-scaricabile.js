// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

// Lista di prezzi dei prodotti nel carrello
const prices = [50, 20, 30]; // Puoi modificarla con i prezzi che preferisci

// Utenti di esempio
const users = [];

users.push({ name: "Marco", surname: "Rossi", isAmbassador: true });
users.push({ name: "Luca", surname: "Bianchi", isAmbassador: false });
users.push({ name: "Maria", surname: "Verdi", isAmbassador: true });

// Costo fisso di spedizione
const shippingCost = 10;

// Array per ambassador
const ambassadors = [];

// Funzione per calcolare il totale del carrello
function calculateTotal(prices, user, shippingCost) {
  let total = 0;

  // Somma dei prezzi nel carrello
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }

  // Applica lo sconto se l'utente è un ambassador
  if (user.isAmbassador) total *= 0.7; // Sconto del 30%

  // Aggiunge le spese di spedizione se il totale è inferiore a 100
  if (total <= 100) total += shippingCost;

  return total;
}

// Ciclo per controllare ogni utente e stampare i risultati
for (let i = 0; i < users.length; i++) {
  const user = users[i];

  // Verifica se l'utente è un ambassador e stampa il messaggio
  if (user.isAmbassador) 
    console.log(user.name + " " + user.surname + " è un ambassador");
  else 
    console.log(user.name + " " + user.surname + " non è un ambassador");

  if (user.isAmbassador) ambassadors.push(user);

  // Calcolo del totale del carrello per l'utente corrente
  const total = calculateTotal(prices, user, shippingCost);

  // Stampa del totale del carrello per l'utente
  console.log("Il totale del carrello per " + user.name + " " + user.surname + " è: €" + total.toFixed(2));
}

// Stampa della lista degli ambassador
console.log("Lista degli ambassador:");
for (let i = 0; i < ambassadors.length; i++) {
  console.log(ambassadors[i].name + " " + ambassadors[i].surname);
}
