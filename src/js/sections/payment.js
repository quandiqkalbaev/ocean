import { addClassName, removeClassName, getElementBy, getElementsBy, queryMatches } from "../components/utils.js";

export function payment() {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".payment__top",
      start: "center bottom",
      end: "center bottom",
      onEnter: () => {
        addClassName(getElementBy(".payment"), "active");
      },
      onLeaveBack: () => {
        removeClassName(getElementBy(".payment"), "active");
      },
    },
  });
  let blocks = getElementsBy(".payment__block");
  for (let i = 0; i < blocks.length; i++) {
    gsap.timeline({
      scrollTrigger: {
        trigger: blocks[i],
        start: "0% bottom",
        end: "0% bottom",
        onEnter: () => {
          addClassName(blocks[i], "active");
        },
        onLeaveBack: () => {
          removeClassName(blocks[i], "active");
        },
      },
    });
  }
}
