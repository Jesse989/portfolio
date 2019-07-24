import React, { Component } from 'react';
import { Item, Form, Dimmer, Loader, Message } from 'semantic-ui-react';
import validator from 'validator';
import { postData } from '../utils/form-api';
import ContactModal from '../components/contact-modal';
import { validateForm } from '../utils/validate-form';

export type ContactInfo = {
  first: string;
  last: string;
  email: string;
  website: string;
  budget: string;
  spam: number;
  description: string;
};

type State = {
  loading: boolean;
  errors: string[];
  successModal: boolean;
  formData: ContactInfo;
};

const defaultFormData: ContactInfo = {
  first: '',
  last: '',
  email: '',
  website: '',
  budget: '',
  spam: 0,
  description: ''
};

const initialState = Object.freeze({
  loading: true,
  errors: [],
  successModal: false,
  formData: defaultFormData
});

class ContactForm extends Component<any, State> {
  readonly state = initialState;

  componentDidMount() {
    this.setState(s => ({ loading: false }));
  }

  handleChange = (e: any) => {
    const formData = Object.assign({}, this.state.formData, {
      [e.target.id]: e.target.value
    });

    // change strings to title case?
    this.setState({ formData });

    const errors = validateForm(this.state.formData);

    this.setState({
      errors
    });
  };

  closeModal = () => this.setState({ successModal: false });

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    this.setState({ loading: true });

    postData('/api', this.state.formData) // this.state = form data
      .then(data => {
        if (data.status === 'success') {
          this.setState({
            loading: false,
            formData: defaultFormData,
            successModal: true
          });
        } else if (data.status === 'failed') {
          this.setState({ loading: false, successModal: false });
        }
      })
      .catch(error => console.error(error)); // where to send the err?
  };

  render() {
    const { loading, errors, successModal, formData } = this.state;

    const description =
      'Fill out the form below with some info about your project and I will get back to you.';

    if (loading)
      return (
        <Dimmer active>
          <Loader />
        </Dimmer>
      );
    else
      return (
        <Item>
          <ContactModal modalOpen={successModal} toClose={this.closeModal} />
          <Item.Header as="h3">Interested in working together?</Item.Header>
          <Item.Description>{description}</Item.Description>
          <Item.Group>
            <Form
              error={!!errors.length} // show error message or not
              id="contact-form"
              onSubmit={this.handleSubmit}
              style={styles.form}
            >
              <Form.Group widths="equal">
                <Form.Input
                  required
                  error={
                    formData.first ? !validator.isAlpha(formData.first) : false
                  }
                  id="first"
                  icon="user outline circle"
                  iconPosition="left"
                  fluid
                  label="First"
                  placeholder="John"
                  onChange={this.handleChange}
                />
                <Form.Input
                  required
                  error={
                    formData.last ? !validator.isAlpha(formData.last) : false
                  }
                  id="last"
                  icon="user outline circle"
                  iconPosition="left"
                  fluid
                  label="Last"
                  placeholder="Doe"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  required
                  error={
                    formData.email ? !validator.isEmail(formData.email) : false
                  }
                  id="email"
                  icon="mail"
                  iconPosition="left"
                  fluid
                  label="Email"
                  placeholder="jd@email.com"
                  onChange={this.handleChange}
                />
                <Form.Input
                  required
                  error={
                    formData.website
                      ? !validator.isURL(formData.website)
                      : false
                  }
                  id="website"
                  icon="linkify"
                  iconPosition="left"
                  fluid
                  label="Website"
                  placeholder="www.wwjd.com"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  required
                  error={
                    formData.budget
                      ? !validator.isCurrency(formData.budget)
                      : false
                  }
                  id="budget"
                  icon="dollar"
                  iconPosition="left"
                  fluid
                  label="Budget"
                  placeholder="100"
                  onChange={this.handleChange}
                />
                <Form.Input
                  required
                  error={formData.spam ? formData.spam != 3 : false}
                  id="spam"
                  icon="lightbulb outline"
                  iconPosition="left"
                  fluid
                  label="1 + 2 = ?"
                  placeholder="3"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.TextArea
                error={
                  formData.description ? !formData.description.length : false
                }
                required
                id="description"
                label="Tell me a little about your project"
                placeholder=""
                onChange={this.handleChange}
              />
              <Message // <-- this error message
                error
                header="There were errors with your submission"
                list={errors}
              />
              <Form.Button
                disabled={!!errors.length}
                color="orange"
                floated="right"
              >
                Submit
              </Form.Button>
            </Form>
          </Item.Group>
        </Item>
      );
  }
}

export default ContactForm;

const styles = {
  form: {
    margin: 'auto',
    paddingBottom: 60
  }
};
