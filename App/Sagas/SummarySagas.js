import { call, put } from 'redux-saga/effects'
import SummaryActions from '../Redux/SummaryRedux'

export function * getSummary (api, idCandidate) {
  const response = yield call(api.getSummary, idCandidate)

  if (response.ok) {
    yield put(SummaryActions.summarySuccess(response.data, idCandidate))
  } else {
    yield put(SummaryActions.summaryFailure(idCandidate))
  }
}
