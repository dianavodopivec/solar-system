const $buttonDM = document.querySelector(".button-disc-more");
const $info1 = document.querySelector(".info-1");
const $info2 = document.querySelector(".info-2");
const $info3 = document.querySelector(".info-3");
const $info4 = document.querySelector(".info-4");

const buttonActions = () => {
  const showInfo = ($info) => {
    $info.style.display = "block";
    setTimeout(() => {
      $info.style.opacity = "1";
      $info.classList.add("visible");
    }, 50);
  };

  const hideInfo = ($info) => {
    $info.style.opacity = "0";
    $info.style.display = "none";
    $info.classList.remove("visible");
  };

  $buttonDM.addEventListener("click", (e) => {
    if ($info1.classList.contains("visible")) {
      hideInfo($info1);
      hideInfo($info2);
      hideInfo($info3);
      hideInfo($info4); 
    } else {
      showInfo($info1);
      showInfo($info2);
      showInfo($info3);
      showInfo($info4);
    }
  });

  $info4.addEventListener("click", (e) => {
    if ($info4.classList.contains("visible")) {
      hideInfo($info4);
    } else {
      showInfo($info4);
    }
  });
};

export { buttonActions };
