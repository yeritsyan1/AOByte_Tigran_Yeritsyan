let isRotated;
const input = document.createElement("input");
const addButton = document.createElement("button");
const rotate = document.createElement("button");
const parent = document.createElement("div");

input.placeholder = "Length (N)";
input.type = "number";
addButton.textContent = "Create";

document.body.appendChild(input);
document.body.appendChild(addButton);
document.body.appendChild(parent);

addButton.addEventListener("click", () => {
  createTriangle();
});

input.addEventListener("keydown", (e) => {
  e.keyCode === 13 /* enter button */ && createTriangle();
});

function createTriangle() {
  isRotated = false;
  const length = input.value;
  drawTriangle(length);
  rotate.textContent = "Rotate";
  document.body.appendChild(rotate);
}

rotate.addEventListener("click", () => {
  drawTriangle(input.value);
});

function drawTriangle(length) {
  if (length > 2 && length <= 25) {
    if (!isRotated) {
      isRotated = !isRotated;
      removeChildren();

      for (let i = length; i > 0; i--) {
        const row = document.createElement("div");
        row.style.width = "30%";
        row.style.height = "7px";
        row.style.textAlign = "center";
        row.textContent = "*".repeat(i);
        parent.appendChild(row);
      }
    } else {
      return rotateTriangle(length);
    }
  } else {
    alert("This number is incorrect. You need to write a number from 3 to 25.");
  }
}

function rotateTriangle(length) {
  if (length > 2 && length <= 25) {
    isRotated = !isRotated;
    removeChildren();

    for (let i = 1; i <= length; i++) {
      const row = document.createElement("div");
      row.style.width = "30%";
      row.style.height = "7px";
      row.style.textAlign = "center";
      row.textContent = "*".repeat(i);
      parent.appendChild(row);
    }
  }
}

function removeChildren() {
  for (let i = parent.children.length - 1; i >= 0; i--) {
    const child = parent.children[i];
    parent.removeChild(child);
  }
}
