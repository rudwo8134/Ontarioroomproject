import { put, call, all, takeLatest } from '@redux-saga/core/effects';
import rentcondotype from "./rentcondo.type";
import {
  rentcondopostFail,
  rentcondopostSuccess,
  rentcondoreadFail,
  rentcondoreadSuccess,
  rentcondodeleteFail,
  rentcondodeleteSuccess,
  rentcondoupdateFail, 
  rentcondoupdateSuccess
  } from "./rentcondo.action";
import { createrentcondopost } from '../../Firebase/firebase.utils';


  export function*postrentcondo({payload}){
    try{
      const rentcondoref = yield call(
        createrentcondopost,payload
      )
      const rentcondosnapshot = yield rentcondoref.get()
      yield put(rentcondopostSuccess({...rentcondosnapshot.data()}))

    }catch(err){
      yield put(rentcondopostFail(err))
    }
  }

  export function*onrentcondopoststart(){
    yield takeLatest(rentcondotype.POST_CONDOROOM_START, postrentcondo)
  }

  export function*rentcondoSagas(){
    yield all([
      call(onrentcondopoststart)
    ])
  }