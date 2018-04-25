/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { ThreadState } from './thread-state';

describe('ThreadState component tests', () => {

  it('Should render without crashing', () => {
    shallow(<ThreadState />);
  });

});
