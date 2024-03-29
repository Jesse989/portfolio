import React from 'react';
import ChangeView from '../components/change-view';
import View from '../containers/view';
import { config } from './game-config';
import Phaser from 'phaser';

type State = {
  game: Phaser.Game | undefined;
  loading: boolean;
};

export default class About extends React.Component<State> {
  state: State = { game: undefined, loading: true };

  componentDidMount() {
    this.setState(s => ({ game: new Phaser.Game(config), loading: false }));
  }

  componentWillUnmount() {
    if (this.state.game) this.state.game.destroy(true);
  }

  render() {
    return (
      <div style={styles.game} id="game">
        <ChangeView />
        <View loading={this.state.loading} active={''} moving={this.state.loading}/>
      </div>
    );
  }
}

const styles = {
  game: {
    zIndex: 0
  }
};
