/* eslint-env mocha */
import { hnReducer, initialState } from './index';
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

const fakeRecentThreads = [{ id: 1 }, { id: 2 }];

describe('trelloReducer', () => {

  it('Should set the initial state when nothing is passed in', () => {
    const state = hnReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual(initialState);
  });

  it('Should return the current state on an unknown action', () => {
    const currentState = {};
    const state = hnReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toBe(currentState);
  });

  it('Should set the state to loading on requests', () => {
    const state = hnReducer(initialState, actions.fetchThreadRequest());
    expect(state.loading).toEqual(true);
  });

  it('Should set error message on errors', () => {
    const msg = 'test';
    const state = hnReducer(initialState, actions.fetchThreadError(msg));
    expect(state.error).toEqual(msg);
  });

  it('Should update the thread on fetchThreadSuccess', () => {
    const state = hnReducer(initialState, actions.fetchThreadSuccess(fakeThread));
    expect(state).toEqual({
      loading: false,
      error: null,
      recentThreads: [],
      thread: fakeThread,
    });
  });

  it('Should update the recent threads on fetchRecentSuccess', () => {
    const state = hnReducer(initialState, actions.fetchRecentSuccess(fakeRecentThreads));
    expect(state).toEqual({
      loading: false,
      error: null,
      recentThreads: fakeRecentThreads,
      thread: {
        by: '',
        descendants: 0,
        id: 0,
        kids: [],
        title: '',
      },
    });
  });

});
