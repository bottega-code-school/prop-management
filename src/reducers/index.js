import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

import auth from './authReducer';
import newsletters from './newsletterReducer';
import requests from './requestsReducer';
import header from './headerReducer';

const rootReducer = combineReducers({
  form,
  auth,
  newsletters,
  requests,
  header
});

export default rootReducer;