/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { RecentlyScored } from './recently-scored';

const fakeRecentThreads = [
  { title: 'awawdwa', id: 1 },
  { title: 'test', id: 2 },
];

describe('RecentlyScored component tests', () => {

  it('Should render without crashing', () => {
    const spyFn = jest.fn();
    const wrapper = shallow(
      <RecentlyScored 
       dispatch={spyFn}
       recentThreads={fakeRecentThreads}
     />);
    expect(spyFn).toHaveBeenCalled();

  });

});
