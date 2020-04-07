(() => {
  function displayError(elem, message) {
    elem.parentElement.querySelector("small").innerText = message;
    elem.classList.add("invalid");
  }

  function validateLength(elem, min, max) {
    const val = elem.value;
    if (val.length < min || val.length > max) {
      const elemName = elem.getAttribute("name");
      displayError(
        elem,
        `${elemName} length must be between ${min} and ${max}.`
      );
      return false;
    }
    return true;
  }

  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    for (inputDiv of event.target.children) {
      if (inputDiv.classList.contains("input-group")) {
        inputDiv.querySelector("small").innerText = "";
        inputDiv.querySelector("input").classList.remove("invalid");
      }
    }

    let isValidFrom = true;

    const emailElem = document.getElementById("email");
    isValidFrom = validateLength(emailElem, 10, 20) && isValidFrom;
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!regex.test(emailElem.value)) {
      displayError(emailElem, "Email must be valid.");
      isValidFrom = false;
    }

    isValidFrom =
      validateLength(document.getElementById("password"), 8, 20) && isValidFrom;

    if (isValidFrom) {
      document.body.innerHTML = "";

      const pElem = document.createElement("p");
      pElem.innerText = "You have been logged in successfully!!";
      pElem.classList.add("success");
      document.body.appendChild(pElem);
    }
  });
})();
