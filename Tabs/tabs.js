const tabBtn = document.querySelectorAll(".tab-btn");

tabBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnCount = tabBtn.length;
    // console.log(btnCount);
    for (let i = 0; i < btnCount; i++) {
      // console.log(tabBtn[i].classList);
      tabBtn[i].classList.remove("active");
    }
  });
});

tabBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("active");
  });
});
