import {ActionType} from "./action";

const initialState = {
  rates: {},
  conversions: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_RATES:
      return Object.assign({}, state, {
        rates: action.payload
      });

    case ActionType.SAVE_CONVERSION:
      return Object.assign({}, state, {
        conversions: [action.payload, ...state.conversions]
      });

    case ActionType.CLEAR_CONVERSIONS:
      return Object.assign({}, state, {
        conversions: []
      });

    default:
      return state;
  }
};
