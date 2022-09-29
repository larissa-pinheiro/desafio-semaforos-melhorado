function Phase(classNames) {
  this.red0 = false || classNames.red0;
  this.red1 = false || classNames.red1;
  this.yellow0 = false || classNames.yellow0;
  this.yellow1 = false || classNames.yellow1;
  this.green0 = false || classNames.green0;
  this.green1 = false || classNames.green1;
}

Phase.prototype.render = function () {
  Object.keys(colors).forEach((color) => {
    for (let i = 0; i < 2; i++) {
      const className = color + i;
      if (this[className]) {
        turnOnLight(className, colors[color].on);
      } else {
        turnOffLight(className, colors[color].off);
      }
    }
  });
};

const colors = {
  red: { on: "rgb(255,0,0)", off: "rgb(160,0,0,0.7)" },
  yellow: { on: "rgb(255,255,0)", off: "rgb(160,160,0,0.7)" },
  green: { on: "rgb(0, 255,0)", off: "rgb(0,160,0,0.7)" },
};

function turnOnLight(elementClass, color) {
  var elements = document.getElementsByClassName(elementClass);
  for (var i = 0, length = elements.length; i < length; i++) {
    elements[i].style.background = color;
    elements[i].style.boxShadow = `0px 0px 10px ${color}`;
  }
}

function turnOffLight(elementClass, color) {
  var elements = document.getElementsByClassName(elementClass);
  for (var i = 0, length = elements.length; i < length; i++) {
    elements[i].style.background = color;
    elements[i].style.boxShadow = "none";
  }
}
