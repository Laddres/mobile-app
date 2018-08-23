// @flow
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Tipos e Criadores de ações ------------- */

const { Types, Creators } = createActions({
  candidatosRequest: null,
  candidatosSuccess: ['data'],
  candidatosFailure: null
})

export const CandidatosTypes = Types
export default Creators

/* ------------- Tipos Flow ------------- */

export type CandidateType = {
  id: number,
  nome: string,
  foto: string,
  numero: number,
  partido: string
}

export type CandidatesType = {
  string: Array<CandidateType>
}

export type CandidatesState = Immutable<{
  data: CandidatesType,
  fetching: ?boolean,
  error: ?boolean
}>

/* ------------- Estado Inicial ------------- */

export const INITIAL_STATE: CandidatesState = Immutable({
  data: {},
  fetching: null,
  error: null
})

/* ------------- Redutores ------------- */

export const request = (state: CandidatesState) => state.merge({ fetching: true })

export const success = (state: CandidatesState, { data }: { data: CandidatesType }) =>
  state.merge({ fetching: false, error: null, data })

export const failure = (state: CandidatesState) => state.merge({ fetching: false, error: true })

/* ------------- Conectar redutores aos tipos ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CANDIDATOS_REQUEST]: request,
  [Types.CANDIDATOS_SUCCESS]: success,
  [Types.CANDIDATOS_FAILURE]: failure
})
