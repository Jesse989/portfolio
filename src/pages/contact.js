import React from 'react';
import { Item, Container } from 'semantic-ui-react';
import  ContactForm from '../containers/contact-form';


export default function Contact() {
  return (
    <Container style={styles.container}>
      <ContactForm />
    </Container>
  )
}


const styles = {
  container: {
    width: 800,
    paddingTop: 26,
    paddingBottom: 86,
  }
}

// create multi-step form:
