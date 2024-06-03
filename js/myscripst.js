
// Chiedi all’utente il suo nome, 
let nome = prompt('inserisci il tuo nome');
console.log(nome);

// poi chiedi il suo cognome, 
let cognome = prompt('inserisci il tuo cognome');
console.log(cognome);

// poi chiedi il suo colore preferito
let colore = prompt('inserisci il tuo colore preferito');
console.log(colore);

// Infine scrivi sulla pagina nomecognomecolorepreferito23
const num = 23;
let risultato= 'la tua password super segreta è: '+ nome + cognome + colore + num;

document.getElementById("pwd").innerHTML = risultato;
