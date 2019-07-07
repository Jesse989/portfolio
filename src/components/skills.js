import React, { Fragment } from 'react';
import jsImg from '../assets/javascript.svg';
import pImg from '../assets/phaser-icon.png';
import sImg from '../assets/sequelize.svg';
import rImg from '../assets/redux.svg';
import nImg from '../assets/nodejs-icon.svg';
import tImg from '../assets/tiled-logo.png';

const Skills = () => (
  <Fragment>
    <h1 className="white fadeInFast">I build fully responsive web apps using cutting edge <b className="orange">JavaScript</b> technologies:</h1>
    <br />
    <img className="fadeInSlow" alt='tech-icon' style={styles.svg} src={jsImg} />
    <img className="fadeInSlow" alt='tech-icon' style={styles.svg} src={pImg} />
    <img className="fadeInSlow" alt='tech-icon' style={styles.svg} src={sImg} />
    <img className="fadeInSlow" alt='tech-icon' style={styles.svg} src={rImg} />
    <img className="fadeInSlow" alt='tech-icon' style={styles.svg} src={nImg} />
    <img className="fadeInSlow" alt='tech-icon' style={styles.svg} src={tImg} />
  </Fragment>
)

export default Skills;

const styles = {
  svg: {
    width: 82,
    height: 82,
    padding: 8
  }
}
