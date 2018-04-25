/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from './nav-bar';

describe('NavBar component tests', () => {

  it('Should render without crashing', () => {
    shallow(<NavBar />);
  });

});
