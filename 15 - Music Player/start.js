(() => {
  const audioElem = document.querySelector("audio");
  const playBtnElem = document.querySelector(".play");
  const progressBarElem = document.querySelector(".progress-bar");

  document.querySelector(".play").addEventListener("click", (event) => {
    if (audioElem.paused) {
      audioElem.play();
      event.target.className = "pause";
      document.body.classList.add("playing");
    } else {
      audioElem.pause();
      event.target.className = "play";
      document.body.classList.remove("playing");
    }
  });

  function getDurationString(time) {
    const minute = Math.floor((time / 60) % 60).toString();
    const second = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minute === "NaN" ? "--" : minute}:${
      second === "NaN" ? "--" : second
    }`;
  }

  function onLoadedData() {
    document.querySelector(".end-time").textContent = getDurationString(
      audioElem.duration
    );
    progressBarElem.max = audioElem.duration;
  }

  audioElem.addEventListener("loadeddata", onLoadedData);

  audioElem.addEventListener("timeupdate", () => {
    document.querySelector(".start-time").textContent = getDurationString(
      audioElem.currentTime
    );
    progressBarElem.value = audioElem.currentTime;
  });

  audioElem.addEventListener("ended", () => {
    document.body.classList.remove("playing");
    playBtnElem.className = "play";
    audioElem.currentTime = 0;
  });

  progressBarElem.addEventListener("input", () => {
    audioElem.currentTime = progressBarElem.value;
  });

  onLoadedData();
})();
