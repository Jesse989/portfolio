import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';

import { Footer } from '../components';

export default function Pages() {
  return (
    <Fragment>
      <Footer />
      <Router primary={false} component={Fragment}>
        <About path="/" />
        <Portfolio path="/portfolio" />
        <Contact path="/contact" />
      </Router>
    </Fragment>
  );
}
