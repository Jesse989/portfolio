import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Backend from '../backend';

it('renders without crashing', () => {
  // test to make sure renders
  shallow(<Backend />);
});

it('renders 5 db images', () => {
  // check and make sure there are imgs
  const wrapper = shallow(<Backend />);
  expect(wrapper.find('img')).to.have.lengthOf(5);
});

it('renders db description', () => {
  // make sure there is a h2 with db description
  const wrapper = shallow(<Backend />);
  const description =
    'Experience with different databases means choosing the correct database for the most optimal solution.';
  expect(wrapper.find('h2').text()).to.equal(description);
});
