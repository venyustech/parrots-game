let cardsQuantityPrompt = 0;
function loadPage() {
  do {
    cardsQuantityPrompt = parseInt(
      prompt("Qual a quantidade de pares de cartas?(4 a 14)")
    );
  } while (
    cardsQuantityPrompt < 4 ||
    cardsQuantityPrompt > 14 ||
    cardsQuantityPrompt % 2 != 0
  );

  let cards = [
    "assets/carta1.gif",
    "assets/carta2.gif",
    "assets/carta3.gif",
    "assets/carta4.gif",
    "assets/carta5.gif",
    "assets/carta6.gif",
    "assets/carta7.gif",
  ];
  cards = cards.sort(comparator);
  function comparator() {
    return Math.random() - 0.5;
  }

  let cardsStructure = [];
  let loadingCards = document.querySelector(".card-wrapper");

  for (let i = 0; i < cardsQuantityPrompt / 2; i++) {
    cardsStructure.push(cards[i]);
    cardsStructure.push(cards[i]);
  }
  cardsStructure = cardsStructure.sort(comparator);

  loadingCards.innerHTML = "";
  for (let i = 0; i < cardsStructure.length; i++) {
    loadingCards.innerHTML += `
        <div class="card turned" data-identifier="card">
          <div class="front-face face" data-identifier="front-face">
            <img class="logoImage" src="assets/front.png" alt="card" />
          </div>
          <div class="back-face face" data-identifier="back-face">
            <img class="logo-back" src="${cardsStructure[i]}" alt="card" />
          </div>
        </div>
    `;
  }
}

loadPage();
