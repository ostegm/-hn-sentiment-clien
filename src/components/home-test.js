/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './home';

describe('Home component tests', () => {

  it('Should render without crashing', () => {
    shallow(<Home />);
  });

});