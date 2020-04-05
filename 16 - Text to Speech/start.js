(() => {
  const message = new SpeechSynthesisUtterance();

  speechSynthesis.addEventListener("voiceschanged", () => {
    const voices = speechSynthesis.getVoices();
    const enVoice = voices.find((voice) => voice.lang === "en-US");
    message.voice = enVoice;
  });

  const imgElems = Array.from(document.querySelectorAll("img"));
  imgElems.forEach((imgElem) =>
    imgElem.addEventListener("click", (event) => {
      message.text = event.target.getAttribute("alt");
      speechSynthesis.speak(message);
    })
  );
})();
