/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './home';

describe('Home component tests', () => {

  it('Should shallow render without crashing', async () => {
    shallow(<Home />);
  });

});
