import { API_BASE_URL, MODEL_TYPE } from '../config';
import { normalizeResponseErrors } from '../utils';

export const FETCH_THREAD_REQUEST = 'FETCH_THREAD_REQUEST';
export const fetchThreadRequest = () => ({
  type: FETCH_THREAD_REQUEST,
});


export const FETCH_THREAD_SUCCESS = 'FETCH_THREAD_SUCCESS';
export const fetchThreadSuccess = (thread) => {
  return {
    type: FETCH_THREAD_SUCCESS,
    thread,
  }
};

export const FETCH_RECENT_SUCCESS = 'FETCH_RECENT_SUCCESS';
export const fetchRecentSuccess = (recentThreads) => {
  return {
    type: FETCH_RECENT_SUCCESS,
    recentThreads,
  }
};


export const FETCH_THREAD_ERROR = 'FETCH_THREAD_ERROR';
export const fetchThreadError = (error) => ({
  type: FETCH_THREAD_ERROR,
  error,
});

export const fetchThread = (threadId) => (dispatch, getState) => {
  dispatch(fetchThreadRequest())
  return fetch(`${API_BASE_URL}/threads/${MODEL_TYPE}/${threadId}`, {
    method: 'GET',
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((thread) => dispatch(fetchThreadSuccess(thread)))
    .catch(err => {
        dispatch(fetchThreadError(err));
    });
};


export const fetchRecent = () => (dispatch, getState) => {
  dispatch(fetchThreadRequest());
  return fetch(`${API_BASE_URL}/threads/recent`, {
    method: 'GET',
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((recentThreads) => dispatch(fetchRecentSuccess(recentThreads)))
    .catch(err => {
        dispatch(fetchThreadError(err));
    });
};