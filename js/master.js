// import { helperFunctions } from "./helperFunctions";
import * as helperFunctions from "./helperFunctions";
import * as dialogTree from "./dialogTree";


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
  const ropeImage = new Image;
  ropeImage.src = "assets/ropeImage.png";
  const blackBackground = new Image;
  blackBackground.src = "assets/blackBackground.png";
  const pepinPortrait = new Image;
  pepinPortrait.src = "assets/pepin_Portrait.png";
  const ogdenPortrait = new Image;
  ogdenPortrait.src = "assets/ogden_Portrait.png";
  const cainPortrait = new Image;
  cainPortrait.src = "assets/Cain_Portrait.png";
  const albrechtPortrait = new Image;
  albrechtPortrait.src = "assets/albrecht_Portrait.png";
  const griswoldPortrait = new Image;
  griswoldPortrait.src = "assets/griswold_Portrait.png";
  const hudImage = new Image;
  hudImage.src = "assets/hudImage.png";
  const dialogBox = new Image;
  dialogBox.src = "assets/Empty_Dialog_Box.png";
  const game = {
    albrecht: {
      moves: [],
      moving: false,
      xMin: 727,
      yMin: 220,
      xMax: 772,
      yMax: 245,
    },
    items: {
      slot1: {
        selected: false,
        item: "empty",
        xMin: 680,
        xMax: 770,
        yMin: 480,
        yMax: 540,
      },
      slot2: {
        selected: false,
        item: "empty",
        xMin: 797,
        xMax: 887,
        yMin: 480,
        yMax: 540,
      },
      slot3: {
        selected: false,
        item: "empty",
        xMin: 918,
        xMax: 1008,
        yMin: 480,
        yMax: 540,
      },
      slot4: {
        selected: false,
        item: "empty",
        xMin: 1038,
        xMax: 1128,
        yMin: 480,
        yMax: 540,
      },
      slot5: {
        selected: false,
        item: "empty",
        xMin: 680,
        xMax: 770,
        yMin: 555,
        yMax: 615,
      },
      slot6: {
        selected: false,
        item: "empty",
        xMin: 797,
        xMax: 887,
        yMin: 555,
        yMax: 615,
      },
      slot7: {
        selected: false,
        item: "empty",
        xMin: 918,
        xMax: 1008,
        yMin: 555,
        yMax: 615,
      },
      slot8: {
        selected: false,
        item: "empty",
        xMin: 1038,
        xMax: 1128,
        yMin: 555,
        yMax: 615,
      },
    },
    itemListing: {
      rope: ropeImage,
    },
    speakers: {
      responding: {
        speaking: false,
        image: albrechtPortrait,
      },
      albrecht: {
        speaking: true,
        image: albrechtPortrait,
      },
      pepin: {
        speaking: false,
        image: pepinPortrait,
        location: "town",
        tree: dialogTree.generatePepin(),
      },
      cain: {
        speaking: false,
        image: cainPortrait,
        location: "town",
        tree: dialogTree.generatePepin(),
      },
      griswold: {
        speaking: false,
        image: griswoldPortrait,
        location: "town",
        tree: dialogTree.generatePepin(),
      },
      ogden: {
        speaking: false,
        image: ogdenPortrait,
        location: "town",
        tree: dialogTree.generatePepin(),
      },
      dialogBox: {
        image: dialogBox,
      },
    },
    subject: "",
    objective: "",
    environment: {
      town: {
        fountain: {
          name: "the Fountain",
          static: true,
          xMin: 630,
          yMin: 195,
          xMax: 695,
          yMax: 255,
        },
        cain: {
          name: "Deckard Cain, the Elder",
          static: true,
          xMin: 695,
          yMin: 240,
          xMax: 720,
          yMax: 270,
        },
        hovelRoof: {
          name: "the Hovel",
          static: true,
          xMin: 0,
          yMin: 120,
          xMax: 313,
          yMax: 220,
        },
        hovelDoor: {
          name: "the Hovel",
          static: true,
          xMin: 150,
          yMin: 220,
          xMax: 200,
          yMax: 270,
        },
        hovel: {
          name: "the Hovel",
          static: true,
          xMin: 0,
          yMin: 220,
          xMax: 120,
          yMax: 290,
        },
        smallRock: {
          name: "Rock",
          static: true,
          xMin: 303,
          yMin: 270,
          xMax: 355,
          yMax: 298,
        },
        largeRock: {
          name: "Rock",
          static: true,
          xMin: 390,
          yMin: 130,
          xMax: 500,
          yMax: 180,
        },
        tavern: {
          name: "the Tavern",
          static: true,
          xMin: 800,
          yMin: 0,
          xMax: 923,
          yMax: 60,
        },
        ogden: {
          name: "Ogden, the Tavern Owner",
          static: true,
          xMin: 725,
          yMin: 20,
          xMax: 800,
          yMax: 70,
        },
        pepin: {
          name: "Pepin, the Priest",
          static: true,
          xMin: 120,
          yMin: 220,
          xMax: 150,
          yMax: 280,
        },
        griswold: {
          name: "Griswold, the Blacksmith",
          static: true,
          xMin: 930,
          yMin: 110,
          xMax: 1029,
          yMax: 180,
        },
        blacksmith: {
          name: "Blacksmith",
          static: true,
          xMin: 1029,
          yMin: 60,
          xMax: 1200,
          yMax: 195,
        },
        cathedral: {
          name: "the Cathedral",
          static: true,
          xMin: 923,
          yMin: 0,
          xMax: 1029,
          yMax: 60,
        },
        cabin: {
          name: "the Cabin",
          static: true,
          xMin: 500,
          yMin: 320,
          xMax: 825,
          yMax: 420,
        },
        house: {
          name: "the House",
          static: true,
          xMin: 956,
          yMin: 253,
          xMax: 1200,
          yMax: 420,
        },
        rope: {
          name: "the Rope",
          static: false,
          presence: true,
          image: ropeImage,
          xMin: 0,
          yMin: 0,
          xMax: 100,
          yMax: 100,
        },
      },
    },
    actions: {
      renderActions: true,
      walk: {
        selected: true,
        stringLiteral: "Walk To",
        xMin: 230,
        xMax: 350,
        yMin: 480,
        yMax: 500,
      },
      talk: {
        selected: false,
        stringLiteral: "Talk To",
        xMin: 450,
        xMax: 590,
        yMin: 480,
        yMax: 500,
      },
      look: {
        selected: false,
        stringLiteral: "Look At",
        xMin: 230,
        xMax: 350,
        yMin: 520,
        yMax: 540,
      },
      swallow: {
        selected: false,
        stringLiteral: "Swallow",
        xMin: 450,
        xMax: 590,
        yMin: 520,
        yMax: 540,
      },
      use: {
        selected: false,
        stringLiteral: "Use",
        xMin: 230,
        xMax: 350,
        yMin: 560,
        yMax: 580,
      },
      push: {
        selected: false,
        stringLiteral: "Push",
        xMin: 450,
        xMax: 590,
        yMin: 560,
        yMax: 580,
      },
      take: {
        selected: false,
        stringLiteral: "Take",
        xMin: 230,
        xMax: 350,
        yMin: 600,
        yMax: 620,
      },
      give: {
        selected: false,
        stringLiteral: "Give",
        xMin: 450,
        xMax: 590,
        yMin: 600,
        yMax: 620,
      },
    },
    locations: [
      "title", "town"
    ],
    contexts: [
      titleCtx, townCtx
    ],
    validSpeakers: [],
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
    slowTime: 0,
    scrollingText: 0,
    dialogNode: 0,
    previousNode: 0,
    hoveredResponse: [false, false, false, false],
    selectedResponse: 1,
    previousSpeaker: "",
    moveAlbrecht: () => {
      game.slowTime += 1;
      if (game["albrecht"].moving && game.slowTime % 4 === 0) {
        game["albrecht"].xMin += helperFunctions.handleX(game["albrecht"].moves);
        game["albrecht"].xMax += helperFunctions.handleX(game["albrecht"].moves);
        game["albrecht"].yMin += helperFunctions.handleY(game["albrecht"].moves);
        game["albrecht"].yMax += helperFunctions.handleY(game["albrecht"].moves);
        if (helperFunctions.detectBodyCollision(game["albrecht"], game["environment"]["town"])) {
          game["albrecht"].xMin -= helperFunctions.handleX(game["albrecht"].moves);
          game["albrecht"].xMax -= helperFunctions.handleX(game["albrecht"].moves);
          game["albrecht"].yMin -= helperFunctions.handleY(game["albrecht"].moves);
          game["albrecht"].yMax -= helperFunctions.handleY(game["albrecht"].moves);
          game["albrecht"].moving = false;
        }
      }
    },
    currentLocationIndex: 0,
    previousLocationIndex: 0,
    titleCtx,
    townCtx,
    start: () => {
      titleCtx.drawImage(titleImage, 0, 1, 680, 180, 370, 0, 680, 180);
      titleCtx.drawImage(singlePlayer, 600, 300);
      titleCtx.drawImage(hudImage, 5, 5, 611, 135, 373, 463, 611, 135);
      townCtx.drawImage(townImage, 0, 0, 1200, 645, 0, 0, 1200, 420);
      townCtx.drawImage(blankBottom, 0, 0, 1200, 325, 0, 420, 1200, 230);
      townCtx.drawImage(
        blackBackground, game["albrecht"].xMin, game["albrecht"].yMin
      );
      game.moveAlbrecht();
      game["actions"].renderActions =
      helperFunctions.currentSpeaker(game.speakers) === "albrecht";
      helperFunctions.renderSpeaker(game.speakers, townCtx);
      helperFunctions.colorActions(game.actions, townCtx);
      helperFunctions.renderItems(game.items, townCtx, game.itemListing);
      helperFunctions.writeSentence(game, townCtx);
      helperFunctions.writeDialog(game, townCtx,
        (Math.floor(game.scrollingText / 3)), game.dialogNode);
      if (helperFunctions.endConversation(game, game.dialogNode)) {
        game.speakers[game.previousSpeaker].speaking = false;
        game["speakers"]["albrecht"].speaking = true;
        game.validSpeakers = [];
        game.dialogNode = 0;
      }
      game.previousLocationIndex = game.currentLocationIndex;
      game.currentLocationIndex = helperFunctions.currentLocation(game.map);
      document.getElementById(
        game.locations[game.currentLocationIndex]
      ).style.zIndex = Number(
        document.getElementById(
          game.locations[game.previousLocationIndex]
        ).style.zIndex) + 1;
      game.scrollingText += 1;
      if (game.speakers["responding"].speaking) {
        var temp = helperFunctions.renderResponse(game, game.scrollingText,
          townCtx, game.dialogNode, game.selectedResponse);
        if (temp !== game.dialogNode) {
          game.scrollingText = 0;
          game.speakers["responding"].speaking = false;
          game.speakers[game.previousSpeaker].speaking = true;
          game.previousNode = game.dialogNode;
          game.dialogNode = temp;
        }
      }
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
    } else if (game.map.town.here) {
      game.objective = helperFunctions.detectHoverCollision(e, game["environment"]["town"]);
      game.hoveredResponse = [false, false, false, false];
      if (helperFunctions.myRange(
        e.clientX,
        e.clientY,
        290,
        1025,
        487,
        624
      )) {
        game.hoveredResponse[Math.floor((e.clientY - 487) / 30)] = true;
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
      if (helperFunctions.myRange(
        e.clientX,
        e.clientY,
        290,
        1025,
        487,
        624
      ) && game.validSpeakers[0]) {
        game.selectedResponse = Math.floor((e.clientY - 487) / 30);
        game.previousSpeaker = helperFunctions.currentSpeaker(game.speakers);
        if (!game.speakers["responding"].speaking) {
          game.scrollingText = 0;
        }
        game.speakers["responding"].speaking = true;
        game.speakers[game.previousSpeaker].speaking = false;
        game.dialogNode = helperFunctions.renderResponse(game,
          game.scrollingText, townCtx, game.dialogNode, game.selectedResponse);
      }
      var currentAction = helperFunctions.identifyClickedAction(game.actions, e);
      var previousAction = helperFunctions.currentAction(game.actions);
      if (currentAction === "") {
        currentAction = previousAction;
      }
      game.actions[previousAction].selected = false;
      game.actions[currentAction].selected = true;
      if (currentAction === "walk") {
        game["albrecht"].moving = true;
        game["albrecht"].moves = helperFunctions.moveCalc(
          game["albrecht"].xMin,
          game["albrecht"].yMin,
          e.clientX,
          e.clientY
        );
      }
      if (currentAction === "talk") {
        game.validSpeakers = helperFunctions.checkSpeakers(game);
        if (
          game.validSpeakers !== "albrecht" &&
          game["environment"]["town"][game.validSpeakers[0]].name === game.objective
        ) {
          game["speakers"]["albrecht"].speaking = false;
          game["speakers"][game.validSpeakers[0]].speaking = true;
          game.scrollingText = 0;
        }
      }
    }
  });
  step();
});
