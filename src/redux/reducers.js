import { ADD_TRANSACTION } from './actions';

const accountReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
      };

    case "ADD_TRANSACTION_SUCCESS":
      return {
        ...state,
        account: action.payload.account,
      };

    default:
      return state;
  }
};

export default accountReducer;