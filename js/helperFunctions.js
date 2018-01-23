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
    if (pojo[action]) {
      return action;
    }
  }
  return myAction;
}
// export const renderCorrectCanvas = function
