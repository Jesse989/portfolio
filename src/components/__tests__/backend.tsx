import React from 'react';
import { shallow } from 'enzyme';
import Backend from '../backend';

it('renders without crashing', () => {
  // test to make sure renders
  shallow(<Backend />);
});

it('renders 5 db images', () => {
  // check and make sure there are imgs
  const wrapper = shallow(<Backend />);
  const img1 =
    '<img className="fadeInSlow" alt="tech-icon" style={styles.svg} src={mySqlImg} />';
  expect(wrapper.contains(img1)).toEqual(true);
});

it('renders db description', () => {});
