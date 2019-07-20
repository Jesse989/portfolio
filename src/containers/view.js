import React from 'react';
import { connect } from 'react-redux';
import { MyName, Skills, Frontend, Backend, CallToAction } from '../components';
import loader from '../assets/loader.png';

function View({ active, loading }) {
  console.log('rendering view');
  let content;
  switch (active) {
    default:
      content = <MyName />;
      break;
    case 'skills':
      content = <Skills />;
      break;
    case 'frontend':
      content = <Frontend />;
      break;
    case 'backend':
      content = <Backend />;
      break;
    case 'action':
      content = <CallToAction />;
      break;
  }

  return (
    <div className="view" style={styles.view}>
      <div style={styles.inner}>
        {loading ? <img className={'pulse rotate'} src={loader} /> : content}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    active: state.gameView.screen,
    loading: state.gameView.loading
  };
};

export default connect(
  mapStateToProps,
  null
)(View);

const styles = {
  view: {
    textAlign: 'center',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    zIndex: 0,
    backgroundColor: 'rgba(0,0,50,.3)'
  },
  inner: {
    margin: '20vh auto',
    width: '90%',
    maxWidth: '800px'
  }
};
