import { getElementBy, addClassName, removeClassName, queryMatches } from "../components/utils.js";

export function axcapital() {
  //developer
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".developer",
      start: `bottom bottom`,
      end: `bottom top`,
      scrub: 1,
    },
  });
  if (queryMatches(769, "min") && queryMatches(2559, "max")) {
    tl.fromTo(
      ".developer__main-bg",
      {
        width: "100%",
      },
      {
        width: "107.2%",
      },
      "<"
    );
  }
  if (queryMatches(2560, "min") && queryMatches(3839, "max")) {
    tl.fromTo(
      ".developer__main-bg",
      {
        width: "100%",
      },
      {
        width: "calc(100% + 100px)",
      },
      "<"
    );
  }
  if (queryMatches(3840, "min")) {
    tl.fromTo(
      ".developer__main-bg",
      {
        width: "100%",
      },
      {
        width: "calc(100% + 140px)",
      },
      "<"
    );
  }
  //axcapital
  if (queryMatches(769, "min")) {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".axcapital__bot",
        start: `center bottom`,
        end: `bottom top`,
        onEnter: () => {
          addClassName(getElementBy(".axcapital"), "active");
        },
        onLeaveBack: () => {
          removeClassName(getElementBy(".axcapital"), "active");
        },
      },
    });
  }
  gsap.timeline({
    scrollTrigger: {
      trigger: ".axcapital__title",
      start: `center bottom`,
      end: `bottom top`,
      onEnter: () => {
        addClassName(getElementBy(".axcapital__title"), "active");
        addClassName(getElementBy(".axcapital__right"), "active");
      },
      onLeaveBack: () => {
        removeClassName(getElementBy(".axcapital__title"), "active");
        removeClassName(getElementBy(".axcapital__right"), "active");
      },
    },
  });
  gsap.timeline({
    scrollTrigger: {
      trigger: ".axcapital__left",
      start: `center bottom`,
      end: `bottom top`,
      onEnter: () => {
        addClassName(getElementBy(".axcapital__left"), "active");
      },
      onLeaveBack: () => {
        removeClassName(getElementBy(".axcapital__left"), "active");
      },
    },
  });
}
