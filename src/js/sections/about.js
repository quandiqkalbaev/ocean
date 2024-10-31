import { addClassName, getElementBy, removeClassName } from "../components/utils.js";

export function about() {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".about__title",
      start: "50% bottom",
      end: "top bottom",
      onEnter: () => {
        addClassName(getElementBy(".about__top"), "active");
      },
      onEnterBack: () => {
        removeClassName(getElementBy(".about__top"), "active");
      },
    },
  });
  gsap.timeline({
    scrollTrigger: {
      trigger: ".about__left-title",
      start: "bottom bottom",
      end: "top bottom",
      onEnter: () => {
        addClassName(getElementBy(".about"), "active");
      },
      onEnterBack: () => {
        removeClassName(getElementBy(".about"), "active");
      },
    },
  });
}
