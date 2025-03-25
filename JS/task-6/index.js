// const draggables = document.querySelectorAll(".listItem");
// const container = document.querySelector(".dragClass");

// console.log(draggables);

// draggables.forEach((draggable) => {
//   draggable.addEventListener("dragstart", () => {
//     draggable.classList.add("show");
//   });
//   draggable.addEventListener("dragend", () => {
//     draggable.classList.remove("show");
//   });
// });

// container.addEventListener("dragover", (e) => {
//   e.preventDefault();
//   const draggable = document.querySelector(".listItem");
//   container.appendChild(draggable);
// });

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
container.addEventListener("dragover", (e) => {
  e.preventDefault();
  if (currentDragged) {
    container.appendChild(currentDragged);
    currentDragged = null;
  }
});
