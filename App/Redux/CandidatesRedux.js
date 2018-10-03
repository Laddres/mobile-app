// @flow
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Tipos e Criadores de ações ------------- */

const { Types, Creators } = createActions({
  candidatesRequest: ['stateInitials'],
  candidatesSuccess: ['stateInitials', 'candidates'],
  candidatesFailure: ['stateInitials']
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

export const request = (state: CandidatesState, { stateInitials }: { stateInitials: string }) =>
  state.merge({ fetching: { [stateInitials]: true } }, { deep: true })

export const success = (
  state: CandidatesState,
  { stateInitials, candidates }: { stateInitials: string, candidates: CandidatesType }
) =>
  state.merge(
    {
      fetching: { [stateInitials]: false },
      error: { [stateInitials]: null },
      data: { [stateInitials]: candidates }
    },
    { deep: true }
  )

export const failure = (state: CandidatesState, { stateInitials }: { stateInitials: string }) =>
  state.merge(
    {
      fetching: { [stateInitials]: false },
      error: { [stateInitials]: true }
    },
    { deep: true }
  )

/* ------------- Conectar redutores aos tipos ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CANDIDATES_REQUEST]: request,
  [Types.CANDIDATES_SUCCESS]: success,
  [Types.CANDIDATES_FAILURE]: failure
})
