import React, { Fragment } from 'react';
import { Link } from '@reach/router';

const CallToAction = () => (
  <Fragment>
    <h1 className="white fadeInFast">If you like what you see, please get in <Link className="link orange" to="/contact">touch</Link>.</h1>
    <h1 className="white fadeInSlow"> I'm always excited to discuss new ideas and projects.</h1>
  </Fragment>
)

export default CallToAction;
