import { call, put } from 'redux-saga/effects'
import CandidacyActions from '../Redux/CandidacyRedux'

export function * getCandidacy (api, { id }) {
  const response = yield call(api.getCandidacy, id)

  if (response.ok) {
    yield put(CandidacyActions.candidacySuccess(id, response.data))
  } else {
    yield put(CandidacyActions.candidacyFailure(id))
  }
}
