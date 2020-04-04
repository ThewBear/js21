(() => {
  const imageElems = document.querySelectorAll("img");
  const previousBtnElem = document.querySelector(".previous");
  const nextBtnElem = document.querySelector(".next");

  const lastIndex = imageElems.length - 1;
  let currentIndex = 0;

  previousBtnElem.addEventListener("click", () => {
    if (currentIndex === 0) {
      currentIndex = lastIndex;
    } else {
      currentIndex -= 1;
    }
    imageElems[currentIndex].scrollIntoView({ behavior: "smooth" });
  });
  nextBtnElem.addEventListener("click", () => {
    if (currentIndex === lastIndex) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    imageElems[currentIndex].scrollIntoView({ behavior: "smooth" });
  });
})();
