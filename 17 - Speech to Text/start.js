(() => {
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new window.SpeechRecognition();
  const btnElem = document.querySelector(".control");

  recognition.addEventListener("result", (event) => {
    const textElem = document.querySelector(".text");
    const { transcript } = event.results[0][0];
    textElem.innerText += " " + transcript;
  });
  recognition.addEventListener("end", () => {
    if (!btnElem.classList.contains("record")) {
      recognition.start();
    }
  });

  recognition.addEventListener("soundstart", (event) => {
    btnElem.classList.add("hearing");
  });

  recognition.addEventListener("soundend", (event) => {
    btnElem.classList.remove("hearing");
  });

  btnElem.addEventListener("click", () => {
    if (btnElem.classList.contains("record")) {
      recognition.start();
      btnElem.classList.remove("record");
      btnElem.classList.add("pause");
    } else {
      recognition.stop();
      btnElem.classList.remove("pause");
      btnElem.classList.add("record");
    }
  });
})();
