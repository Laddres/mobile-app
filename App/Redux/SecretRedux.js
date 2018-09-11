// @flow
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Tipos e Criadores de ações ------------- */

const { Types, Creators } = createActions({
  secretRequest: null,
  secretSuccess: ['token'],
  secretFailure: null
})

export const SecretTypes = Types
export default Creators

/* ------------- Tipos Flow ------------- */

export type secretState = Immutable<{
  token: ?string,
  fetching: ?boolean,
  error: ?boolean
}>

/* ------------- Estado Inicial ------------- */

export const INITIAL_STATE: secretState = Immutable({
  token: null,
  fetching: null,
  error: null
})

/* ------------- Redutores ------------- */

export const request = (state: secretState) => state.merge({ fetching: true })

export const success = (state: secretState, { token }: { token: string }) =>
  state.merge({ fetching: false, error: null, token })

export const failure = (state: secretState) => state.merge({ fetching: false, error: true })

/* ------------- Conectar redutores aos tipos ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SECRET_REQUEST]: request,
  [Types.SECRET_SUCCESS]: success,
  [Types.SECRET_FAILURE]: failure
})
