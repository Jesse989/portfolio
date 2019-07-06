import React, { Fragment } from 'react';

const Skills = () => (
  <Fragment>
    <h1 className="white fadeInFast">I build fully responsive web apps using cutting edge <b className="orange">JavaScript</b> technologies:</h1>
    <br />
    <img className="fadeInSlow" alt='tech-icon' style={styles.svg} src={require(`../assets/javascript.svg`)} />
    <img className="fadeInSlow" alt='tech-icon' style={styles.svg} src={require(`../assets/phaser-icon.png`)} />
    <img className="fadeInSlow" alt='tech-icon' style={styles.svg} src={require(`../assets/sequelize.svg`)} />
    <img className="fadeInSlow" alt='tech-icon' style={styles.svg} src={require(`../assets/redux.svg`)} />
    <img className="fadeInSlow" alt='tech-icon' style={styles.svg} src={require(`../assets/nodejs-icon.svg`)} />
    <img className="fadeInSlow" alt='tech-icon' style={styles.svg} src={require(`../assets/tiled-logo.png`)} />
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
