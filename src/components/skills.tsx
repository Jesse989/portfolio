import React from 'react';
import tsImg from '../assets/ts-icon.png';
import pImg from '../assets/phaser-icon.png';
import reactImg from '../assets/react.svg';
import rImg from '../assets/redux.svg';
import nImg from '../assets/nodejs-icon.svg';
import eImg from '../assets/electron-icon.png';
import gImg from '../assets/graphql.svg';

type Props = {
  io: string;
};

const Skills = ({ io }: Props) => (
  <div className={`white fade${io}Fast`}>
    <h1>I have solutions.</h1>
    <br />
    <img alt="tech-icon" style={styles.svg} src={tsImg} />
    <img alt="tech-icon" style={styles.svg} src={nImg} />
    <img alt="tech-icon" style={styles.svg} src={reactImg} />
    <img alt="tech-icon" style={styles.svg} src={rImg} />
    <img alt="tech-icon" style={styles.svg} src={pImg} />
    <img alt="tech-icon" style={styles.svg} src={eImg} />
    <img alt="tech-icon" style={styles.svg} src={gImg} />
    <h2 className="white fadeInSlow">
      Using tools such as TypeScript, Node, React, Redux, Phaser, Electron, and
      GraphQL, I create solutions that run on any platform.
    </h2>
  </div>
);

export default Skills;

const styles = {
  svg: {
    width: 82,
    height: 82,
    padding: 8
  }
};
