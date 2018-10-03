// @flow
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { generateSearchFilterKey } from '../Lib/Utils'
import type { optionsType } from './SearchFiltersRedux'

/* ------------- Tipos e Criadores de ações ------------- */

const { Types, Creators } = createActions({
  candidatesRequest: ['options'],
  candidatesSuccess: ['key', 'candidates'],
  candidatesFailure: ['key']
})

export const candidatesTypes = Types
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
  string: { [state: string]: { [role: string]: Array<CandidateType> } }
}

export type CandidatesState = Immutable<{
  data: CandidatesType,
  fetching: { [string]: ?boolean },
  error: { [string]: ?boolean }
}>

/* ------------- Estado Inicial ------------- */

export const INITIAL_STATE: CandidatesState = Immutable({
  data: {},
  fetching: {},
  error: {}
})

/* ------------- Redutores ------------- */

export const request = (state: CandidatesState, { options }: { options: optionsType }) => {
  const key = generateSearchFilterKey(options)
  return state.merge({ fetching: { [key]: true } }, { deep: true })
}

export const success = (state: CandidatesState, { key, candidates }: { key: string, candidates: CandidatesType }) =>
  state.merge(
    {
      fetching: { [key]: false },
      error: { [key]: null },
      data: { [key]: candidates }
    },
    { deep: true }
  )

export const failure = (state: CandidatesState, { key }: { key: string }) =>
  state.merge(
    {
      fetching: { [key]: false },
      error: { [key]: true }
    },
    { deep: true }
  )

/* ------------- Conectar redutores aos tipos ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CANDIDATES_REQUEST]: request,
  [Types.CANDIDATES_SUCCESS]: success,
  [Types.CANDIDATES_FAILURE]: failure
})
