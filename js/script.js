console.log('checking js file link')

const firstName = prompt('Scrivi il tuo nome: ')
console.log(firstName);
const lastName = prompt('Scrivi il tuo cognome: ')
console.log(lastName);
const favoriteColor = prompt('Scrivi il tuo colore preferito: ')
console.log(favoriteColor);

/* --------Bonus------- */
// Prendo l'elemento HTML
const messageOnScreen = document.getElementById('iShowTheMessage')
/*--------------------- */

const password = firstName + lastName + favoriteColor + 21
console.log(password);

const message = `La tua password è: ${password}`;
console.log(message);

/*------- Bonus -------- */
// Stampo il messaggio nell'elemento HTML

// Opzione 1 (Commentare per usare la 2)
messageOnScreen.innerText = message;

//Opzione 2 (Decommentare)
// messageOnScreen.innerHTML = `La tua password è: <strong>${password}</strong>`
/*----------------------- */
