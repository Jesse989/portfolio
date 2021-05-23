import React from 'react';
import pythonIcon from '../assets/python.png';
import numpyIcon from '../assets/numpy.png';
import jupyterIcon from '../assets/jupyter.png';
import kerasIcon from '../assets/keras.png';
import tensorFlowIcon from '../assets/tensorflow.png';

type Props = {
  io: string;
};

const Backend = ({ io }: Props) => (
  <div className={`white fade${io}Fast`}>
    <h1 className="white fadeInFast">Data Scientist</h1>
    <br />
    <img
      className="fadeInSlow"
      alt="tech-icon"
      style={styles.svg}
      src={pythonIcon}
    />
    <img
      className="fadeInSlow"
      alt="tech-icon"
      style={styles.svg}
      src={numpyIcon}
    />
    <img
      className="fadeInSlow"
      alt="tech-icon"
      style={styles.svg}
      src={jupyterIcon}
    />
    <img
      className="fadeInSlow"
      alt="tech-icon"
      style={styles.svg}
      src={kerasIcon}
    />
    <img
      className="fadeInSlow"
      alt="tech-icon"
      style={styles.svg}
      src={tensorFlowIcon}
    />
    <h2 className="white fadeInSlow">
      Having my education in Data Science means my solutions are designed in a Data First paradigm. I know first hand the business value of a well designed data pipeline
    </h2>
  </div>
);

export default Backend;

const styles = {
  svg: {
    width: 82,
    height: 82,
    padding: 8
  }
};
