const restrictedCards = document.querySelectorAll(".restrictedCard");
const notRestrictedCards = document.querySelectorAll(".notRestrictedCard");
const inpVal = document.getElementById("inp");
const showAll = document.getElementById("showAll");
const checkBTN = document.querySelector(".checkBTN");

checkBTN.addEventListener("click", () => {
  let val = inpVal.value;

  if (val < 18) {
    restrictedCards.forEach((el) => {
      el.classList.add("hidden");
    });
    notRestrictedCards.forEach((el) => {
      el.classList.remove("hidden");
    });
  } else {
    restrictedCards.forEach((el) => {
      el.classList.remove("hidden");
    });
    notRestrictedCards.forEach((el) => {
      el.classList.add("hidden");
    });
  }
});

showAll.addEventListener("click", () => {
  restrictedCards.forEach((el) => {
    el.classList.remove("hidden");
  });
  notRestrictedCards.forEach((el) => {
    el.classList.remove("hidden");
  });

  inpVal.value = "";
});
