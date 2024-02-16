const $scrollers = document.querySelectorAll(".scroller");

const addAnimation = () => {
  $scrollers.forEach(scroller => {
    scroller.setAttribute("data-animated", true);

    const scrollerIner = scroller.querySelector(".scroller-inner");
    const scrollerContent = Array.from(scrollerIner.children);

    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerIner.appendChild(duplicatedItem);
    });
  });
};

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

export {
    addAnimation
}