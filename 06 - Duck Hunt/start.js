(() => {
  const random = (min, max) => Math.random() * (max - min) + min;
  const ducks = Array.from(Array(5)).map(() => {
    const x = random(0, window.innerWidth);
    const y = window.innerHeight;
    const duckElem = document.createElement("div");
    duckElem.className = "duck";
    duckElem.style.left = `${x}px`;
    duckElem.style.top = `${y}px`;
    document.body.appendChild(duckElem);

    return {
      data: {
        x,
        y,
        speedX: random(-10, 10),
        speedY: random(2, 5),
        lastWing: null,
        shooted: false
      },
      elem: duckElem
    };
  });

  function moveDuck({ data, elem }) {
    if (data.shooted) return;

    const { left, top } = elem.getBoundingClientRect();
    const centerWidth = elem.clientWidth / 2;
    if (data.x < 0 - centerWidth) {
      data.speedX = Math.abs(data.speedX);
    } else if (data.x > window.innerWidth - centerWidth) {
      data.speedX = -Math.abs(data.speedX);
    } else if (Math.random() > 0.995) {
      data.speedX = random(-10, 10);
    }

    const centerHeight = elem.clientHeight / 2;
    if (data.y < 0 - centerHeight) {
      data.speedY = -Math.abs(data.speedY);
    } else if (data.y > window.innerHeight - centerHeight) {
      data.speedY = Math.abs(data.speedY);
    } else if (Math.random() > 0.995) {
      data.speedY = random(2, 5);
    }

    data.x = left + data.speedX;
    data.y = top - data.speedY;
    elem.style.left = `${data.x}px`;
    elem.style.top = `${data.y}px`;

    const direction = data.speedX > 0 ? 1 : -1;
    elem.style.transform = `scaleX(${direction})`;
    if (
      !data.lastWing ||
      Date.now() - data.lastWing > Math.abs(1000 / data.speedY)
    ) {
      data.lastWing = Date.now();
      elem.style.backgroundImage =
        elem.style.backgroundImage.indexOf("1") !== -1
          ? `url(./right-2.png)`
          : `url(./right-1.png)`;
    }
  }

  function run() {
    ducks.forEach(duck => moveDuck(duck));
    requestAnimationFrame(run);
  }

  ducks.forEach(duck =>
    duck.elem.addEventListener("click", () => {
      duck.data.shooted = true;
      duck.elem.style.transition = `top ${window.innerHeight /
        (window.innerHeight + duck.data.y)}s ease-in`;
      duck.elem.style.top = `${window.innerHeight}px`;

      if (ducks.every(duck => duck.data.shooted)) {
        const winningElem = document.querySelector(".winning");
        duck.elem.addEventListener("transitionend", () => {
          winningElem.style.opacity = 1;
        });
      }
    })
  );

  run();
})();
