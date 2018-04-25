/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { ThreadHeadline } from './thread-headline';

describe('ThreadHeadline component tests', () => {

  it('Should render without crashing', () => {
    shallow(<ThreadHeadline />);
  });

});
