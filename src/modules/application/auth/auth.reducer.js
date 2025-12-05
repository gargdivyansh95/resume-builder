import { actionTypes } from './auth.action';

const initialState = {
  user: undefined,
  authToken: undefined,

}

export const authReducer = (state = initialState, action) => {
  console.log('Auth State Reducer: ', state)
  switch (action.type) {

    case actionTypes.LoginSuccess:
      if (action.payload && action.payload.s === '200') {
        return { ...state, user: action.payload?.session, userProfile: action.payload?.profiles, authToken: action.payload?.session?.user_auth_token, visited: true };
      } else {
        return { ...state, user: null, authToken: null };
      }
    default:
      return state;
  }
}
