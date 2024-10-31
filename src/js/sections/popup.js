import { addClassName, getElementBy, getElementsBy, queryMatches, removeClassName } from "../components/utils.js";

export function popup() {
  let popupBtns = getElementsBy(".popup-btn"),
    popup = getElementBy(".popup"),
    fpPopup = getElementBy(".fp-popup"),
    popupExit = getElementsBy(".popup__exit"),
    fpPopupExit = getElementBy(".fp-popup__exit"),
    fpBtn = getElementBy(".floorplan__info-btn");

  fpBtn.addEventListener("click", () => {
    addClassName(fpPopup, "active");
    addClassName(document.body, "no-scroll");
    addClassName(document.body, "hide-wp");

    fpPopup.addEventListener("click", (e) => {
      if (e.target.closest(".fp-popup__wrapper")) {
        return;
      }
      removeClassName(document.body, "no-scroll");
      removeClassName(fpPopup, "active");
      removeClassName(document.body, "hide-wp");
    });
  });

  fpPopupExit.addEventListener("click", () => {
    removeClassName(document.body, "no-scroll");
    removeClassName(fpPopup, "active");
    removeClassName(document.body, "hide-wp");
  });

  popupBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      addClassName(popup, "active");
      addClassName(document.body, "no-scroll");
      addClassName(document.body, "hide-wp");
    });

    popup.addEventListener("click", (e) => {
      if (e.target.closest(".popup__wrapper")) {
        return;
      }
      removeClassName(document.body, "no-scroll");
      removeClassName(popup, "active");
      removeClassName(document.body, "hide-wp");
    });
  });

  popupExit.forEach((btn) => {
    btn.addEventListener("click", () => {
      removeClassName(document.body, "no-scroll");
      removeClassName(popup, "active");
    });
  });
  if (queryMatches(768, "max")) {
    let fptop = getElementBy(".fp-popup__top");
    let fpLeft = getElementBy(".fp-popup__left");
    fpLeft.appendChild(fptop);
    addClassName(getElementBy(".fp-popup .form"), "form-small");
  }
}
