import { combineReducers } from 'redux';
import events from './events';
import errors from './errors';
import messages from './messages'
import auth from './auth';

export default combineReducers({
    events,
    auth,
    errors,
    messages
});