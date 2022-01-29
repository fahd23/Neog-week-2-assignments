const toggleDrawerBtn = document.querySelector("#toggle-drawer");
const mdToggleDrawerBtn = document.querySelector("#md-toggle-drawer");
const aside = document.querySelector(".dismissible");
const mdAside = document.querySelector(".md-dismissible");
const modelDrawerContainer = document.querySelector(".model");

toggleDrawerBtn.addEventListener("click", () => {
  aside.classList.toggle("dismissible");
});
mdToggleDrawerBtn.addEventListener("click", () => {
  mdAside.classList.add("md-dismissible");
});
modelDrawerContainer.addEventListener("click", () => {
  mdAside.classList.toggle("drawer-hide");
});
