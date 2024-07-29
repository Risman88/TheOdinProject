document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.textContent = "Etch a Sketch";
  const body = document.querySelector("#body");
  const container = document.querySelector("#container");
  const div = document.createElement("div");
  div.className = "detail";
  const p = document.createElement("p");
  p.textContent = "Default Grid Size 16 x 16";
  const button = document.createElement("button");
  button.setAttribute("id", "resizeGrid");
  button.textContent = "Resize/Reset Grid";
  button.addEventListener("click", resizeGrid);

  body.insertBefore(header, container);
  header.appendChild(h1);
  body.insertBefore(div, container);
  div.appendChild(p);
  div.appendChild(button);

  function grid(size) {
    const gridSize = 640 / size;

    for (let i = 0; i < size * size; i++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");
      grid.setAttribute("id", "grid");
      grid.style.width = `${gridSize}px`;
      grid.style.height = `${gridSize}px`;
      grid.style.opacity = 1;
      grid.count = 1;

      grid.addEventListener("mouseover", () => {
        console.log(grid.count);
        const currentOpacity = parseFloat(grid.style.opacity);
        if (grid.count >= 10) {
          grid.style.backgroundColor = "black";
          grid.style.opacity = 1;
        } else {
          grid.style.backgroundColor = randomRGB();
          grid.style.opacity = currentOpacity - 0.1;
          grid.count= grid.count + 1;
        }

      });
      container.appendChild(grid);
    }
  }

  function resizeGrid() {
    let size = prompt ("Please input your desired Grid size(Max: 100):");

      if (isNaN(size)) {
        console.log("Size not number");
        container.innerHTML = "";
        grid(16);
      } else if (size > 100){
        console.log("Size more than 100, Grid size set to 100");
        container.innerHTML = "";
        grid(100);
      } 
        else {
        container.innerHTML = "";
        grid(size);
      }
  }

  function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  grid(16);
});
