import Phaser from 'phaser';
import { store } from '../index';

const DEFAULT_HEIGHT = 720;
const DEFAULT_WIDTH = 1280;

export default class AboutScene extends Phaser.Scene {
  constructor() {
    super({ key: 'AboutScene' });
  }
  preload() {
    this.appState = {};
    store.subscribe(() => {
      this.appState = store.getState().gameView;
      console.log(this.appState);
    });
  }

  create() {
    this.tileSprites = [];
    this.cameras.main.fadeIn(4000);

    for (let i = 6; i >= 0; i--) {
      this.tileSprites[i] = this.add
        .tileSprite(0, DEFAULT_HEIGHT - 64, 0, DEFAULT_HEIGHT, i + 1)
        .setOrigin(0, 1);
    }
    this.tileSprites.reverse();

    this.spark = this.add.particles('spark').createEmitter({
      x: { min: 0, max: DEFAULT_WIDTH },
      y: 0,
      speed: { min: 20, max: 100 },
      angle: { min: 0, max: 360 },
      scale: { start: 1, end: 0 },
      alpha: { start: 0, end: 0.7 },
      blendMode: 'ADD',
      lifespan: 6000
      //active: false
    });
    this.spark.reserve(1000);

    this.input.on('pointermove', p => {
      //  this.spark.setPosition(p.x, p.y);
    });
  }

  update() {
    // if accelerating right:
    if (this.appState.moving === 'ACCELERATE') {
      // tween here
      let scrollMult = this.appState.direction === 'right' ? 1 : -1;
      for (let tp of this.tileSprites) {
        this.tweens.add({
          targets: tp,
          tilePositionX: `+=${(scrollMult *= 3)}`,
          ease: 'Expo',
          duration: 2000
        });
      }
    }
  }
}
