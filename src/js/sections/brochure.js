import { addClassName, getElementBy, queryMatches, removeClassName } from "../components/utils.js";

export function brochure() {
  if (queryMatches(769, "min")) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".brochure",
        start: "top bottom",
        end: "70% bottom",
        scrub: 1,
        onLeave: () => {
          addClassName(getElementBy(".brochure"), "active");
          tl.kill();
        },
      },
    });
    tl.to(".brochure__img", {
      top: "2.5%",
    });
    tl.to(".brochure__img", {
      top: "2.5%",
    });
  }

  if (queryMatches(768, "max")) {
    const brochureContainer = document.querySelector(".brochure__container");
    const brochureImg = document.querySelector(".brochure__img");
    addClassName(getElementBy(".brochure__form"), "form-small");
    brochureContainer.appendChild(brochureImg);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".brochure__img",
        start: "top bottom",
        end: "center bottom",
        scrub: 1,
        onLeave: () => {
          addClassName(getElementBy(".brochure"), "active");
          tl.kill();
        },
      },
    });
    tl.to(".brochure__img", {
      y: "-65%",
    });
  }
}
