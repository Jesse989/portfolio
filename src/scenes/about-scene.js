import Phaser from 'phaser';
import { store } from '../index';

const DEFAULT_HEIGHT = 720;
const TICK = 50;


export default class AboutScene extends Phaser.Scene {
  constructor() {
    super({ key: 'AboutScene'})
  }
  preload() {
    this.appState = {};
    store.subscribe(() => {
      this.appState = store.getState().gameView;
      console.log(this.appState)
    })
  }

  create() {
    this.badgeCount = 3;
    this.badgeTimers = [];
    this.cameras.main.fadeIn(5000);
    this.six = this.add.tileSprite(0, DEFAULT_HEIGHT - 64, 0,  DEFAULT_HEIGHT , '6').setOrigin(0, 1)
    this.five = this.add.tileSprite(0, DEFAULT_HEIGHT - 64, 0,  DEFAULT_HEIGHT , '5').setOrigin(0, 1)
    this.four = this.add.tileSprite(0, DEFAULT_HEIGHT - 64, 0,  DEFAULT_HEIGHT , '4').setOrigin(0, 1)
    this.three = this.add.tileSprite(0, DEFAULT_HEIGHT - 64, 0,  DEFAULT_HEIGHT , '3').setOrigin(0, 1)
    this.two = this.add.tileSprite(0, DEFAULT_HEIGHT - 64, 0,  DEFAULT_HEIGHT , '2').setOrigin(0, 1)
    this.one = this.add.tileSprite(0, DEFAULT_HEIGHT - 62, 0,  DEFAULT_HEIGHT , '1').setOrigin(0, 1)
    this.r1 = this.add.rectangle(0, DEFAULT_HEIGHT, 1280, 118, 0x6666ff)
      .setOrigin(0, 1)
      .setVisible(false);
    this.physics.add.existing(this.r1, true);

    this.player = this.physics.add.sprite(640, 602, 'spark ')
      .setOrigin(.5, 1)
      .setVisible(false);

    this.spark = this.add.particles('spark').createEmitter({
       x: 640,
       y: 452,
       speed: { min: 20, max: 100 },
       angle: { min: 0, max: 360},
       scale: { start: 1, end: 0},
       alpha: { start: 0, end: 0.7},
       blendMode: 'ADD',
       lifespan: 2000,
       //active: false
     });
     this.spark.reserve(1000);

     this.input.on('pointermove', (p) => {
       this.spark.setPosition(p.x, p.y);
     })
  };

  update() {
    if (this.appState.screen == 'backend') {
      while (this.badgeCount > 0) {
        let multi = this.badgeCount;
        this.badgeTimers.push(this.time.addEvent({
          delay: (2000 / multi),
          callback: function() {
            console.log("testing: ", multi)
          },
          callbackScope: this,
        }));
        this.badgeCount--;

      }
    }
    // if accelerating right:
    if (this.appState.moving === 'ACCELERATE') {
      if (this.appState.direction === 'right') {
        this.player.setAccelerationX(10);
      } else if (this.appState.direction === 'left') {
        this.player.setAccelerationX(-10);
      }
    } else if (this.appState.moving === 'DECELERATE') {
      if (this.appState.direction === 'right') {
        this.player.setAccelerationX(-20);
      } else if (this.appState.direction === 'left') {
        this.player.setAccelerationX(20);
      }
    } else {
      this.player.body.stop()
      this.player.setPosition(640, 602)
    }


    this.physics.collide(this.r1, this.player);
    if (!this.player.body.velocity.x) return;


    this.five.tilePositionX += 0.1 * this.player.body.velocity.x
    this.four.tilePositionX += 0.3 * this.player.body.velocity.x
    this.three.tilePositionX += 1 * this.player.body.velocity.x
    this.two.tilePositionX += 3 * this.player.body.velocity.x
    this.one.tilePositionX += 10 * this.player.body.velocity.x
  }
}
