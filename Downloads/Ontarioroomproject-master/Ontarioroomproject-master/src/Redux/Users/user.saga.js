import { takeLatest,put,call,all } from "@redux-saga/core/effects";
import Useractiontypes from "./users.type";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure
} from './user.action'
import { auth, createUserProfileDocument, getCurrentUser, googleProvider } from "../../Firebase/firebase.utils";

export function*getSnapshotFromUserauth(userauth, additionaldata){
  try{
    const userRef = yield call(
      createUserProfileDocument,
      userauth,
      additionaldata
    )
    const userSnapshot = yield userRef.get()
    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  }catch(err){
    yield put(signInFailure(err))
  }
}


export function*signInwithgoogle(){
  try{
    const {user} = yield auth.signInWithPopup(googleProvider)
    yield getSnapshotFromUserauth(user)
  } catch(err){
    yield put(signInFailure(err))
  }
}

export function*signInWithEmail({payload:{email,password}}){
  try{
    const {user} = yield auth.signInWithEmailAndPassword(email,password)
    yield getSnapshotFromUserauth(user);
  }catch(err){
    yield put(signInFailure(err))
  }
}

export function*signOut(){
  try{
    yield auth.signOut();
    yield put(signOutSuccess());
  }catch(err){
    yield put(signOutFailure(err))
  }
}

export function* Signup({
  payload: { email, password, displayName, address, phonenumber },
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(
      signUpSuccess({ user, additionalData: { displayName, address, phonenumber } })
    );
  } catch (error) {
    yield put(signUpFailure(error));
  }
}
export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserauth(user, additionalData);
}

export function*isUserAuthenticated(){
  try{
    const userAuth = yield getCurrentUser();
    if(!userAuth) return;
    yield getSnapshotFromUserauth(userAuth)
  }catch(Err){
    yield put(signInFailure(Err))
  }

}

export function*onGoogleSignInStart(){
  yield takeLatest(Useractiontypes.GOOGLE_SIGN_IN_START, signInwithgoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(Useractiontypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignOutStart() {
  yield takeLatest(Useractiontypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart(){
  yield takeLatest(Useractiontypes.SIGN_UP_START, Signup)
}

export function* onSignUpSuccess() {
  yield takeLatest(Useractiontypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onCheckUserSession() {
  yield takeLatest(Useractiontypes.CHECK_USER_SESSION, isUserAuthenticated);
}


export function* userSagas(){
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onCheckUserSession)

  ]);
}