(() => {
  document.addEventListener("scroll", () => {
    const moon = document.querySelector(".moon");
    const wish = document.querySelector(".wish");
    console.log(window.scrollY / window.innerHeight)

    moon.style.transform = `scale(${window.innerWidth /
      1000}) translate(${(window.scrollY / window.innerHeight * window.innerWidth * 0.6)}%, ${window.scrollY * -1.7}%)`;
    wish.style.transform = `translateY(${window.scrollY * -5}%)`;
  });
})();
