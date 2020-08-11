import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import store from '../../store';
import Facts from './Facts';

describe('Facts component', () => {
  it('renders Facts', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Facts />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
