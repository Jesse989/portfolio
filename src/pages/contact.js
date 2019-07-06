import React from 'react';
import { Item, Container, Header, Form } from 'semantic-ui-react';
import  ContactForm from '../containers/contact-form';

const description = "Interested in working together? Fill out the form below with some info about your project and I will get back to you as soon as I can. Please allow a couple of days for me to respond.";

export default function Contact() {
  return (
    <Container style={styles.container}>
    <Item.Group divided relaxed>
    <p>{description}</p>
      <ContactForm />
    </Item.Group>
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
