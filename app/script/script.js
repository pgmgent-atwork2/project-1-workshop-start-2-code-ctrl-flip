const $cardContainer = document.getElementById('all-cards');

function generateRandomCards (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    let totalCards = array.slice(0, 6);

    totalCards = totalCards.flatMap(i => [i, i]);

    for (let i = totalCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [totalCards[i], totalCards[j]] = [totalCards[j], totalCards[i]];
    }

    return totalCards;
}

function generateHTMLForCards (cards) {
    return cards.map(item =>
        `
            <div class="card">
                <div class="card__inside">
                <img class="card__image" src="./images/${item.cardImage}" />
                <div class="card__title">${item.cardTitle}</div>
                </div>
            </div>
        `
    ).join('');
};

function generateUIForCards() {
    const randomCards = generateRandomCards(cards)
    $cardContainer.innerHTML = generateHTMLForCards(randomCards)
}

generateUIForCards();