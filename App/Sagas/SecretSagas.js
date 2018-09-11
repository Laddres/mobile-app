import { call, put } from 'redux-saga/effects'
import SecretActions from '../Redux/SecretRedux'
import DeviceInfo from 'react-native-device-info/deviceinfo'

export function * getSecret (api) {
  const response = yield call(api.getAccessToken, DeviceInfo.getUniqueID())

  if (response.ok && response.data.auth) {
    yield put(SecretActions.secretSuccess(response.data.accessToken))
  } else {
    yield put(SecretActions.secretFailure())
  }
}
