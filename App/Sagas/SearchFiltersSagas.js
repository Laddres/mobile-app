import { call, put } from 'redux-saga/effects'
import SearchFiltersActions from '../Redux/SearchFiltersRedux'
import _ from 'lodash'
import { extractStateInitialsFromAddress } from '../Lib/Utils'

export function * getState (api, { coordinates: { lat, lng } }) {
  const response = yield call(api.reverseGeocode, lat, lng)

  if (response.ok) {
    const address = _.get(response.data, 'results[0].formatted_address')
    const stateInitials = extractStateInitialsFromAddress(address)
    yield put(SearchFiltersActions.searchFiltersSuccessState(stateInitials))
  } else {
    yield put(SearchFiltersActions.searchFiltersFailureState())
  }
}
