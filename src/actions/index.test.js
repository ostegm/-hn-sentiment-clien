/* eslint-env mocha */
import * as actions from '../actions';

describe('Actions', () => {
  
  it('should return the fetchThreadRequest Action', () => {
    const action = actions.fetchThreadRequest();
    expect(action.type).toEqual(actions.FETCH_THREAD_REQUEST);
  });

  it('should return the fetchThreadSuccess Action', () => {
    const thread = {id: 1}
    const action = actions.fetchThreadSuccess(thread);
    expect(action.type).toEqual(actions.FETCH_THREAD_SUCCESS);
    expect(action.thread).toEqual(thread);
  });

  it('should return the fetchRecentSuccess Action', () => {
    const recentThreads = [1, 2, 3];
    const action = actions.fetchRecentSuccess(recentThreads);
    expect(action.type).toEqual(actions.FETCH_RECENT_SUCCESS);
    expect(action.recentThreads).toEqual(recentThreads);
  });

  it('should return the fetchThreadError Action', () => {
    const action = actions.fetchThreadError();
    expect(action.type).toEqual(actions.FETCH_THREAD_ERROR);
  });

});


describe('fetchThread', () => {
  it('Should dispatch fetchThreadSuccess', () => {
    const fakeThread = {id: 1}
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return fakeThread;
        },
      }),
    );

    const dispatch = jest.fn();
    return actions.fetchThread(1)(dispatch).then(() => {
      const url = 'https://hn-sentiment.appspot.com/api/threads/1';
      expect(fetch).toHaveBeenCalledWith(url, {'method': 'GET'});
      expect(dispatch).toHaveBeenCalledWith(actions.fetchThreadSuccess(fakeThread));
    });
  });
});


describe('fetchRecent', () => {
  it('Should dispatch fetchThreadSuccess', () => {
    const fakeRecentThreads = [{ id: 1 }, { id: 2 }];
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return fakeRecentThreads;
        },
      }),
    );

    const dispatch = jest.fn();
    return actions.fetchRecent()(dispatch).then(() => {
      const url = 'https://hn-sentiment.appspot.com/api/threads/recent';
      expect(fetch).toHaveBeenCalledWith(url, {'method': 'GET'});
      expect(dispatch).toHaveBeenCalledWith(actions.fetchRecentSuccess(fakeRecentThreads));
    });
  });
});
