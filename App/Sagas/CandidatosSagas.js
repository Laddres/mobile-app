import { call, put } from 'redux-saga/effects'
import CandidatosActions from '../Redux/CandidatosRedux'

export function * getCandidatos (api) {
  const response = yield call(api.getCandidatos)

  if (response.ok) {
    yield put(CandidatosActions.candidatosSuccess(response.data))
  } else {
    yield put(CandidatosActions.candidatosFailure())
  }
}
