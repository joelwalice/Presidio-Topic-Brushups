const draggables = document.querySelectorAll(".listItem");
const container = document.querySelector(".dragClass");

let currentDragged = null;

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    currentDragged = draggable;
    draggable.classList.add("show");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("show");
  });
});

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.listItem:not(.show)')];
  
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;

    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

container.addEventListener("dragover", (e) => {
  e.preventDefault();
  const afterElement = getDragAfterElement(container, e.clientY);
  
  if (currentDragged) {
    if (afterElement === null) {
      container.appendChild(currentDragged);
    } else {
      container.insertBefore(currentDragged, afterElement);
    }
  }
});
