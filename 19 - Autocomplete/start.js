(() => {
  const IDLE = Symbol("IDLE");
  const SUGGESTING = Symbol("SUGGESTING");

  const carBrands = [
    "BMW",
    "Maserati",
    "Mercedes Benz",
    "Ferrari",
    "Toyota",
    "Honda",
    "Hyundai",
  ];

  let state = IDLE;
  const searchElem = document.querySelector(".search");

  searchElem.addEventListener("input", (event) => {
    const inputText = event.target.value.toLowerCase();
    const matchedCarBrands = carBrands.filter((carBrand) =>
      carBrand.toLowerCase().startsWith(inputText)
    );

    const ulElem =
      document.querySelector(".results") || document.createElement("ul");
    ulElem.classList.add("results");
    ulElem.innerHTML = "";
    matchedCarBrands.forEach((carBrand) => {
      const liElem = document.createElement("li");
      liElem.innerText = carBrand;
      liElem.addEventListener("click", () => {
        document.body.removeChild(ulElem);
        searchElem.value = carBrand;
        state = IDLE;
      });
      ulElem.appendChild(liElem);
    });

    state = SUGGESTING;
    document.body.appendChild(ulElem);
  });

  searchElem.addEventListener("change", () => {
    if (state === IDLE) {
      const ulElem = document.querySelector(".results");
      document.body.removeChild(ulElem);
    } else {
      requestAnimationFrame(() => (state = IDLE));
    }
  });
})();
