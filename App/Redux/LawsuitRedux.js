// @flow
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Tipos e Criadores de ações ------------- */

const { Types, Creators } = createActions({
  LawsuitRequest: ['id'],
  LawsuitSuccess: ['id', 'data'],
  LawsuitFailure: ['id']
})

export const LawsuitTypes = Types
export default Creators

/* ------------- Tipos Flow ------------- */

export type LawsuitType = {
  idLawsuit: number,
  numero: string,
  tipo: string,
  tribunal: string,
  descricao: string,
  link: string
}

export type LawsuitDataType = {
  processado: ?boolean,
  numeroProcessos: number,
  processos: Array<LawsuitType>
}

export type LawsuitState = Immutable<{
  data: { [id: string]: LawsuitDataType },
  fetching: { [id: string]: ?boolean },
  error: { [id: string]: ?boolean }
}>

/* ------------- Estado Inicial ------------- */

export const INITIAL_STATE: LawsuitState = Immutable({
  data: {},
  fetching: {},
  error: {}
})

/* ------------- Redutores ------------- */

export const request = (state: LawsuitState, { id }: { id: number }) =>
  state.merge({ fetching: { [id]: true } }, { deep: true })

export const success = (state: LawsuitState, { id, data }: { id: number, data: LawsuitDataType }) =>
  state.merge(
    {
      fetching: { [id]: false },
      data: { [id]: data },
      error: { [id]: false }
    },
    { deep: true }
  )

export const failure = (state: LawsuitState, { id }: { id: number }) =>
  state.merge(
    {
      fetching: { [id]: false },
      error: { [id]: true }
    },
    { deep: true }
  )

/* ------------- Conectar redutores aos tipos ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LAWSUIT_REQUEST]: request,
  [Types.LAWSUIT_SUCCESS]: success,
  [Types.LAWSUIT_FAILURE]: failure
})
