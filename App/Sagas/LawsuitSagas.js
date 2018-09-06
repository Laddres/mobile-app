import { call, put } from 'redux-saga/effects'
import LawsuitActions from '../Redux/LawsuitRedux'

export function * getLawsuits (api, { id }) {
  const response = yield call(api.getLawsuits, id)

  if (response.ok) {
    yield put(LawsuitActions.LawsuitSuccess(id, response.data))
  } else {
    yield put(LawsuitActions.LawsuitFailure(id))
  }
}
