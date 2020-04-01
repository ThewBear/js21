(() => {
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA"
  ];

  let index = 0;

  document.addEventListener("keydown", event => {
    console.log(event.code, index);
    event.code === konamiCode[index] ? index++ : (index = 0);
    if (index === konamiCode.length) {
      startSnowing();
    }
  });
})();
