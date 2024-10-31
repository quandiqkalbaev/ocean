if (history.scrollRestoration == "auto") {
  history.scrollRestoration = "manual";
}
window.onload = function () {
  window.scrollTo(0, 0);
};
import { plugins } from "./components/plugins.js";
plugins();
import { header } from "./sections/header.js";
import { intro } from "./sections/intro.js";
import { about } from "./sections/about.js";
import { amenities } from "./sections/amenities.js";
import { floorplan } from "./sections/floorplan.js";
import { links } from "./components/links.js";
import { brochure } from "./sections/brochure.js";
import { gallery } from "./sections/gallery.js";
import { location } from "./sections/location.js";
import { payment } from "./sections/payment.js";
import { developer } from "./sections/developer.js";
import { footer } from "./sections/footer.js";
import { popup } from "./sections/popup.js";
import { btns } from "./components/btns.js";
import { axcapital } from "./sections/axcapital.js";
import { investment } from "./sections/investment.js";
import { addClassName, getElementBy, removeClassName } from "./components/utils.js";
import { forms } from "./components/forms.js";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
window.addEventListener("load", () => {
  (async function loading() {
    const mediaElements = gsap.utils.toArray("[data-img]");
    const totalMedia = mediaElements.length;
    let loadedMedia = 0;
    let loadedALL = false;
    const showLogoAt = 30;
    function updatePreloader(path) {
      if (path > showLogoAt) {
        gsap.to(".preloader__logo", {
          clipPath: `ellipse(65% ${path}% at 50% 100% )`,
          onComplete: () => {},
        });
      }
    }

    async function mediaLoaded(e) {
      loadedMedia++;

      const path = Math.floor((loadedMedia / totalMedia) * 100);

      updatePreloader(path);

      if (loadedMedia === totalMedia) {
        setTimeout(() => {
          document.body.classList.add("loaded");
        }, 400);
        setTimeout(() => {
          document.body.classList.remove("no-scroll");
          document.body.classList.add("intro-animation");
        }, 1800);

        links();
        header();
        intro();
        about();
        amenities();
        brochure();
        gallery();
        floorplan();
        location();
        payment();
        developer();
        investment();
        axcapital();
        footer();
        popup();
        btns();
        forms();

        const logoElement = document.querySelector(".gl-ax-wp-logo");
        let fullHeight = document.body.scrollHeight;
        const root = document.querySelector(":root");
        root.style.setProperty("--fullHeight", `${fullHeight}px`);
        if (logoElement) {
          logoElement.setAttribute("target", "_blank");
        }
      }
    }

    mediaElements.forEach((media) => {
      const dataSrc = media.getAttribute("data-img");
      if (dataSrc) {
        media.onerror = () => {
          console.log(`Ошибка загрузки для ${dataSrc}`);
          mediaLoaded();
        };
        media.setAttribute("src", dataSrc);
        media.onload = mediaLoaded;
      }
    });
  })();
});
