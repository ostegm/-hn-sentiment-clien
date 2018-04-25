/* eslint-env mocha */
import React from 'react';
import { mount } from 'enzyme';
import { reduxForm } from 'redux-form';
import { createStore } from 'redux';
import { SearchBar } from './search-bar';
import { Provider } from 'react-redux';

const Decorated = reduxForm({ form: 'testForm' })(SearchBar);
const store = createStore(() => ({}));


describe('SearchBar component tests', () => {

  it('Should render without crashing', () => {
    const spyFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <Decorated handleSubmit={spyFn}/>
      </Provider>,
    );
  });

  it('Should call onSubmit when form is submited', () => {
    const hnLink = 'https://news.ycombinator.com/item?id=0';
    const spyFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <Decorated handleSubmit={spyFn}/>
      </Provider>,
    );
    wrapper.find('input[type="text"]').instance().value = hnLink;
    wrapper.simulate('submit');
    expect(spyFn).toHaveBeenCalled();
  });

});
