import helperFunctions from "./helperFunctions";

document.addEventListener("DOMContentLoaded", () => {
  const titleCanvas = document.getElementById("title");
  const titleCtx = titleCanvas.getContext('2d');
  const townCanvas = document.getElementById("title");
  const townCtx = titleCanvas.getContext('2d');
  const titleImage = new Image();
  titleImage.src = "assets/Descent_title.png";
  const singlePlayer = new Image();
  singlePlayer.src = "assets/single_player.png";
  const game = {
    albrecht: {
      x: 550,
      y: 300,
    },
    map: {
      title: true,
      town: false,
    },
    titleCtx,
    start: () => {
      titleCtx.drawImage(titleImage, 300, 0);
      titleCtx.drawImage(singlePlayer, 500, 300);
    },
  };
  const step = () => {
    game.start();
    requestAnimationFrame(step);
  };
  document.addEventListener("click", (e) => {
    if (game.map.title) {
      debugger
    }
    // if (game.title)
  });
  step();
});
