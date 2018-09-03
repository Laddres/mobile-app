import { call, put, select } from 'redux-saga/effects'
import LikeActions from '../Redux/LikeRedux'
import DeviceInfo from 'react-native-device-info'
import { LikeSelectors } from '../Selectors'

export function * getLikes (api, { idCandidate }) {
  const response = yield call(api.getLikes, { idCandidate, idDevice: DeviceInfo.getUniqueID() })

  if (response.ok) {
    yield put(LikeActions.likeSuccess(idCandidate, response.data))
  } else {
    yield put(LikeActions.likeFailure(idCandidate))
  }
}

export function * likeOrUnlike (api, { idCandidate }) {
  const endpoint = yield select(LikeSelectors.hasLiked) ? api.unLike : api.like
  const response = yield call(endpoint, { idCandidate, idDevice: DeviceInfo.getUniqueID() })
  yield put(LikeActions.likeOrUnlikeCandidate(idCandidate))

  if (response.ok) {
    yield put(LikeActions.likeSuccess(idCandidate, response.data))
  } else {
    yield put(LikeActions.likeFailure(idCandidate))
    yield put(LikeActions.likeOrUnlikeCandidate(idCandidate))
  }
}
