import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';
import auth from './authReducer';
import newsletters from './newsletterReducer';


const rootReducer = combineReducers({
  form,
  auth,
  newsletters
});

export default rootReducer;