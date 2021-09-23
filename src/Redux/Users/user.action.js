import Useractiontypes from "./users.type";

export const googleSigninStart = () =>({
  type: Useractiontypes.GOOGLE_SIGN_IN_START
})

export const emailSigninStart = (emailandpassword) =>({
  type: Useractiontypes.EMAIL_SIGN_IN_START,
  payload: emailandpassword
})

export const signInSuccess = (user) =>({
  type: Useractiontypes.SIGN_IN_SUCCESS,
  payload: user
})

export const signInFailure = (error) =>({
  type: Useractiontypes.SIGN_IN_FAILURE,
  payload:error
})

export const checkUserSession = () => ({
  type: Useractiontypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: Useractiontypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: Useractiontypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: Useractiontypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: Useractiontypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: Useractiontypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: Useractiontypes.SIGN_UP_FAILURE,
  payload: error,
});