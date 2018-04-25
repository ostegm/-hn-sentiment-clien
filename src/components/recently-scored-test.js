/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { RecentlyScored } from './recently-scored';

describe('RecentlyScored component tests', () => {

  it('Should render without crashing', () => {
    shallow(<RecentlyScored />);
  });

});
