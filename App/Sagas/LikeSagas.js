import { call, put, select } from 'redux-saga/effects'
import LikeActions from '../Redux/LikeRedux'
import { LikeSelectors, SecretSelectors } from '../Selectors'

export function * getLikes (api, { idCandidate }) {
  const token = yield select(SecretSelectors.getTokent)
  const response = yield call(api.getLikes, idCandidate, token)

  if (response.ok) {
    yield put(LikeActions.likeSuccess(idCandidate, response.data))
  } else {
    yield put(LikeActions.likeFailure(idCandidate))
  }
}

export function * likeOrUnlike (api, { idCandidate }) {
  const token = yield select(SecretSelectors.getTokent)
  const hasLikedCandidate = yield select(LikeSelectors.hasLiked)
  yield put(LikeActions.likeOrUnlikeCandidate(idCandidate))
  const endpoint = hasLikedCandidate ? api.unLike : api.like

  const response = yield call(endpoint, idCandidate, token)

  if (!response.ok) {
    yield put(LikeActions.likeOrUnlikeCandidate(idCandidate))
  }
}
