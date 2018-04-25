/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { NotFound } from './not-found';

describe('NotFound component tests', () => {

  it('Should render without crashing', () => {
    shallow(<NotFound />);
  });

});
