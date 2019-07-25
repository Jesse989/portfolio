import React from 'react';
import { Link } from '@reach/router';

type Props = {
  io: string;
};

const CallToAction = ({ io }: Props) => (
  <div className={`white fade${io}Fast`}>
    <h1 className="white fadeInFast">
      Like what you see? Please get in{' '}
      <Link className="link orange" to="/contact">
        touch
      </Link>
      .
    </h1>
    <h1 className="white fadeInSlow">
      {' '}
      I'm always excited to discuss new ideas and projects.
    </h1>
  </div>
);

export default CallToAction;
