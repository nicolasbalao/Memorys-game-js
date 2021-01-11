const card = document.querySelectorAll(".card");

var Return = function () {
  card.forEach((item) => {
    item.addEventListener("click", () => {
      let cardReturn = document.querySelectorAll(".return");
      // console.log(cardReturn.length);
      if (cardReturn.length == 2) {
        // pour retourner les cartes au bout de deux cartes retourner
        // console.log(cardReturn);
        cardReturn.forEach((item) => {
          item.classList.remove("return");
        });
      }
      item.classList.add("return");
    });
  });
};

var Random = function () {
  const Choise = ["green", "yellow", "green", "yellow"];
  const indexCard = [0, 1, 2, 3];
  let indexCardShuffle = indexCard.sort(() => Math.random() - 0.5);
  // console.log(indexCardShuffle);

  for (var i = 0; i < indexCardShuffle.length; i++) {
    // console.log(i);
    // console.log("salut");
    card[indexCardShuffle[i]].classList.add(Choise[i]);
  }

  // card[indexCardChoise].classList.add(Choise[indexChoise]);
};

var chekWin = () => {
  setInterval(() => {
    let CardCheckReturn = document.querySelectorAll(".return");
    let value1 = CardCheckReturn[0].classList[1];
    let value2 = CardCheckReturn[1].classList[1];

    if (value1 === value2) {
      for (var i = 0; i < 2; i++) {
        CardCheckReturn[i].classList.add("win");
      }
    }
  }, 10);
};

var Reset = () => {
  card.forEach((item) => {
    item.className = "card";
  });
};

Random();
chekWin();
Return();
