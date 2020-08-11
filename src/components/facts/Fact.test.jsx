import React from 'react';
import { shallow } from 'enzyme';
import Fact from './Fact';

describe('Fact component', () => {
  it('renders Fact', () => {
    const wrapper = shallow(<Fact />);
    expect(wrapper).toMatchSnapshot();
  });
});
