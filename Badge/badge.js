const hideBtn = document.querySelector(".hide-btn");
const toogleBadge = document.querySelector(".badge4");

hideBtn.addEventListener("click", () => {
  toogleBadge.classList.toggle("hide-badge");
});
