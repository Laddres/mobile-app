// @flow
import { call, put } from 'redux-saga/effects'
import CandidateActions from '../Redux/CandidateRedux'
import { NavigationActions } from 'react-navigation'
import { DEFAULT_NAVIGATION_CONFIG } from '../Navigation/NavigationConfig'

export function * getCandidateProfile (api, { id }) {
  const response = yield call(api.getCandidateProfile, id)

  if (response.ok) {
    yield put(CandidateActions.candidateSuccess(response.data))
    yield put(NavigationActions.navigate(DEFAULT_NAVIGATION_CONFIG.candidateResumeRouteName))
  } else {
    yield put(CandidateActions.candidateFailure(id))
  }
}
