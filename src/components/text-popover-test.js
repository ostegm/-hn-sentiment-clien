/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { TextPopover } from './text-popover';

describe('TextPopover component tests', () => {

  it('Should render without crashing', () => {
    shallow(<TextPopover />);
  });

});
