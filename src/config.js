export const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || 'https://hn-sentiment-server.herokuapp.com/api';

// if MODEL_TYPE == 'gcp' -> use NLP API.
// if MODEL_TYPE == 'custom' -> use custom model.
export const MODEL_TYPE = 'gcp';
