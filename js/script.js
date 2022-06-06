// GENERATORE DEL TICKET
const generateButton = document.getElementById('generate-ticket');
generateButton.addEventListener('click',
    function() {
        const userName = document.getElementById('user-name').value;
        const userKm = parseInt (document.getElementById('user-km').value);
        const userAge = document.getElementById('user-age').value;
        // Variabile prezzo = Km * 0.21
        const price = userKm * 0.21;
        // Variabile Sconto
        let discount = 0;
        // In base alla fascia d'età apparirà questo testo nella voce offerta presente nel ticket (questo è il testo base)
        discountText = "Biglietto Standard"
        
        // Sconto per under 18 e over 65
        if (userAge === 'minorenne') {
            discount = price * 20 / 100;
            discountText = "Biglietto Sconto 20%";
        } else if (userAge === 'over') {
            discount = price * 40 / 100;
            discountText = "Biglietto Sconto 40%";
        }

        // Prezzo finale
        const finalPrice = (price - discount).toFixed(2);

        // RISULTATO TICKET
        // Dati utente: 
        document.getElementById('username').innerHTML = userName;
        document.getElementById('user-offer').innerHTML = discountText;


        // Generatore del codice random: 
        document.getElementById('user-carriage').innerHTML = Math.floor(Math.random() * 7) + 1;
        document.getElementById('user-code').innerHTML = Math.floor(Math.random() * 10000) + 1;

        // Prezzo finale: 
        document.getElementById('final-price').innerHTML = '€ ' + finalPrice; 

        // Aggiungi classe attiva per modificare la visualizzazione del box Ticket da "display:none a dispay:block"
        document.getElementById('ticket').classList.add('active');  
    }
); 

// Variabile che cancella il risultato cliccando il bottone annulla:
const CancelTicket = document.getElementById('cancel-ticket');
CancelTicket.addEventListener('click',
    function() {
        document.getElementById('user-name').value = '';
        document.getElementById('user-km').value = '';
        document.getElementById('user-age').value = 'maggiorenne';

        // Rimuovi la classe attiva per modificare la visualizzazione del box Ticket da "display:block a display:none"       
        document.getElementById('ticket').classList.remove('active');
    }
);


