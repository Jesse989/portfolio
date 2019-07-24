import React, { Fragment } from 'react';
import { Icon } from 'semantic-ui-react';
import { accelerate, decelerate, changeScreen } from '../actions';
import { connect } from 'react-redux';
import { State } from '../reducers';

type Props = {
  moveRight: () => void;
  moveLeft: () => void;
  loading: boolean;
};

function ChangeView({ moveRight, moveLeft, loading }: Props) {
  return (
    <Fragment>
      <div className="white hover" style={styles.floatingLeft}>
        <Icon
          disabled={loading}
          onClick={moveLeft}
          floated="left"
          size="huge"
          name="angle double left"
        />
      </div>
      <div className="white hover" style={styles.floatingRight}>
        <Icon
          disabled={loading}
          onClick={moveRight}
          floated="right"
          size="huge"
          name="angle double right"
        />
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state: State) => {
  return {
    loading: state.gameView.loading
  };
};

const TIME_TO_STOP = 420;
const TIME_RUNNING = 1000;

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
  return {
    moveRight: () => {
      dispatch(accelerate('right'));
      setTimeout(() => {
        dispatch(decelerate('right'));
        setTimeout(() => {
          dispatch(changeScreen('foward'));
        }, TIME_TO_STOP);
      }, TIME_RUNNING);
    },
    moveLeft: () => {
      dispatch(accelerate('left'));
      setTimeout(() => {
        dispatch(decelerate('left'));
        setTimeout(() => {
          dispatch(changeScreen('backward'));
        }, TIME_TO_STOP);
      }, TIME_RUNNING);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeView);

const styles = {
  floatingLeft: {
    position: 'absolute',
    left: 0,
    top: '5vh',
    zIndex: 1,
    cursor: 'pointer'
  } as React.CSSProperties,
  floatingRight: {
    position: 'absolute',
    right: 0,
    top: '5vh',
    zIndex: 1,
    cursor: 'pointer'
  } as React.CSSProperties
};
