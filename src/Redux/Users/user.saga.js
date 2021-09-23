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
import { auth, createUserProfileDocument, googleProvider } from "../../Firebase/firebase.utils";

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


export function*onGoogleSignInStart(){
  yield takeLatest(Useractiontypes.GOOGLE_SIGN_IN_START, signInwithgoogle)
}


export function* userSagas(){
  yield all([
    call(onGoogleSignInStart)
  ]);
}