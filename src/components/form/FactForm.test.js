import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store';
import FactForm from './FactForm';

describe('FactForm component', () => {
  it('renders FactForm', () => {
    const wrapper = mount(
      <Provider store={store}>
        <FactForm />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
