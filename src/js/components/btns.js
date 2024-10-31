import { addClassName, getElementBy, getElementsBy, queryMatches, removeClassName } from "./utils.js";
export function btns() {
  let btns = getElementsBy(".mybtn");
  let btnsArrow = getElementsBy(".mybtn-arrow");
  let wpBtn = getElementBy(".wp-popup__btn");
  let wpBtnArrow = getElementBy(".wp-popup__btn-arrow");
  let socials = getElementsBy(".header__contacts-anim");
  const cursor = document.querySelector(".cursor");
  function cursorMove(e) {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
    });
  }
  document.addEventListener("mousemove", cursorMove);

  if (queryMatches(769, "min")) {
    //socials animation
    socials.forEach((btn, i) => {
      btn.addEventListener("mouseleave", (e) => {
        gsap.to(".header__contacts-anim", { duration: 0.3, scale: 1, x: 0, y: 0 });
      });
      btn.addEventListener("mouseenter", (e) => {
        gsap.to(".header__contacts-anim", { duration: 0.3, scale: 1, x: 0, y: 0 });
      });
      socials[i].addEventListener("mouseenter", (e) => {
        let a = socials[i].getBoundingClientRect();
        const root = document.querySelector(":root");
        addClassName(cursor, "social-hover");
        root.style.setProperty("--x", `${a.left - 9}px`);
        root.style.setProperty("--y", `${a.top - 9}px`);
        if (queryMatches(1600, "max")) {
          root.style.setProperty("--x", `${a.left - 5}px`);
          root.style.setProperty("--y", `${a.top - 5}px`);
        }
      });
      socials[i].addEventListener("mouseleave", (e) => {
        removeClassName(cursor, "social-hover");
      });

      getElementBy(".header__contacts-phone").addEventListener("mouseenter", (e) => {
        addClassName(cursor, "hidden");
      });
      getElementBy(".header__contacts-phone").addEventListener("mouseleave", (e) => {
        removeClassName(cursor, "hidden");
      });

      btn.addEventListener("mousemove", (e) => {
        let boundingRect = btn.getBoundingClientRect();
        let relX = e.clientX - boundingRect.left;
        let relY = e.clientY - boundingRect.top;
        gsap.to(btn, {
          x: ((relX - boundingRect.width / 2) / boundingRect.width) * 10,
          y: ((relY - boundingRect.height / 2) / boundingRect.width) * 10,
          ease: "Power2.easeOut",
          duration: 0.3,
        });
      });
    });

    //buttons animation
    btnsArrow.forEach((btn, i) => {
      btn.addEventListener("mouseleave", (e) => {
        gsap.to(".mybtn-arrow", { duration: 0.3, scale: 1, x: 0, y: 0 });
        removeClassName(btn, "active");
      });
      btn.addEventListener("mouseenter", (e) => {
        gsap.to(".mybtn-arrow", { duration: 0.3, scale: 1, x: 0, y: 0 });
        addClassName(btn, "active");
      });
      btns[i].addEventListener("mouseenter", (e) => {
        let a = btnsArrow[i].getBoundingClientRect();
        const root = document.querySelector(":root");
        addClassName(cursor, "hovered");
        root.style.setProperty("--x", `${a.left}px`);
        root.style.setProperty("--y", `${a.top}px`);
      });
      btns[i].addEventListener("mouseleave", (e) => {
        removeClassName(cursor, "hovered");
      });

      btn.addEventListener("mousemove", (e) => {
        let boundingRect = btn.getBoundingClientRect();
        let relX = e.clientX - boundingRect.left;
        let relY = e.clientY - boundingRect.top;
        gsap.to(btn, {
          x: ((relX - boundingRect.width / 2) / boundingRect.width) * 40,
          y: ((relY - boundingRect.height / 2) / boundingRect.width) * 40,
          ease: "Power2.easeOut",
          duration: 0.3,
        });
      });
    });

    //wp-popup btn animation
    wpBtnArrow.addEventListener("mouseleave", (e) => {
      gsap.to(wpBtnArrow, { duration: 0.3, scale: 1, x: 0, y: 0 });
      removeClassName(wpBtn, "active");
    });
    wpBtnArrow.addEventListener("mouseenter", (e) => {
      gsap.to(wpBtnArrow, { duration: 0.3, scale: 1, x: 0, y: 0 });
      addClassName(wpBtn, "active");
    });
    wpBtn.addEventListener("mouseenter", (e) => {
      addClassName(wpBtn, "active");
      let a = wpBtnArrow.getBoundingClientRect();
      const root = document.querySelector(":root");
      addClassName(cursor, "hovered");
      root.style.setProperty("--x", `${a.left}px`);
      root.style.setProperty("--y", `${a.top}px`);
    });
    wpBtn.addEventListener("mouseleave", (e) => {
      removeClassName(cursor, "hovered");
      removeClassName(wpBtn, "active");
    });

    wpBtnArrow.addEventListener("mousemove", (e) => {
      let boundingRect = wpBtnArrow.getBoundingClientRect();
      let relX = e.clientX - boundingRect.left;
      let relY = e.clientY - boundingRect.top;
      gsap.to(wpBtnArrow, {
        x: ((relX - boundingRect.width / 2) / boundingRect.width) * 40,
        y: ((relY - boundingRect.height / 2) / boundingRect.width) * 40,
        ease: "Power2.easeOut",
        duration: 0.3,
      });
    });
  }
}
