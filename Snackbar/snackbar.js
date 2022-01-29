const btns = document.querySelectorAll(".snackbar-btn");
const baseline = document.querySelector(".baseline");
const leading = document.querySelector(".leading");
const stacked = document.querySelector(".stacked");
const dismissBtns = document.querySelectorAll(".dismiss-btn");
const links = document.querySelectorAll(".link");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log(btn.innerText);
    if (btn.innerText === "BASELINE") {
      baseline.style.display = "flex";
      leading.style.display = "none";
      stacked.style.display = "none";
    } else if (btn.innerText === "LEADING") {
      leading.style.display = "flex";
      baseline.style.display = "none";
      stacked.style.display = "none";
    } else if (btn.innerText === "STACKED") {
      stacked.style.display = "flex";
      baseline.style.display = "none";
      leading.style.display = "none";
    }
  });
});

dismissBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    baseline.style.display = "none";
    leading.style.display = "none";
    stacked.style.display = "none";
  });
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    baseline.style.display = "none";
    leading.style.display = "none";
    stacked.style.display = "none";
  });
});
