import { addClassName, removeClassName, getElementBy, getElementsBy, queryMatches } from "../components/utils.js";

export function amenities() {
  let elements = getElementsBy(".amenities__card");
  if (queryMatches(769, "min")) {
    let currentIndex = 2;
    let intervalId = null;

    function setActive(index) {
      elements.forEach((el, i) => {
        el.classList.remove("activated");
      });
      elements[index].classList.add("activated");
    }

    function startAutoplay() {
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % elements.length;
        setActive(currentIndex);
      }, 1500);
    }
    function stopAutoplay() {
      clearInterval(intervalId);
    }
    function startHover() {
      elements.forEach((element, index) => {
        element.addEventListener("mouseenter", () => {
          stopAutoplay();
          setActive(index);
        });

        element.addEventListener("mouseleave", () => {
          currentIndex = index;
          startAutoplay();
        });
      });
    }

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sections-aa",
        start: "50% 100%",
        end: "75% 100%",
        scrub: 1,
        onEnter: () => {
          addClassName(getElementBy(".amenities"), "clickable");
        },
        onLeave: () => {
          document.body.style.background = "#1d1d1d";
        },
        onEnterBack: () => {
          document.body.style.background = "#000000";
        },
        onLeaveBack: () => {
          removeClassName(getElementBy(".amenities"), "clickable");
        },
      },
    });
    tl.to(".about", {
      rotate: -5,
      scale: 0.8,
      opacity: 0,
    });
    tl.to(
      ".amenities",
      {
        rotate: 0,
        scale: 1,
      },
      "<"
    );
    tl.to(".amenities__wrapper", { y: 0 }, "<");
    tl.to(
      elements[0],
      {
        y: 0,
      },
      "<10%"
    );
    tl.to(
      elements[1],
      {
        y: 0,
      },
      "<15%"
    );
    tl.to(
      elements[2],
      {
        y: 0,
      },
      "<20%"
    );
    let done = false;
    gsap.timeline({
      scrollTrigger: {
        trigger: ".sections-aa",
        start: "75% 100%",
        end: "100% 100%",
        onEnter: () => {
          if (!done) {
            startAutoplay();
            done = true;
            startHover();
          }
        },
      },
    });
  }

  if (queryMatches(768, "max")) {
    elements.forEach((card, i) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: i == 0 ? `50% 95%` : `100% 95%`,
          end: "0 100%",
          onEnter: () => {
            addClassName(card, "active");
            if (i == 0) {
              addClassName(getElementBy(".amenities"), "active");
            }
          },
          onLeaveBack: () => {
            if (i == 0) {
              removeClassName(getElementBy(".amenities"), "active");
            }
            removeClassName(card, "active");
          },
        },
      });
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".amenities__title",
        start: "bottom bottom",
        end: "0 100%",
        onEnter: () => {
          addClassName(getElementBy(".amenities"), "active");
        },
        onLeaveBack: () => {
          removeClassName(getElementBy(".amenities"), "active");
        },
      },
    });
  }
}
