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
  let myAction;
  for (var action in pojo) {
    if (pojo[action].selected) {
      return action;
    }
  }
  return myAction;
};

export const colorActions = function(pojo, canvasContext) {
  if (pojo.renderActions) {
    canvasContext.font = "28px serif";
    for (var action in pojo) {
      canvasContext.fillStyle = pojo[action].selected ? "red" : "green";
      canvasContext.fillText(
        pojo[action].stringLiteral, pojo[action].xMin, pojo[action].yMax
      );
    }
  }
};

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
  return "";
};

export const renderItems = function(pojo, canvasContext, itemListing) {
  for (var slot in pojo) {
    if (pojo[slot].item !== "empty") {
      canvasContext.drawImage(
        itemListing[pojo[slot].item], pojo[slot].xMin, pojo[slot].yMin
      );
    }
  }
};

export const constructSentence = function(verb, subject, objective) {
  if (subject && objective) {
    return verb + " " + subject + " with " + objective;
  } else if (subject) {
    return verb + " " + subject;
  } else if (objective){
    return verb + " " + objective;
  } else {
    return verb;
  }
};

export const detectBodyCollision = function(playerObject, particularEnvironment) {
  for (var object in particularEnvironment) {
    if (bodyCollision(
      playerObject.xMin,
      playerObject.yMin,
      playerObject.xMax,
      playerObject.yMax,
      particularEnvironment[object].xMin,
      particularEnvironment[object].yMin,
      particularEnvironment[object].xMax,
      particularEnvironment[object].yMax
  )) {
    return object;
    }
  }
  return false;
};

export const detectHoverCollision = function(e, env) {
  for (var obj in env) {
    if (env[obj].static || (env[obj].presence)) {
      if (myRange(
        e.clientX, e.clientY, env[obj].xMin, env[obj].xMax, env[obj].yMin, env[obj].yMax
      )) {
        return env[obj].name;
      }
    }
  }
  return "";
};

export const writeSentence = function(gameObject, canvasContext) {
  if (gameObject.speakers["albrecht"].speaking) {
    var thisAction = currentAction(gameObject['actions']);
    canvasContext.font = "20px serif";
    canvasContext.fillText(
      constructSentence(
        gameObject["actions"][thisAction].stringLiteral,
        gameObject["subject"],
        gameObject["objective"]
      ), 330, 440
    );
  }
};

export const moveCalc = function(x1, y1, x2, y2) {
  var myUp;
  var myRight;
  var slope = (y1 - y2) / (x2 - x1);
  if (slope > 2) {
    slope = 2;
  } else if (slope < -2) {
    slope = -2;
  } else if (slope < 0 && slope > -0.5) {
    slope = -0.5;
  } else if (slope < 0.5 && slope >= 0) {
    slope = 0.5;
  }
  if (x1 > x2) {
    myRight = -1;
  } else {
    myRight = 1;
  }
  if (y1 > y2) {
    myUp = -1;
  } else {
    myUp = 1;
  }
  return [slope, myUp, myRight];
};

export const handleX = function(array) {
  return (1 / (Math.pow(Math.pow(array[0], 2), 0.5)) * array[2]);
};

export const handleY = function(array) {
  return (Math.pow(Math.pow(array[0], 2), 0.5) * array[1]);
};

export const currentSpeaker = function(pojo) {
  for (var speaker in pojo) {
    if (pojo[speaker].speaking) {
      return speaker;
    }
  }
};

export const renderSpeaker = function(pojo, context) {
  var thisSpeaker = currentSpeaker(pojo);
  context.drawImage(pojo[thisSpeaker].image, 30, 470);
  if (thisSpeaker !== "albrecht") {
    context.drawImage(pojo["dialogBox"].image, 197, 455);
  }
};

export const actionInitiation = function(body1, body2) {
  return bodyCollision(
    body1.xMin - 20,
    body1.yMin - 20,
    body1.xMax + 20,
    body1.yMax + 20,
    body2.xMin - 20,
    body2.yMin - 20,
    body2.xMax + 20,
    body2.yMax + 20
  );
};

export const checkSpeakers = function(gameObject) {
  let validSpeakers = ["albrecht"];
  let thisLocation = gameObject["locations"][currentLocation(gameObject["map"])];
  for (var speaker in gameObject["speakers"]) {
    if (gameObject["speakers"][speaker].location === thisLocation) {
      if (actionInitiation(
        gameObject["albrecht"],
        gameObject["environment"][thisLocation][speaker]
      ))
      {
        validSpeakers[0] = speaker;
      }
    }
  }
  return validSpeakers;
};

export const parseSentence = function(string, index) {
  var array = ["", "", ""];
  let i = 0;
  let j = 0;
  while (i < string.length) {
    if (Math.floor(i / index) > j && (string[i] === " ")) {
      j += 1;
    }
    array[j] += string[i];
    i += 1;
  }
  return array;
};

export const writeDialog = function(game, canvasContext, indice, nodeIdx) {
  if (!game.validSpeakers[0]) { return; }
  let completed = false;
  let thisNode = game["speakers"][game.validSpeakers[0]].tree[nodeIdx];
  var temp = canvasContext.font;
  var temp2 = canvasContext.fillStyle;
  canvasContext.font = "22px serif";
  canvasContext.fillStyle = "white";
  if (
    game.validSpeakers[0] &&
    game["speakers"][game.validSpeakers[0]].speaking
    ) {
    var sentence = thisNode.getLine().slice(0, indice);
    var sentenceArray = parseSentence(sentence, 75);
    completed = (thisNode.getLine().length < indice);
    if (completed) {
      let t = 0;
      let links = thisNode.getLinks();
      links.forEach((link) => {
        var response = parseSentence(link.getLine(), 75);
        var numberofLinesforLine = response.length;
        if (game.hoveredResponse[t]) {
          canvasContext.fillStyle = "red";
        } else {
          canvasContext.fillStyle = "white";
        }
        canvasContext.fillText(response[0], 273, (505 + t*30));
        t++;
      });
    } else {
      canvasContext.fillText(sentenceArray[0], 273, 505);
      canvasContext.fillText(sentenceArray[1], 273, 535);
      canvasContext.fillText(sentenceArray[2], 273, 565);
    }
  }
  canvasContext.font = temp;
  canvasContext.fillStyle = temp2;
};

export const renderResponse = function(
  gameObject, indice, canvasContext, nodeIdx, linkIndex
  ) {
  canvasContext.font = "22px serif";
  canvasContext.fillStyle = "white";
  var myTree = gameObject["speakers"][gameObject.previousSpeaker].tree;
  var thisLink = myTree[nodeIdx].getLink(linkIndex);
  var response = thisLink.getLine();
  let completed = (response.length < indice);
  response = response.slice(0, indice);
  let nextNode = thisLink.getNextNode();
  var thisResponseArray = parseSentence(response, 75);
  canvasContext.fillText(thisResponseArray[0], 273, 505);
  canvasContext.fillText(thisResponseArray[1], 273, 535);
  canvasContext.fillText(thisResponseArray[2], 273, 565);
  if (completed) {
    return nextNode;
  } else {
    return nodeIdx;
  }
};

export const endConversation = function(gameObject, nodeIdx) {
  if (gameObject.previousSpeaker) {
    let myNode = gameObject["speakers"][gameObject.previousSpeaker]
    .tree[nodeIdx];
    if (gameObject.scrollingText > myNode.getLine().length) {
      return !myNode.hasLinks();
    }
    return false;
  }
};
