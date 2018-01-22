document.addEventListener("DOMContentLoaded", () => {
  const titleCanvas = document.getElementById("title");
  const titleCtx = titleCanvas.getContext('2d');
  const titleImage = new Image();
  titleImage.src = "assets/title.png";
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
    },
  };
  const step = () => {
    game.start();
    requestAnimationFrame(step);
  };
  document.addEventListener("click", (e) => {
  });
  step();
});
