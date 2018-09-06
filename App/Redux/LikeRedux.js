// @flow
// noinspection ES6CheckImport
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Tipos e Criadores de ações ------------- */

const { Types, Creators } = createActions({
  likeRequest: ['idCandidate'],
  likeSuccess: ['idCandidate', 'likes'],
  likeFailure: ['idCandidate'],
  likeOrUnlikeCandidate: ['idCandidate']
})

export const LikeTypes = Types
export default Creators

/* ------------- Tipos Flow ------------- */

export type LikeState = Immutable<{
  likes: { [idCandidate: string]: number },
  fetching: { [idCandidate: string]: ?boolean },
  error: { [idCandidate: string]: ?boolean },
  hasLiked: { [idCandidate: string]: ?boolean }
}>

/* ------------- Estado Inicial ------------- */

export const INITIAL_STATE: LikeState = Immutable({
  likes: {},
  fetching: {},
  error: {},
  hasLiked: {}
})

/* ------------- Redutores ------------- */

export const request = (state: LikeState, { idCandidate }: { idCandidate: number }) =>
  state.merge({ fetching: { [idCandidate]: true } }, { deep: true })

export const success = (state: LikeState, { idCandidate, data }: { idCandidate: number, data: mixed }) =>
  state.merge(
    {
      fetching: { [idCandidate]: false },
      error: { [idCandidate]: null },
      likes: { [idCandidate]: data.likes },
      hasLiked: { [idCandidate]: data.curtiu }
    },
    { deep: true }
  )

export const failure = (state: LikeState, { idCandidate }: { idCandidate: number }) =>
  state.merge(
    {
      fetching: { [idCandidate]: false },
      error: { [idCandidate]: true }
    },
    { deep: true }
  )

export const likeUnlike = (state: LikeState, { idCandidate }: { idCandidate: number }) => {
  const [likes, hasLiked] = [state.likes[idCandidate], state.hasLiked[idCandidate]]
  return state.merge(
    {
      likes: { [idCandidate]: hasLiked ? likes - 1 : likes + 1 },
      hasLiked: { [idCandidate]: !hasLiked }
    },
    { deep: true }
  )
}

/* ------------- Conectar redutores aos tipos ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LIKE_REQUEST]: request,
  [Types.LIKE_SUCCESS]: success,
  [Types.LIKE_FAILURE]: failure,
  [Types.LIKE_OR_UNLIKE_CANDIDATE]: likeUnlike
})
