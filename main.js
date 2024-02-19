import { clockFuncionality } from "./assets/scripts/clock.js";
import { getGeolocation } from "./assets/scripts/geolocation.js";
import { addAnimation } from "./assets/scripts/scroller-planet.js";
/*import { earthChanges 
} from "./assets/scripts/earthChanges.js";*/

//To execute js code that interacts with the DOM
document.addEventListener("DOMContentLoaded", (e) => {
  clockFuncionality();
  getGeolocation();
  addAnimation()
  //earthChanges();
});

//---------- GSAP ANIMATIONS ----------//

const $title = document.querySelector("h1");
const $title2 = document.querySelector("h2");
const $star = document.querySelector(".button-play");

//GSAP HORIZONTAL SCROLL
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-scroll",
    start: "top top",
    end: "bottom bottom",
    scrub: 0,
  },
});

tl.to(".wrap-scroll", {
  x: "-300vw",
  ease: "none",
  duration: 2,
});

gsap.ticker.lagSmoothing(0);

//GSAP + LENIS
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 350);
});

gsap.ticker.lagSmoothing(0);

//GSAP TITTLE
gsap.to($title, {
  scrollTrigger: {
    trigger: ".container-planet",
    start: "top, bottom",
    end: "+=400",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
  y: -80,
  scale: 0.95,
  opacity: 0,
});

gsap.to($title2, {
  scrollTrigger: {
    trigger: ".container-planet",
    start: "top, bottom",
    end: "+=400",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
  y: -100,
  scale: 0.95,
  opacity: 0,
});

gsap.to($star, {
  scrollTrigger: {
    trigger: ".container-planet",
    start: "top, bottom",
    end: "+=1200",
    toggleActions: "restart pause reverse pause",
    scrub: 0,
  },
  y: 100,
  scale: 0.55,
  opacity: 0,
});

//GSAP PLANETS 
const $sun = document.querySelector(".card");
let sunAppeared = false;

gsap.set($sun.children, { opacity: 0, y: -100, rotation: 0 });
gsap.to($sun.children, {
  opacity: 1,
  scrollTrigger: {
    trigger: ".container-planet",
    start: "top center",
    end: "+=300", 
    onEnter: () => {
      if (!sunAppeared) {
        sunAppeared = true;
        gsap.to($sun.children, { opacity: 1, y: 0, rotation: 0 });
      }
    },
    onLeaveBack: () => {
      sunAppeared = false;
    },
    toggleActions: "restart pause pause pause",
    scrub: true,
  },
  y: 0,
  rotation: 0,
  duration: 4,
});

//GSAP PLANETS-NAME
const $planetName = document.querySelector(".h3-names")
gsap.set($planetName, {opacity: 0, x: 0, y: 80})
gsap.to($planetName, {
  opacity: 1,
  x: 0,
  y: 0,
  scrollTrigger: {
    trigger: ".container-planet",
    start: "top center", 
    end: "+=200",
    toggleActions: "restart pause pause pause",
    scrub: true,
  },
  duration: 1, 
})

//GSAP PLANETS-INFO
const $planetInfo = document.querySelector(".container-info-1");
const $planetInfo2 = document.querySelector(".container-info-2");
gsap.set($planetInfo, {opacity: 0, x: 0, y: 80});
gsap.to($planetInfo, {
  opacity: 1,
  x: 0,
  y: 0,
  scrollTrigger: {
    trigger: ".container-planet",
    start: "top center", 
    end: "+=300",
    toggleActions: "restart pause pause pause",
    scrub: true,
  },
  duration: 1, 
});

gsap.set($planetInfo2, {opacity: 0, x: 0, y: -80 });
gsap.to($planetInfo2, {
  opacity: 1,
  x: 0,
  y: 0,
  scrollTrigger: {
    trigger: ".container-planet",
    start: "top center", 
    end: "+=100",
    toggleActions: "restart pause pause pause",
    scrub: true,
  },
  duration: 1, 
});

// GSAP NAV
const $nav = document.querySelector('nav');
gsap.to($nav, {opacity: 0, x: 0, y: 0})

let isAtTop = true;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  
  if (st > lastScrollTop) {
    if (isAtTop) {
      gsap.to($nav, { duration: 0.3, opacity: 1, y: 20}); 
      isAtTop = false;
    }
  } else {
    if (st <= 0) {
      gsap.to($nav, { duration: 0, opacity: 0, y: -10}); 
    }
  }
  lastScrollTop = st;
});


