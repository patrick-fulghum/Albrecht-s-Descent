export const myRange = function(x, y, xMin, xMax, yMin, yMax) {
  if (x > xMin && x < xMax && y > yMin && y < yMax) {
    return true;
  }
  return false;
};

export const bodyCollision = function(x1, y1, x2, y2, x3, y3, x4, y4) {
  return (
    myRange(x1, y1, x3, x4, y3, y4) ||
    myRange(x2, y1, x3, x4, y3, y4) ||
    myRange(x1, y2, x3, x4, y3, y4) ||
    myRange(x2, y2, x3, x4, y3, y4)
  );
}

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
  return "walk";
}

export const renderItems = function(pojo, canvasContext, itemListing) {
  for (var slot in pojo) {
    if (pojo[slot].item !== "empty") {
      canvasContext.drawImage(
        itemListing[pojo[slot].item], pojo[slot].xMin, pojo[slot].yMin
      );
    }
  }
}

export const constructSentence = function(verb, subject, objective) {
  if (subject) {
    return verb + " " + subject + " with " + objective
  } else {
    return verb + " " + objective
  }
}

export const detectCollision = function(playerObject, particularEnviornment) {
  for (var object in particularEnviornment) {
    if (bodyCollision(
      playerObject.xMin,
      playerObject.yMin,
      playerObject.xMax,
      playerObject.yMax,
      particularEnviornment[object].xMin,
      particularEnviornment[object].yMin,
      particularEnviornment[object].xMax,
      particularEnviornment[object].yMax,
  )) {
    return true;
    }
  }
  return false;
}
// export const renderCorrectCanvas = function
