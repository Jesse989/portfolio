import React, { Fragment } from 'react';
import tsImg from '../assets/ts-icon.png';
import pImg from '../assets/phaser-icon.png';
import reactImg from '../assets/react.svg';
import rImg from '../assets/redux.svg';
import nImg from '../assets/nodejs-icon.svg';
import eImg from '../assets/electron-icon.png';
import gImg from '../assets/graphql.svg';

const Skills = () => (
  <Fragment>
    <h1 className="white fadeInFast">I have the solution.</h1>
    <br />
    <img
      className="fadeInSlow"
      alt="tech-icon"
      style={styles.svg}
      src={tsImg}
    />
    <img className="fadeInSlow" alt="tech-icon" style={styles.svg} src={nImg} />
    <img
      className="fadeInSlow"
      alt="tech-icon"
      style={styles.svg}
      src={reactImg}
    />
    <img className="fadeInSlow" alt="tech-icon" style={styles.svg} src={rImg} />
    <img className="fadeInSlow" alt="tech-icon" style={styles.svg} src={pImg} />
    <img className="fadeInSlow" alt="tech-icon" style={styles.svg} src={eImg} />
    <img className="fadeInSlow" alt="tech-icon" style={styles.svg} src={gImg} />
    <h2 className="white fadeInSlow">
      Using tools such as TypeScript, Node, React, Redux, Phaser, Electron, and
      GraphQL, I create solutions that run on any platform.
    </h2>
  </Fragment>
);

export default Skills;

const styles = {
  svg: {
    width: 82,
    height: 82,
    padding: 8
  }
};
