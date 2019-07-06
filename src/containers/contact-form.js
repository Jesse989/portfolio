import React, { Component } from 'react'
import { Item, Form } from 'semantic-ui-react'
import { CONST } from '../const.js'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class ContactForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Item>
        <Form style={styles.form}>
          <Form.Group widths='equal'>
            <Form.Input icon="user outline circle" iconPosition="left" fluid label='Name' placeholder='Name' />
            <Form.Input icon="mail" iconPosition="left" fluid label='Email' placeholder='Email' />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input icon="linkify" iconPosition="left" fluid label='Website' placeholder='Website' />
            <Form.Input icon="dollar" iconPosition="left" fluid label='Budget' placeholder='Budget' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input icon="calendar alternate outline" iconPosition="left" fluid label='Timeline' placeholder='Date' />
            <Form.Input icon="lightbulb outline" iconPosition="left" fluid label='1 + 2 = ?' placeholder='3' />
          </Form.Group>
          <Form.TextArea label='Tell me a little about your project' placeholder='' />
          <Form.Button floated="right">Submit</Form.Button>
        </Form>
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
