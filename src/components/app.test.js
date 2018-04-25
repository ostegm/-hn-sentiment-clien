/* eslint-env mocha */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import App from './app';

describe('App component tests', () => {

  it('Should mount without crashing', async () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )
    wrapper.unmount();
  });

  it('Should render without crashing', async () => {
    shallow(<App />)
  });

});
