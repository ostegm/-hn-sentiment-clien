/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { Input } from './input';

describe('Input component tests', () => {

  it('Should render without crashing', () => {
    shallow(<Input />);
  });

});
