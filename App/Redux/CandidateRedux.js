// @flow
// noinspection ES6CheckImport
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Tipos e Criadores de ações ------------- */

const { Types, Creators } = createActions({
  candidateRequest: ['id'],
  candidateSuccess: ['data'],
  candidateFailure: ['id']
})

export const CandidateTypes = Types
export default Creators

/* ------------- Tipos Flow ------------- */

export type CandidateProfileType = {
  id: number,
  nome: string,
  foto: string,
  nomeUrna: string,
  dataNascimento: string,
  idade: string,
  cidadeNatal: string,
  estadoNatal: string,
  partido: string,
  numero: number,
  cargo: string,
  grauInstrucao: string,
  ocupacao: string
}

export type CandidateState = Immutable<{
  data: { [number]: CandidateProfileType },
  fetching: { [number]: ?boolean },
  error: { [number]: ?boolean },
  selected: ?number
}>

/* ------------- Estado Inicial ------------- */

export const INITIAL_STATE: CandidateState = Immutable({
  data: {},
  fetching: {},
  error: {},
  selected: null
})

/* ------------- Redutores ------------- */

export const request = (state: CandidateState, { id }: { id: number }) =>
  state.merge({ fetching: { [id]: true } }, { deep: true })

export const success = (state: CandidateState, { data }: { data: CandidateProfileType }) =>
  state.merge(
    {
      selected: data.id,
      fetching: { [data.id]: false },
      data: { [data.id]: data },
      error: { [data.id]: false }
    },
    { deep: true }
  )

export const failure = (state: CandidateState, { id }: { id: number }) =>
  state.merge({ fetching: { [id]: false }, error: { [id]: true }, selected: null }, { deep: true })

/* ------------- Conectar redutores aos tipos ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CANDIDATE_REQUEST]: request,
  [Types.CANDIDATE_SUCCESS]: success,
  [Types.CANDIDATE_FAILURE]: failure
})
