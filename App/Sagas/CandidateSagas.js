// @flow
import { call, put } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import { DEFAULT_NAVIGATION_CONFIG } from '../Navigation/NavigationConfig'
import CandidateActions from '../Redux/CandidateRedux'
import CandidacyActions from '../Redux/CandidacyRedux'
import SummaryActions from '../Redux/SummaryRedux'
import LikeActions from '../Redux/LikeRedux'

export function * getCandidateProfile (api, { id }) {
  const response = yield call(api.getCandidateProfile, id)

  if (response.ok) {
    yield put(CandidateActions.candidateSuccess(response.data))
    yield requestResumeSections(id)
    yield put(NavigationActions.navigate(DEFAULT_NAVIGATION_CONFIG.candidateResumeRouteName))
    yield requestResumeSections(id)
  } else {
    yield put(CandidateActions.candidateFailure(id))
  }
}

export function * requestResumeSections (id) {
  yield put(CandidacyActions.candidacyRequest(id))
  yield put(SummaryActions.summaryRequest(id))
  yield put(LikeActions.likeRequest(id))
}
