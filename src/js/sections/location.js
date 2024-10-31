import { addClassName, getElementBy, queryMatches, removeClassName } from "../components/utils.js";

export function location() {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".location",
      start: "33.333% 100%",
      end: "66.666% 100%",
      onEnter: () => {
        addClassName(getElementBy(".location"), "active");
      },
      onLeaveBack: () => {
        removeClassName(getElementBy(".location"), "active");
      },
    },
  });
  if (queryMatches(768, "max")) {
    let container = document.querySelector(".location__map");
    let mapMarkers = document.querySelectorAll(".location__map-markers img");
    let lastMarker = mapMarkers[mapMarkers.length - 1];
    let markersPosition = lastMarker.getBoundingClientRect();
    let containerCenter = container.offsetWidth / 2;
    let scrollLeftValue = markersPosition.left - containerCenter + markersPosition.width / 2;
    gsap.to(container, {
      duration: 0,
      scrollTo: {
        x: scrollLeftValue,
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".location",
        start: "0% 100%",
        end: "100% 0%",
        onEnter: () => {
          addClassName(document.body, "hide-wp");
        },
        onEnterBack: () => {
          addClassName(document.body, "hide-wp");
        },
        onLeave: () => {
          removeClassName(document.body, "hide-wp");
        },
        onLeaveBack: () => {
          removeClassName(document.body, "hide-wp");
        },
      },
    });
  }
}
