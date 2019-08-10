import React, { Fragment } from 'react';
import { Container, Icon } from 'semantic-ui-react';

const SocialMedia = () => (
  <Fragment>
    <Container textAlign='center'>
      <a target='_none' href='https://github.com/Jesse989'>
        <Icon size='huge' name='github' />
      </a>
      <a target='_none' href='https://www.linkedin.com/in/jesse989/'>
        <Icon size='huge' name='linkedin' />
      </a>
    </Container>
  </Fragment>
);

export default SocialMedia;
