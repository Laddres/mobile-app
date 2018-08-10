// @flow
// noinspection ES6CheckImport
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

export type CandidatosType = {
  string: Array<{
    idCandidatura: number,
    idCandidato: number,
    nome: string,
    numero: number,
    partido: string
  }>
}

export type CandidatosState = Immutable<{
  data: CandidatosType,
  fetching: ?boolean,
  error: ?boolean
}>

/* ------------- Estado Inicial ------------- */

export const INITIAL_STATE: CandidatosState = Immutable({
  data: {},
  fetching: null,
  error: null
})

/* ------------- Redutores ------------- */

export const request = (state: CandidatosState) => state.merge({ fetching: true })

export const success = (state: CandidatosState, { data }: { data: CandidatosType }) =>
  state.merge({ fetching: false, error: null, data })

export const failure = (state: CandidatosState) => state.merge({ fetching: false, error: true })

/* ------------- Conectar redutores aos tipos ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CANDIDATOS_REQUEST]: request,
  [Types.CANDIDATOS_SUCCESS]: success,
  [Types.CANDIDATOS_FAILURE]: failure
})
