import Phaser from 'phaser';
import { store } from '../index';
import { setLoading } from '../actions';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super ({ key: 'PreloadScene'});
  }

  preload() {
    const width = this.cameras.main.width;
    const height = this.cameras.main.heigh;

    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2,
      text: 'Loading...',
      style: {
          font: '28px monospace',
          fill: '#ffffff'
        }
    });

    const progressBar = this.add.graphics();

    this.load.on('progress', function (value) {
      progressBar.clear();
      progressBar.fillStyle(0xc9d3ec, 1);
      progressBar.fillRect(382, 272, 500 * value, 26);
    });

    loadingText.setOrigin(0.5, 0.5);

    const progressBox = this.add.graphics();

    progressBox.fillStyle(0x5773aa, 0.8);
    progressBox.fillRect(380, 270, 504, 30);


    this.load.image('1', './assets/background/1.png');
    this.load.image('2', './assets/background/2.png');
    this.load.image('3', './assets/background/3.png');
    this.load.image('4', './assets/background/4.png');
    this.load.image('5', './assets/background/5.png');
    this.load.image('6', './assets/background/6.png');
    // load event:
    // load event:
    this.load.on('complete', ()=> {
      loadingText.destroy();
      progressBar.destroy();
      progressBox.destroy();
      store.dispatch(setLoading(false));
      this.scene.start('AboutScene')
    })
  }
}
