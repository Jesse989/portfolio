import React, { Fragment } from 'react';
import mySqlImg from '../assets/mysql-icon.png';
import postgresImg from '../assets/postgres-icon.png';
import sqLiteImg from '../assets/sqlite-icon.png';
import mongoDbImg from '../assets/mongodb.png';
import redisImg from '../assets/redis-icon.png';

const Backend = () => (
  <Fragment>
    <h1 className="white fadeInFast">I have persistence.</h1>
    <br />
    <img
      className="fadeInSlow"
      alt="tech-icon"
      style={styles.svg}
      src={mySqlImg}
    />
    <img
      className="fadeInSlow"
      alt="tech-icon"
      style={styles.svg}
      src={postgresImg}
    />
    <img
      className="fadeInSlow"
      alt="tech-icon"
      style={styles.svg}
      src={sqLiteImg}
    />
    <img
      className="fadeInSlow"
      alt="tech-icon"
      style={styles.svg}
      src={mongoDbImg}
    />
    <img
      className="fadeInSlow"
      alt="tech-icon"
      style={styles.svg}
      src={redisImg}
    />
    <h2 className="white fadeInSlow">
      Experience with different databases means choosing the correct database
      for the most optimal solution.
    </h2>
  </Fragment>
);

export default Backend;

const styles = {
  svg: {
    width: 82,
    height: 82,
    padding: 8
  }
};
