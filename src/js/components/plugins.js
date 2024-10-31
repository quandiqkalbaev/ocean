import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";

export function plugins() {
  window.gsap = gsap;
  window.ScrollTrigger = ScrollTrigger;
  window.ScrollToPlugin = ScrollToPlugin;
}
