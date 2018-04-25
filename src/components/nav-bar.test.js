/* eslint-env mocha */

import { shallow } from 'enzyme';
import React from 'react';
import NavBar from './nav-bar';

describe('NavBar component tests', () => {

  it('Should render without crashing', async () => {
    shallow(<NavBar />);
  });

});
