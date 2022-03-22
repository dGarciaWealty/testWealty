import { HYDRATE } from "next-redux-wrapper";
import { AUTH, INIT, LOGOUT, UPDATE_COMMERCE, UPDATE_USER } from "../actions/commerce";

const initialState = {
  token: "",
  initialized: false,
  user: {
    status: 0
  },
  commerce: {},
};

const commerceReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        token: action.token ? action.token : null,
        initialized: true,
        user: action.user,
        commerce: action.user.commerce ? action.user.commerce : {},
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.user,
        commerce: action.user.commerce ? action.user.commerce : {},
      };
    case UPDATE_COMMERCE:
      return {
        ...state,
        user: {...state.user, commerce: action.commerce },
        commerce: action.commerce,
      };
    case AUTH:
      return {
        ...state,
        token: action.token ? action.token : null,
        initialized: true,
        user: action.user,
        commerce: action.user.commerce ? action.user.commerce : {},
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        initialized: false,
        user: {},
        commerce: {},
      };
    default:
      return state;
  }
};

export default commerceReducer;
