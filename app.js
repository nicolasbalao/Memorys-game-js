const card = document.querySelectorAll(".card");

////////////RETOURNER LA CARTE /////////

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

//////MELANGER///////////////

var Random = function () {
  const Choise = [
    "zoro",
    "nami",
    "zoro",
    "nami",
    "franky",
    "franky",
    "luffy",
    "luffy",
    "chopper",
    "chopper",
    "sanji",
    "sanji",
    "robin",
    "robin",
    "brook",
    "brook",
    "jinbe",
    "jinbe"
  ];
  let indexCard = [];
  for (var i = 0; i < Choise.length; i++) {
    indexCard.push(i);
  }
  console.log(indexCard);
  let indexCardShuffle = indexCard.sort(() => Math.random() - 0.5);

  for (var i = 0; i < indexCardShuffle.length; i++) {
    card[indexCardShuffle[i]].classList.add(Choise[i]);
  }

  // card[indexCardChoise].classList.add(Choise[indexChoise]);
};

///////////// ChekWin //////////////////

var chekWin = () => {
  setInterval(() => {
    let CardCheckReturn = document.querySelectorAll(".return");
    try {
      let value1 = CardCheckReturn[0].classList[1];
      let value2 = CardCheckReturn[1].classList[1];

      if (value1 === value2) {
        for (var i = 0; i < 2; i++) {
          CardCheckReturn[i].classList.add("win");
        }
      }
    } catch (error) {}
  }, 10);
};

var Win = () => {
  setInterval(() => {
    let win = document.querySelectorAll(".win");

    if (win.length == card.length) {
      alert("you win");
      clearInterval(Win);
      Reset();
      Random();
    }
  }, 50);
};
// Reset btn

var Reset = () => {
  card.forEach((item) => {
    item.className = "card";
  });
};

Random();
chekWin();
Win();
Return();
