import React, { Fragment } from 'react';
import { Icon } from 'semantic-ui-react';
import { accelerate, decelerate, visibleScreen } from '../actions';
import { connect } from 'react-redux';

function ChangeView({ moveRight, moveLeft, loading }) {
  return (
    <Fragment>
      <div className="white hover" style={styles.floatingLeft}>
        <Icon
          disabled={loading}
          onClick={moveLeft}
          style={styles.white}
          floated="left"
          size="huge"
          name='angle double left'
        />
      </div>
      <div className="white hover" style={styles.floatingRight}>
        <Icon
          disabled={loading}
          onClick={moveRight}
          style={styles.white}
          floated="right"
          size="huge"
          name='angle double right'
        />
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.gameView.loading,
  }
}

const TIME_TO_STOP = 420;
const TIME_RUNNING = 1000;

const mapDispatchToProps = dispatch => {
  return {
    moveRight: () => {
      dispatch(accelerate('right'));
      setTimeout(() => {
        dispatch(decelerate('right'));
        setTimeout(() => {
          dispatch(visibleScreen())
        }, TIME_TO_STOP);
      }, TIME_RUNNING);
    },
    moveLeft: () => {
      dispatch(accelerate('left'));
      setTimeout(() => {
        dispatch(decelerate('left'));
        setTimeout(() => {
          dispatch(visibleScreen())
        }, TIME_TO_STOP);
      }, TIME_RUNNING);
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeView)

const styles = {
  floatingLeft: {
    position: 'absolute',
    left: 0,
    top: '5vh',
    zIndex: 1,
    cursor: 'pointer'
  },
  floatingRight: {
    position: 'absolute',
    right: 0,
    top: '5vh',
    zIndex: 1,
    cursor: 'pointer'
  },
}
