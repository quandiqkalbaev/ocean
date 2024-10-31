import { addClassName, getElementBy, getElementsBy } from "./utils.js";

export function forms() {
  let btns = getElementsBy(".popup-btn");
  let title = getElementBy(".popup__form-title");
  let innerBtn = getElementBy(".popup__form-btn .mybtn-text");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      title.innerHTML = btn.getAttribute("data-popuptext");
      innerBtn.innerHTML = btn.getAttribute("data-btntext");
    });
  });

}
