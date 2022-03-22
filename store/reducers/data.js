import { DATA_INIT } from "../actions/data";

const initialState = {
  config: {},
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_INIT:
      return {
        ...state,
        config: action.config,
      };
    default:
      return state;
  }
};

export default dataReducer;
