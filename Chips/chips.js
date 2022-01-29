const inputValue = document.querySelector(".user-input");
const outputDiv = document.querySelector(".output");

const addChips = function (e) {
  let inputChips = document.createElement("div");
  inputChips.classList.add("chips", "chips-bg-violet");
  inputChips.innerHTML = `${e.target.value} 
  <button class="icon-bg-none">
  <i class="icon fas fa-times-circle"></i>
  </button>`;
  outputDiv.appendChild(inputChips);
  e.target.value = "";
};

const removeChips = function (e) {
  const className = e.target;
  if (className.classList[0] === "icon") {
    const item = className.parentElement;
    item.parentElement.remove();
  }
};

inputValue.addEventListener("change", addChips);

outputDiv.addEventListener("click", removeChips);
