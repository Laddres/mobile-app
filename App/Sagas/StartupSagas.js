import { put, select } from 'redux-saga/effects'
import CandidatesActions from '../Redux/CandidatesRedux'
import SecretActions from '../Redux/SecretRedux'
import { StartupSelectors } from '../Selectors'
import { NavigationActions } from 'react-navigation'
import { DEFAULT_NAVIGATION_CONFIG } from '../Navigation/NavigationConfig'

export function * startup () {
  const isNotFirstTime = !select(StartupSelectors.firstTimeOpeningApp)
  if (isNotFirstTime) {
    put(NavigationActions.navigate(DEFAULT_NAVIGATION_CONFIG.mainScreenRouteName))
    yield put(CandidatesActions.candidatesRequest())
    yield put(SecretActions.secretRequest())
  }
}
