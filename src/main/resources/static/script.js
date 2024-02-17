let billetter = [];

function kjopBillett() {
    const filmInput = document.getElementById('filmer').value;
    const antallInput = document.getElementById('antall').value;
    const navnInput = document.getElementById('navn').value;
    const emailInput = document.getElementById('email').value;
    const telefonInput = document.getElementById('telefon').value;


    const billett = {
        film: filmInput,
        antall: antallInput,
        navn: navnInput,
        epost: emailInput,
        telefon: telefonInput
    };

    billetter.push(billett);
    visBilletter();
    resetInputFelt();
}

function visBilletter() {
    const billettListe = document.getElementById('billettListe');
    billettListe.innerHTML = '';

    billetter.forEach(billett => {
        const li = document.createElement('li');
        li.textContent = `Film: ${billett.film}, Navn: ${billett.navn}, E-post: ${billett.epost}, Telefon: ${billett.telefon}`;
        billettListe.appendChild(li);
    });
}

function resetInputFelt() {
    document.getElementById('navn').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefon').value = '';
}

function slettBilletter(){
    billetter = [];
    visBilletter();
}