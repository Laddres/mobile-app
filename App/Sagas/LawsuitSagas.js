import { call, put, select } from 'redux-saga/effects'
import LawsuitActions from '../Redux/LawsuitRedux'
import { SecretSelectors } from '../Selectors'

export function * getLawsuits (api, { id }) {
  const token = yield select(SecretSelectors.getTokent)
  const response = yield call(api.getLawsuits, id, token)

  if (response.ok) {
    yield put(LawsuitActions.LawsuitSuccess(id, response.data))
  } else {
    yield put(LawsuitActions.LawsuitFailure(id))
  }
}
