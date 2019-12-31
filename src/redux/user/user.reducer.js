import { UserActionType } from './user.types';

const INITIAL_SATATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_SATATE, action) => {
  switch (action.type) {
    case UserActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
