/* eslint-env mocha */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Thread } from './thread';
import * as actions from '../actions';


const fakeThread = {
  id: 8863,
  lastUpdated: 123456789,
  avgWordCount: 41.5,
  avgSentiment: 0.3406250043772161,
  avgMagnitude: 1.4375000081490725,
  by: 'dhouston',
  descendants: '71',
  score: 104,
  time: 1175714200,
  type: 'story',
  title: 'My YC app: Dropbox - Throw away your USB drive',
  url: 'http://www.getdropbox.com/u/2/screencast.html',
  kids: [
    {
      documentSentiment: { magnitude: 2.4, score: -0.1 },
      kids: [9272],
      by: 'BrandonM',
      id: 9224,
      text: 'awdawdawd',
      time: 1175786214,
      type: 'comment',
      wordCount: 135,
    },
  ],
};

const store = createStore(() => ({ hnData: { thread: fakeThread } }));


describe('Thread component tests', () => {

  it('Should render without crashing', () => {
    shallow(<Thread thread={fakeThread} dispatch={jest.fn()}/>);
  });

  it('Should dispatch fetchThread', () => {
    const spyFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Thread thread={fakeThread} dispatch={spyFn}/>
        </MemoryRouter>
      </Provider>,
    );
    expect(spyFn).toHaveBeenCalled();

  });


});
