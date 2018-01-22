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
  const game = {
    albrecht: {
      x: 550,
      y: 300,
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
      titleCtx.drawImage(titleImage, 300, 0);
      titleCtx.drawImage(singlePlayer, 500, 300);
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
  document.addEventListener("click", (e) => {
    if (game.map.title.here) {
      if (helperFunctions.myRange(
        e.clientX, e.clientY, 513, 715, 318, 343
      )) {
        game.map.title.here = false;
        game.map.town.here = true;
      }
    }
  });
  step();
});
