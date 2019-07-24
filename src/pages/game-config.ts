import PreloadScene from '../scenes/preload-scene';
import AboutScene from '../scenes/about-scene';
import Phaser from 'phaser';

const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 720;

export const config = {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: 0x6ea4cb,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 50 },
      debug: false
    }
  },
  scale: {
    mode: Phaser.Scale.ENVELOP,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [PreloadScene, AboutScene]
};
