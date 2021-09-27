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
import { createrentcondopost, firestore } from '../../Firebase/firebase.utils';


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

  export function*readrentcondo(){
    try{
      const collectionref = yield firestore.collection("rentcondo");
      const snapshot = yield collectionref.get();
      const transformdata = snapshot.docs.map(doc=>{
        const data = doc.data();
        return(
          {...data}
        )
      })
      yield put(rentcondoreadSuccess(transformdata))
  
      
    }catch(err){
      yield put(rentcondoreadFail(err))
    }
  }

  export function*onrentcondopoststart(){
    yield takeLatest(rentcondotype.POST_CONDOROOM_START, postrentcondo)
  }


  export function*onrentcondoreadstart(){
    yield takeLatest(rentcondotype.READ_CONDOROOM_START, readrentcondo)
  }

  export function*rentcondoSagas(){
    yield all([
      call(onrentcondopoststart),
      call(onrentcondoreadstart)
    ])
  }