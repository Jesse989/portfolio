import Phaser from 'phaser';
import { store } from '../index';
import { setLoading } from '../actions';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super ({ key: 'PreloadScene'});
  }

  preload() {
    this.cameras.main.backgroundColor.setTo(0x000);

    this.load.image('spark', './assets/blue.png');
    this.load.image('1', './assets/background/1.png');
    this.load.image('2', './assets/background/2.png');
    this.load.image('3', './assets/background/3.png');
    this.load.image('4', './assets/background/4.png');
    this.load.image('5', './assets/background/5.png');
    this.load.image('6', './assets/background/6.png');
    // load event:
    // load event:
    this.load.on('complete', ()=> {
      store.dispatch(setLoading(false));
      this.scene.start('AboutScene')
    })
  }
}
