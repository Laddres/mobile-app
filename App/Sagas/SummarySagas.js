import { call, put } from 'redux-saga/effects'
import SummaryActions from '../Redux/SummaryRedux'
import { SummaryTransforms } from '../Transforms'

export function * getSummary (api, { idCandidate }) {
  const response = yield call(api.getSummary, idCandidate)

  if (response.ok) {
    yield put(SummaryActions.summarySuccess(SummaryTransforms.responseTransform(response.data)))
  } else {
    yield put(SummaryActions.summaryFailure(idCandidate))
  }
}
