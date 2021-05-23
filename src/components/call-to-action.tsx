import React from 'react';

type Props = {
  io: string;
};

const linkedInUrl = 'https://www.linkedin.com/in/jesse989/'
const CallToAction = ({ io }: Props) => (
  <div className={`white fade${io}Fast`}>
    <h1 className="white fadeInFast">
      Like what you see? Please get in{' '}
      <a className="link orange" href={linkedInUrl}>
        touch
      </a>
      .
    </h1>
    <h1 className="white fadeInSlow">
      {' '}
      I'm always excited to discuss new ideas and projects.
    </h1>
  </div>
);

export default CallToAction;
