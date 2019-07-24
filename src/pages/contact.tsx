import React from 'react';
import { Container } from 'semantic-ui-react';
import ContactForm from '../containers/contact-form';

export default function Contact() {
  return (
    <Container style={styles.container}>
      <ContactForm />
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
