export const myRange = function(x, y, xMin, xMax, yMin, yMax) {
  if (x > xMin && x < xMax && y > yMin && y < yMax) {
    return true;
  }
  return false;
};

export const currentLocation = function(pojo) {
  let myLocation = "title";
  for (var location in pojo) {
    if (pojo[location].here) {
      return pojo[location].index;
    }
  }
  return myLocation;
};

export const currentAction = function(pojo) {
  let myAction = "walk";
  for (var action in pojo) {
    if (pojo[action].selected) {
      return action;
    }
  }
  return myAction;
}

export const colorActions = function(pojo, canvasContext) {
  for (var action in pojo) {
    canvasContext.fillStyle = pojo[action].selected ? "red" : "green";
    canvasContext.fillText(
      pojo[action].stringLiteral, pojo[action].xMin, pojo[action].yMax
    );
  }
}

export const identifyClickedAction = function(pojo, e) {
  for (var action in pojo) {
    if (
      myRange(
        e.clientX,
        e.clientY,
        pojo[action].xMin,
        pojo[action].xMax,
        pojo[action].yMin,
        pojo[action].yMax
      )) {
        return action;
      }
  }
  return "walk"
}
// export const renderCorrectCanvas = function
