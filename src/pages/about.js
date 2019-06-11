import React from 'react';
import Phaser from 'phaser';
import PreloadScene from '../scenes/preload-scene';
import AboutScene from '../scenes/about-scene';
import ChangeView from '../components/change-view';
import View from '../containers/view';

const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 720;




export default class About extends React.Component {

  state = { game: {} }

  componentDidMount() {
    const config = {
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
        autoCenter: Phaser.DOM.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
      },
      scene: [
        PreloadScene,
        AboutScene
      ]
    }

    this.setState(s => ({ game: new Phaser.Game(config) }))
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    this.state.game.destroy(true);
  }


  render() {
    return (
      <div style={styles.game} id="game">
        <ChangeView />
        <View />
      </div>
    )
  }
}

const styles = {
  game: {
    zIndex: 0
  }
}
