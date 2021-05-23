import React from 'react';
import tsIcon from '../assets/ts-icon.png';
import phaserIcon from '../assets/phaser-icon.png';
import reactIcon from '../assets/react.svg';
import graphQLIcon from '../assets/graphql.svg';


type Props = {
  io: string;
};

const Frontend = ({ io }: Props) => (
  <div className={`white fade${io}Fast`}>
    <h1 className="white fadeInFast">Front End Engineer</h1>
    <h2 className="white fadeInSlow">
      My UI/UX designs are beautiful, simple, and intuitive.
    </h2>
        <br />
    <img
      className="fadeInSlow"
      alt="tech-icon"
      style={styles.svg}
      src={tsIcon}
    />
    <img
      className="fadeInSlow"
      alt="tech-icon"
      style={styles.svg}
      src={phaserIcon}
    />
    <img
      className="fadeInSlow"
      alt="tech-icon"
      style={styles.svg}
      src={reactIcon}
    />
    <img
      className="fadeInSlow"
      alt="tech-icon"
      style={styles.svg}
      src={graphQLIcon}
    />

    <h2 className="white fadeInSlow">
      I write high quality, pixel perfect client facing interfaces, using the
      latest in CSS and CSS-in-JS tools, combined with the power of WebGL and
      Canvas.
    </h2>
  </div>
);

export default Frontend;

const styles = {
  svg: {
    width: 82,
    height: 82,
    padding: 8
  }
};