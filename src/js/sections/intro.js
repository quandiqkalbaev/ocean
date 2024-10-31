import { addClassName, containsClassName, getElementBy, queryMatches, removeClassName } from "../components/utils.js";
import Swiper, { Navigation, Autoplay, Pagination, EffectCards } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay, EffectCards]);

export function intro() {
  let intro = getElementBy(".intro");
  let introBtn = getElementBy(".intro__show");
  introBtn.addEventListener("click", () => {
    addClassName(intro, "click");
    setTimeout(() => {
      removeClassName(intro, "click");
    }, 400);
    if (!containsClassName(intro, "hidden")) {
      addClassName(intro, "hidden");
    } else {
      removeClassName(intro, "hidden");
    }
  });
  gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "bottom bottom",
      end: "top bottom",
      onEnter: () => {
        if (containsClassName(intro, "hidden")) {
          removeClassName(intro, "hidden");
        }
      },
      onEnterBack: () => {},
    },
  });
  //intro slider
  let swiperEffect = new Swiper(".intro__swiper", {
    // modules:
    loop: true,
    direction: "vertical",
    cardsEffect: {
      rotate: false,
      slideShadows: false,
      perSlideOffset: queryMatches(768, "max") ? 15 : 10,
    },
    effect: "cards",
    grabCursor: true,
    navigation: {
      prevEl: "#introSwiperBot",
      nextEl: "#introSwiperTop",
    },
    pagination: {
      el: `.intro__pagination`,
      clickable: false,
    },
    next: {
      translate: 100,
    },
  });
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro",
      start: "40% bottom",
      end: "80% bottom",
      scrub: true,
      onEnter: () => {
        addClassName(getElementBy(".preloader"), "hidden");
        addClassName(getElementBy(".intro"), "show-a");
      },
      onLeaveBack: () => {
        removeClassName(getElementBy(".preloader"), "hidden");
        removeClassName(getElementBy(".intro"), "show-a");
      },
    },
  });
  tl.to(".header", {
    y: 0,
    opacity: 1,
  });
  if (queryMatches(769, "min")) {
    tl.to(
      ".intro__img",
      {
        clipPath: "inset(0 0 54% 0)",
      },
      "<"
    );
    tl.to(
      ".intro__img img",
      {
        yPercent: -25,
      },
      "<"
    );
  }

  if (queryMatches(768, "max")) {
    tl.to(
      ".intro__container",
      {
        // top: "calc(26lvh + var(--mobHeaderHeight))",
        top: "var(--mobHeaderHeight)",

      },
      "<"
    );

    tl.to(
      ".intro__img",
      {
        top: 50,
        height: "26lvh",
        onComplete: () => {
          document.body.classList.remove("hide-wp");
        },
        onReverseComplete: () => {
          document.body.classList.add("hide-wp");
        },
      },
      "<"
    );

  }
  // tl.to(
  //   ".preloader",
  //   {
  //     clipPath: "inset(0 0 54% 0)",
  //   },
  //   "<"
  // );

  tl.to(
    ".intro__title",
    {
      y: 0,
    },
    "<"
  );
  tl.to(
    ".intro__developer",
    {
      y: 0,
    },
    "<"
  );
  tl.to(
    ".intro__bot",
    {
      y: 0,
    },
    "<"
  );
  tl.to(
    ".intro__list",
    {
      y: 0,
    },
    "<"
  );
  tl.to(
    ".intro__linev",
    {
      clipPath: "inset(0% 0% 0% 0%)",
    },
    "<"
  );
}
