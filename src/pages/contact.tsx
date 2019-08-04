import React from 'react';
import { Container } from 'semantic-ui-react';
import ContactForm from '../containers/contact-form';
import { SocialMedia } from '../components';

export default function Contact() {
  return (
    <Container style={styles.container}>
      <ContactForm />
      <SocialMedia />
    </Container>
  );
}

const styles = {
  container: {
    width: 650,
    paddingTop: 26,
    paddingBottom: 86
  }
};
