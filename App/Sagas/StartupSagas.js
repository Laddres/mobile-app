import { put } from 'redux-saga/effects'
import CandidatosActions from '../Redux/CandidatosRedux'
import SecretActions from '../Redux/SecretRedux'

export function * startup () {
  yield put(CandidatosActions.candidatosRequest())
  yield put(SecretActions.secretRequest())
}
