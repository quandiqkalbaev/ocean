import { addClassName, containsClassName, getElementBy, removeClassName } from "../components/utils.js";

export function header() {
  let menuBtn = getElementBy(".header__menu-btn");
  menuBtn.addEventListener("click", () => {
    if (containsClassName(document.body, "menu-active")) {
      removeClassName(document.body, "menu-active");
      removeClassName(document.body, "hide-wp");
    } else {
      addClassName(document.body, "menu-active");
      addClassName(document.body, "hide-wp");
    }
  });
}
