(() => {
  const body = document.querySelector("body");
  const eyes = document.querySelectorAll(".eye");

  function onMouseMove({ pageX, pageY }) {
    eyes.forEach(eye => {
      const { left, top } = eye.getBoundingClientRect();

      const eyeCenterX = left + eye.offsetWidth / 2;
      const eyeCenterY = top + eye.offsetHeight / 2;
      const radian = Math.atan2(pageY - eyeCenterY, pageX - eyeCenterX);
      const angle = (radian * 180) / Math.PI;
      eye.style.transform = `rotate(${angle}deg)`;
    });
  }

  body.addEventListener("mousemove", onMouseMove);
})();
