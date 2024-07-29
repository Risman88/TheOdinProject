document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  const body = document.querySelector("#body");
  const container = document.querySelector("#container");
  h1.textContent = "Etch a Sketch";
  body.insertBefore(header, container);
  header.appendChild(h1);

  function grid(size) {
    const gridSize = 640 / size;

    for (let i = 0; i < size * size; i++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");
      grid.setAttribute("id", "grid");
      grid.style.width = `${gridSize}px`;
      grid.style.height = `${gridSize}px`;

      container.appendChild(grid);
    }
  }

  grid(16);
});
