(() => {
  // Config
  const minSpeedX = -4;
  const maxSpeedX = 4;
  const minSpeedY = 0;
  const maxSpeedY = 2;

  // Create canvas
  const canvas = document.getElementById("falling-snow-canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const canvasContext = canvas.getContext("2d");

  // Utilities
  const random = (min, max) => Math.random() * (max - min) + min;

  const snowBalls = Array.from(
    Array(Math.floor((canvas.width * canvas.height) / 4000))
  ).map(() => ({
    x: random(0, canvas.width),
    y: random(0, canvas.height),
    radius: random(2, 4),
    opacity: random(0.5, 1),
    speedX: random(minSpeedX, maxSpeedX),
    speedY: random(minSpeedX, maxSpeedY)
  }));

  function draw(snowBall) {
    canvasContext.beginPath();
    canvasContext.arc(snowBall.x, snowBall.y, snowBall.radius, 0, Math.PI * 2);
    canvasContext.fillStyle = `rgba(255,255,255,${snowBall.opacity})`;
    canvasContext.fill();
  }

  function moveSnowBall(snowBall) {
    snowBall.x += snowBall.speedX;
    snowBall.y += snowBall.speedY;

    if (snowBall.x < 0) {
      snowBall.x = canvas.width;
    } else if (snowBall.x > canvas.width) {
      snowBall.x = 0;
    }

    if (snowBall.y < 0) {
      snowBall.y = canvas.height;
    } else if (snowBall.y > canvas.height) {
      snowBall.y = 0;
      snowBall.radius = random(2, 4);
    }

    if (Math.random() > 0.9) {
      snowBall.speedX += random(-0.2, 0.2);
      snowBall.speedY += random(0, 0.05);
      if (snowBall.speedX > maxSpeedX || snowBall.speedX < minSpeedX) {
        snowBall.speedX = random(minSpeedX, maxSpeedX);
      }
      if (snowBall.speedY > maxSpeedY || snowBall.speedY < minSpeedY) {
        snowBall.speedY = random(minSpeedY, maxSpeedY);
      }
    }
  }

  function animate() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    snowBalls.forEach(snowBall => draw(snowBall));
    snowBalls.forEach(snowBall => moveSnowBall(snowBall));
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
})();
