const phases = [
  new Phase({ red1: true, green0: true }),
  new Phase({ yellow0: true, red1: true }),
  new Phase({ red0: true, green1: true }),
  new Phase({ yellow1: true, red0: true }),
];

let controller = 0;
function handleChangeColor() {
  phases[controller].render();
  controller = controller === 3 ? 0 : controller + 1;
}

document.getElementById("button").addEventListener("click", handleChangeColor);
