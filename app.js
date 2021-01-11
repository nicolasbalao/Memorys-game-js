const card = document.querySelectorAll(".card");

var Return = function () {
  card.forEach((item) => {
    item.addEventListener("click", () => {
      let cardReturn = document.querySelectorAll(".return");
      console.log(cardReturn.length);
      if (cardReturn.length == 2) {
        // pour retourner les cartes au bout de deux cartes retourner
        console.log(cardReturn);
        cardReturn.forEach((item) => {
          item.classList.remove("return");
        });
      }
      item.classList.add("return");
    });
  });
};

var Random = function () {
  const Choise = ["green", "yellow"];
  const indexCard = [0, 1, 2, 3];
  let indexCardChoise = Math.floor(Math.random() * indexCard.length);
  let indexChoise = Math.floor(Math.random() * Choise.length);

  card[indexCardChoise].classList.add(Choise[indexChoise]);
};
Random();
Return();
