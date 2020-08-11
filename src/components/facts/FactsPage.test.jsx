import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import store from '../../store';
import FactsPage from './FactsPage';

jest.mock('../../../services/fetchFacts.js', () => ({
  fetchFacts() {
    return Promise.resolve([
      { image: 'image.png', caption: 'wild fact 1' },
      { image: 'image2.png', caption: 'wild fact 2' }
    ]);
  }
}));

describe('FactsPage component', () => {
  it('renders FactsPage', () => {
    const wrapper = mount(
      <Provider store={store}>
        <FactsPage />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
