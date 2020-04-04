(() => {
  const sectionElems = Array.from(document.querySelectorAll("section"));
  function onScroll() {
    sectionElems.forEach((sectionElem) => {
      const imgElem = sectionElem.querySelector("img");
      const textElem = sectionElem.querySelector(".text");

      const revealPositionFromTop =
        imgElem.offsetTop + imgElem.offsetHeight / 10;
      const revealPositionFromBottom =
        imgElem.offsetTop + imgElem.offsetHeight * 1.1;
      const scrollPosition = window.scrollY;

      if (
        scrollPosition >= revealPositionFromTop &&
        scrollPosition < revealPositionFromBottom
      ) {
        textElem.classList.add("reveal");
      }
    });
  }

  document.addEventListener("scroll", onScroll);

  onScroll();
})();
