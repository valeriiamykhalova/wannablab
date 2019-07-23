import { combineReducers } from 'redux';
import events from './events';
import categories from './categories';
import languages from './languages';
import levels from './levels';
import errors from './errors';
import messages from './messages'
import auth from './auth';

export default combineReducers({
    events,
    categories,
    languages,
    levels,
    auth,
    errors,
    messages
});