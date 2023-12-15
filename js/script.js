console.log('checking js file link')

const firstName = prompt('Scrivi il tuo nome: ')
console.log(firstName);
const lastName = prompt('Scrivi il tuo cognome: ')
console.log(lastName);
const favoriteColor = prompt('Scrivi il tuo colore preferito: ')
console.log(favoriteColor);

const password = firstName + lastName + favoriteColor + 21
console.log(password);

const message = `La tua password è: ${password}`;
