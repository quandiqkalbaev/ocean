import { getElementsBy, removeClassName, containsClassName, addClassName, getElementBy, queryMatches } from "./utils.js";
export function links() {
  let links = getElementsBy("[data-href]"),
    wpPopup = getElementBy(".wp-popup"),
    wpPopupExit = getElementBy(".wp-popup__exit");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let target = link.getAttribute("data-href");
      removeClassName(document.body, "menu-active");
      gsap.to(window, {
        duration: 0.2,
        scrollTo: {
          y: target,
        },
        ease: "power2",
      });
    });
  });
  if (queryMatches(768, "max")) {
    let amenities = getElementBy(".amenities");
    let about = getElementBy(".about");
    let floorplan = getElementBy(".floorplan");
    let gallery = getElementBy(".gallery");
    let amenitiesTO = getElementBy(".amenities__to");
    let floorplanTO = getElementBy(".floorplan__to");
    let amenitiesTR = getElementBy(".amenities__trigger");
    let aboutTR = getElementBy(".about__trigger");
    let floorplanTR = getElementBy(".floorplan__trigger");
    let galleryTR = getElementBy(".gallery__trigger");

    amenities.appendChild(amenitiesTO);
    floorplan.appendChild(floorplanTO);

    amenities.appendChild(amenitiesTR);
    floorplan.appendChild(floorplanTR);
    about.appendChild(aboutTR);
    gallery.appendChild(galleryTR);
  }

  let triggers = getElementsBy(".trigger");
  let headerLinks = getElementsBy(".header__item");
  triggers.forEach((trigger, i) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "0% 100%",
        end: "0% 100%",
        onEnter: () => {
          for (let i = 0; i < headerLinks.length; i++) {
            removeClassName(headerLinks[i], "active");
          }
          if (headerLinks[i] && !(i == triggers.length - 2)) {
            addClassName(headerLinks[i], "active");
          }
          if (i == triggers.length - 1) {
            addClassName(headerLinks[i - 1], "active");
          }
        },
        onLeaveBack: () => {
          for (let i = 0; i < headerLinks.length; i++) {
            removeClassName(headerLinks[i], "active");
          }
          if (headerLinks[i - 1] && !(i == triggers.length - 1)) {
            addClassName(headerLinks[i - 1], "active");
          }
        },
      },
    });
  });
  let clickedOnLink = false;

  //wp trigger

  let wpTriggers = getElementsBy(".wp-trigger");

  wpTriggers.forEach((trigger, i) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "100% 100%",
        end: "100% 100%",
        onEnter: () => {
          if (!clickedOnLink) {
            // Check if a link was clicked
            addClassName(wpPopup, "active");
            addClassName(document.body, "no-scroll");
            addClassName(document.body, "hide-wp");
            tl.kill();
          }
        },
      },
    });
  });

  if (queryMatches(768, "max")) {
    let about = getElementBy(".about");
    about.appendChild(wpTriggers[0]);
  }

  wpPopupExit.addEventListener("click", () => {
    removeClassName(document.body, "no-scroll");
    removeClassName(wpPopup, "active");
    removeClassName(document.body, "hide-wp");
  });

  wpPopup.addEventListener("click", (e) => {
    if (e.target.closest(".wp-popup__wrapper")) {
      return;
    }
    removeClassName(document.body, "no-scroll");
    removeClassName(wpPopup, "active");
    removeClassName(document.body, "hide-wp");
  });

  // Global variable to track if a link was clicked

  // Check if a click event originated from a link
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-href]")) {
      clickedOnLink = true;
      setTimeout(() => {
        clickedOnLink = false;
      }, 200);
    } else {
      clickedOnLink = false;
    }
  });
}
