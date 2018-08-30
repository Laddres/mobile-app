// @flow
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Tipos e Criadores de ações ------------- */

const { Types, Creators } = createActions({
  summaryRequest: ['idCandidate'],
  summarySuccess: ['data'],
  summaryFailure: ['idCandidate']
})

export const SummaryTypes = Types
export default Creators

/* ------------- Tipos Flow ------------- */

export type SummaryType = {
  idCandidato: number,
  numeroPartidos: number,
  partidoAtual: string,
  partidosAnteriores: Array<string>,
  numeroProcessosJudiciais?: number,
  numeroCandidaturas: number,
  numeroMandatos: number,
  numeroProposicoes: number,
  numeroProjetos: number
}

export type SummaryState = Immutable<{
  data: { [id: number]: SummaryType },
  fetching: { [id: number]: ?boolean },
  error: { [id: number]: ?boolean }
}>

/* ------------- Estado Inicial ------------- */

export const INITIAL_STATE: SummaryState = Immutable({
  data: {},
  fetching: {},
  error: {}
})

/* ------------- Redutores ------------- */

export const request = (state: SummaryState, { idCandidate }: { idCandidate: number }) =>
  state.merge({ fetching: { [idCandidate]: true } }, { deep: true })

export const success = (state: SummaryState, { data }: { data: SummaryType }) =>
  state.merge(
    {
      data: { [data.idCandidato]: data },
      error: { [data.idCandidato]: false },
      fetching: { [data.idCandidato]: false }
    },
    { deep: true }
  )

export const failure = (state: SummaryState, { idCandidate }: { idCandidate: number }) =>
  state.merge(
    {
      fetching: { [idCandidate]: false },
      error: { [idCandidate]: true }
    },
    { deep: true }
  )

/* ------------- Conectar redutores aos tipos ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SUMMARY_REQUEST]: request,
  [Types.SUMMARY_SUCCESS]: success,
  [Types.SUMMARY_FAILURE]: failure
})
