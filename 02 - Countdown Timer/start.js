(() => {
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  function setElementInnerText(id, text) {
    const element = document.getElementById(id);
    element.innerText = text;
  }

  function countDown() {
    const now = new Date().getTime();
    const newYearDate = new Date();
    const nextYear = newYearDate.getFullYear() + 1;
    newYearDate.setFullYear(nextYear, 1, 1);
    newYearDate.setHours(00, 0, 0);
    const newYear = newYearDate.getTime();
    const unixTimeLeft = newYear - now;

    setElementInnerText("nextyear", nextYear);
    setElementInnerText("days", Math.floor(unixTimeLeft / DAY));
    setElementInnerText("hours", Math.floor((unixTimeLeft % DAY) / HOUR));
    setElementInnerText("minutes", Math.floor((unixTimeLeft % HOUR) / MINUTE));
    setElementInnerText(
      "seconds",
      Math.floor((unixTimeLeft % MINUTE) / SECOND)
    );

    requestAnimationFrame(countDown);
  }

  requestAnimationFrame(countDown);
})();
