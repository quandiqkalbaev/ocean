import Swiper, { Navigation, Autoplay, Pagination } from "swiper";
import { addClassName, getElementBy, getElementsBy, queryMatches, removeClassName } from "../components/utils.js";
import { Fancybox } from "@fancyapps/ui";

export function floorplan() {
  const items = getElementsBy(".floorplan__item");
  const contents = getElementsBy(".floorplan__content");
  const sliders = getElementsBy(".floorplan__slider-wrapper");

  //fancybox
  sliders.forEach((slider, index) => {
    Fancybox.bind(`[data-fancybox="gallery-${index + 1}"]`, {
      Thumbs: {
        type: "classic",
      },
      on: {
        done: () => {
          addClassName(document.body, "hide-wp");
        },
        close: () => {
          removeClassName(document.body, "hide-wp");
        },
      },
      Carousel: {
        Navigation: false,
      },
    });
  });

  items.forEach((item, index) => {
    item.addEventListener("click", () => {
      items.forEach((otherItem) => {
        removeClassName(otherItem, "active");
      });
      contents.forEach((content) => {
        removeClassName(content, "active");
      });
      sliders.forEach((sl) => {
        removeClassName(sl, "active");
      });
      addClassName(item, "active");
      addClassName(contents[index], "active");
      addClassName(sliders[index], "active");
    });
  });
  sliders.forEach((el, i) => {
    const infos = getElementsBy(".floorplan__info", contents[i]);
    const swiper = new Swiper(`.fsw${i + 1}`, {
      modules: [Navigation, Pagination],
      pagination: {
        el: `.swiper-pagination-fsw${i + 1}`,
        clickable: true,
      },
      // allowTouchMove:false,
      on: {
        slideChange: function () {
          infos.forEach((info) => {
            removeClassName(info, "active");
          });
          addClassName(infos[swiper.activeIndex], "active");
        },
      },
    });
  });

  if (queryMatches(769, "min")) {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".sections-gf",
        start: "60% bottom",
        end: "50% bottom",
        onEnter: () => {
          addClassName(getElementBy(".floorplan"), "active");
        },
        onLeaveBack: () => {
          removeClassName(getElementBy(".floorplan"), "active");
        },
      },
    });
  }

  if (queryMatches(768, "max")) {
    const fpRight = document.querySelector(".floorplan__right");
    const fpTitle = document.querySelector(".floorplan__title");
    fpRight.prepend(fpTitle);

    gsap.timeline({
      scrollTrigger: {
        trigger: ".floorplan",
        start: "25% bottom",
        end: "center bottom",
        onEnter: () => {

          addClassName(getElementBy(".floorplan"), "active");
        },
        onLeaveBack: () => {

          removeClassName(getElementBy(".floorplan"), "active");
        },
      },
    });
  }
}
