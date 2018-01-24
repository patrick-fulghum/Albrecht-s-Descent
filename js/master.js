// import { helperFunctions } from "./helperFunctions";
import * as helperFunctions from "./helperFunctions";

document.addEventListener("DOMContentLoaded", () => {
  const titleCanvas = document.getElementById("title");
  const titleCtx = titleCanvas.getContext('2d');
  const townCanvas = document.getElementById("town");
  const townCtx = townCanvas.getContext('2d');
  const titleImage = new Image();
  titleImage.src = "assets/Descent_title.png";
  const singlePlayer = new Image();
  singlePlayer.src = "assets/single_player.png";
  const townImage = new Image;
  townImage.src = "assets/townImage.png";
  const blankBottom = new Image;
  blankBottom.src = "assets/blankBottom.png";
  const game = {
    albrecht: {
      x: 550,
      y: 300,
    },
    actions: {
      walk: {
        selected: true,
        stringLiteral: "Walk To",
        xMin: 245,
        xMax: 345,
        yMin: 480,
        yMax: 500,
      },
      talk: {
        selected: false,
        stringLiteral: "Talk To",
        xMin: 480,
        xMax: 580,
        yMin: 480,
        yMax: 500,
      },
      look: {
        selected: false,
        stringLiteral: "Look At",
        xMin: 245,
        xMax: 325,
        yMin: 520,
        yMax: 540,
      },
      swallow: {
        selected: false,
        stringLiteral: "Swallow",
        xMin: 480,
        xMax: 580,
        yMin: 520,
        yMax: 540,
      },
      use: {
        selected: false,
        stringLiteral: "Use",
        xMin: 245,
        xMax: 325,
        yMin: 560,
        yMax: 580,
      },
      push: {
        selected: false,
        stringLiteral: "Push",
        xMin: 480,
        xMax: 560,
        yMin: 560,
        yMax: 580,
      },
      take: {
        selected: false,
        stringLiteral: "Take",
        xMin: 245,
        xMax: 325,
        yMin: 600,
        yMax: 620,
      },
      give: {
        selected: false,
        stringLiteral: "Give",
        xMin: 480,
        xMax: 560,
        yMin: 600,
        yMax: 620,
      },
    },
    locations: [
      "title", "town"
    ],
    map: {
      title: {
        here: true,
        index: 0,
      },
      town: {
        here: false,
        index: 1,
      },
    },
    currentLocationIndex: 0,
    previousLocationIndex: 0,
    titleCtx,
    townCtx,
    start: () => {
      titleCtx.drawImage(titleImage, 0, 1, 680, 180, 370, 0, 680, 180);
      titleCtx.drawImage(singlePlayer, 600, 300);
      townCtx.drawImage(townImage, 0, 0, 1200, 645, 0, 0, 1200, 420);
      townCtx.drawImage(blankBottom, 0, 0, 1200, 325, 0, 420, 1200, 230);
      townCtx.font = '28px serif';
      helperFunctions.colorActions(game.actions, townCtx);
      game.previousLocationIndex = game.currentLocationIndex;
      game.currentLocationIndex = helperFunctions.currentLocation(game.map);
      document.getElementById(
        game.locations[game.currentLocationIndex]
      ).style.zIndex = Number(
        document.getElementById(
          game.locations[game.previousLocationIndex]
        ).style.zIndex) + 1;
    },
  };
  const step = () => {
    game.start();
    requestAnimationFrame(step);
  };
  document.addEventListener("mousemove", (e) => {
    if (game.map.title.here) {
      if (helperFunctions.myRange(
        e.clientX, e.clientY, 612, 805, 318, 343
      )) {
        singlePlayer.src = "assets/single_player_hover.png";
      } else {
        singlePlayer.src = "assets/single_player.png";
      }
    }
  });
  document.addEventListener("click", (e) => {
    if (game.map.title.here) {
      if (helperFunctions.myRange(
        e.clientX, e.clientY, 612, 805, 318, 343
      )) {
        game.map.title.here = false;
        game.map.town.here = true;
      }
    }
    if (game.map.town.here) {
      var currentAction = helperFunctions.identifyClickedAction(game.actions, e)
      var previousAction = helperFunctions.currentAction(game.actions);
      game.actions[previousAction].selected = false;
      game.actions[currentAction].selected = true;
    }
  });
  step();
});
