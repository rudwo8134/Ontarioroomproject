import {all,call} from 'redux-saga/effects'

import { userSagas } from './Users/user.saga'
import { rentcondoSagas } from './Rentcondo/rentcondo.saga'
export default function*rootSaga(){
  yield all([
    call(userSagas),
    call(rentcondoSagas)
  ])
}