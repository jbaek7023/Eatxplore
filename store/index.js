import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';


const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk)
    // ,
    // autoRehydrate() // not middleware, it's store enhancer
  )
);

export default store;

// reducer...
// import { REHYDRATE } from 'redux-persist/constrants';

// case REHYDRATE:
  // action.payload is like saved
  // return action.payload.likedJobs || []; // first time, []..!
