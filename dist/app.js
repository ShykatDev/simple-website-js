const restrictedCards = document.querySelectorAll(".restrictedCard");
const notRestrictedCards = document.querySelectorAll(".notRestrictedCard");
const inpVal = document.getElementById("inp");
const showAll = document.getElementById("showAll");
const checkBTN = document.querySelector(".checkBTN");
const smallMenu = document.querySelector(".small-menu");
const menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", () => {
  smallMenu.classList.toggle("right-[0%]");
  document.querySelector(".bars").classList.toggle("fa-bars");
  document.querySelector(".bars").classList.toggle("fa-xmark");
});

const showAllFunc = () => {
  restrictedCards.forEach((el) => {
    el.classList.remove("hidden");
  });
  notRestrictedCards.forEach((el) => {
    el.classList.remove("hidden");
  });

  inpVal.value = "";
};

inpVal.addEventListener("input", () => {
  let val = inpVal.valueAsNumber;
  console.log(val);

  if (val < 18) {
    restrictedCards.forEach((el) => {
      el.classList.add("hidden");
    });
    notRestrictedCards.forEach((el) => {
      el.classList.remove("hidden");
    });
  } else if (val > 18) {
    restrictedCards.forEach((el) => {
      el.classList.remove("hidden");
    });
    notRestrictedCards.forEach((el) => {
      el.classList.add("hidden");
    });
  } else {
    showAllFunc();
  }
});

showAll.addEventListener("click", showAllFunc);
