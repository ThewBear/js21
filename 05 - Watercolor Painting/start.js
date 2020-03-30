(() => {
  const canvas = document.getElementById("painting");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const context = canvas.getContext("2d");

  function distance(previousPoint, currentPoint) {
    return Math.sqrt(
      (previousPoint.x - currentPoint.x) ** 2 +
        (previousPoint.y - currentPoint.y) ** 2
    );
  }

  function onMouseMove({ pageX, pageY }) {
    const currentPoint = {
      x: pageX,
      y: pageY
    };
    const distance = Math.sqrt(
      (previousPoint.x - currentPoint.x) ** 2 +
        (previousPoint.y - currentPoint.y) ** 2
    );

    context.beginPath();
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineWidth = Math.max(
      Math.random() * 8 + 2,
      (Math.random() / distance) * 40
    );
    context.strokeStyle = `rgba(30, 201, 196, ${Math.min(0.5, 1 / distance)})`;
    context.moveTo(previousPoint.x, previousPoint.y);
    context.lineTo(currentPoint.x, currentPoint.y);
    context.stroke();

    previousPoint.x = currentPoint.x;
    previousPoint.y = currentPoint.y;
  }

  function onMouseEnter({ pageX, pageY }) {
    previousPoint.x = pageX;
    previousPoint.y = pageY;
  }

  const previousPoint = {};
  canvas.addEventListener("mouseenter", onMouseEnter);
  canvas.addEventListener("mousemove", onMouseMove);
})();
