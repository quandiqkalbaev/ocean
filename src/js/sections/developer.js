import { addClassName, getElementBy, queryMatches, removeClassName } from "../components/utils.js";

export function developer() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".developer",
      start: `top bottom`,
      end: `bottom bottom`,
      scrub: 1,
    },
  });
  gsap.timeline({
    scrollTrigger: {
      trigger: ".developer",
      start: `center bottom`,
      end: `bottom bottom`,
      onEnter: () => {
        addClassName(getElementBy(".developer"), "active");
      },
      onLeaveBack: () => {
        removeClassName(getElementBy(".developer"), "active");
      },
    },
  });
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".developer",
      start: `40% bottom`,
      end: `bottom bottom`,
      scrub: 1,
    },
  });

  if (queryMatches(769, "min")) {
    tl.to(".developer__img img", {
      scale: 1,
    });
    tl.to(
      ".developer__main-bg",
      {
        transform: "translateY(0%) translateX(-50%)",
        width: "100%",
      },
      "<"
    );

    tl.to(
      ".developer__title",
      {
        opacity: 1,
      },
      "<"
    );
    tl.to(
      ".developer__linev",
      {
        clipPath: "inset(0% 0 0 0)",
      },
      "<30%"
    );
    tl3.to(".developer__info-title", {
      opacity: 1,
      y: 0,
    });
    tl3.to(
      ".developer__info-about",
      {
        opacity: 1,
        y: 0,
      },
      "<"
    );
    tl3.to(
      ".developer__logo",
      {
        opacity: 1,
        y: 0,
      },
      "<"
    );
    tl3.to(
      ".developer__right-num",
      {
        opacity: 1,
        y: 0,
      },
      "<"
    );
    tl3.to(
      ".developer__right-text",
      {
        opacity: 1,
        y: 0,
      },
      "<"
    );
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".developer",
        start: `10% bottom`,
        end: `50% bottom`,
        scrub: 1,
      },
    });
    tl2.to(".developer__sticky", {
      rotate: 0,
      scale: 1,
    });
  }

}
