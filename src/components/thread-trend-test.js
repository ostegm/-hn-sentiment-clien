/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { ThreadTrend } from './thread-trend';

describe('ThreadTrend component tests', () => {

  it('Should render without crashing', () => {
    shallow(<ThreadTrend />);
  });

});
