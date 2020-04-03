(() => {
  const taskElems = Array.from(document.querySelectorAll(".task"));
  const dropZoneElems = Array.from(document.querySelectorAll(".drop-zone"));

  let draggingElem, draggingChild;

  taskElems.forEach(taskElem => {
    taskElem.addEventListener("dragstart", event => {
      draggingElem = event.currentTarget;
    });
  });

  dropZoneElems.forEach(dropZoneElem => {
    dropZoneElem.addEventListener("drop", event => {
      event.currentTarget.appendChild(draggingElem);
      draggingElem = null;
      event.currentTarget.style.outlineStyle = null;
    });
    dropZoneElem.addEventListener("dragenter", event => {
      event.preventDefault();
      if (event.currentTarget !== event.target) {
        draggingChild = true;
      } else {
        draggingChild = false;
      }
      event.currentTarget.style.outlineStyle = "solid";
    });
    dropZoneElem.addEventListener("dragleave", event => {
      if (!draggingChild && event.currentTarget === event.target) {
        event.currentTarget.style.outlineStyle = null;
      }
    });
    dropZoneElem.addEventListener("dragover", event => {
      event.preventDefault();
    });
  });
})();
