import { addClassName, removeClassName, getElementBy, queryMatches } from "../components/utils.js";
export function footer() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: `top bottom`,
      end: queryMatches(768, "max") ? "center bottom" : "bottom bottom",
      scrub: 1,
      onEnter: () => {
        if (queryMatches(768, "max")) {
          addClassName(document.body, "hide-wp");
        }
      },
      onLeaveBack: () => {
        if (queryMatches(768, "max")) {
          removeClassName(document.body, "hide-wp");
        }
      },
    },
  });
  tl.to(".footer__title", {
    opacity: 1,
    y: 0,
  });

  tl.to(
    ".footer .form-title",
    {
      y: 0,
      opacity: 1,
    },
    "<"
  );
  tl.to(
    ".footer .form-input",
    {
      opacity: 1,
      y: 0,
    },
    "<"
  );
  tl.to(
    ".footer__img",
    {
      opacity: 1,
    },
    "<"
  );

  gsap.timeline({
    scrollTrigger: {
      trigger: ".footer__contacts",
      start: `top bottom`,
      end: `top bottom`,
      
      onEnter: () => {
        addClassName(getElementBy(".footer"), "active");
      },
      onLeaveBack: () => {
        removeClassName(getElementBy(".footer"), "active");
      },
    },
  });
  if (queryMatches(1600, "max")) {
    const fcr = document.querySelector(".footer__contacts-right");
    const fctg = document.querySelector(".footer__contacts-tg");
    const fcwp = document.querySelector(".footer__contacts-wp");
    fcr.appendChild(fctg);
    fcr.appendChild(fcwp);
  }
  if (queryMatches(768, "max")) {
    const fr = document.querySelector(".footer__right");
    const fc = document.querySelector(".footer__contacts");
    fr.appendChild(fc);
  }
}
