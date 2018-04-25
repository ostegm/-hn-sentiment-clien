/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { ThreadHeadLine } from './thread-headline';

const fakeThread = {
  by: 'awdawd',
  time: 1234567890,
}

describe('ThreadHeadLine component tests', () => {

  it('Should render without crashing', () => {
    shallow(<ThreadHeadLine thread={fakeThread} />);
  });

});
