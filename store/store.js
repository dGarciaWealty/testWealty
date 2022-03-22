// store.js

import { createStore, combineReducers, applyMiddleware } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import ReduxThunk from "redux-thunk";

import commerceReducer from "./reducers/commerce";
import dataReducer from "./reducers/data";

// Root reducer: all separate reducers combined
const rootReducer = combineReducers({
  // commerce data
  commerce: commerceReducer,
  // app data
  data: dataReducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    // if (state.commerce) nextState.commerce = state.commerce; // preserve value on client side navigation
    // if (state.data) nextState.data = state.data;
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

// create a makeStore function
const makeStore = (context) =>
  createStore(reducer, applyMiddleware(ReduxThunk));

// export an assembled wrapper
export const wrapper = createWrapper(makeStore);
