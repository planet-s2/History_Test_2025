document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const cardCounter = document.getElementById('card-counter');
    let currentCardIndex = 0;

    // Zeige nur die aktuelle Karte an
    function showCurrentCard() {
        cards.forEach((card, index) => {
            if (index === currentCardIndex) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        // Aktualisiere den Kartenzähler
        cardCounter.textContent = `Karte ${currentCardIndex + 1} von ${cards.length}`;
    }

    // Zeige die erste Karte beim Laden
    showCurrentCard();

    // Event Listener für die Navigationsbuttons
    prevBtn.addEventListener('click', () => {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            showCurrentCard();
            // Karte zurückdrehen, falls sie umgedreht war
            const cardInner = cards[currentCardIndex].querySelector('.card-inner');
            if (cardInner.classList.contains('is-flipped')) {
                cardInner.classList.remove('is-flipped');
            }
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentCardIndex < cards.length - 1) {
            currentCardIndex++;
            showCurrentCard();
            // Karte zurückdrehen, falls sie umgedreht war
            const cardInner = cards[currentCardIndex].querySelector('.card-inner');
            if (cardInner.classList.contains('is-flipped')) {
                cardInner.classList.remove('is-flipped');
            }
        }
    });

    // Gehe durch jede gefundene Karte und füge Event Listener hinzu
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Finde das innere Element der geklickten Karte
            const cardInner = card.querySelector('.card-inner');
            // Füge die Klasse 'is-flipped' hinzu oder entferne sie,
            // um den CSS-Flip-Effekt auszulösen
            cardInner.classList.toggle('is-flipped');
        });
    });

    // Initialisierung: Zeige die erste Karte an
    showCurrentCard();
}); // Added closing bracket for DOMContentLoaded event listener