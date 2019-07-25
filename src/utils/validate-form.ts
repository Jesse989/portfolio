import validator from 'validator';
import { ContactInfo } from '../containers/contact-form';

export const validateForm = (formData: ContactInfo) => {
  let errors: string[] = [];
  for (let type in formData) {
    // if name:
    if (type === 'first' || type === 'last') {
      // check value
      if (!validator.isAlpha(formData[type]))
        errors.push(`Your ${type} name must contain letters only`);
    } else if (type === 'email') {
      if (!validator.isEmail(formData[type]))
        errors.push('Please enter a valid email');
    } else if (type === 'website') {
      if (!validator.isURL(formData[type])) errors.push('Invalid URL');
    } else if (type === 'budget') {
      if (!validator.isCurrency(String(formData[type])))
        // validator takes currency string
        errors.push('Enter amount in USD');
    } else if (type === 'spam') {
      // eslint-disable-next-line
      if (formData[type] != 3) errors.push('Confirm that 1 + 2 = 3');
    } else if (type === 'description') {
      if (!formData[type]) errors.push('Briefly describe your project');
    }
  }

  return errors;
};
