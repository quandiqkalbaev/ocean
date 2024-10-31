import { Fancybox } from "@fancyapps/ui";
import { getElementsBy, addClassName, removeClassName, getElementBy, queryMatches } from "../components/utils.js";

export function gallery() {
  Fancybox.defaults.Hash = false;
  Fancybox.bind("[data-fancybox]", {
    Thumbs: {
      type: "classic",
    },
    on: {
      done: () => {
        addClassName(document.body, "hide-wp");
        const closeBtn = document.querySelector("[data-fancybox-close]");
        closeFancy(closeBtn);
      },
      close: () => {
        removeClassName(document.body, "hide-wp");
      },
    },

    Carousel: {
      Navigation: false,
    },
  });

  function closeFancy(closebtn) {
    window.addEventListener("click", (e) => {
      const target = e.target;
      if (!target.closest("img")) {
        closebtn.click();
      }
    });
  }

  gsap.timeline({
    scrollTrigger: {
      trigger: ".gallery__title",
      start: "50% bottom",
      end: "top bottom",
      onEnter: () => {
        addClassName(getElementBy(".gallery__top"), "active");
      },
      onEnterBack: () => {
        removeClassName(getElementBy(".gallery__top"), "active");
      },
    },
  });
  gsap.timeline({
    scrollTrigger: {
      trigger: ".gallery",
      start: "50% bottom",
      end: "top bottom",
      onEnter: () => {
        document.body.style.background = "#000000";
        addClassName(getElementBy(".gallery"), "active");
      },
      onEnterBack: () => {
        removeClassName(getElementBy(".gallery"), "active");
      },
    },
  });
  if (queryMatches(769, "min")) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sections-gf",
        start: "50% 100%",
        end: "75% 100%",
        scrub: 1,
        onEnter: () => {
          addClassName(getElementBy(".floorplan"), "clickable");
        },
        onLeaveBack: () => {
          removeClassName(getElementBy(".floorplan"), "clickable");
        },
      },
    });
    tl.to(".gallery", {
      rotate: 5,
      scale: 0.8,
      opacity: 0,
    });
    tl.to(
      ".floorplan",
      {
        rotate: 0,
        scale: 1,
      },
      "<"
    );
    tl.to(".floorplan__wrapper", { y: 0 }, "<");
  }

  let items = getElementsBy(".gallery__item");
  const itemsArray = Array.from(items);

  // Перемешиваем массив
  itemsArray.sort(() => Math.random() - 0.5);

  // Применяем порядок и задержку анимации к каждому элементу
  itemsArray.forEach((item, index) => {
    item.style.transitionDelay = `${index * 50}ms`;
  });

  // getElementBy(".fancybox__container").addEventListener("click", (e) => {
  //   if (e.target.closest(".fancybox__content")) {
  //     return;
  //   }
  //   document.querySelector(".fancybox-close").click();
  // });
}
