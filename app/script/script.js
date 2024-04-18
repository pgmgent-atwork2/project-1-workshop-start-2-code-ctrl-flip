const $cardContainer = document.getElementById('card-container');

console.log(cards);

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
    $cardContainer.innerHTML = generateHTMLForCards(cards)
}

generateUIForCards ();