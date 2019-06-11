import React from 'react';
import Graph from '../components/graph';

import { connect } from 'react-redux';

function View({ active, loading }) {
  return (
    <div style={styles.view}>
      <div style={styles.inner}>
      {loading
        ? (<h1 style={styles.white}>loading...</h1>)
        : (active === 'welcome')
          ? <h1 style={styles.white}>welcome</h1>
          : <Graph />
      }
      </div>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    active: state.gameView.screen,
    loading: state.gameView.loading,
  }
}

export default connect(
  mapStateToProps,
  null
)(View)



const styles = {
  view: {
    textAlign: 'center',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    zIndex: 0,
  },
  inner: {
    margin: '15vh auto'
  },
  white: {
    color: '#c7d1e9'
  }
}
