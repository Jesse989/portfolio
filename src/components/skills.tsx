import React from 'react';
import serverlessIcon from '../assets/serverless.png';
import sqsIcon from '../assets/sqs.png';
import lambdaIcon from '../assets/lambda.png';
import blockchainIcon from '../assets/blockchain.png';
import s3Icon from '../assets/s3.png';

type Props = {
  io: string;
};

const Skills = ({ io }: Props) => (
  <div className={`white fade${io}Fast`}>
    <h1>Cloud Architect</h1>
    <img alt="tech-icon" style={styles.svg} src={lambdaIcon} />
    <img alt="tech-icon" style={styles.svg} src={sqsIcon} />
    <img alt="tech-icon" style={styles.svg} src={serverlessIcon} />
    <img alt="tech-icon" style={styles.svg} src={blockchainIcon} />
    <img alt="tech-icon" style={styles.svg} src={s3Icon} />
    <h2 className="white fadeInSlow">
      I'm passionate about building distributed, highly available services, leveraging the infinite scalability of the cloud
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
