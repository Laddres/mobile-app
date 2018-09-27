import { put, select } from 'redux-saga/effects'
import CandidatesActions from '../Redux/CandidatesRedux'
import SecretActions from '../Redux/SecretRedux'
import { SearchFiltersSelectors } from '../Selectors'
import { NavigationActions } from 'react-navigation'
import { DEFAULT_NAVIGATION_CONFIG } from '../Navigation/NavigationConfig'

export function * startup () {
  const userState = yield select(SearchFiltersSelectors.getStateInitials)
  const userHasSelectedState = !!userState
  if (userHasSelectedState) {
    yield put(NavigationActions.navigate(DEFAULT_NAVIGATION_CONFIG.mainScreenRouteName))
    yield put(CandidatesActions.candidatesRequest(userState))
  } else {
    yield put(NavigationActions.navigate(DEFAULT_NAVIGATION_CONFIG.welcomeScreenRouteName))
  }
  yield put(SecretActions.secretRequest())
}
