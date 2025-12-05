export const actionTypes = {
    PostLogin: '[Auth] Post Login Action',
    LoginSuccess: '[Auth] Login Success Action',
};

export const authActions = {
    postLogin: (payload, onSuccess, onError) => ({ type: actionTypes.PostLogin, payload, onSuccess, onError }),
    postLoginSuccess: (payload) => ({ type: actionTypes.LoginSuccess, payload }),
};
