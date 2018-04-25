/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar } from './search-bar';

describe('SearchBar component tests', () => {

  it('Should render without crashing', () => {
    shallow(<SearchBar />);
  });

});
