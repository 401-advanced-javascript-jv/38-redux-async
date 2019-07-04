import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import details from './detail-reducer.js';
import people from './person-reducer.js';
import thunk from './middleware/thunk.js';

const reducer = combineReducers({
  details,
  people,
});

export default () => {
  return createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
}
