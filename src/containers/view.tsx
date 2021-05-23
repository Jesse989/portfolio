import React from 'react';
import { connect } from 'react-redux';
import { MyName, Skills, Frontend, Backend, CallToAction } from '../components';
import * as loader from '../assets/loader.png';
import { State } from '../reducers';

interface ViewChange {
  active: string;
  loading: boolean;
  moving: boolean;
}

function View({ active, loading, moving }: ViewChange) {
  const io = moving ? 'Out' : 'In';
  let content;
  switch (active) {
    default:
      content = <MyName io={io} />;
      break;
    case 'skills':
      content = <Skills io={io} />;
      break;
    case 'frontend':
      content = <Frontend io={io} />;
      break;
    case 'backend':
      content = <Backend io={io} />;
      break;
    case 'action':
      content = <CallToAction io={io} />;
      break;
  }

  return (
    <div className="view" style={styles.view}>
      <div style={styles.inner}>
        {loading ? (
          <img alt="loading spinner" className={'pulse rotate'} src={loader} />
        ) : (
          content
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state: State) => {
  return {
    active: state.gameView.screen,
    loading: state.gameView.loading,
    moving: state.gameView.moving,
  };
};

export default connect(mapStateToProps, null)(View);

const styles = {
  view: {
    textAlign: 'center',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    zIndex: 0,
    backgroundColor: 'rgba(0,0,50,.3)',
  } as React.CSSProperties,
  inner: {
    margin: 'auto',
    width: '90%',
    maxWidth: '800px',
    paddingBottom: '22vh',
  } as React.CSSProperties,
};
