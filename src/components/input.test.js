/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import Input from './input';

const fakeProps = {
  meta: {
    touched: false,
    error: null,
    warning: null,
  },
  input: {
    name: 'test',
  },
  label: 'test',
};

describe('Input component tests', () => {

  it('Should render without crashing', () => {
    shallow(
      <Input
        meta={fakeProps.meta}
        input={fakeProps.input}
        label={fakeProps.label}
      />,
    );
  });

});
