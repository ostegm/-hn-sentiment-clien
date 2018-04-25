/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { ThreadTable } from './thread-table';

describe('ThreadTable component tests', () => {

  it('Should render without crashing', () => {
    shallow(<ThreadTable />);
  });

});
