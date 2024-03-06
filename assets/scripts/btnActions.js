const $buttonDM = document.querySelector(".button-disc-more");
const $info1 = document.querySelector(".info-1");
const $info2 = document.querySelector(".info-2");
const $info3 = document.querySelector(".info-3");

const buttonActions = () => {
  const showInfo = ($info) => {
    $info.style.display = "block";
    setTimeout(() => {
      $info.style.opacity = "1";
      $info.classList.add("visible"); 
    }, 0);
  };

  const hideInfo = ($info) => {
    $info.style.opacity = "0";
    setTimeout(() => {
      $info.style.display = "none";
      $info.classList.remove("visible"); 
    }, 500);
  };

  $buttonDM.addEventListener("click", e => {
    if ($info1.classList.contains("visible")) {
      hideInfo($info1);
      hideInfo($info2);
      hideInfo($info3);
      $buttonDM.style.backgroundColor = "";
    } else {
      showInfo($info1);
      showInfo($info2);
      showInfo($info3);
      $buttonDM.style.backgroundColor = "#c6997472";
    }
  });
}

export {
    buttonActions,
}