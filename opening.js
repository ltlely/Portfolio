document.addEventListener("DOMContentLoaded", function () {
  const charImg1 = document.getElementById("char_img1");
  const bg1 = document.getElementById("bg1");
  const bg2 = document.getElementById("bg2");
  const bg3 = document.getElementById("bg3");
  const moon = document.getElementById("moon");
  const clickMeText = document.getElementById("clickable-text");

  function handleAnimationEnd() {
    window.location.href = "/page.html";
  }

  charImg1.addEventListener("click", function () {
    bg1.classList.add("move-down1");
    bg2.classList.add("move-down2");
    bg3.classList.add("move-down3");
    charImg1.classList.add("move-down4");
    moon.classList.add("move-out-left");
    clickMeText.classList.add("move-down5");

    bg1.addEventListener("animationend", handleAnimationEnd, { once: true });
    bg2.addEventListener("animationend", handleAnimationEnd, { once: true });
    bg3.addEventListener("animationend", handleAnimationEnd, { once: true });
    charImg1.addEventListener("animationend", handleAnimationEnd, {
      once: true,
    });
    moon.addEventListener("animationend", handleAnimationEnd, {
      once: true,
    });
    clickMeText.addEventListener("animationend", handleAnimationEnd, {
      once: true,
    });
  });
});
