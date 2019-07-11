import React, { Component } from 'react'
import { Item, Form, Dimmer, Loader } from 'semantic-ui-react'
import { CONST } from '../const.js'
import validator from 'validator';
import { postData } from '../form-api';
import ContactModal from '../components/contact-modal';

class ContactForm extends Component {
  state = { loading: true }

  componentDidMount() {
    this.setState({ loading: false });
  }

  handleChange = (e, { value }) => {
    this.setState({ [e.target.id]: value })
  }

  closeModal = () => (
    this.setState({ successModal: false })
  )

  clearFields = () => {
    const keys = ['name', 'email', 'website', 'budget', 'date', 'spam', 'description'];
    for (let key of keys) {
      this.setState({ [key]: '' });
    }
  }

  handleSubmit = (e) => {
    this.setState({ loading: true });
    // validate data before sending it
    postData('/api', this.state)
      .then(data => {
        if (data.status === "success"){
          this.setState({ loading: false });
          // clear fields
          this.clearFields();
          // toggle success modal
          this.setState({ successModal: true });
        }
      })
      .catch(error => console.error(error));    // where to send the err?
  }

  render() {
    const value = this.state
    const description = "Fill out the form below with some info about your project and I will get back to you.";

    if (this.state.loading)
      return (<Dimmer active><Loader /></Dimmer>)
    else
      return (
        <Item>
          <ContactModal modalOpen={this.state.successModal} toClose={this.closeModal}/>
          <Item.Header as='h3'>Interested in working together?</Item.Header>
          <Item.Description>{description}</Item.Description>
          <Item.Group>
            <Form id="contact-form" onSubmit={ this.handleSubmit } style={styles.form}>
              <Form.Group widths='equal'>
                <Form.Input
                  required
                  error={value.name ? !validator.isAlpha(value.name) : false}
                  id='name'
                  icon="user outline circle"
                  iconPosition="left"
                  fluid
                  label='Name'
                  placeholder='John Doe'
                  onChange={this.handleChange}
                />
                <Form.Input
                  required
                  error={value.email ? !validator.isEmail(value.email) : false}
                  id='email'
                  icon="mail"
                  iconPosition="left"
                  fluid
                  label='Email'
                  placeholder='jd@email.com'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  required
                  error={value.website ? !validator.isURL(value.website) : false}
                  id='website'
                  icon="linkify"
                  iconPosition="left"
                  fluid
                  label='Website'
                  placeholder='www.wwjd.com'
                  onChange={this.handleChange}
                />
                <Form.Input
                  required
                  error={value.budget ? !validator.isCurrency(value.budget) : false}
                  id='budget'
                  icon="dollar"
                  iconPosition="left"
                  fluid
                  label='Budget'
                  placeholder='100'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  required
                  id='date'
                  icon="calendar alternate outline"
                  iconPosition="left"
                  fluid
                  label='Timeline'
                  placeholder='two months'
                  onChange={this.handleChange}
                />
                <Form.Input
                  required
                  error={value.spam ? value.spam != 3 : false}
                  id='spam'
                  icon="lightbulb outline"
                  iconPosition="left"
                  fluid
                  label='1 + 2 = ?'
                  placeholder='3'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.TextArea
                error={value.description ? !value.description.length : false}
                required
                id='description'
                label='Tell me a little about your project'
                placeholder=''
                onChange={this.handleChange}
              />
              <Form.Button color="orange" floated="right">Submit</Form.Button>
            </Form>
          </Item.Group>
        </Item>
      )
  }
}

export default ContactForm;

const styles = {
  form: {
    width: CONST.CONTENT_WIDTH,
    margin: 'auto'
  }
}
