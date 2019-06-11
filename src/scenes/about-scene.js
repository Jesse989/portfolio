import Phaser from 'phaser';
import { store } from '../index';


const DEFAULT_HEIGHT = 720;

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

    this.player = this.physics.add.sprite(640, 602, 'none')
      .setOrigin(.5, 1);


  };

  update() {

    // if accelerating right:
    if (this.appState.moving === 'ACCELERATE') {
      if (this.appState.direction === 'right') {
        this.player.setAccelerationX(1);
      } else if (this.appState.direction === 'left') {
        this.player.setAccelerationX(-1);
      }
    } else if (this.appState.moving === 'DECELERATE') {
      if (this.appState.direction === 'right') {
        this.player.setAccelerationX(-2);
      } else if (this.appState.direction === 'left') {
        this.player.setAccelerationX(2);
      }
    } else {
      this.player.body.stop()
      this.player.setPosition(640, 602)
    }


    this.physics.collide(this.r1, this.player);
    if (!this.player.body.velocity.x) return;


    this.six.tilePositionX += 0.6 * this.player.body.velocity.x
    this.five.tilePositionX += 1.2 * this.player.body.velocity.x
    this.four.tilePositionX += 2.5 * this.player.body.velocity.x
    this.three.tilePositionX += 3.5 * this.player.body.velocity.x
    this.two.tilePositionX += 7.5 * this.player.body.velocity.x
    this.one.tilePositionX += 20 * this.player.body.velocity.x
  }
}
