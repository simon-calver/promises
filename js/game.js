import MenuScene from './menu-scene.js';
import PlayerScene from './player-scene.js';
import PromisesScene from './promises-scene.js';

// Load scenes
var menuScene = new MenuScene();
var playerScene = new PlayerScene();
var promisesScene = new PromisesScene();

// Maximum width and height of game
const NAVBAR_HEIGHT = document.getElementById('navbar').offsetHeight;
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight - NAVBAR_HEIGHT;
const MIN_WIDTH = 36;
const MIN_HEIGHT = 72;

// Set up Phaser game
var game = new Phaser.Game({
  type: Phaser.AUTO,
  backgroundColor: "dedede",
  dom: {
    createContainer: true
  },
  callbacks: {
    postBoot: function (game) {
      game.domContainer.style.pointerEvents = 'none';
    },
  },
  width: WIDTH,
  height: HEIGHT,
  scale: {
    parent: 'phaser-app',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    min: {
      width: MIN_WIDTH,
      height: MIN_HEIGHT
    },
  },
  physics: {
    default: 'arcade',
    arcade: {
      enableBody: true,
      debug: false,
    }
  },
});

// Load scenes, the order they are loaded in will affect depth sorting
game.scene.add('PromisesScene', promisesScene);
game.scene.add('PlayerScene', playerScene);
game.scene.add('MenuScene', menuScene);

// Start the game
game.scene.start('PlayerScene');
