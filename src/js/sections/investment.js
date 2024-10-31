import { addClassName, getElementBy, getElementsBy, queryMatches, removeClassName } from "../components/utils.js";

export function investment() {
  let items = getElementsBy(".investment__item");
  items.forEach((item) => {
    addClassName(items[0], "active");
    item.addEventListener("mouseenter", (e) => {
      items.forEach((item, i) => {
        removeClassName(item, "active");
      });
      addClassName(item, "active");
    });
  });
  gsap.timeline({
    scrollTrigger: {
      trigger: ".investment",
      start: "50% bottom",
      end: "top bottom",
      onEnter: () => {
        addClassName(getElementBy(".investment"), "active");
      },
      onEnterBack: () => {
        removeClassName(getElementBy(".investment"), "active");
      },
    },
  });
  gsap.timeline({
    scrollTrigger: {
      trigger: ".investment__title",
      start: "bottom bottom",
      end: "top bottom",
      onEnter: () => {
        addClassName(getElementBy(".investment__title"), "active");
      },
      onEnterBack: () => {
        removeClassName(getElementBy(".investment__title"), "active");
      },
    },
  });
}
