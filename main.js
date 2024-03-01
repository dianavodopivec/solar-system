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
//GSAP HORIZONTAL SCROLL
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.section-scroll').forEach((section) => {
    const timeLine = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 0,
        },
    });
    timeLine.to(section.querySelector(".wrap-scroll"), {
        x: "-300vw",
        ease: "none",
        duration: 2,
    });
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
const $title = document.querySelector("h1");
const $title2 = document.querySelector("h2");
const $star = document.querySelector(".button-play")

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
const $allPlanets = document.querySelector(".card");
let planetAppeared = false;

gsap.set($allPlanets.children, { opacity: 0, y: -100, rotation: 0 });
gsap.to($allPlanets.children, {
  opacity: 1,
  scrollTrigger: {
    trigger: ".container-planet",
    start: "top center",
    end: "+=300", 
    onEnter: () => {
      if (!planetAppeared) {
        planetAppeared = true;
        gsap.to($allPlanets.children, { opacity: 1, y: 0, rotation: 0 });
      }
    },
    onLeaveBack: () => {
      planetAppeared = false;
    },
    toggleActions: "restart pause pause pause",
    scrub: true,
  },
  y: 0,
  rotation: 0,
  duration: 4,
});

//GSAP PLANETS-NAME
const $planetName = document.querySelectorAll(".planet-name")
gsap.set($planetName, {opacity: 0, x: 0, y: -35})
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
  ease: "power1.out"
})

//GSAP INFO-P
const $planetP = document.querySelector(".info-p");
gsap.set($planetP, {opacity: 0, x: 0, y: -80})
gsap.to($planetP, {
  opacity: 1,
  x: 0,
  y: 0,
  duration: 1, 
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".info-p",
    start: "top bottom",
    end: "+=300",
    toggleActions: "restart pause pause pause",
    scrub: true
  }
})


