/* code without function, just another way to absctract the colors */

function color(base, ratios, alpha = 1) {
  return `rgb(${ratios.map((ratio) => ratio * base).join()}, ${alpha})`;
}

function createColorObject(rr, rg, rb) {
  const ratios = [rr, rg, rb];

  const on = color(255, ratios);
  const off = color(160, ratios, 0.7);

  return { on, off };
}

const colors = {
  red: createColorObject(1, 0, 0),
  yellow: createColorObject(1, 1, 0),
  green: createColorObject(0, 1, 0),
};
