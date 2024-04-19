const $cardContainer = document.getElementById("all-cards");

console.log(cards);

function generateHTMLForCards(cards) {
  return cards
    .map(
      (item) =>
        `
            <div class="card" id="card">
                <div class="card__inside">
                <img class="card__image" src="./images/${item.cardImage}" />
                <div class="card__title">${item.cardTitle}</div>
                </div>
            </div>
        `
    )
    .join("");
}

const $allCards = document.querySelectorAll(".card");

console.log($allCards)

//let clickCount = 0;

 $allCards.forEach((card) => {

    
  /* card.addEventListener("click", function () {
    clickCount++;

    if (clickCount == 2) {
      clickCount = 0;

      console.log("clickcount 2");
    }
  }); */
}); 

function checkCards(card1, card2) {}

function generateUIForCards() {
  $cardContainer.innerHTML = generateHTMLForCards(cards);
}

generateUIForCards();
