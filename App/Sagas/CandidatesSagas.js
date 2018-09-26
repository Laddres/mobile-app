import { call, put } from 'redux-saga/effects'
import CandidatesActions from '../Redux/CandidatesRedux'

export function * getCandidates (api, stateInitials) {
  const response = yield call(api.getCandidates, stateInitials)

  if (response.ok) {
    yield put(CandidatesActions.candidatesSuccess(stateInitials, response.data))
  } else {
    yield put(CandidatesActions.candidatesFailure(stateInitials))
  }
}
