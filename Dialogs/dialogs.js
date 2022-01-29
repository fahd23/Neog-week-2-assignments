const displayBtns = document.querySelectorAll(".display-btns");
const dismissBtns = document.querySelectorAll(".btn");
const itemTabs = document.querySelectorAll(".tab");
const alert = document.querySelector(".alert");
const simple = document.querySelector(".simple");
const confirmation = document.querySelector(".confirmation");

alert.style.display = "none";
simple.style.display = "none";
confirmation.style.display = "none";

displayBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "ALERT") {
      alert.style.display = "block";
      simple.style.display = "none";
      confirmation.style.display = "none";
    } else if (btn.innerText === "SIMPLE") {
      alert.style.display = "none";
      simple.style.display = "block";
      confirmation.style.display = "none";
    } else if (btn.innerText === "CONFIRM") {
      alert.style.display = "none";
      simple.style.display = "none";
      confirmation.style.display = "block";
    }
  });
});

dismissBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert.style.display = "none";
    simple.style.display = "none";
    confirmation.style.display = "none";
  });
});

itemTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    alert.style.display = "none";
    simple.style.display = "none";
    confirmation.style.display = "none";
  });
});
