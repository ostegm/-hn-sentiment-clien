/* eslint-env mocha */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { TextPopover } from './text-popover';

const fakeKid = {
  id: 1,
  kids: [123, 456],
  text: 'awdawdawd',
  by: 'awdawdwad',
};

describe('TextPopover component tests', () => {

  it('Should render without crashing', () => {
    shallow(<TextPopover kid={fakeKid} />);
  });
});
