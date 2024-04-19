const $cardContainer = document.getElementById("all-cards");

function randomiseCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function generateCards(array) {
  randomiseCards(array);

  let totalCards = array.slice(0, 6);

  totalCards = totalCards.flatMap((i) => [i, i]);

  randomiseCards(totalCards);

  return totalCards;
}

function generateHTMLForCards(cards) {
  return cards.map((item) =>
    `
      <div class="card" data-id=${item.cardId}>
        <div class="card__inside">
          <div class="card__front">
            <img class="card__image" src="./images/${item.cardImage}" />
              <div class="card__title">${item.cardTitle}</div>
            </div>
          <div class="card__back"></div>
        </div>
      </div>
    `
  ).join("");
};

console.log(generateHTMLForCards(cards));

function checkCards() {
  const $allCards = document.querySelectorAll(".card");

  let selectedCards = [];

  let counter = 0;

  $allCards.forEach((card) => {
    card.addEventListener("click", function () {
      card.classList.toggle("flipped");

      selectedCards.push(card);

      if (selectedCards.length === 2) {
        if (selectedCards[0].dataset.id === selectedCards[1].dataset.id) {
          console.log("the same");
          counter++;
          console.log(counter);
          selectedCards.forEach((card) => {
            card.style.pointerEvents = "none";
          });
        } else {
          console.log("not the same");
          selectedCards.forEach((card) => {
            setTimeout(() => {
              card.classList.toggle("flipped");
            }, 500);
          });
        }
        selectedCards = [];

        if (counter === 6) {
          const end = Date.now() + 15 * 1000;

          const colors = ["#EE9900", "#00AACC", "#CE0C7D"];

          (function frame() {
            confetti({
              particleCount: 2,
              angle: 60,
              spread: 55,
              origin: { x: 0 },
              colors: colors,
            });

            confetti({
              particleCount: 2,
              angle: 120,
              spread: 55,
              origin: { x: 1 },
              colors: colors,
            });

            if (Date.now() < end) {
              requestAnimationFrame(frame);
            }
          })();
          setTimeout(() => {
            alert("Congratulations! You have found all the combinations!");
            location.reload();
          }, 3500);
        }
      }
    });
  });
}

function generateUIForCards() {
  const randomCards = generateCards(cards);
  $cardContainer.innerHTML = generateHTMLForCards(randomCards);
  checkCards();
}

generateUIForCards();
