import React from 'react';

import { connect } from 'react-redux';

import { MyName, Skills, Frontend, Backend } from '../components';


function View({ active, loading }) {
  let content;
  switch (active) {
    default:
      content = <MyName />
      break;
    case "skills":
      content = <Skills />
      break;
    case "frontend":
      content = <Frontend />
      break;
    case "backend":
      content = <Backend />
      break;
  }

  return (
    <div className="view" style={styles.view}>
      <div style={styles.inner}>
      {loading
        ? (<h1 className="orange pulse">Loading...</h1>)
        : content
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
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  inner: {
    margin: '20vh auto',
    width: '90%'
  },
}
