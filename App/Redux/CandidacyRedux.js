// @flow
// noinspection ES6CheckImport
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Tipos e Criadores de ações ------------- */

const { Types, Creators } = createActions({
  candidacyRequest: ['id'],
  candidacySuccess: ['id', 'data'],
  candidacyFailure: ['id']
})

export const CandidacyTypes = Types
export default Creators

/* ------------- Tipos Flow ------------- */

export type CandidacyType = {
  id: number,
  idCandidato: number,
  cargo: string,
  partido: string,
  anoEleicao: number,
  descricaoEleicao: string,
  cidade: string,
  siglaEstado: string,
  estado: string,
  nomeLegenda: string,
  composicaoLegenda: string,
  resultado: string
}

export type CandidacyState = Immutable<{
  data: { [number]: Array<CandidacyType> },
  fetching: { [number]: ?boolean },
  error: { [number]: ?boolean }
}>

/* ------------- Estado Inicial ------------- */

export const INITIAL_STATE: CandidacyState = Immutable({
  data: {},
  fetching: {},
  error: {}
})

/* ------------- Redutores ------------- */

export const request = (state: CandidacyState, { id }: { id: number }) =>
  state.merge({ fetching: { [id]: true } }, { deep: true })

export const success = (state: CandidacyState, { id, data }: { id: number, data: Array<CandidacyType> }) =>
  state.merge(
    {
      fetching: { [id]: false },
      data: { [id]: data },
      error: { [id]: false }
    },
    { deep: true }
  )

export const failure = (state: CandidacyState, { id }: { id: number }) =>
  state.merge({ fetching: { [id]: false }, error: { [id]: true } }, { deep: true })

/* ------------- Conectar redutores aos tipos ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CANDIDACY_REQUEST]: request,
  [Types.CANDIDACY_SUCCESS]: success,
  [Types.CANDIDACY_FAILURE]: failure
})
