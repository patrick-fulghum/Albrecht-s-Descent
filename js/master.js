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
      townCtx.fillStyle = "green";
      townCtx.fillText("Walk To", 245, 500);
      townCtx.fillText("Talk To", 475, 500);
      townCtx.fillText("Look At", 245, 540);
      townCtx.fillText("Swallow", 455, 540);
      townCtx.fillText("Use", 245, 580);
      townCtx.fillText("Push", 475, 580);
      townCtx.fillText("Take", 245, 620);
      townCtx.fillText("Give", 475, 620);
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
        e.clientX, e.clientY, 513, 715, 318, 343
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
        e.clientX, e.clientY, 513, 715, 318, 343
      )) {
        game.map.title.here = false;
        game.map.town.here = true;
      }
    }
  });
  step();
});
